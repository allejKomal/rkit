import React from 'react';

import CopyToClipboardButton from '../design-system/copy-to-clipboard';

interface ComponentWrapperProps {
  title: string;
  path?: string;
  children: React.ReactNode;
}

export default function ComponentWrapper({ title, path, children }: ComponentWrapperProps) {
  return (
    <div className="relative p-2">
      <div className="absolute top-[-20px] bottom-[-20px] left-0 w-px bg-primary/20" />
      <div className="absolute top-[-20px] bottom-[-20px] right-0 w-px bg-primary/20" />
      <div className="absolute left-[-20px] right-[-20px] top-0 h-px bg-primary/20" />
      <div className="absolute left-[-20px] right-[-20px] bottom-0 h-px bg-primary/20" />

      <div className="bg-white">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-lg font-bold">{title}</div>
          <div className="flex gap-3">
            <CopyToClipboardButton text={path || 'Coming soon...'} />
            {/* <Button>Open in V0</Button> */}
          </div>
        </div>

        <div className="relative h-px my-2">
          <div className="absolute left-[-20px] right-[-20px] h-px bg-primary/20" />
        </div>

        <div className="px-4 py-4">{children}</div>
      </div>
    </div>
  );
}
