import {
  ArrowDownUp,
  BadgeIndianRupee,
  EllipsisVertical,
  GridIcon,
  ListFilterPlus,
  ListIcon,
  Users,
  WalletCards,
} from 'lucide-react';

import { AppSidebar } from '@/components/sidebar/sidebar-01/app-sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BadgeBase } from '@/components/ui/badge-base';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import SearchInput from '@/components/ui/search-input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTriggerBase,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function Page() {
  return (
    <SidebarProvider className="h-screen flex">
      <AppSidebar />
      <SidebarInset className="flex flex-col flex-1 min-h-0">
        <div className="flex flex-col flex-1 min-h-0 p-6 gap-4">
          <div className="flex justify-between items-center shrink-0">
            <div>
              <p className="text-xl font-medium">Employee</p>
              <p className="pt-2 text-sm text-muted-foreground">View and Manage Employees</p>
            </div>
            <ToggleGroup type="single" value="grid" className="border">
              <ToggleGroupItem value="list" aria-label="Toggle bold">
                <ListIcon />
                <span>List View</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="grid" aria-label="Toggle italic">
                <GridIcon />
                <span>Grid View</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="border rounded-xl flex-1 flex flex-col min-h-0">
            <div className="p-4 flex justify-between items-center bg-muted rounded-t-xl shrink-0">
              <div className="flex gap-2 items-center">
                <Button variant="outline" className="bg-background dark:bg-background">
                  <Users />
                </Button>
                <span className="text-sm">Total Employees:</span>
                <span className="text-sm font-medium">1733 Persons</span>
              </div>
              <div className="flex gap-4">
                <SearchInput />
                <Select>
                  <SelectTriggerBase className="bg-background dark:bg-background">
                    <ListFilterPlus strokeWidth={3} />
                    <SelectValue placeholder="Filter" />
                  </SelectTriggerBase>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTriggerBase className="bg-background dark:bg-background">
                    <ArrowDownUp strokeWidth={3} />
                    <SelectValue placeholder="Sort" />
                  </SelectTriggerBase>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Separator className="shrink-0" />
            <ScrollArea className="flex-1 min-h-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const EmployeeCard = () => {
  return (
    <div className="border rounded-xl">
      <div className="flex justify-between p-4 items-center">
        <BadgeBase variant="teal">Full Time</BadgeBase>
        <Select>
          <SelectTriggerBase className="bg-white">
            <EllipsisVertical strokeWidth={2.5} />
          </SelectTriggerBase>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <span className="font-medium">Jane Cooper</span>
            <span className="text-xs text-muted-foreground">janecooper@ypmail.com</span>
          </div>
        </div>
        <div className="flex gap-2">
          <BadgeBase>
            <BadgeIndianRupee />
            <span>Finance</span>
          </BadgeBase>
          <BadgeBase>
            <WalletCards />
            <span>Accountant</span>
          </BadgeBase>
        </div>
      </div>
      <Separator />
      <div className="p-4 text-sm flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Payroll</span>
          <span className="font-bold">11,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Join Date</span>
          <span className="font-bold">11-12-2002</span>
        </div>
      </div>
    </div>
  );
};
