import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export function AvatarProgress() {
  const progress = 65;

  return (
    <div className="relative inline-block">
      {/* Avatar */}
      <Avatar className="size-10 z-1 ring-offset-background ring-[1px] ring-white ring-offset-2">
        <AvatarImage src={userProfile} alt="JK" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{
          background: `conic-gradient(#1e90ff ${progress * 3.6}deg, transparent 0deg)`,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          transform: 'scale(1.3)',
          transformOrigin: 'center',
          zIndex: 0,
        }}
      />
    </div>
  );
}
