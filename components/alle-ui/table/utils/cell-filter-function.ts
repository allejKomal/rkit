import { Row } from '@tanstack/react-table';

export const cellFilterFunction = <TData>(
  row: Row<TData>,
  columnId: string,
  filterValue: { type?: string; value?: string }
) => {
  if (!filterValue || !filterValue.value) return true;

  const cellValue = row.getValue(columnId);
  const searchValue = typeof filterValue.value === 'string' ? filterValue.value.toLowerCase() : '';
  const cellString = String(cellValue)?.toLowerCase();

  switch (filterValue.type) {
    case 'contains':
      return cellString.includes(searchValue);
    case 'equals':
      return cellString === searchValue;
    case 'startsWith':
      return cellString.startsWith(searchValue);
    case 'endsWith':
      return cellString.endsWith(searchValue);
    case 'notEquals':
      return cellString !== searchValue;
    case 'notContains':
      return !cellString.includes(searchValue);
    case 'isEmpty':
      return !cellValue || String(cellValue)?.trim() === '';
    case 'isNotEmpty':
      return cellValue && String(cellValue).trim() !== '';
    default:
      return cellString.includes(searchValue);
  }
};
