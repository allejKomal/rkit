import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfileList } from '@/constants';

export const AvatarGroupText = () => {
  return (
    <div className="bg-background flex flex-wrap items-center justify-center rounded-full border p-1 shadow-sm">
      <div className="flex -space-x-1">
        {userProfileList.map((avatar, index) => (
          <Avatar key={index} className="ring-background size-6 ring-2">
            <AvatarImage src={avatar.url} alt={avatar.name} />
            <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <p className="text-muted-foreground px-2 text-xs">
        With <strong className="text-foreground font-medium">1M+</strong> Active User.
      </p>
    </div>
  );
};
