import Link from 'next/link';

import {
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  Code,
  Database,
  FileText,
  Grid3X3,
  HelpCircle,
  Layout,
  LucideIcon,
  MessageSquare,
  Settings,
  Square,
  User,
  Users,
} from 'lucide-react';

import PageWrapper from '@/components/hoc/page-wrapper';
import { routeData } from '@/data/routes-data';

const iconColors: Record<string, string> = {
  avatar: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
  blocks: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
  'blocks/editor': 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
  'card-grid': 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300',
  'date-picker': 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300',
  dialog: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300',
  dropdown: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300',
  faq: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300',
  'form-layout': 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300',
  statistics: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300',
  team: 'bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300',
  testimonial: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900 dark:text-fuchsia-300',
  'time-line': 'bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-300',
  cards: 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300',
};

// Icon mapping for each route
const routeIcons: Record<string, LucideIcon> = {
  avatar: User,
  blocks: Layout,
  'blocks/editor': Code,
  'card-grid': Grid3X3,
  'date-picker': Calendar,
  dialog: MessageSquare,
  dropdown: Settings,
  faq: HelpCircle,
  'form-layout': FileText,
  statistics: BarChart3,
  team: Users,
  testimonial: MessageSquare,
  'time-line': Clock,
  cards: Square,
};

const renderComponentGrid = (components: typeof routeData) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {components
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((route, index) => {
          const IconComponent = routeIcons[route.name] || Database;
          const colorClasses =
            iconColors[route.name] ||
            'bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground';

          return (
            <Link
              key={index}
              href={route.name}
              className="group p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-lg transform-gpu transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-md transition-all duration-300 ${colorClasses} group-hover:scale-105`}
                >
                  <IconComponent className="w-5 h-5 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground capitalize transition-colors duration-300">
                    {route.name.replace('-', ' ')}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default function Home() {
  const pinnedComponents = routeData.filter(route => route.pinned && route.pinnedVisible);
  const uiComponents = routeData.filter(route => route.category === 'ui' && route.categoryVisible);
  const layoutComponents = routeData.filter(
    route => route.category === 'layout' && route.categoryVisible
  );

  return (
    <PageWrapper
      title="Component Library"
      description="A collection of reusable UI components and layouts"
      showFooter
    >
      <div className="container mx-auto px-6 py-10">
        <div className="mx-auto space-y-12">
          {/* Featured Components Section */}
          {pinnedComponents.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">🚀 Featured Components</h2>
                <p className="text-muted-foreground">Handpicked components for rapid development</p>
              </div>
              {renderComponentGrid(pinnedComponents)}
            </div>
          )}

          {/* UI Components Section */}
          {uiComponents.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">UI Components</h2>
                <p className="text-muted-foreground">
                  Essential UI components for building modern interfaces
                </p>
              </div>
              {renderComponentGrid(uiComponents)}
            </div>
          )}

          {/* Layout & Content Components Section */}
          {layoutComponents.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Layout & Content Components
                </h2>
                <p className="text-muted-foreground">
                  Complex layouts, blocks, and content presentation components
                </p>
              </div>
              {renderComponentGrid(layoutComponents)}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
