import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export function AvatarRounded() {
  return (
    <Avatar className="size-10">
      <AvatarImage src={userProfile} alt="@jk" />
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
  );
}
