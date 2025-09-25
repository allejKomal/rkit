import React from 'react';

import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'lucide-react';

import { TableEditorConfig } from '../table-editor';

function SortDropdownOption<TData, TValue>({
  column,
  config,
}: {
  column: Column<TData, TValue>;
  config: TableEditorConfig<TData>;
}) {
  if (!config.enableSorting) return <></>;
  return (
    <>
      <DropdownMenuLabel>Sort</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowUp />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowDown />
          Desc
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      </>
  );
}

export default SortDropdownOption;
