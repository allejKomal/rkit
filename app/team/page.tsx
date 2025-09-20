import React from 'react';

import TeamBasicPage from '@/components/alle-ui/team/team-basic';
import TeamWithRolesPage from '@/components/alle-ui/team/team-with-roles';
import TeamDetailedPage from '@/components/alle-ui/team/team-detailed';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: TeamBasicPage, title: 'Basic Team Grid', description: 'Simple team member grid with avatars and names' },
  { component: TeamWithRolesPage, title: 'Team with Roles', description: 'Team cards with roles and detailed information' },
  { component: TeamDetailedPage, title: 'Detailed Team Layout', description: 'Advanced team layout with comprehensive member details' },
];

export default function Page() {
  return (
    <PageWrapper 
      showBackButton 
      title="Team Components" 
      description="Team member display components with avatars, roles, and social links"
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
