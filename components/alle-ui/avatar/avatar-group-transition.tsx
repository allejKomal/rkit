import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfileList } from '@/constants';

export const AvatarGroupTransition = () => {
  return (
    <div className="flex -space-x-2 hover:space-x-1">
      {userProfileList.map((avatar, index) => (
        <Avatar
          key={index}
          className="ring-background ring-2 transition-all duration-300 ease-in-out size-10"
        >
          <AvatarImage src={avatar.url} alt={avatar.name} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};
