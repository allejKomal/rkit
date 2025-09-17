import React from 'react';

import { Dialog } from '@/components/alle-ui/dialog/dialog';
import DialogDestructive from '@/components/alle-ui/dialog/dialog-destructive';
import { DialogWithIcon } from '@/components/alle-ui/dialog/dialog-with-icon';
import DialogFullScreenDemo from '@/components/alle-ui/dialog/full-page-dialog';
import DialogScrollable from '@/components/alle-ui/dialog/scrollable-dialog';
import DialogSubscribe from '@/components/alle-ui/dialog/subscribe-dialog';
import DialogTermsAndCondition from '@/components/alle-ui/dialog/terms-and-conditions-dialog';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: Dialog, title: 'Basic Dialog' },
  { component: DialogWithIcon, title: 'Dialog with Icon' },
  { component: DialogDestructive, title: 'Destructive Dialog' },
  { component: DialogScrollable, title: 'Scrollable Dialog' },
  { component: DialogFullScreenDemo, title: 'Full Screen Dialog' },
  { component: DialogTermsAndCondition, title: 'Terms & Conditions Dialog' },
  { component: DialogSubscribe, title: 'Subscribe Dialog' },
];

export default function Page() {
  return (
    <PageWrapper>
      <div className="p-10 grid grid-cols-3 gap-15 h-full">
        {components.map(({ component: Component, title }) => (
          <ComponentWrapper key={title} title={title} block>
            <Component />
          </ComponentWrapper>
        ))}
      </div>
    </PageWrapper>
  );
}
