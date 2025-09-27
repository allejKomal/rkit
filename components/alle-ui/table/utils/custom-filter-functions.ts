import { Row } from '@tanstack/react-table';

interface FilterValue {
  value: string;
}

export const customFilterFunctions = {
  contains: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    if (typeof cellValue === 'string') {
      return cellValue.toLowerCase().includes(filterValue.value.toLowerCase());
    }
    return String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
  },
  equals: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase() === filterValue.value.toLowerCase();
  },
  startsWith: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase().startsWith(filterValue.value.toLowerCase());
  },
  endsWith: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase().endsWith(filterValue.value.toLowerCase());
  },
  notEquals: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase() !== filterValue.value.toLowerCase();
  },
  notContains: (row: Row<unknown>, columnId: string, filterValue: FilterValue) => {
    const cellValue = row.getValue(columnId);
    return !String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
  },
  isEmpty: (row: Row<unknown>, columnId: string): boolean => {
    const cellValue = row.getValue(columnId);
    return !cellValue || String(cellValue).trim() === '';
  },
  isNotEmpty: (row: Row<unknown>, columnId: string): boolean => {
    const cellValue = row.getValue(columnId);
    return Boolean(cellValue && String(cellValue).trim() !== '');
  },
};
