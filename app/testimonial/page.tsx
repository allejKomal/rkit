import React from 'react';

import Testimonial01 from '@/components/alle-ui/testimonial/testimonial-01';
import Testimonial02 from '@/components/alle-ui/testimonial/testimonial-02';
import Testimonial03 from '@/components/alle-ui/testimonial/testimonial-03';
import Testimonial05 from '@/components/alle-ui/testimonial/testimonial-05';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 flex flex-col gap-15">
        <ComponentWrapper title="Testimonial 1">
          <Testimonial01 />
        </ComponentWrapper>
        <ComponentWrapper title="Testimonial 2">
          <Testimonial02 />
        </ComponentWrapper>
        <ComponentWrapper title="Testimonial 3">
          <Testimonial03 />
        </ComponentWrapper>
        <ComponentWrapper title="Testimonial 4">
          <Testimonial05 />
        </ComponentWrapper>
        {/* <ComponentWrapper title="Testimonial 4">
          <Testimonial04 />
        </ComponentWrapper> */}
      </div>
    </PageWrapper>
  );
}
