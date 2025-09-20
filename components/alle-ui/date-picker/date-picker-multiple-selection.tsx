'use client';

import { useRef, useState } from 'react';

import { format } from 'date-fns';
import { CalendarIcon, InfoIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export function DatePickerMultipleSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date[] | undefined>([new Date()]);

  const calendarRef = useRef<HTMLDivElement | null>(null);

  const formattedDates =
    date && date.length
      ? [...new Set(date.map(d => d.getTime()))] // Deduplicate
          .sort((a, b) => a - b)
          .map(ts => format(new Date(ts), 'PPP'))
      : [];

  const displayLabel =
    formattedDates.length > 1
      ? `${formattedDates.length} dates selected`
      : formattedDates.join(', ');

  return (
    <TooltipProvider>
      <div className="flex">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full font-normal flex justify-between items-center',
                !date?.length && 'text-muted-foreground'
              )}
            >
              <span className="truncate">
                {formattedDates.length ? displayLabel : 'Pick a date'}
              </span>
              <CalendarIcon className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 flex items-start" align="start">
            <div ref={calendarRef}>
              <Calendar
                mode="multiple"
                captionLayout="dropdown"
                selected={date}
                onSelect={selectedDate => {
                  setDate(selectedDate);
                }}
              />
            </div>
          </PopoverContent>
        </Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <InfoIcon className="h-4 w-4 opacity-70 cursor-pointer" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className="max-w-[200px] whitespace-pre-line">
              {formattedDates.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
