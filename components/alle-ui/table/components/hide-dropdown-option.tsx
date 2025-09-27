import React from 'react';

import { Column } from '@tanstack/react-table';
import { EyeOff } from 'lucide-react';

import { DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';

import { TableEditorConfig } from '../table-editor';

function HideDropdownOption<TData, TValue>({
  column,
  config,
}: {
  column: Column<TData, TValue>;
  config: TableEditorConfig<TData>;
}) {
  if (!config.enableColumnVisibility) return <></>;
  return (
    <>
      <DropdownMenuLabel>Visibility</DropdownMenuLabel>
      <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
        <EyeOff />
        Hide
      </DropdownMenuItem>
    </>
  );
}

export default HideDropdownOption;
