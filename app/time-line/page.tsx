import React from 'react';

import Timeline01 from '@/components/alle-ui/time-line/timeline-01';
import Timeline02 from '@/components/alle-ui/time-line/timeline-02';
import Timeline03 from '@/components/alle-ui/time-line/timeline-03';
import Timeline04 from '@/components/alle-ui/time-line/timeline-04';
import Timeline05 from '@/components/alle-ui/time-line/timeline-05';
import Timeline06 from '@/components/alle-ui/time-line/timeline-06';
import { Timeline07 } from '@/components/alle-ui/time-line/timeline-07';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 flex flex-col gap-15">
        <ComponentWrapper title="Time Line 1">
          <Timeline01 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 2">
          <Timeline02 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 3">
          <Timeline03 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 4">
          <Timeline04 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 5">
          <Timeline05 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 6">
          <Timeline06 />
        </ComponentWrapper>
        <ComponentWrapper title="Time Line 7">
          <Timeline07 />
        </ComponentWrapper>
      </div>
    </PageWrapper>
  );
}
