import React from 'react';

import { Quote } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { userProfileList } from '@/constants';

const TestimonialCard = () => {
  return (
    <Card className="relative gap-0 pt-0 pb-4">
      <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userProfileList[0].url} />
            <AvatarFallback>{userProfileList[0].fallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold">
              {userProfileList[0].name}
            </span>
            <span className="text-sm leading-none text-muted-foreground">
              {userProfileList[0].name}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          “Working with this team has been an exceptional experience from start to finish. Their
          attention to detail, responsiveness, and commitment to delivering high-quality results
          exceeded our expectations. The final product not only met our goals but also impressed our
          stakeholders. We&apos;re looking forward to future collaborations!”
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
