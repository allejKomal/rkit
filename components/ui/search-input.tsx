import React from 'react';

import { SearchIcon } from 'lucide-react';

import { Input } from './input';

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        strokeWidth={3}
      />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 bg-background dark:bg-background"
      />
    </div>
  );
}
