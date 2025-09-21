import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { userProfile } from '@/constants';

function UserCardBackground() {
  return (
    <Card className="w-[250px] rounded-xl overflow-hidden shadow-md py-0 pb-4 mx-auto">
      <div className="h-24 w-full bg-gradient-to-tr from-cyan-400 via-blue-600 via-50% to-purple-500" />
      <CardContent className="flex flex-col items-center -mt-20">
        <Avatar className="w-30 h-30 border-4 border-white">
          <AvatarImage src={userProfile} alt="Kemal Kkkaya" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <div className="text-center mt-3">
          <h3 className="text-lg font-semibold">Kemal Kkkaya</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCardBackground;
