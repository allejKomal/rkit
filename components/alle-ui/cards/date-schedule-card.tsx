import React from 'react';

import { Clock, MapPin } from 'lucide-react';

import { BadgeBase } from '@/components/ui/badge-base';
import { Card } from '@/components/ui/card';

import { AvatarGroupTransition } from '../avatar/avatar-group-transition';

function DateScheduleCard() {
  return (
    <Card className="mx-auto p-6 gap-4">
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold">12</span>
        <div className="flex flex-col">
          <span className="text-sm text-green-500 dark:text-green-400">Marketting</span>
          <span className="text-sm font-bold">Oct 2025</span>
        </div>
      </div>
      <div className="flex items-center gap-4 [&>span]:rounded-full [&>span]:px-4 [&>span]:py-1">
        <BadgeBase variant="red">Start</BadgeBase>
        <BadgeBase variant="purple">End</BadgeBase>
        <BadgeBase variant="teal">Cancel</BadgeBase>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <MapPin className="size-4 mt-0.75 text-muted-foreground" />
          <span className="text-sm font-medium flex-1 text-muted-foreground">
            Helsinki, Finland, 00100, 1st floor, 123 Main St, 12345, Finland, 12345, Finland, 12345,
            Finland
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="size-4 mt-0.75 text-muted-foreground" />
          <span className="text-sm font-medium flex-1 text-muted-foreground">
            10:00 AM - 12:00 PM, with 30 minutes break in between
          </span>
        </div>
      </div>
      <div className="[&_span>span[data-slot='avatar']]:size-3 pt-4">
        <AvatarGroupTransition />
      </div>
    </Card>
  );
}

export default DateScheduleCard;
