import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/constants';

export const AvatarRing = () => {
  return (
    <Avatar className="ring-ring ring-2">
      <AvatarImage src={userProfile} alt="JK" />
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
  );
};
