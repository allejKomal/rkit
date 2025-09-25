import React, { useMemo, useState } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ChevronsUpDown, GripVertical, Pin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import { TableEditorConfig } from '../table-editor';
import FilterDropdownOption from './filter-dropdown-option';
import HideDropdownOption from './hide-dropdown-option';
import PinDropdownOption from './pin-dropdown-option';
import SortDropdownOption from './sort-dropdown-option';

interface HeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  config?: TableEditorConfig<TData>;
  column: Column<TData, TValue>;
  title: string;
  canMove: boolean;
  activeId?: string | null;
}

function Header<TData, TValue>({
  config,
  column,
  title,
  className,
  canMove,
  activeId,
}: HeaderProps<TData, TValue>) {
  const [isInitialized, setIsInitialized] = React.useState(false);

  const [filter, setFilter] = useState<string>('contains');
  const [filterValue, setFilterValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [dateRangeValue, setDateRangeValue] = useState<
    { from: Date | undefined; to: Date | undefined } | undefined
  >(undefined);

  // Get current filter value from column

  // Initialize filterValue with current filter value only when dropdown opens
  const dropdownTriggerRef = React.useRef<HTMLButtonElement | null>(null);

  // Handle input changes

  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({
    id: column.id,
  });

  const isActive = activeId === column.id;

  const dragStyle: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: isDragging ? 'none' : 'transform 0.2s ease-in-out',
    position: isDragging ? 'relative' : undefined,
    zIndex: isDragging ? 1000 : undefined,
  };

  const showDropdown = useMemo(() => {
    return config?.sorting || false;
  }, [config]);

  if (!showDropdown) {
    return (
      <div
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          'hover:bg-accent hover:text-accent-foreground',
          'h-8 px-3 text-sm',
          'data-[state=open]:bg-accent -ml-3'
        )}
      >
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 group',
        config?.enableMultiRowSelection &&
          isDragging &&
          'opacity-100 bg-transparent -my-6 py-6 -mx-2 px-2 border-b shadow-lg',
        config?.enableColumnResizing && isActive && 'z-30 bg-muted',
        className
      )}
      ref={setNodeRef}
      style={config?.enableColumnResizing ? dragStyle : undefined}
    >
      <DropdownMenu
        onOpenChange={open => {
          if (!open) {
            if (filterValue.trim()) {
              const filterObj = {
                type: filter,
                value: filterValue.trim(),
              };
              column.setFilterValue(filterObj);
            } else {
              column.setFilterValue(undefined);
              setFilterValue('');
            }
            setIsInitialized(false);
          }
        }}
      >
        <DropdownMenuTrigger
          ref={dropdownTriggerRef}
          className={cn(
            'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
            'hover:bg-accent hover:text-accent-foreground',
            'h-8 px-3 text-sm',
            'data-[state=open]:bg-accent -ml-3',
            (column.getFilterValue() as unknown as boolean) && 'bg-blue-100 dark:bg-blue-900'
          )}
        >
          <span>{title}</span>
          {column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          )}
          {(column.getFilterValue() as unknown as boolean) && (
            <div className="ml-1 w-2 h-2 bg-blue-500 rounded-full" />
          )}
          {column.getIsPinned() && <Pin className="ml-1 h-3 w-3 text-blue-500" />}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <SortDropdownOption column={column} config={config || {}} />
          <FilterDropdownOption
            column={column}
            config={config || {}}
            setFilterValue={setFilterValue}
            isInitialized={isInitialized}
            setIsInitialized={setIsInitialized}
            filter={filter}
            filterValue={filterValue}
            setFilter={setFilter}
            dateValue={dateValue}
            setDateValue={setDateValue}
            dateRangeValue={dateRangeValue}
            setDateRangeValue={setDateRangeValue}
            dropdownTriggerRef={dropdownTriggerRef}
          />
          <DropdownMenuLabel>Quick Filters</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => column.setFilterValue({ type: 'isEmpty', value: '' })}>
            Show Empty
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => column.setFilterValue({ type: 'isNotEmpty', value: '' })}
          >
            Show Non-Empty
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              column.setFilterValue(undefined);
              setFilterValue('');
              setDateValue(null);
              setDateRangeValue(undefined);
              setFilter('contains'); // Reset to default filter type
              setIsInitialized(false); // Reset initialization state
            }}
            disabled={!column.getFilterValue()}
          >
            Clear Filter
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <PinDropdownOption column={column} config={config || {}} />
          <HideDropdownOption column={column} config={config || {}} />
        </DropdownMenuContent>
      </DropdownMenu>

      {canMove && (
        <Button
          variant="ghost"
          size="iconsm"
          className="group-hover:opacity-100 opacity-0 transition-opacity duration-200"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="size-4" />
        </Button>
      )}
    </div>
  );
}

export default Header;
