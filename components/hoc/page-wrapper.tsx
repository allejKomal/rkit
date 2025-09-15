import React from 'react';

import { cn } from '@/lib/utils';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';

function PageWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <ScrollArea className={cn('h-[100vh]', className)}>
        {children}
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}

export default PageWrapper;
