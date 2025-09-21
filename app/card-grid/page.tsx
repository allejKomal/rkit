import React from 'react';

import CardGridActions from '@/components/alle-ui/card-grid/card-grid-actions';
import CardGridBasic from '@/components/alle-ui/card-grid/card-grid-basic';
import CardGridTeam from '@/components/alle-ui/card-grid/card-grid-team';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: CardGridBasic,
    title: 'Basic Card Grid',
    description: 'Simple card grid layout for collections and lists',
  },
  {
    component: CardGridTeam,
    title: 'Team Card Grid',
    description: 'Grid layout for showcasing team members with avatars',
  },
  {
    component: CardGridActions,
    title: 'Action Card Grid',
    description: 'Grid layout for displaying action cards with icons',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Card Grid Components"
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
