import React from 'react';

import { Card, CardHeader } from '@/components/ui/card';

import AvatarInfo from '../avatar/avatar-info';

function PostCard() {
  return (
    <Card>
      <CardHeader>
        <AvatarInfo />
        <div className="flex items-center justify-center py-8 px-2 text-center">
          <span className="text-xl font-medium text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </span>
        </div>
        <span className="text-sm text-muted-foreground">2 hours ago</span>
      </CardHeader>
    </Card>
  );
}

export default PostCard;
