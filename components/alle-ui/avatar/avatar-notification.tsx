import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export const AvatarNotification = () => {
  return (
    <div className="relative w-fit">
      <Avatar className="size-10 ">
        <AvatarImage src={userProfile} alt="JK" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <span className="border-background bg-destructive absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2">
        <span className="sr-only">Busy</span>
      </span>
    </div>
  );
};
