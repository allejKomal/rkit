'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import {
  ChevronsUpDown,
  Eye,
  Filter,
  LayoutList,
  ListChecks,
  MousePointer2,
  MousePointerClick,
  Move,
  Pin,
  Rows,
  Table as TableIcon,
} from 'lucide-react';

import PageWrapper from '@/components/hoc/page-wrapper';
import { Button } from '@/components/ui/button';

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
    icon: Rows,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Pagination', 'Page Size', 'Page Index', 'Page Count'],
  },
  {
    id: 'sorting-table',
    title: 'Sorting Table',
    description: 'Table with sorting functionality.',
    href: 'table/sorting-table',
    icon: ChevronsUpDown,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Sorting', 'Sorting Icons', 'Sorting Types', 'Sorting Directions'],
  },
  {
    id: 'pinning-table',
    title: 'Pinning Table',
    description: 'Table with pinning functionality.',
    href: 'table/pinning-table',
    icon: Pin,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Pinning', 'Pinning Icons', 'Pinning Types', 'Pinning Directions'],
  },
  {
    id: 'resizing-table',
    title: 'Resizing Table',
    description: 'Table with resizable functionality.',
    href: 'table/resizing-table',
    icon: Move,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Resizing', 'Resizing Icons', 'Resizing Types', 'Resizing Directions'],
  },
  {
    id: 'single-selection-table',
    title: 'Single Selection Table',
    description: 'Table with single selection functionality.',
    href: 'table/single-selection-table',
    icon: MousePointerClick,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Single Selection', 'Icons', 'Types', 'Directions'],
  },
  {
    id: 'multi-selection-table',
    title: 'Multi Selection Table',
    description: 'Table with multi selection functionality.',
    href: 'table/multi-selection-table',
    icon: MousePointer2,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Multi Selection', 'Icons', 'Types', 'Directions'],
  },
  {
    id: 'column-order-table',
    title: 'Column Order Table',
    description: 'Table with column order functionality.',
    href: 'table/column-order-table',
    icon: ListChecks,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Column Order', 'Icons', 'Types', 'Directions'],
  },
  {
    id: 'global-filter-table',
    title: 'Global Filter Table',
    description: 'Table with global filter functionality.',
    href: 'table/global-filter-table',
    icon: Filter,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'column-visibility-table',
    title: 'Column Visibility Table',
    description: 'Table with column visibility functionality.',
    href: 'table/column-visibility-table',
    icon: Eye,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'column-filter-table',
    title: 'Column Filter Table',
    description: 'Table with column filter functionality.',
    href: 'table/column-filter-table',
    icon: LayoutList, // Indicates layout/columns
    gradient: 'from-blue-500 to-cyan-600',
  },
];

// Lazy-loaded iframe component with intersection observer
function LazyIframe({
  src,
  title,
  className,
  style,
}: {
  src: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before it comes into view
        threshold: 0.1,
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className="relative w-full h-full">
      {!isVisible && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Loading preview...</div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={src}
          className={className}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          title={title}
          style={style}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Loading preview...</div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // Show only 8 initially
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    // Mark page as loaded after initial render
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 8, tableDemos.length));
      setIsLoadingMore(false);
    }, 300);
  };

  const visibleDemos = tableDemos.slice(0, visibleCount);
  const hasMore = visibleCount < tableDemos.length;

  return (
    <PageWrapper
      showBackButton
      title="Data Tables"
      description="Advanced table components with sorting, filtering, and interactive features"
    >
      <div className="p-10">
        {!isPageLoaded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border bg-card">
                <div className="h-48 bg-muted animate-pulse" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-muted rounded-lg animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse w-32" />
                  </div>
                  <div className="h-3 bg-muted rounded animate-pulse w-full mb-2" />
                  <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto transition-opacity duration-300 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {visibleDemos.map(table => {
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

                  {/* Iframe Container - Lazy loaded */}
                  <div className="absolute inset-0 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                    <LazyIframe
                      src={`/${table.href}`}
                      title={`Preview of ${table.title}`}
                      className="w-full h-full border-0 pointer-events-none"
                      style={{
                        width: '300%',
                        height: '300%',
                        transform: 'scale(0.33)',
                        transformOrigin: 'top left',
                        minWidth: '900px',
                        minHeight: '600px',
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

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMore} disabled={isLoadingMore} variant="outline">
              {isLoadingMore
                ? 'Loading...'
                : `Load More (${tableDemos.length - visibleCount} remaining)`}
            </Button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
