import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

const BadgeWithImage = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="rounded-full pl-[3px]" variant="outline">
        <Image
          src="https://github.com/shadcn.png"
          className="mr-2 h-5 w-5 rounded-full"
          alt=""
          height={20}
          width={20}
        />
        shadcn
      </Badge>
    </div>
  );
};
export default BadgeWithImage;
