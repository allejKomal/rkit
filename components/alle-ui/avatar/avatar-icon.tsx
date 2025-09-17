import React from 'react';

import { CircleUserRound } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function AvatarIcon() {
  return (
    <Avatar className="size-10">
      <AvatarFallback>
        <CircleUserRound className="text-muted-foreground" />
      </AvatarFallback>
    </Avatar>
  );
}
