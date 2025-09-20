'use client';

import { useState } from 'react';

import { ChevronDown, ChevronUp, ChevronsUp, Equal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DropdownRadioGroup() {
  const [priority, setPriority] = useState('highest');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Set Priority</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value="highest">
            <ChevronsUp className="mr-2 h-4 w-4 text-destructive" /> Highest
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">
            <ChevronUp className="mr-2 h-4 w-4 text-orange-500" /> High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">
            <Equal className="mr-2 h-4 w-4 text-yellow-500" /> Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">
            <ChevronDown className="mr-2 h-4 w-4 text-green-600" /> Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
