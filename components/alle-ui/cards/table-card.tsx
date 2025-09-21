import React from 'react';

import { Mail, MapPin, MessageSquare } from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import AvatarInfo from '../avatar/avatar-info';
import DropdownCompact from '../dropdown/dropdown-compact';

function TableCard() {
  const data = [
    { icon: <MessageSquare />, value: '(555) 123-4567' },
    { icon: <Mail />, value: 'ercan@gmail.com' },
    { icon: <MapPin />, value: 'Sales Manager' },
  ];
  return (
    <Card>
      <CardHeader className="flex justify-between items-center gap-2">
        <AvatarInfo />
        <DropdownCompact />
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col items-start gap-2">
        {data.map((item, index) => (
          <div
            key={item.value}
            className="flex items-center gap-2 text-muted-foreground text-sm font-medium [&_svg]:size-4"
          >
            {item.icon}
            <span>{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default TableCard;
