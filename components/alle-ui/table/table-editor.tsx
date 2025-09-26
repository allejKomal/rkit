'use client';

import React, { useCallback, useState } from 'react';

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
  type ColumnFiltersState,
  ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingState,
  FilterFnOption,
  type PaginationState,
  Row,
  type RowSelectionState,
  type SortingState,
  Updater,
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
import { FilterPills } from './components/filter-pill';
import Header from './components/header';
import { DataTablePagination } from './components/pagination';
import { ViewColumnsDropdown } from './components/view-columns-dropdown';
import { ExtendedColumnDef } from './types/exnteded-column-def';
import { cellFilterFunction } from './utils/cell-filter-function';
import { getCommonPinningStyles } from './utils/common-pinning-styles';
import { customFilterFunctions } from './utils/custom-filter-functions';

export type TableEditorConfig<TData> = {
  debugTable?: boolean;
  /**
   * Enable pagination
   */
  enablePagination?: boolean;
  pageSize?: number;
  pageIndex?: number;
  onPageSizeChange?: (pageSize: number) => void;
  onPageIndexChange?: (pageIndex: number) => void;
  /**
   * Enable pagination
   */
  enableSingleRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  rowSelectionId?: string;
  renderSingleSelection?: (row: Row<TData>) => React.ReactNode;
  onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
  /**
   * Enable multi row selection
   */
  enableMultiRowSelection?: boolean;
  renderMultiSelection?: (row: Row<TData>) => React.ReactNode;
  /**
   * Enable column pinning
   */
  enableColumnPinning?: boolean;
  columnPinning?: ColumnPinningState;
  onColumnPinningChange?: (columnPinning: ColumnPinningState) => void;
  /**
   * Enable sorting
   */
  enableSorting?: boolean;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  /**
   * Enable column resizing
   */
  enableColumnResizing?: boolean;
  columnSizing?: ColumnSizingState;
  columnResizeMode?: 'onChange' | 'onEnd';
  columnResizeDirection?: 'ltr' | 'rtl';
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
  /**
   * Enable column order
   */
  enableColumnOrder?: boolean;
  columnOrder?: string[];
  onColumnOrderChange?: (columnOrder: string[]) => void;
  /**
   * Enable global filter
   */
  enableGlobalFilter?: boolean;
  globalFilterFn?: FilterFnOption<TData>;
  onGlobalFilterChange?: (globalFilter: string) => void;
  globalFilter?: string;
  /**
   * Enable column visibility
   */
  enableColumnVisibility?: boolean;
  initialColumnVisibility?: VisibilityState;
  onColumnVisibilityChange?: (columnVisibility: VisibilityState) => void;
  /**
   * Enable column filter
   */
  enableColumnFilter?: boolean;
  onColumnFiltersChange?: (columnFilters: ColumnFiltersState) => void;
  columnFilters?: ColumnFiltersState;
  filterFn?: FilterFnOption<TData>;
};

interface TableEditorProps<TData> {
  config?: TableEditorConfig<TData>;
  columns: ExtendedColumnDef<TData>[];
  data: TData[];
}

function TableEditor<TData>({ config, data, columns }: TableEditorProps<TData>) {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [overId, setOverId] = React.useState<string | null>(null);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [sorting, setSorting] = useState<SortingState>(config?.sorting || []);
  const [globalFilter, setGlobalFilter] = useState<string>(config?.globalFilter || '');
  const initialColumnVisibility: VisibilityState = config?.initialColumnVisibility || {};
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(config?.columnSizing || {});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(config?.rowSelection || {});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    config?.columnFilters || []
  );
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>(
    config?.columnPinning || {
      left: [],
      right: [],
    }
  );
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() => {
    const order = config?.enableColumnOrder
      ? config?.columnOrder || columns.map(c => c.id!)
      : columns.map(c => c.id!);
    if (config?.enableSingleRowSelection || config?.enableMultiRowSelection) {
      return ['select', ...order];
    }
    return order;
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: config?.pageIndex || 0,
    pageSize: config?.pageSize || 10,
  });
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>(initialColumnVisibility);

  const handleColumnSizingChange = React.useCallback(
    (updater: Updater<ColumnSizingState>) => {
      const newSizing = typeof updater === 'function' ? updater(columnSizing) : updater;
      const isFirstResize =
        Object.keys(columnSizing).length === 0 && Object.keys(newSizing).length > 0;
      if (isFirstResize && tableContainerRef.current) {
        tableContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setColumnSizing(newSizing);
    },
    [columnSizing]
  );

  const dynamicColumns: ExtendedColumnDef<TData>[] =
    config?.enableSingleRowSelection || config?.enableMultiRowSelection
      ? [
          {
            id: 'select',
            header: ({ table }) => (
              <div className="flex items-center justify-center h-full">
                {config?.enableMultiRowSelection &&
                  (config?.renderMultiSelection ? (
                    config?.renderMultiSelection(table.getRowModel().rows[0])
                  ) : (
                    <Checkbox
                      className="!border-black/30 dark:!border-white/30"
                      checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                      }
                      onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                      aria-label="Select all"
                    />
                  ))}
              </div>
            ),
            cell: ({ row }) => (
              <div className="flex items-center justify-center h-full">
                {config?.enableMultiRowSelection ? (
                  config?.renderMultiSelection ? (
                    config?.renderMultiSelection(row)
                  ) : (
                    <Checkbox
                      className="!border-black/30 dark:!border-white/30"
                      checked={row.getIsSelected()}
                      onCheckedChange={value => row.toggleSelected(!!value)}
                      aria-label="Select row"
                    />
                  )
                ) : config?.renderSingleSelection ? (
                  config?.renderSingleSelection(row)
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
                enablePinning: column.enablePinning || false,
                enableSorting: column.enableSorting || false,
                enableResizing: column.enableResizing || false,
                enableHiding: column.enableHiding || false,
                enableColumnFilter: column.enableColumnFilter || false,
                filterFn: cellFilterFunction<TData>,
                header: ({ column: col }: { column: Column<TData, unknown> }) => (
                  <Header
                    config={config}
                    column={col}
                    title={typeof column.header === 'string' ? column.header : 'Column'}
                    canMove={true}
                    activeId={activeId}
                    headerAlign={column.headerAlign}
                  />
                ),
              }) as ExtendedColumnDef<TData>
          ),
        ]
      : columns.map(
          column =>
            ({
              ...column,
              enablePinning: column.enablePinning || false,
              enableSorting: column.enableSorting || false,
              enableResizing: column.enableResizing || false,
              enableHiding: column.enableHiding || false,
              enableColumnFilter: column.enableColumnFilter || false,
              filterFn: cellFilterFunction<TData>,
              header: ({ column: col }: { column: Column<TData, unknown> }) => (
                <Header
                  config={config}
                  column={col}
                  title={typeof column.header === 'string' ? column.header : 'Column'}
                  canMove={true}
                  activeId={activeId}
                  headerAlign={column.headerAlign}
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

  const handleColumnOrderChange = useCallback(
    (columnOrder: Updater<ColumnOrderState>) => {
      setColumnOrder(columnOrder as ColumnOrderState);
      config?.onColumnOrderChange?.(columnOrder as ColumnOrderState);
    },
    [config]
  );

  const handleRowSelectionChange = useCallback(
    (rowSelection: Updater<RowSelectionState>) => {
      if (!config?.enableMultiRowSelection) {
        const selectedRowId = Object.keys(rowSelection)[0];
        setRowSelection({ [selectedRowId]: true });
      } else {
        setRowSelection(rowSelection);
      }
    },
    [config]
  );

  const handleSortingChange = useCallback(
    (sorting: Updater<SortingState>) => {
      setSorting(sorting as SortingState);
      config?.onSortingChange?.(sorting as SortingState);
    },
    [config]
  );

  const handlePaginationChange = useCallback(
    (pagination: Updater<PaginationState>) => {
      setPagination(pagination as PaginationState);
      const newPagination = pagination as PaginationState;
      config?.onPageIndexChange?.(newPagination.pageIndex);
      config?.onPageSizeChange?.(newPagination.pageSize);
    },
    [config]
  );

  const handleColumnPinningChange = useCallback(
    (columnPinning: Updater<ColumnPinningState>) => {
      setColumnPinning(columnPinning as ColumnPinningState);
      config?.onColumnPinningChange?.(columnPinning as ColumnPinningState);
    },
    [config]
  );

  const handleColumnFiltersChange = useCallback(
    (columnFilters: Updater<ColumnFiltersState>) => {
      setColumnFilters(columnFilters as ColumnFiltersState);
      config?.onColumnFiltersChange?.(columnFilters as ColumnFiltersState);
    },
    [config]
  );

  const handleColumnVisibilityChange = useCallback(
    (columnVisibility: Updater<VisibilityState>) => {
      setColumnVisibility(columnVisibility as VisibilityState);
      config?.onColumnVisibilityChange?.(columnVisibility as VisibilityState);
    },
    [config]
  );

  const handleGlobalFilterChange = useCallback(
    (globalFilter: string) => {
      setGlobalFilter(globalFilter);
      config?.onGlobalFilterChange?.(globalFilter);
    },
    [config]
  );

  const table = useReactTable({
    data,
    columns: dynamicColumns,
    defaultColumn: {
      size: 150,
      minSize: 50,
      maxSize: 500,
      enableResizing: true,
      filterFn: (config?.filterFn as FilterFnOption<TData>) || customFilterFunctions.contains,
    },
    filterFns: customFilterFunctions,
    initialState: {
      columnPinning: columnPinning,
      columnOrder: columnOrder,
      columnVisibility: columnVisibility,
      columnSizing: columnSizing,
      globalFilter: globalFilter,
      rowSelection: rowSelection,
      sorting: sorting,
      pagination: pagination,
      columnFilters: columnFilters,
    },
    state: {
      sorting: sorting,
      pagination: pagination,
      rowSelection: rowSelection,
      columnFilters,
      columnVisibility,
      columnPinning,
      columnOrder,
      columnSizing,
      globalFilter,
    },
    columnResizeMode: config?.columnResizeMode || 'onChange',
    columnResizeDirection: config?.columnResizeDirection || 'ltr',
    enableColumnResizing: config?.enableColumnResizing,
    enableMultiRowSelection: config?.enableMultiRowSelection,
    enableGlobalFilter: config?.enableGlobalFilter,
    onSortingChange: handleSortingChange,
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: handleColumnOrderChange,
    onColumnPinningChange: handleColumnPinningChange,
    onRowSelectionChange: handleRowSelectionChange,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: handleColumnFiltersChange,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: handleColumnVisibilityChange,
    onColumnSizingChange: handleColumnSizingChange,
    onGlobalFilterChange: handleGlobalFilterChange,
    globalFilterFn: config?.enableGlobalFilter
      ? (config?.globalFilterFn as FilterFnOption<TData>) || 'includesString'
      : undefined,
    debugTable: config?.debugTable,
  });

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-4">
        {config?.enableColumnVisibility && <ViewColumnsDropdown table={table} />}
        {config?.enableGlobalFilter && (
          <>
            <div className="flex-1 max-w-sm">
              <input
                type="text"
                placeholder="Search all columns..."
                value={globalFilter}
                onChange={e => handleGlobalFilterChange(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {table.getFilteredRowModel().rows.length} of {table.getCoreRowModel().rows.length}{' '}
              rows
            </div>
          </>
        )}
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
                            ...getCommonPinningStyles<TData>(header.column),
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
                                config?.enableColumnResizing &&
                                  'group-hover:w-2 group-hover:bg-muted-foreground/20',
                                config?.enableColumnResizing && 'group-hover:delay-500',
                                config?.enableColumnResizing &&
                                  header.column.getIsResizing() &&
                                  'w-2 bg-muted'
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
      {config?.enablePagination && <DataTablePagination config={config} table={table} />}{' '}
    </div>
  );
}

export default TableEditor;
