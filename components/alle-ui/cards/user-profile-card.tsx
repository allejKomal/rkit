import React from 'react';

import { BadgeBase } from '@/components/ui/badge-base';
import { Card } from '@/components/ui/card';

import AvatarInfo from '../avatar/avatar-info';
import DropdownCompact from '../dropdown/dropdown-compact';

function UserProfileCard() {
  return (
    <Card className="px-6">
      <div className="flex gap-2 [&_span]:rounded-full [&_span]:px-4 [&_span]:py-1.5">
        <BadgeBase variant="pinkFull">TRENDS</BadgeBase>
        <BadgeBase variant="blueFull">DESIGN</BadgeBase>
      </div>
      <div className="flex justify-between items-center">
        <AvatarInfo />
        <DropdownCompact />
      </div>
      <div className="text-xl font-bold bg-gradient-to-r from-[#70aedf] to-purple-500 bg-clip-text text-transparent">
        <span>Something Is Waiting For You, There Is Something New</span>
      </div>
      <span className="text-sm text-muted-foreground">12 hours ago</span>
    </Card>
  );
}

export default UserProfileCard;
