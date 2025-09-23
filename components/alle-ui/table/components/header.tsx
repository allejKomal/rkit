import React, { useState } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Column } from '@tanstack/react-table';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronsUpDown,
  EyeOff,
  GripVertical,
  Pin,
  PinOff,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCalendarItem,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuInputItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRangePickerItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const filterOptions = [
  { label: 'starts with', value: 'startsWith' },
  { label: 'ends with', value: 'endsWith' },
  { label: 'equals', value: 'equals' },
  { label: 'not equals', value: 'notEquals' },
  { label: 'Contains', value: 'contains' },
  { label: 'Not Contains', value: 'notContains' },
  { label: 'Is', value: 'is' },
  { label: 'Is Not', value: 'isNot' },
  { label: 'Is Empty', value: 'isEmpty' },
  { label: 'Is Not Empty', value: 'isNotEmpty' },
  { label: 'Is Null', value: 'isNull' },
  { label: 'Is Not Null', value: 'isNotNull' },
];

interface HeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  canMove: boolean;
  activeId?: string | null;
}

function Header<TData, TValue>({
  column,
  title,
  className,
  canMove,
  activeId,
}: HeaderProps<TData, TValue>) {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('contains');
  const [filterValue, setFilterValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [dateRangeValue, setDateRangeValue] = useState<
    { from: Date | undefined; to: Date | undefined } | undefined
  >(undefined);

  // Get current filter value from column
  const currentFilter = column.getFilterValue() as { value?: string; type?: string } | undefined;
  const currentFilterValue = currentFilter?.value || '';

  // Initialize filterValue with current filter value only when dropdown opens
  const [isInitialized, setIsInitialized] = React.useState(false);
  const dropdownTriggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (currentFilterValue && !isInitialized) {
      setFilterValue(currentFilterValue);
      setIsInitialized(true);
    }
  }, [currentFilterValue, isInitialized]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

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

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 group',
        isDragging && 'opacity-100 bg-transparent -my-6 py-6 -mx-2 px-2 border-b shadow-lg',
        isActive && 'z-30 bg-muted',
        className
      )}
      ref={setNodeRef}
      style={dragStyle}
    >
      <DropdownMenu
        onOpenChange={open => {
          if (!open) {
            if (filterValue.trim()) {
              // Apply filter when dropdown closes
              const filterObj = {
                type: filter,
                value: filterValue.trim(),
              };
              column.setFilterValue(filterObj);
            } else {
              // Clear filter if input is empty
              column.setFilterValue(undefined);
              setFilterValue(''); // Ensure local state is cleared
            }
            setIsInitialized(false); // Reset for next time
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
            (column.getFilterValue() as any) && 'bg-blue-100 dark:bg-blue-900'
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
          {(column.getFilterValue() as any) && <div className="ml-1 w-2 h-2 bg-blue-500 rounded-full" />}
          {column.getIsPinned() && <Pin className="ml-1 h-3 w-3 text-blue-500" />}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Sort</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown />
              Desc
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Filter</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuSub open={filterOpen} onOpenChange={setFilterOpen}>
              <DropdownMenuSubTrigger>
                {filterOptions.find(option => option.value === filter)?.label}
                {currentFilter?.type && (
                  <span className="ml-1 text-xs text-blue-600">({currentFilter.type})</span>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <ScrollArea className="h-60">
                  {filterOptions.map(option => (
                    <DropdownMenuCheckboxItem
                      key={option.value}
                      checked={filter === option.value}
                      onClick={e => {
                        e.preventDefault();
                        setFilter(option.value);
                        setFilterOpen(false);
                      }}
                    >
                      {option.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </ScrollArea>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuInputItem
              type="text"
              value={filterValue}
              onChange={handleInputChange}
              placeholder="Enter filter value"
              onKeyDown={e => {
                if (e.key === 'Escape') {
                  setFilterValue('');
                  column.setFilterValue(undefined);
                }
              }}
              onEnter={e => {
                // Apply filter when Enter is pressed
                if (filterValue.trim()) {
                  const filterObj = {
                    type: filter,
                    value: filterValue.trim(),
                  };
                  column.setFilterValue(filterObj);
                } else {
                  column.setFilterValue(undefined);
                }
              }}
            />
            <DropdownMenuItem
              onClick={() => {
                // Apply filter when button is clicked
                if (filterValue.trim()) {
                  const filterObj = {
                    type: filter,
                    value: filterValue.trim(),
                  };
                  column.setFilterValue(filterObj);
                } else {
                  column.setFilterValue(undefined);
                }
                // Close the dropdown by clicking the trigger
                if (dropdownTriggerRef.current) {
                  dropdownTriggerRef.current.click();
                }
              }}
            >
              Apply Filter
            </DropdownMenuItem>
            <DropdownMenuCalendarItem
              value={dateValue}
              onChange={date => {
                const dateObj = date as Date | null;
                setDateValue(dateObj);
                if (dateObj) {
                  column.setFilterValue(dateObj.toISOString().split('T')[0]);
                } else {
                  column.setFilterValue(undefined);
                }
              }}
              placeholder="Pick a date"
            />
            <DropdownMenuRangePickerItem
              value={dateRangeValue}
              onChange={range => {
                const rangeObj = range as { from: Date | undefined; to: Date | undefined } | undefined;
                setDateRangeValue(rangeObj);
                if (rangeObj?.from && rangeObj?.to) {
                  column.setFilterValue({
                    from: rangeObj.from.toISOString().split('T')[0],
                    to: rangeObj.to.toISOString().split('T')[0],
                  });
                } else {
                  column.setFilterValue(undefined);
                }
              }}
              placeholder="Pick a date range"
            />
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
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
          <DropdownMenuLabel>Pin Column</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => column.pin('left')}
            disabled={column.getIsPinned() === 'left'}
          >
            <Pin className="mr-2 h-4 w-4" />
            Pin to Left
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => column.pin('right')}
            disabled={column.getIsPinned() === 'right'}
          >
            <Pin className="mr-2 h-4 w-4" />
            Pin to Right
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.pin(false)} disabled={!column.getIsPinned()}>
            <PinOff className="mr-2 h-4 w-4" />
            Unpin Column
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Visibility</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff />
            Hide
          </DropdownMenuItem>
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
