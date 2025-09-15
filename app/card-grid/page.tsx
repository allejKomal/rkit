import React from 'react';

import GridList01 from '@/components/alle-ui/card-grid/card-grid-01';
import GridList02 from '@/components/alle-ui/card-grid/card-grid-02';
import GridList03 from '@/components/alle-ui/card-grid/card-grid-03';
import ComponentWrapper from '@/components/hoc/component-wrapper';

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-15">
      <ComponentWrapper title="Card Grid 1">
        <GridList01 />
      </ComponentWrapper>
      <ComponentWrapper title="Card Grid 2">
        <GridList02 />
      </ComponentWrapper>
      <ComponentWrapper title="Card Grid 3">
        <GridList03 />
      </ComponentWrapper>
    </div>
  );
}
