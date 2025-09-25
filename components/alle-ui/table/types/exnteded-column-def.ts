import { ColumnDef } from '@tanstack/react-table';

export type ExtendedColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  headerAlign?: 'left' | 'center' | 'right';
  cellAlign?: 'left' | 'center' | 'right';
};
