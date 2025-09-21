import React from 'react';

import CardGridBasic from '@/components/alle-ui/card-grid/card-grid-basic';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: CardGridBasic,
    title: 'Basic Card Grid',
    description: 'Simple card grid layout for collections and lists',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Card Components"
      description="Responsive grid layouts for displaying cards and content in organized structures"
    >
      <div className="p-10">
        <div className="flex flex-col gap-15">
          {components.map(({ component: Component, title, description }) => (
            <ComponentWrapper key={title} title={title} description={description}>
              <Component />
            </ComponentWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
