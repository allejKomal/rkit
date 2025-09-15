import React from 'react';

import { cn } from '@/lib/utils';

function BlockWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-[300px] mx-auto flex items-center justify-center', className)}>
      {children}
    </div>
  );
}

export default BlockWrapper;
