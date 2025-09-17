import { PlusIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { userProfileList } from '@/constants';

export const AvatarGroupDropdown = () => {
  return (
    <div className="flex -space-x-2">
      {userProfileList.slice(0, 3).map((avatar, index) => (
        <Avatar key={index} className="ring-background ring-2 size-10">
          <AvatarImage src={avatar.url} alt={avatar.name} />
          <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-muted has-focus-visible:ring-ring/50 ring-background flex shrink-0 cursor-pointer items-center justify-center rounded-full ring-2 size-10">
            <PlusIcon className="size-4" />
            <span className="sr-only">Add</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {userProfileList.slice(3).map((avatar, index) => (
            <DropdownMenuItem key={index}>
              <Avatar>
                <AvatarImage src={avatar.url} alt={avatar.name} />
                <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
              </Avatar>
              <span>{avatar.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
