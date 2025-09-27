import React from 'react';

import { Column } from '@tanstack/react-table';
import { Pin, PinOff } from 'lucide-react';

import { DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';

import { TableEditorConfig } from '../table-editor';

function PinDropdownOption<TData, TValue>({
  column,
  config,
}: {
  column: Column<TData, TValue>;
  config: TableEditorConfig<TData>;
}) {
  if (!config.enableColumnPinning) return <></>;
  return (
    <>
      <DropdownMenuLabel>Pin Column</DropdownMenuLabel>
      <DropdownMenuItem
        onClick={() => column.pin('left')}
        disabled={column.getIsPinned() === 'left'}
      >
        <Pin className="mr-2 h-4 w-4" />
        Pin to Left
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={() => column.pin('right')}
        disabled={column.getIsPinned() === 'right'}
      >
        <Pin className="mr-2 h-4 w-4" />
        Pin to Right
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => column.pin(false)} disabled={!column.getIsPinned()}>
        <PinOff className="mr-2 h-4 w-4" />
        Unpin Column
      </DropdownMenuItem>
    </>
  );
}

export default PinDropdownOption;
