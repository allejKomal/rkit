'use client';

import { useRef, useState } from 'react';

import { format } from 'date-fns';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function DatePicker01() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const calendarRef = useRef<HTMLDivElement | null>(null);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full font-normal', !date && 'text-muted-foreground')}
        >
          {date ? `${format(date, 'PPP')}` : <span>Pick a date</span>}
          <ChevronsUpDown className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 flex items-start" align="start">
        <div ref={calendarRef}>
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={selectedDate => {
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
            onDayClick={() => setIsOpen(false)}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
