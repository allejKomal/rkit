'use client';

import { usePathname, useRouter } from 'next/navigation';

import { ChevronsLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function GoHomeButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return null;

  return (
    <div className="px-5 pt-5 pb-4">
      <Button variant="outline" onClick={() => router.push('/')}>
        <ChevronsLeft className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
}
