import React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';

function CalendarCard() {
  return (
    <Card className="w-fit p-0 [&_div]:rounded-xl flex items-center justify-center mx-auto">
      <Calendar mode="single" />
    </Card>
  );
}

export default CalendarCard;
