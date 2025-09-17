import { CheckIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export const AvatarStatusRing = () => {
  return (
    <div className="relative w-fit">
      <Avatar className="ring-offset-background ring-2 ring-green-600 ring-offset-2 dark:ring-green-400">
        <AvatarImage src={userProfile} alt="JK" />
        <AvatarFallback className="text-xs">JK</AvatarFallback>
      </Avatar>
      <span className="absolute -end-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400">
        <CheckIcon className="size-3 text-white" />
      </span>
    </div>
  );
};
