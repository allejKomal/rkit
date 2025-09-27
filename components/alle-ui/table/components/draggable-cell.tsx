import React from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Cell, flexRender } from '@tanstack/react-table';

import { TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { ExtendedColumnDef } from '../types/exnteded-column-def';

interface DraggableCellProps<TData> {
  cell: Cell<TData, unknown>;
  activeId: string | null;
  overId: string | null;
  alignClass?: string;
  style?: React.CSSProperties;
}

function DraggableCell<TData>({ cell, activeId, alignClass, style }: DraggableCellProps<TData>) {
  const { isDragging, setNodeRef, transform } = useSortable({
    id: cell.column.id,
  });

  const isActive = activeId === cell.column.id;

  const dragStyle: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: isDragging ? 'none' : 'transform 0.2s ease-in-out',
    width: cell.column.getSize(),
    zIndex: isDragging ? 1000 : isActive ? 30 : 10,
    ...style,
  };

  const cellAlignClass =
    alignClass ||
    ((cell.column.columnDef as ExtendedColumnDef<TData>).cellAlign === 'center'
      ? 'text-center'
      : (cell.column.columnDef as ExtendedColumnDef<TData>).cellAlign === 'right'
        ? 'text-right'
        : 'text-left');

  return (
    <TableCell
      key={cell.id}
      style={dragStyle}
      ref={setNodeRef}
      className={cn(
        'px-2 py-2 text-sm whitespace-nowrap relative bg-background',
        cellAlignClass,
        isDragging && 'opacity-100 bg-muted',
        isActive && 'z-30'
      )}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
}

export default DraggableCell;
