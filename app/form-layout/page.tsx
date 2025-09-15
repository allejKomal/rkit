import React from 'react';

import FormLayout01 from '@/components/alle-ui/form-layout/form-layout-01';
import FormLayout02 from '@/components/alle-ui/form-layout/form-layout-02';
import FormLayout03 from '@/components/alle-ui/form-layout/form-layout-03';
import FormLayout04 from '@/components/alle-ui/form-layout/form-layout-04';
import FormLayout05 from '@/components/alle-ui/form-layout/form-layout-05';
import ComponentWrapper from '@/components/hoc/component-wrapper';

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-15">
      <ComponentWrapper title="Form Layout 1">
        <FormLayout01 />
      </ComponentWrapper>
      <ComponentWrapper title="Form Layout 2">
        <FormLayout02 />
      </ComponentWrapper>
      <ComponentWrapper title="Form Layout 3">
        <FormLayout03 />
      </ComponentWrapper>
      <ComponentWrapper title="Form Layout 3">
        <FormLayout04 />
      </ComponentWrapper>
      <ComponentWrapper title="Form Layout 3">
        <FormLayout05 />
      </ComponentWrapper>
    </div>
  );
}
