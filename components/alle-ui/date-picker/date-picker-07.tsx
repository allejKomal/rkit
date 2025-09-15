'use client';

import { useRef, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// <-- Make sure this matches your Calendar lib

import { cn } from '@/lib/utils';

export function DatePicker07() {
  const [isOpen, setIsOpen] = useState(false);

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
  });

  const calendarRef = useRef<HTMLDivElement | null>(null);

  const formattedLabel =
    dateRange?.from && dateRange?.to
      ? `${format(dateRange.from, 'MMM d')} - ${format(dateRange.to, 'MMM d, yyyy')}`
      : dateRange?.from
        ? `${format(dateRange.from, 'MMM d, yyyy')}`
        : 'Pick a date';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full font-normal', !dateRange?.from && 'text-muted-foreground')}
        >
          {formattedLabel}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 flex items-start" align="start">
        <div ref={calendarRef}>
          <Calendar
            mode="range"
            captionLayout="dropdown"
            selected={dateRange}
            onSelect={range => {
              setDateRange(range);
              if (range?.from && range?.to) {
                setIsOpen(false);
              }
            }}
            fromYear={2000}
            toYear={new Date().getFullYear()}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
