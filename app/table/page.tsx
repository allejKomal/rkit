import Link from 'next/link';

import {
  BarChart3,
  Database,
  Filter,
  Grid,
  Pin,
  Settings,
  Table as TableIcon,
  Users,
} from 'lucide-react';

import PageWrapper from '@/components/hoc/page-wrapper';

const tableDemos = [
  {
    id: 'basic-table',
    title: 'Basic Data Table',
    description: 'Simple table for displaying tabular data.',
    href: 'table/basic-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'pagination-table',
    title: 'Pagination Table',
    description: 'Table with pagination functionality.',
    href: 'table/pagination-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Pagination', 'Page Size', 'Page Index', 'Page Count'],
  },
  {
    id: 'sorting-table',
    title: 'Sorting Table',
    description: 'Table with sorting functionality.',
    href: 'table/sorting-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Sorting', 'Sorting Icons', 'Sorting Types', 'Sorting Directions'],
  },
  {
    id: 'pinning-table',
    title: 'Pinning Table',
    description: 'Table with pinning functionality.',
    href: 'table/pinning-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Pinning', 'Pinning Icons', 'Pinning Types', 'Pinning Directions'],
  },
  {
    id: 'resizing-table',
    title: 'Resizing Table',
    description: 'Table with resizable functionality.',
    href: 'table/resizing-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Resizing', 'Resizing Icons', 'Resizing Types', 'Resizing Directions'],
  },
  {
    id: 'single-selection-table',
    title: 'Single Selection Table',
    description: 'Table with single selection functionality.',
    href: 'table/single-selection-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Single Selection',
      'Single Selection Icons',
      'Single Selection Types',
      'Single Selection Directions',
    ],
  },

  {
    id: 'multi-selection-table',
    title: 'Multi Selection Table',
    description: 'Table with multi selection functionality.',
    href: 'table/multi-selection-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Multi Selection',
      'Multi Selection Icons',
      'Multi Selection Types',
      'Multi Selection Directions',
    ],
  },
  {
    id: 'column-order-table',
    title: 'Column Order Table',
    description: 'Table with column order functionality.',
    href: 'table/column-order-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Column Order',
      'Column Order Icons',
      'Column Order Types',
      'Column Order Directions',
    ],
  },
  {
    id: 'global-filter-table',
    title: 'Global Filter Table',
    description: 'Table with global filter functionality.',
    href: 'table/global-filter-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'column-visibility-table',
    title: 'Column Visibility Table',
    description: 'Table with column visibility functionality.',
    href: 'table/column-visibility-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'column-filter-table',
    title: 'Column Filter Table',
    description: 'Table with column filter functionality.',
    href: 'table/column-filter-table',
    icon: TableIcon,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'advanced-table',
    title: 'Advanced Data Table',
    description:
      'Full-featured table with multi-row selection, column pinning, and advanced filtering options.',
    href: 'table/advanced-table',
    icon: Database,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Multi-Selection', 'Column Pinning', 'Advanced Filters', 'Global Search'],
  },
  {
    id: 'employee-table',
    title: 'Employee Management',
    description:
      'Employee data table with comprehensive filtering, sorting, and management capabilities.',
    href: 'table/employee-table',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Employee Data', 'Role Management', 'Status Tracking', 'Bulk Actions'],
  },
  {
    id: 'analytics-table',
    title: 'Analytics Dashboard',
    description:
      'Data analytics table with metrics, charts integration, and real-time data visualization.',
    href: 'table/analytics-table',
    icon: BarChart3,
    gradient: 'from-orange-500 to-red-600',
    features: ['Metrics Display', 'Chart Integration', 'Real-time Data', 'Export Options'],
  },
  {
    id: 'filtered-table',
    title: 'Advanced Filtering',
    description:
      'Table showcasing advanced filtering capabilities with multiple filter types and combinations.',
    href: 'table/filtered-table',
    icon: Filter,
    gradient: 'from-indigo-500 to-purple-600',
    features: ['Multiple Filters', 'Filter Pills', 'Date Ranges', 'Custom Filters'],
  },
  {
    id: 'pinned-table',
    title: 'Column Pinning',
    description:
      'Table demonstrating column pinning functionality for better data navigation and comparison.',
    href: 'table/pinned-table',
    icon: Pin,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Left Pin', 'Right Pin', 'Sticky Headers', 'Fixed Columns'],
  },
  {
    id: 'grid-table',
    title: 'Grid Layout Table',
    description:
      'Table with grid-based layout and responsive design for optimal viewing on different devices.',
    href: 'table/grid-table',
    icon: Grid,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Grid Layout', 'Responsive Design', 'Mobile Optimized', 'Flexible Sizing'],
  },
  {
    id: 'settings-table',
    title: 'Configuration Table',
    description:
      'Settings and configuration table with toggle switches, dropdowns, and interactive controls.',
    href: 'table/settings-table',
    icon: Settings,
    gradient: 'from-amber-500 to-orange-600',
    features: ['Toggle Switches', 'Dropdown Controls', 'Settings Management', 'State Persistence'],
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Data Tables"
      description="Advanced table components with sorting, filtering, and interactive features"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto ">
          {tableDemos.map(table => {
            return (
              <div
                key={table.id}
                className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transform-gpu hover:-translate-y-1 transition-all duration-300"
              >
                {/* Preview Section */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {/* Clickable overlay for navigation */}
                  <Link href={table.href} className="absolute inset-0 z-10">
                    <span className="sr-only">View {table.title}</span>
                  </Link>

                  {/* Iframe Container - Always visible */}
                  <div className="absolute inset-0 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <iframe
                      src={`/${table.href}`}
                      className="w-full h-full border-0 pointer-events-none"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      title={`Preview of ${table.title}`}
                      style={{
                        width: '400%',
                        height: '400%',
                        transform: 'scale(0.25)',
                        transformOrigin: 'top left',
                        minWidth: '1200px',
                        minHeight: '800px',
                      }}
                    />
                  </div>

                  {/* Optional: Add a subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-5 transition-colors duration-300 group-hover:bg-accent">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${table.gradient} text-white`}
                      >
                        <table.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                        {table.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {table.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5">
                    {table.features?.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded transition-colors duration-300 group-hover:bg-muted/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
