import React from 'react';

import StatsAdvanced from '@/components/alle-ui/stats/stats-advanced';
import StatsAnimated from '@/components/alle-ui/stats/stats-animated';
import StatsBasic from '@/components/alle-ui/stats/stats-basic';
import StatsWithChart from '@/components/alle-ui/stats/stats-with-chart';
import StatsCompact from '@/components/alle-ui/stats/stats-compact';
import StatsComparison from '@/components/alle-ui/stats/stats-comparison';
import StatsDashboard from '@/components/alle-ui/stats/stats-dashboard';
import StatsGradient from '@/components/alle-ui/stats/stats-gradient';
import StatsLarge from '@/components/alle-ui/stats/stats-large';
import StatsMultiMetric from '@/components/alle-ui/stats/stats-multi-metric';
import StatsProgress from '@/components/alle-ui/stats/stats-progress';
import StatsTrend from '@/components/alle-ui/stats/stats-trend';
import StatsWithIcon from '@/components/alle-ui/stats/stats-with-icon';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: StatsBasic,
    title: 'Basic Stats Card',
    description: 'Simple statistics card with number and label',
  },
  {
    component: StatsWithIcon,
    title: 'Icon Stats Card',
    description: 'Statistics card with icon and trend indicator',
  },
  {
    component: StatsProgress,
    title: 'Progress Stats Card',
    description: 'Statistics card with progress bar visualization',
  },
  {
    component: StatsWithChart,
    title: 'Chart Stats Card',
    description: 'Statistics card with mini chart visualization',
  },
  {
    component: StatsComparison,
    title: 'Comparison Stats',
    description: 'Statistics card comparing current vs previous values',
  },
  {
    component: StatsTrend,
    title: 'Trend Stats Card',
    description: 'Statistics card with trend arrows and percentages',
  },
  {
    component: StatsCompact,
    title: 'Compact Stats',
    description: 'Compact version of statistics card',
  },
  {
    component: StatsLarge,
    title: 'Large Stats Card',
    description: 'Large statistics card with detailed information',
  },
  {
    component: StatsGradient,
    title: 'Gradient Stats',
    description: 'Statistics card with gradient background',
  },
  {
    component: StatsAnimated,
    title: 'Animated Stats',
    description: 'Statistics card with animation effects',
  },
  {
    component: StatsMultiMetric,
    title: 'Multi Metric Stats',
    description: 'Statistics card showing multiple metrics',
  },
  {
    component: StatsDashboard,
    title: 'Dashboard Stats',
    description: 'Statistics card designed for dashboard layout',
  },
  {
    component: StatsAdvanced,
    title: 'Advanced Stats',
    description: 'Advanced statistics card with multiple features',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Statistics Components"
      description="Data visualization and statistics display components with charts and metrics"
    >
      <div className="p-10">
        <div className="flex flex-col gap-15">
          {components.map(({ component: Component, title, description }) => (
            <ComponentWrapper key={title} title={title} description={description}>
              <Component />
            </ComponentWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
