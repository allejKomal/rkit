import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { userProfile } from '@/constants';

function UserCard() {
  return (
    <Card className="w-[250px] rounded-xl overflow-hidden shadow-md px-4 py-4 mx-auto my-auto">
      <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-500 via-fuchsia-500 via-60% to-pink-400" />
      <CardContent className="flex flex-col items-center -mt-20">
        <Avatar className="w-30 h-30 border-4 border-white">
          <AvatarImage src={userProfile} alt="Rick Astley" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <div className="text-center mt-3">
          <h3 className="text-lg font-semibold">Rick Astley</h3>
          <p className="text-sm text-gray-500">Artist from New Delhi, India</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCard;
