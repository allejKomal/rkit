import React from 'react';

import TimelineAlternating from '@/components/alle-ui/time-line/timeline-alternating';
import TimelineBasic from '@/components/alle-ui/time-line/timeline-basic';
import TimelineHorizontal from '@/components/alle-ui/time-line/timeline-horizontal';
import { TimelineMinimal } from '@/components/alle-ui/time-line/timeline-minimal';
import TimelineVertical from '@/components/alle-ui/time-line/timeline-vertical';
import TimelineWithAvatars from '@/components/alle-ui/time-line/timeline-with-avatars';
import TimelineWithIcons from '@/components/alle-ui/time-line/timeline-with-icons';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: TimelineBasic,
    title: 'Basic Timeline',
    description: 'Simple vertical timeline with events',
  },
  {
    component: TimelineWithIcons,
    title: 'Timeline with Icons',
    description: 'Timeline with icons for each event',
  },
  {
    component: TimelineVertical,
    title: 'Vertical Timeline',
    description: 'Vertical timeline with detailed event displays',
  },
  {
    component: TimelineHorizontal,
    title: 'Horizontal Timeline',
    description: 'Horizontal timeline layout',
  },
  {
    component: TimelineAlternating,
    title: 'Alternating Timeline',
    description: 'Timeline with alternating event layout',
  },
  {
    component: TimelineWithAvatars,
    title: 'Timeline with Avatars',
    description: 'Timeline featuring user avatars',
  },
  {
    component: TimelineMinimal,
    title: 'Minimal Timeline',
    description: 'Clean minimal timeline design',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Timeline Components"
      description="Timeline and progress display components for showing events and milestones"
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
