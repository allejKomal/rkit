export const customFilterFunctions = {
  contains: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    if (typeof cellValue === 'string') {
      return cellValue.toLowerCase().includes(filterValue.value.toLowerCase());
    }
    return String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
  },
  equals: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase() === filterValue.value.toLowerCase();
  },
  startsWith: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase().startsWith(filterValue.value.toLowerCase());
  },
  endsWith: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase().endsWith(filterValue.value.toLowerCase());
  },
  notEquals: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    return String(cellValue).toLowerCase() !== filterValue.value.toLowerCase();
  },
  notContains: (row: any, columnId: string, filterValue: any) => {
    const cellValue = row.getValue(columnId);
    return !String(cellValue).toLowerCase().includes(filterValue.value.toLowerCase());
  },
  isEmpty: (row: any, columnId: string) => {
    const cellValue = row.getValue(columnId);
    return !cellValue || String(cellValue).trim() === '';
  },
  isNotEmpty: (row: any, columnId: string) => {
    const cellValue = row.getValue(columnId);
    return cellValue && String(cellValue).trim() !== '';
  },
};
