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
  User,
  Users,
} from 'lucide-react';

import PageWrapper from '@/components/hoc/page-wrapper';
import { routeData } from '@/data/routes-data';

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
};

export default function Home() {
  return (
    <PageWrapper
      title="Component Library"
      description="A collection of reusable UI components and layouts"
      showFooter
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routeData
              .sort((a, b) => a.localeCompare(b))
              .map((route, index) => {
                const IconComponent = routeIcons[route] || Database;
                return (
                  <Link
                    key={index}
                    href={route}
                    className="group p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-muted group-hover:bg-muted/80 transition-colors">
                        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-foreground capitalize">
                          {route.replace('-', ' ')}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
