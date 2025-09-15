import React from 'react';

import { CheckboxTreeDropdown } from '@/components/alle-ui/dropdown/checkbox-tree-dropdown';
import { Dropdown01 } from '@/components/alle-ui/dropdown/dropdown-01';
import { Dropdown02 } from '@/components/alle-ui/dropdown/dropdown-02';
import { Dropdown03 } from '@/components/alle-ui/dropdown/dropdown-03';
import Dropdown04 from '@/components/alle-ui/dropdown/dropdown-04';
import Dropdown05 from '@/components/alle-ui/dropdown/dropdown-05';
import Dropdown06 from '@/components/alle-ui/dropdown/dropdown-06';
import Dropdown07 from '@/components/alle-ui/dropdown/dropdown-07';
import Dropdown08 from '@/components/alle-ui/dropdown/dropdown-08';
import Dropdown09 from '@/components/alle-ui/dropdown/dropdown-09';
import Dropdown10 from '@/components/alle-ui/dropdown/dropdown-10';
import Dropdown11 from '@/components/alle-ui/dropdown/dropdown-11';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 flex flex-col gap-15 h-full">
        <ComponentWrapper title="Dropdown 1" block>
          <Dropdown01 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 2" block>
          <Dropdown02 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 3" block>
          <Dropdown03 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 4" block>
          <Dropdown04 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 5" block>
          <Dropdown05 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 6" block>
          <Dropdown06 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 7" block>
          <Dropdown07 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 8" block>
          <Dropdown08 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 9" block>
          <Dropdown09 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 10" block>
          <Dropdown10 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 11" block>
          <Dropdown11 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 12" block>
          <CheckboxTreeDropdown />
        </ComponentWrapper>
      </div>
    </PageWrapper>
  );
}
