import React from 'react';

import Team01Page from '@/components/alle-ui/team/team-01';
import Team02Page from '@/components/alle-ui/team/team-02';
import Team03Page from '@/components/alle-ui/team/team-03';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 flex flex-col gap-15">
        <ComponentWrapper title="Team 1">
          <Team01Page />
        </ComponentWrapper>
        <ComponentWrapper title="Team 2">
          <Team02Page />
        </ComponentWrapper>
        <ComponentWrapper title="Team 3">
          <Team03Page />
        </ComponentWrapper>
      </div>
    </PageWrapper>
  );
}
