import React from 'react';

import Stats01 from '@/components/alle-ui/stats/stats-01';
import Stats02 from '@/components/alle-ui/stats/stats-02';
import Stats03 from '@/components/alle-ui/stats/stats-03';
import Stats04 from '@/components/alle-ui/stats/stats-04';
import Stats05 from '@/components/alle-ui/stats/stats-05';
import Stats06 from '@/components/alle-ui/stats/stats-06';
import Stats07 from '@/components/alle-ui/stats/stats-07';
import Stats08 from '@/components/alle-ui/stats/stats-08';
import Stats09 from '@/components/alle-ui/stats/stats-09';
import Stats10 from '@/components/alle-ui/stats/stats-10';
import Stats11 from '@/components/alle-ui/stats/stats-11';
import Stats12 from '@/components/alle-ui/stats/stats-12';
import ComponentWrapper from '@/components/hoc/component-wrapper';

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-15">
      <ComponentWrapper title="Statistics 1">
        <Stats01 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 2">
        <Stats02 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 3">
        <Stats03 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 4">
        <Stats04 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 5">
        <Stats05 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 6">
        <Stats06 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 7">
        <Stats07 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 8">
        <Stats08 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 9">
        <Stats09 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 10">
        <Stats10 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 11">
        <Stats11 />
      </ComponentWrapper>
      <ComponentWrapper title="Statistics 12">
        <Stats12 />
      </ComponentWrapper>
    </div>
  );
}
