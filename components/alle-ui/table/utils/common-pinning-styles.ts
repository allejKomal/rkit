import { CSSProperties } from 'react';

import { Column } from '@tanstack/react-table';

export const getCommonPinningStyles = <TData>(column: Column<TData>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px rgba(0, 0, 0, 0.1)'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px rgba(0, 0, 0, 0.1)'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 10 : 0,
    backgroundColor: isPinned ? 'var(--background)' : 'transparent',
  };
};
