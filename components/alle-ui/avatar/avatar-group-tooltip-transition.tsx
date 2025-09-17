import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { userProfileList } from '@/constants';

export const AvatarGroupTooltipTransition = () => {
  return (
    <div className="flex -space-x-2 hover:space-x-1">
      {userProfileList.map((avatar, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Avatar className="ring-background ring-2 transition-all duration-300 ease-in-out size-10">
              <AvatarImage src={avatar.url} alt={avatar.name} />
              <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>{avatar.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
