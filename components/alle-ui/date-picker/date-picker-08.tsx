'use client';

import { useState } from 'react';

import { endOfWeek, format, startOfWeek } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function DatePicker08() {
  const [isOpen, setIsOpen] = useState(false);
  const [week, setWeek] = useState<{ from: Date; to: Date } | null>(null);

  // On day click: select entire week containing that day
  const handleDayClick = (date: Date) => {
    const from = startOfWeek(date, { weekStartsOn: 0 }); // Sunday start
    const to = endOfWeek(date, { weekStartsOn: 0 });
    setWeek({ from, to });
    setIsOpen(false);
  };

  const selectedLabel = week
    ? `${format(week.from, 'MMM d')} – ${format(week.to, 'MMM d, yyyy')}`
    : 'Select a week';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full justify-between font-normal', !week && 'text-muted-foreground')}
        >
          {selectedLabel}
          <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        {/* Using key prop to force re-render when week changes */}
        <Calendar
          key={week ? week.from.toISOString() : 'none'}
          mode="range"
          selected={week || undefined}
          onDayClick={handleDayClick}
          fromYear={2000}
          toYear={new Date().getFullYear()}
          modifiersClassNames={{
            selected: 'bg-primary text-primary-foreground',
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
