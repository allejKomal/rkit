import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export const AvatarSqaure = () => {
  return (
    <Avatar className="rounded-sm size-10 ">
      <AvatarImage src={userProfile} alt="JK" className="rounded-sm" />
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
  );
};
