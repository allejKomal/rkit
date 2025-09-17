import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfileList } from '@/constants';

export const AvatarGroupOutline = () => {
  return (
    <div className="bg-background flex items-center rounded-full border p-1 shadow-sm">
      <div className="flex -space-x-2">
        {userProfileList.map((avatar, index) => (
          <Avatar key={index} className="ring-background ring-2 size-10">
            <AvatarImage src={avatar.url} alt={avatar.name} />
            <AvatarFallback className="text-xs">{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <span className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-transparent px-2 text-xs shadow-none hover:bg-transparent">
        +3
      </span>
    </div>
  );
};
