import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { userProfile } from '@/constants';

export const AvatarNumber = () => {
  return (
    <div className="relative w-fit">
      <Avatar className="size-10 rounded-sm">
        <AvatarImage src={userProfile} alt="JK" className="rounded-sm" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <Badge
        className="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums"
        variant="destructive"
      >
        8
      </Badge>
    </div>
  );
};
