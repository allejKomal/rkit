import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DropdownBasic() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a user role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>User Roles</SelectLabel>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
          <SelectItem value="guest">Guest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
