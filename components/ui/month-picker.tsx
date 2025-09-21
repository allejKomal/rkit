'use client';

import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ScrollArea, ScrollBar } from './scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

type DisabledProp = Date[] | { before?: Date; after?: Date } | ((date: Date) => boolean);

interface MonthPickerProps {
  minYear?: number;
  maxYear?: number;
  captionLayout?: 'label' | 'dropdown';
  monthsPerRow?: number;
  onMonthSelect?: (month: Date) => void;
  selectedDate: Date; // controlled
  disabled?: DisabledProp;
  className?: string;
}

export default function MonthPicker({
  captionLayout = 'label',
  onMonthSelect,
  minYear = 2000,
  maxYear = new Date().getFullYear(),
  monthsPerRow = 3,
  selectedDate,
  disabled,
  className,
}: MonthPickerProps) {
  const [visibleYear, setVisibleYear] = useState(selectedDate.getFullYear());

  // keep visible year synced with external selectedDate
  useEffect(() => {
    setVisibleYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const isDisabled = (date: Date): boolean => {
    if (!disabled) return false;

    if (Array.isArray(disabled)) {
      return disabled.some(
        d => d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth()
      );
    }

    if (typeof disabled === 'function') {
      return disabled(date);
    }

    if (disabled.before && date < disabled.before) return true;
    if (disabled.after && date > disabled.after) return true;

    return false;
  };

  const handleMonthSelect = (monthIndex: number) => {
    const updatedDate = new Date(visibleYear, monthIndex, 1);
    if (!isDisabled(updatedDate)) {
      onMonthSelect?.(updatedDate);
    }
  };

  const handleYearChange = (direction: 'prev' | 'next') => {
    setVisibleYear(prev => (direction === 'prev' ? prev - 1 : prev + 1));
  };

  const handleYearSelect = (year: string) => {
    setVisibleYear(parseInt(year, 10));
  };

  const isNextButtonDisabled = visibleYear >= maxYear;
  const isPrevButtonDisabled = visibleYear <= minYear;

  return (
    <div className={className}>
      <div className="flex justify-between items-center p-2">
        <Button
          onClick={() => handleYearChange('prev')}
          variant="ghost"
          disabled={isPrevButtonDisabled}
        >
          <ChevronLeftIcon />
        </Button>

        {captionLayout === 'label' && <span className="text-sm font-semibold">{visibleYear}</span>}

        {captionLayout === 'dropdown' && (
          <Select value={visibleYear.toString()} onValueChange={handleYearSelect}>
            <SelectTrigger className="w-fit font-medium gap-1" size="sm">
              <SelectValue placeholder="Select Year" className="font-medium" />
            </SelectTrigger>
            <SelectContent className="min-w-fit">
              <SelectGroup className="w-fit">
                <ScrollArea className="h-44 w-fit">
                  {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map(
                    year => (
                      <SelectItem
                        key={year}
                        value={year.toString()}
                        className={cn(
                          'w-fit [&_svg]:size-0',
                          visibleYear === year &&
                            'bg-muted-foreground/30 hover:!bg-muted-foreground/35'
                        )}
                      >
                        {year}
                      </SelectItem>
                    )
                  )}
                  <ScrollBar />
                </ScrollArea>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}

        <Button
          onClick={() => handleYearChange('next')}
          variant="ghost"
          disabled={isNextButtonDisabled}
        >
          <ChevronRightIcon />
        </Button>
      </div>

      <div
        className={cn('grid gap-2 p-2')}
        style={{
          gridTemplateColumns: `repeat(${monthsPerRow}, minmax(0, 1fr))`,
        }}
      >
        {[...Array(12)].map((_, index) => {
          const month = new Date(visibleYear, index, 1);
          const isSelected =
            selectedDate.getFullYear() === visibleYear && selectedDate.getMonth() === index;
          const monthDisabled = isDisabled(month);

          return (
            <Button
              variant="ghost"
              key={index}
              onClick={() => handleMonthSelect(index)}
              disabled={monthDisabled}
              className={cn(
                'font-normal px-5 py-5',
                isSelected &&
                  'bg-primary text-white hover:bg-primary hover:text-white dark:bg-primary dark:text-black dark:hover:bg-primary dark:hover:text-black',
                monthDisabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {format(month, 'MMM')}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
