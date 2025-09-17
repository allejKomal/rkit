import { PlusCircleIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export const AvatarPlus = () => {
  return (
    <div className="relative w-fit">
      <Avatar className="size-10">
        <AvatarImage src={userProfile} alt="JK" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <button className="focus-visible:ring-ring/50 absolute -end-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:outline-none">
        <PlusCircleIcon className="text-background size-5 fill-slate-400" />
        <span className="sr-only">Add</span>
      </button>
    </div>
  );
};
