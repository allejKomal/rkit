import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const AvatarInitialsSquare = () => {
  return (
    <Avatar className="rounded-sm size-10 ">
      <AvatarFallback className="rounded-sm">JK</AvatarFallback>
    </Avatar>
  );
};
