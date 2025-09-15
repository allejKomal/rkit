import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeBaseVariants = cva(
  'inline-flex items-center justify-center rounded-xs border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        outline: 'border font-medium',
        red: 'border-transparent bg-red-100 text-red-700 [a&]:hover:bg-red-600 hover:text-red-700',
        orange:
          'border-transparent bg-orange-100 text-orange-700 [a&]:hover:bg-orange-600 hover:text-orange-700',
        amber:
          'border-transparent bg-amber-100 text-amber-700 [a&]:hover:bg-amber-600 hover:text-amber-700',
        yellow:
          'border-transparent bg-yellow-100 text-yellow-700 [a&]:hover:bg-yellow-500 hover:text-yellow-700',
        lime: 'border-transparent bg-lime-100 text-lime-700 [a&]:hover:bg-lime-600 hover:text-lime-700',
        green:
          'border-transparent bg-green-100 text-green-700 [a&]:hover:bg-green-600 hover:text-green-700',
        emerald:
          'border-transparent bg-emerald-100 text-emerald-700 [a&]:hover:bg-emerald-600 hover:text-emerald-700',
        teal: 'border-transparent bg-teal-100 text-teal-700 [a&]:hover:bg-teal-600 hover:text-teal-700 dark:bg-teal-700 dark:text-teal-100',
        cyan: 'border-transparent bg-cyan-100 text-cyan-700 [a&]:hover:bg-cyan-600 hover:text-cyan-700',
        sky: 'border-transparent bg-sky-100 text-sky-700 [a&]:hover:bg-sky-600 hover:text-sky-700',
        blue: 'border-transparent bg-blue-100 text-blue-700 [a&]:hover:bg-blue-600 hover:text-blue-700',
        indigo:
          'border-transparent bg-indigo-100 text-indigo-700 [a&]:hover:bg-indigo-600 hover:text-indigo-700',
        violet:
          'border-transparent bg-violet-100 text-violet-700 [a&]:hover:bg-violet-600 hover:text-violet-700',
        purple:
          'border-transparent bg-purple-100 text-purple-700 [a&]:hover:bg-purple-600 hover:text-purple-700',
        fuchsia:
          'border-transparent bg-fuchsia-100 text-fuchsia-700 [a&]:hover:bg-fuchsia-600 hover:text-fuchsia-700',
        pink: 'border-transparent bg-pink-100 text-pink-700 [a&]:hover:bg-pink-600 hover:text-pink-700',
        rose: 'border-transparent bg-rose-100 text-rose-700 [a&]:hover:bg-rose-600 hover:text-rose-700',

        gray: 'border-transparent bg-gray-100 text-gray-700 [a&]:hover:bg-gray-600 hover:text-gray-700',
        zinc: 'border-transparent bg-zinc-100 text-zinc-700 [a&]:hover:bg-zinc-600 hover:text-zinc-700',
        slate:
          'border-transparent bg-slate-100 text-slate-700 [a&]:hover:bg-slate-600 hover:text-slate-700',
        neutral:
          'border-transparent bg-neutral-100 text-neutral-700 [a&]:hover:bg-neutral-600 hover:text-neutral-700',
        stone:
          'border-transparent bg-stone-100 text-stone-700 [a&]:hover:bg-stone-600 hover:text-stone-700',
      },
    },
    defaultVariants: {
      variant: 'outline', // pick a nice default if you want
    },
  }
);

function BadgeBase({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeBaseVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot="badge" className={cn(badgeBaseVariants({ variant }), className)} {...props} />
  );
}

export { BadgeBase, badgeBaseVariants };
