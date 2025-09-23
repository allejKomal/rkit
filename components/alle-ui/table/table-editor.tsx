'use client';

import React, { CSSProperties, useState } from 'react';

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import {
  Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnPinningState,
  type ColumnSizingState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import DraggableCell from './components/draggable-cell';
import Header from './components/header';
import { ViewColumnsDropdown } from './components/view-columns-dropdown';

// Filter Pills Component
function FilterPills({ table }: { table: any }) {
  const activeFilters = table.getState().columnFilters;
  const globalFilter = table.getState().globalFilter;

  if (activeFilters.length === 0 && !globalFilter) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Global Filter Pill */}
      {globalFilter && (
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
          <span className="font-medium">Global:</span>
          <span>"{globalFilter}"</span>
          <button
            onClick={() => table.setGlobalFilter('')}
            className="ml-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Column Filter Pills */}
      {activeFilters.map((filter: any) => {
        const column = table.getColumn(filter.id);
        if (!column) return null;

        const filterValue = filter.value;
        const filterType = filterValue?.type || 'contains';
        const filterText =
          typeof filterValue === 'object' && filterValue?.value
            ? String(filterValue.value)
            : String(filterValue || '');

        // Handle header - it could be a string or a function/component
        const headerText =
          typeof column.columnDef.header === 'string'
            ? column.columnDef.header
            : column.id || 'Column';

        return (
          <div
            key={filter.id}
            className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
          >
            <span className="font-medium">{headerText}:</span>
            <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded">
              {filterType}
            </span>
            <span>"{filterText}"</span>
            <button
              onClick={() => column.setFilterValue(undefined)}
              className="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        );
      })}

      {/* Clear All Button */}
      {(activeFilters.length > 0 || globalFilter) && (
        <button
          onClick={() => {
            table.setGlobalFilter('');
            table.resetColumnFilters();
          }}
          className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear All
        </button>
      )}
    </div>
  );
}

export type ExtendedColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  headerAlign?: 'left' | 'center' | 'right';
  cellAlign?: 'left' | 'center' | 'right';
};

// Utility function to calculate dynamic column width based on content
// This can be used in column definitions to automatically size columns
// Example: size: calculateColumnWidth('ID', 'number') // Returns ~80px for ID column
function calculateColumnWidth(
  header: string,
  dataType: 'number' | 'text' | 'array' = 'text'
): number {
  const baseWidth = header.length * 8; // Base width based on header length

  switch (dataType) {
    case 'number':
      return Math.max(60, Math.min(baseWidth, 120)); // Narrow for numbers
    case 'array':
      return Math.max(140, Math.min(baseWidth * 1.5, 300)); // Wider for arrays
    case 'text':
    default:
      return Math.max(80, Math.min(baseWidth * 1.2, 250)); // Medium for text
  }
}

interface TableEditorProps<TData> {
  config?: {
    enableRowSelection?: boolean;
    enableMultiRowSelection?: boolean;
    initialColumnVisibility?: VisibilityState;
  };
  columns: ExtendedColumnDef<TData>[];
  data: TData[];
}

function TableEditor<TData>({ config, data, columns }: TableEditorProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['select', 'engine'],
    right: ['fuelType'],
  });
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() => {
    const order = columns.map(c => c.id!);
    if (config?.enableRowSelection) {
      return ['select', ...order];
    }
    return order;
  });
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [overId, setOverId] = React.useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 30,
  });

  const initialColumnVisibility: VisibilityState = config?.initialColumnVisibility || {};
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>(initialColumnVisibility);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  // Handle column sizing changes with auto-scroll
  const handleColumnSizingChange = React.useCallback(
    (updater: any) => {
      const newSizing = typeof updater === 'function' ? updater(columnSizing) : updater;

      // Check if this is the first resize (sizing state was empty before)
      const isFirstResize =
        Object.keys(columnSizing).length === 0 && Object.keys(newSizing).length > 0;

      // If this is the first resize, scroll to top
      if (isFirstResize && tableContainerRef.current) {
        tableContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }

      setColumnSizing(newSizing);
    },
    [columnSizing]
  );

  const getCommonPinningStyles = (column: Column<TData>): CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
    const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

    return {
      boxShadow: isLastLeftPinnedColumn
        ? '-4px 0 4px -4px rgba(0, 0, 0, 0.1)'
        : isFirstRightPinnedColumn
          ? '4px 0 4px -4px rgba(0, 0, 0, 0.1)'
          : undefined,
      left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
      opacity: isPinned ? 0.95 : 1,
      position: isPinned ? 'sticky' : 'relative',
      width: column.getSize(),
      zIndex: isPinned ? 10 : 0,
      backgroundColor: isPinned ? 'var(--background)' : 'transparent',
    };
  };

  const dynamicColumns: ExtendedColumnDef<TData>[] =
    config?.enableRowSelection || config?.enableMultiRowSelection
      ? [
          {
            id: 'select',
            header: ({ table }) => (
              <div className="flex items-center justify-center h-full">
                {config?.enableMultiRowSelection && (
                  <Checkbox
                    className="!border-black/30 dark:!border-white/30"
                    checked={
                      table.getIsAllPageRowsSelected() ||
                      (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                  />
                )}
              </div>
            ),
            cell: ({ row }) => (
              <div className="flex items-center justify-center h-full">
                {config?.enableMultiRowSelection ? (
                  <Checkbox
                    className="!border-black/30 dark:!border-white/30"
                    checked={row.getIsSelected()}
                    onCheckedChange={value => row.toggleSelected(!!value)}
                    aria-label="Select row"
                  />
                ) : (
                  <RadioGroup
                    value={rowSelection[row.id] ? row.id : ''}
                    onValueChange={value => setRowSelection({ [value]: true })}
                  >
                    <RadioGroupItem value={row.id} className="[&_svg]:!size-2 border-red-100" />
                  </RadioGroup>
                )}
              </div>
            ),
            size: 50,
            enableSorting: false,
            enableHiding: false,
          },
          ...columns.map(
            column =>
              ({
                ...column,
                enableSorting: column.enableSorting || false,
                filterFn: (row: any, columnId: string, filterValue: any) => {
                  if (!filterValue || !filterValue.value) return true;

                  const cellValue = row.getValue(columnId);
                  const searchValue = filterValue.value.toLowerCase();
                  const cellString = String(cellValue).toLowerCase();

                  switch (filterValue.type) {
                    case 'contains':
                      return cellString.includes(searchValue);
                    case 'equals':
                      return cellString === searchValue;
                    case 'startsWith':
                      return cellString.startsWith(searchValue);
                    case 'endsWith':
                      return cellString.endsWith(searchValue);
                    case 'notEquals':
                      return cellString !== searchValue;
                    case 'notContains':
                      return !cellString.includes(searchValue);
                    case 'isEmpty':
                      return !cellValue || String(cellValue).trim() === '';
                    case 'isNotEmpty':
                      return cellValue && String(cellValue).trim() !== '';
                    default:
                      return cellString.includes(searchValue);
                  }
                },
                header: ({ column: col }: { column: Column<TData, unknown> }) => (
                  <Header
                    column={col}
                    title={typeof column.header === 'string' ? column.header : 'Column'}
                    canMove={true}
                    activeId={activeId}
                  />
                ),
              }) as ExtendedColumnDef<TData>
          ),
        ]
      : columns.map(
          column =>
            ({
              ...column,
              enableSorting: column.enableSorting || false,
              filterFn: (row: any, columnId: string, filterValue: any) => {
                if (!filterValue || !filterValue.value) return true;

                const cellValue = row.getValue(columnId);
                const searchValue = filterValue.value.toLowerCase();
                const cellString = String(cellValue).toLowerCase();

                switch (filterValue.type) {
                  case 'contains':
                    return cellString.includes(searchValue);
                  case 'equals':
                    return cellString === searchValue;
                  case 'startsWith':
                    return cellString.startsWith(searchValue);
                  case 'endsWith':
                    return cellString.endsWith(searchValue);
                  case 'notEquals':
                    return cellString !== searchValue;
                  case 'notContains':
                    return !cellString.includes(searchValue);
                  case 'isEmpty':
                    return !cellValue || String(cellValue).trim() === '';
                  case 'isNotEmpty':
                    return cellValue && String(cellValue).trim() !== '';
                  default:
                    return cellString.includes(searchValue);
                }
              },
              header: ({ column: col }: { column: Column<TData, unknown> }) => (
                <Header
                  column={col}
                  title={typeof column.header === 'string' ? column.header : 'Column'}
                  canMove={true}
                  activeId={activeId}
                />
              ),
            }) as ExtendedColumnDef<TData>
        );

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {})
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragOver(event: DragOverEvent) {
    setOverId((event.over?.id as string) || null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    setOverId(null);

    if (active && over && active.id !== over.id) {
      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex);
      });
    }
  }

  // Custom filter functions
  const customFilterFunctions = {
    contains: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      if (typeof cellValue === 'string') {
        return cellValue.toLowerCase().includes(filterValue.value.toLowerCase());
      }
      return String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
    },
    equals: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      return String(cellValue).toLowerCase() === filterValue.value.toLowerCase();
    },
    startsWith: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      return String(cellValue).toLowerCase().startsWith(filterValue.value.toLowerCase());
    },
    endsWith: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      return String(cellValue).toLowerCase().endsWith(filterValue.value.toLowerCase());
    },
    notEquals: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      return String(cellValue).toLowerCase() !== filterValue.value.toLowerCase();
    },
    notContains: (row: any, columnId: string, filterValue: any) => {
      const cellValue = row.getValue(columnId);
      return !String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
    },
    isEmpty: (row: any, columnId: string) => {
      const cellValue = row.getValue(columnId);
      return !cellValue || String(cellValue).trim() === '';
    },
    isNotEmpty: (row: any, columnId: string) => {
      const cellValue = row.getValue(columnId);
      return cellValue && String(cellValue).trim() !== '';
    },
  };

  const table = useReactTable({
    data,
    columns: dynamicColumns,
    defaultColumn: {
      size: 150,
      minSize: 50,
      maxSize: 500,
      enableResizing: true,
      filterFn: customFilterFunctions.contains,
    },
    filterFns: customFilterFunctions,
    initialState: {
      columnPinning: {
        left: ['expand-column'],
        right: ['actions-column'],
      },
    },
    state: {
      sorting,
      pagination,
      rowSelection,
      columnFilters,
      columnVisibility,
      columnPinning,
      columnOrder,
      columnSizing,
      globalFilter,
    },
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    enableColumnResizing: true,
    enableMultiRowSelection: config?.enableMultiRowSelection,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,

    onRowSelectionChange: newRowSelection => {
      if (!config?.enableMultiRowSelection) {
        const selectedRowId = Object.keys(newRowSelection)[0];
        setRowSelection({ [selectedRowId]: true });
      } else {
        setRowSelection(newRowSelection);
      }
    },
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnSizingChange: handleColumnSizingChange,
    onGlobalFilterChange: setGlobalFilter,
    enableGlobalFilter: true,
    globalFilterFn: 'includesString',
    debugTable: false,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <ViewColumnsDropdown table={table} />
        <div className="flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search all columns..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} of {table.getCoreRowModel().rows.length} rows
        </div>
      </div>
      <FilterPills table={table} />
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToHorizontalAxis]}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <div ref={tableContainerRef} className="flex-1 border rounded-lg overflow-auto relative">
          <table
            className="caption-bottom text-sm"
            style={{
              tableLayout: 'fixed',
              width: '100%',
            }}
          >
            <TableHeader className="sticky top-0 z-40 bg-background">
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id} className="border-b">
                  <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                    {headerGroup.headers.map(header => {
                      const headerAlign =
                        (header.column.columnDef as ExtendedColumnDef<TData>).headerAlign ?? 'left';
                      const alignClass =
                        headerAlign === 'center'
                          ? 'text-center'
                          : headerAlign === 'right'
                            ? 'text-right'
                            : 'text-left';
                      const isActive = activeId === header.id;
                      return (
                        <TableHead
                          key={header.id}
                          style={{
                            width: header.getSize(),
                            position: header.column.getIsResizing() ? 'relative' : 'sticky',
                            top: header.column.getIsResizing() ? 'auto' : 0,
                            zIndex: header.column.getIsResizing()
                              ? 1000
                              : header.column.getIsPinned()
                                ? 100
                                : 50,
                            ...getCommonPinningStyles(header.column),
                          }}
                          className={cn(
                            'px-2 py-2 whitespace-nowrap bg-background border-b relative group',
                            isActive && 'z-20 bg-transparent',
                            alignClass
                          )}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanResize() && (
                            <div
                              onMouseDown={e => {
                                // Scroll to top when starting to resize
                                if (tableContainerRef.current) {
                                  tableContainerRef.current.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                  });
                                }
                                header.getResizeHandler()(e);
                              }}
                              onTouchStart={e => {
                                // Scroll to top when starting to resize
                                if (tableContainerRef.current) {
                                  tableContainerRef.current.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                  });
                                }
                                header.getResizeHandler()(e);
                              }}
                              className={cn(
                                'absolute right-0 top-0 h-full cursor-col-resize select-none touch-none z-10',
                                'transition-all duration-200 ease-in-out',
                                'w-1 bg-transparent',
                                'group-hover:w-2 group-hover:bg-muted-foreground/20',
                                'group-hover:delay-500',
                                header.column.getIsResizing() && 'w-2 bg-muted'
                              )}
                            />
                          )}
                        </TableHead>
                      );
                    })}
                  </SortableContext>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getPaginationRowModel().rows.length ? (
                <>
                  {table.getRowModel().rows.map(row => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() ? 'selected' : undefined}
                      className="bg-background"
                    >
                      {row.getVisibleCells().map(cell => {
                        const alignClass =
                          (cell.column.columnDef as ExtendedColumnDef<TData>).cellAlign === 'center'
                            ? 'text-center'
                            : (cell.column.columnDef as ExtendedColumnDef<TData>).cellAlign ===
                                'right'
                              ? 'text-right'
                              : 'text-left';

                        return (
                          <SortableContext
                            key={cell.id}
                            items={columnOrder}
                            strategy={horizontalListSortingStrategy}
                          >
                            <DraggableCell<TData>
                              key={cell.id}
                              cell={cell}
                              activeId={activeId}
                              overId={overId}
                              alignClass={alignClass}
                              style={{
                                width: cell.column.getSize(),
                                ...getCommonPinningStyles(cell.column),
                              }}
                            />
                          </SortableContext>
                        );
                      })}
                    </TableRow>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={table.getHeaderGroups()[0]?.headers.length}
                    className="h-32 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </table>
        </div>
      </DndContext>
    </div>
  );
}

export default TableEditor;
