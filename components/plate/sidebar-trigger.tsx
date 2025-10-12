'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useFileManager } from './file-manager-context';

export function SidebarTrigger() {
  const { setSidebarOpen } = useFileManager();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setSidebarOpen(true)}
      className="fixed bottom-4 left-4 z-50 h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-background border-2"
      title="Open file manager"
    >
      <Menu className="h-4 w-4" />
    </Button>
  );
}
