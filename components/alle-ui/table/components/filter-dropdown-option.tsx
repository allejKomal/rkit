import React, { useState } from 'react';

import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Column } from '@tanstack/react-table';

import {
  DropdownMenuCalendarItem,
  DropdownMenuCheckboxItem,
  DropdownMenuInputItem,
  DropdownMenuItem,
  DropdownMenuRangePickerItem,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

import { TableEditorConfig } from '../table-editor';

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

function FilterDropdownOption<TData, TValue>({
  column,
  config,
  setFilterValue,
  isInitialized,
  setIsInitialized,
  filter,
  filterValue,
  setFilter,
  dateValue,
  setDateValue,
  dateRangeValue,
  setDateRangeValue,
  dropdownTriggerRef,
}: {
  column: Column<TData, TValue>;
  config: TableEditorConfig<TData>;
  setFilterValue: (value: string) => void;
  filter: string;
  isInitialized: boolean;
  setIsInitialized: (value: boolean) => void;
  filterValue: string;
  setFilter: (value: string) => void;
  dateValue: Date | null;
  setDateValue: (value: Date | null) => void;
  dateRangeValue: { from: Date | undefined; to: Date | undefined } | undefined;
  setDateRangeValue: (value: { from: Date | undefined; to: Date | undefined } | undefined) => void;
  dropdownTriggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const currentFilter = column.getFilterValue() as { value?: string; type?: string } | undefined;

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const currentFilterValue = currentFilter?.value || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  React.useEffect(() => {
    if (currentFilterValue && !isInitialized) {
      setFilterValue(currentFilterValue);
      setIsInitialized(true);
    }
  }, [currentFilterValue, isInitialized, setFilterValue, setIsInitialized]);

  if (!config.enableColumnFilter) return <></>;

  return (
    <>
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
            if (dropdownTriggerRef?.current) {
              dropdownTriggerRef?.current.click();
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
    </>
  );
}

export default FilterDropdownOption;
