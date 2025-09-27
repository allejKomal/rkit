// Filter Pills Component
import { Table } from '@tanstack/react-table';
import { ColumnFilter } from '@tanstack/react-table';

interface FilterValue {
  type?: string;
  value?: unknown;
}

export function FilterPills<TData>({ table }: { table: Table<TData> }) {
  const activeFilters = table.getState().columnFilters;
  const globalFilter = table.getState().globalFilter;

  if (activeFilters.length === 0 && !globalFilter) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Global Filter Pill */}
      {globalFilter && (
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
          <span className="font-medium">Global:</span>
          <span>&quot;{globalFilter}&quot;</span>
          <button
            onClick={() => table.setGlobalFilter('')}
            className="ml-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Column Filter Pills */}
      {activeFilters.map((filter: ColumnFilter) => {
        const column = table.getColumn(filter.id);
        if (!column) return null;

        const filterValue = filter.value as FilterValue;
        const filterType = filterValue?.type || 'contains';
        const filterText =
          typeof filterValue === 'object' && filterValue?.value
            ? String(filterValue.value)
            : String(filterValue || '');

        // Handle header - it could be a string or a function/component
        const headerText =
          typeof column.columnDef.header === 'string'
            ? column.columnDef.header
            : column.id || 'Column';

        return (
          <div
            key={filter.id}
            className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
          >
            <span className="font-medium">{headerText}:</span>
            <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded">
              {filterType}
            </span>
            <span>&quot;{filterText}&quot;</span>
            <button
              onClick={() => column.setFilterValue(undefined)}
              className="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        );
      })}

      {/* Clear All Button */}
      {(activeFilters.length > 0 || globalFilter) && (
        <button
          onClick={() => {
            table.setGlobalFilter('');
            table.resetColumnFilters();
          }}
          className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear All
        </button>
      )}
    </div>
  );
}
