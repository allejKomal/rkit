'use client';

import * as React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { format } from 'date-fns';
import { CalendarIcon, CheckIcon, ChevronRightIcon, CircleIcon, Minus } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

import { Input } from './input';

// Context for managing input state across dropdown components
const DropdownMenuContext = React.createContext<{
  inputFocused: boolean;
  setInputFocused: (focused: boolean) => void;
}>({
  inputFocused: false,
  setInputFocused: () => {},
});

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  const [inputFocused, setInputFocused] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ inputFocused, setInputFocused }}>
      <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
    </DropdownMenuContext.Provider>
  );
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  enableFilter = true,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> & {
  enableFilter?: boolean;
}) {
  const { inputFocused } = React.useContext(DropdownMenuContext);

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        onKeyDown={e => {
          if (enableFilter) {
            if (
              inputFocused &&
              e.key !== 'ArrowDown' &&
              e.key !== 'ArrowUp' &&
              e.key !== 'Enter' &&
              e.key !== 'Escape'
            ) {
              // Allow typing when input is focused, but allow navigation keys
              e.stopPropagation();
            }
          }
        }}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
function DropdownMenuInputItem({
  className,
  onFocus,
  onBlur,
  onKeyDown,
  onEnter,
  ...props
}: React.ComponentProps<'input'> & {
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  const { setInputFocused } = React.useContext(DropdownMenuContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputFocused(false);
    onBlur?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();

      const dropdown =
        e.currentTarget.closest('[role="menu"]') ||
        e.currentTarget.closest('[data-radix-popper-content-wrapper]') ||
        e.currentTarget.closest('[data-radix-dropdown-menu-content]');

      if (!dropdown) return;

      const focusableElements = Array.from(
        dropdown.querySelectorAll('button, [role="menuitem"], [role="menuitemcheckbox"], input')
      ).filter(el => {
        return !(el.getAttribute('role') === 'menuitem' && el.querySelector('input'));
      });

      const currentIndex = focusableElements.indexOf(e.currentTarget);

      let nextIndex;
      if (e.key === 'ArrowDown') {
        nextIndex = currentIndex + 1;
        if (nextIndex >= focusableElements.length) nextIndex = 0;
      } else {
        nextIndex = currentIndex - 1;
        if (nextIndex < 0) nextIndex = focusableElements.length - 1;
      }

      const nextElement = focusableElements[nextIndex] as HTMLElement;
      if (nextElement && nextElement !== e.currentTarget) {
        nextElement.focus();
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      // Call custom onEnter handler if provided
      if (onEnter) {
        onEnter(e);
      }
      // Close dropdown by dispatching escape event
      const escapeEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      e.currentTarget.dispatchEvent(escapeEvent);
      return;
    }

    e.stopPropagation();
    onKeyDown?.(e);
  };

  return (
    <DropdownMenuItem
      className="p-0 focus:bg-transparent"
      onSelect={e => e.preventDefault()}
      onFocus={() => {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }}
    >
      <input
        {...props}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onClick={e => e.stopPropagation()}
        className={cn(
          'w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-muted',
          className
        )}
      />
    </DropdownMenuItem>
  );
}

function DropdownMenuCalendarItem({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem> & {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenuSub open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuSubTrigger>
        <CalendarIcon className="mr-2 h-4 w-4" />
        {value ? format(value, 'd MMM yyyy') : placeholder}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value || undefined}
          onSelect={selectedDate => {
            onChange?.(selectedDate || null);
            setIsOpen(false);
          }}
          initialFocus
        />
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

function DropdownMenuRangePickerItem({
  value,
  onChange,
  placeholder = 'Pick a date range',
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem> & {
  value?: DateRange | undefined;
  onChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const formatRange = (range: DateRange | undefined) => {
    if (!range?.from) return placeholder;
    if (!range.to) return format(range.from, 'd MMM yyyy');
    return `${format(range.from, 'd MMM yyyy')} - ${format(range.to, 'd MMM yyyy')}`;
  };

  return (
    <DropdownMenuSub open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuSubTrigger>
        <CalendarIcon className="mr-2 h-4 w-4" />
        {formatRange(value)}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={value}
          onSelect={range => {
            onChange?.(range);
            // Only close when we have a complete range (both from and to dates are different)
            if (range?.from && range?.to && range.from.getTime() !== range.to.getTime()) {
              setIsOpen(false);
            }
          }}
          initialFocus
        />
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

function DropdownMenuCheckboxIntermediateItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-intermediate-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          {checked === 'indeterminate' ? (
            <Minus className="size-4" />
          ) : (
            <CheckIcon className="size-4" />
          )}
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuInputItem,
  DropdownMenuCalendarItem,
  DropdownMenuRangePickerItem,
  DropdownMenuCheckboxItem,
  DropdownMenuCheckboxIntermediateItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
