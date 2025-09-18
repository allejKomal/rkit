import { Car, Clipboard, Settings, Ruler as Tool, Users } from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInputIcon,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Page() {
  return (
    <div>
      <Dialog open>
        <DialogContent showCloseButton={false} className="p-2 sm:max-w-[600px]">
          <Command>
            <CommandInputIcon placeholder="Search BMW models, services, mechanics..." />
            <div className="!px-1.5 pt-2">
              <Tabs defaultValue="tab-1">
                <TabsList className="text-foreground h-auto gap-2 rounded-none border-b bg-transparent px-0 w-full">
                  <TabsTrigger
                    value="tab-1"
                    className="text-muted-foreground data-[state=active]:text-foreground hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    All results
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-2"
                    className="text-muted-foreground data-[state=active]:text-foreground hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    BMW Models
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-3"
                    className="text-muted-foreground data-[state=active]:text-foreground hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Mechanics
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-4"
                    className="text-muted-foreground data-[state=active]:text-foreground hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Documents
                  </TabsTrigger>

                  <TabsTrigger
                    value="tab-6"
                    className="text-muted-foreground data-[state=active]:text-foreground hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Parts & Tools
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <CommandList className="my-4 max-h-[600px]">
              <CommandEmpty>No results found.</CommandEmpty>

              <div className="flex justify-between items-center px-2 my-1">
                <span className="text-sm font-medium">Recent searches</span>
                <div className="flex gap-2 text-sm items-center">
                  <span className="text-muted-foreground">Sort by:</span>
                  <Select>
                    <SelectTrigger className="border-none">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup>
                        <SelectItem value="date">Service Date</SelectItem>
                        <SelectItem value="model">Model</SelectItem>
                        <SelectItem value="mileage">Mileage</SelectItem>
                        <SelectItem value="mechanic">Mechanic</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <CommandGroup heading="Today">
                <CommandItem>
                  <Car />
                  <span>BMW X5 (G05)</span>
                  <span className="text-muted-foreground"> - 2023 Model</span>
                </CommandItem>
                <CommandItem>
                  <Clipboard />
                  <span>Oil Change Record.pdf</span>
                  <span className="text-muted-foreground"> - Service Log</span>
                </CommandItem>
                <CommandItem>
                  <Users />
                  <span>Amelia Garcia</span>
                  <span className="text-muted-foreground"> - BMW Certified Mechanic</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator className="mt-2 mb-2" />

              <CommandGroup heading="Yesterday">
                <CommandItem>
                  <Users />
                  <span>James Robinson</span>
                  <span className="text-muted-foreground"> - Engine Specialist</span>
                </CommandItem>
                <CommandItem>
                  <Tool />
                  <span>Spare Parts Inventory</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Garage Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator className="mt-2 mb-2" />

              <CommandGroup heading="20 May">
                <CommandItem>
                  <Car />
                  <span>New BMW i7 Launch Announced</span>
                </CommandItem>
                <CommandItem>
                  <Clipboard />
                  <span>2025 Model Year Updates.pdf</span>
                  <CommandShortcut>⌘U</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}
