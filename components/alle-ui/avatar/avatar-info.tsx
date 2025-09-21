import React from 'react';

import { AvatarRounded } from './avatar-rounded';

function AvatarInfo() {
  return (
    <div className="flex items-center gap-4">
      <AvatarRounded />
      <div>
        <div className="leading-none font-semibold">alleJKomal</div>
        <div className="text-muted-foreground text-sm">Dec 11, 2004</div>
      </div>
    </div>
  );
}

export default AvatarInfo;
