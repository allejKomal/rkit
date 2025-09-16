import React from 'react';

import FAQ01 from '@/components/alle-ui/faq/faq-01';
import FAQ02 from '@/components/alle-ui/faq/faq-02';
import FAQ03 from '@/components/alle-ui/faq/faq-03';
import FAQ04 from '@/components/alle-ui/faq/faq-04';
import FAQ05 from '@/components/alle-ui/faq/faq-05';
import FAQ06 from '@/components/alle-ui/faq/faq-06';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 flex flex-col gap-15">
        <ComponentWrapper title="FAQ 1">
          <FAQ01 />
        </ComponentWrapper>
        <ComponentWrapper title="FAQ 2">
          <FAQ02 />
        </ComponentWrapper>
        <ComponentWrapper title="FAQ 3">
          <FAQ03 />
        </ComponentWrapper>
        <ComponentWrapper title="FAQ 4">
          <FAQ04 />
        </ComponentWrapper>
        <ComponentWrapper title="FAQ 5">
          <FAQ05 />
        </ComponentWrapper>
        <ComponentWrapper title="FAQ 6">
          <FAQ06 />
        </ComponentWrapper>
      </div>
    </PageWrapper>
  );
}
