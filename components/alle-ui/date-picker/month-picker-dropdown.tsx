'use client';

import { useState } from 'react';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import MonthPicker from '@/components/ui/month-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function MonthPickerDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date() // default to current month
  );

  const selectedLabel = selectedDate ? format(selectedDate, 'MMM yyyy') : 'Select a month';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-between font-normal',
            !selectedDate && 'text-muted-foreground'
          )}
        >
          {selectedLabel}
          <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <MonthPicker
          captionLayout="dropdown"
          selectedDate={selectedDate}
          onMonthSelect={date => {
            setSelectedDate(date); // pick new month-year
            setIsOpen(false); // close popover
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
