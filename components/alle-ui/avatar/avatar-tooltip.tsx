import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { userProfile } from '@/constants';

const AvatarWithToolTip = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar className="size-10">
          <AvatarImage src={userProfile} alt="JK" className="rounded-sm" />
          <AvatarFallback>JK</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <p>alleJKomal</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AvatarWithToolTip;
