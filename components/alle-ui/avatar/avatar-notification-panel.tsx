import { AlarmClockIcon, CalendarIcon, MessageCircleIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { userProfile } from '@/constants';

export const AvatarNotificationPanel = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative w-fit">
          <Avatar className="size-10">
            <AvatarImage src={userProfile} alt="JK" />
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
          <Badge className="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">
            3
          </Badge>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Notifications</h3>
          <Button variant="ghost" size="sm">
            <span className="text-sm">Mark all as read</span>
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground">
                <MessageCircleIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium tracking-wide">You have a new message</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-secondary w-8 h-8 rounded-full flex items-center justify-center text-secondary-foreground">
                <CalendarIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium tracking-wide">Your appointment is tomorrow</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="bg-muted w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground">
                <AlarmClockIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium tracking-wide">
                Your subscription is expiring soon
              </p>
              <p className="text-xs text-muted-foreground">3 days ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
