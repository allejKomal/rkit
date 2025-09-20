'use client';

import * as React from 'react';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DropdownAddOption() {
  const [options, setOptions] = React.useState([
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [newOption, setNewOption] = React.useState('');

  const handleAddOption = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOption.trim()) return;

    const value = newOption.toLowerCase().replace(/\s+/g, '-');
    setOptions([...options, { value, label: newOption }]);
    setNewOption('');
    setOpen(false);
    setValue(value); // Auto-select the new option
  };

  return (
    <div className="w-full">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  className="relative w-full justify-start rounded-none font-normal"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add new option
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form onSubmit={handleAddOption}>
                  <DialogHeader>
                    <DialogTitle>Add new option</DialogTitle>
                    <DialogDescription>
                      Create a new option to add to the select menu.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        autoComplete="off"
                        value={newOption}
                        onChange={e => setNewOption(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add option</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
