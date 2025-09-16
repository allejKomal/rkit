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
      <div className="p-10 grid grid-cols-3 gap-15 h-full">
        <ComponentWrapper
          title="Dropdown 1"
          description="A simple dropdown for selecting a single option from a list."
          block
        >
          <Dropdown01 />
        </ComponentWrapper>
        <ComponentWrapper
          title="Dropdown 2"
          description="A simple dropdown with scrollable options with buttons"
          block
        >
          <Dropdown02 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 3" description="dropdown with search and selection" block>
          <Dropdown03 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 4" description="dropdown with add new option" block>
          <Dropdown04 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 5" block>
          <Dropdown05 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 6" block>
          <Dropdown06 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 7" description="dropdown with multi selection" block>
          <Dropdown07 />
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown 8" description="dropdown with radio group" block>
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
