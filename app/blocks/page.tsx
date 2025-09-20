import Link from 'next/link';

import { ArrowRight, ExternalLink, Play, Search, Users, Code } from 'lucide-react';

import PageWrapper from '@/components/hoc/page-wrapper';

const blocks = [
  {
    id: 'blocks-1',
    title: 'Employee Management Dashboard',
    description:
      'Complete employee management system with sidebar navigation, search, filtering, and employee cards.',
    href: 'blocks/blocks-1',
    icon: Users,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Sidebar Navigation', 'Employee Cards', 'Search & Filter', 'Grid/List View'],
  },
  {
    id: 'blocks-2',
    title: 'Search Command Interface',
    description:
      'Modern command palette with search functionality, categorized results, and keyboard shortcuts.',
    href: 'blocks/blocks-2',
    icon: Search,
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Command Palette', 'Search Interface', 'Categorized Results', 'Keyboard Shortcuts'],
  },
  {
    id: 'blocks-editor',
    title: 'Rich Text Editor',
    description:
      'Advanced rich text editor with formatting, blocks, and collaboration features powered by Plate.',
    href: 'blocks/editor',
    icon: Code,
    gradient: 'from-orange-500 to-red-600',
    features: ['Rich Text Editing', 'Block System', 'Collaboration', 'Formatting Tools'],
  },
];

export default function Page() {
  return (
    <PageWrapper showBackButton title="UI Blocks" description="Pre-built components and layouts">
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6  mx-auto">
          {blocks.map(block => {
            const IconComponent = block.icon;
            return (
              <div
                key={block.id}
                className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200"
              >
                {/* Preview Section */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {/* Clickable overlay for navigation */}
                  <Link href={block.href} className="absolute inset-0 z-10">
                    <span className="sr-only">View {block.title}</span>
                  </Link>

                  {/* Iframe Container - Always visible */}
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={`/${block.href}`}
                      className="w-full h-full border-0 pointer-events-none"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      title={`Preview of ${block.title}`}
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

                  {/* Simple overlay on hover */}
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-base font-medium text-foreground mb-2">{block.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {block.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5">
                    {block.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
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
