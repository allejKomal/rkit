'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const tags = ['Sport', 'Music', 'Food', 'Travel', 'Tech', 'Science', 'Art'];

export default function Dropdown07() {
  const [selectedTags, setSelectedTags] = useState<string[]>([tags[0], tags[4]]);

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Tags</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Select Tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tags.map(tag => (
          <DropdownMenuCheckboxItem
            checked={selectedTags.includes(tag)}
            key={tag}
            onCheckedChange={checked => handleTagChange(tag, checked)}
            onSelect={e => e.preventDefault()}
          >
            {tag}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
