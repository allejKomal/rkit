import React from 'react';

import FormLayoutBasic from '@/components/alle-ui/form-layout/form-layout-basic';
import FormLayoutTwoColumn from '@/components/alle-ui/form-layout/form-layout-two-column';
import FormLayoutWizard from '@/components/alle-ui/form-layout/form-layout-wizard';
import FormLayoutCompact from '@/components/alle-ui/form-layout/form-layout-compact';
import FormLayoutAdvanced from '@/components/alle-ui/form-layout/form-layout-advanced';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: FormLayoutBasic, title: 'Basic Form Layout', description: 'Simple form with standard input fields' },
  { component: FormLayoutTwoColumn, title: 'Two Column Form', description: 'Form layout with two columns for better space usage' },
  { component: FormLayoutWizard, title: 'Wizard Form', description: 'Multi-step form with progress indicator' },
  { component: FormLayoutCompact, title: 'Compact Form', description: 'Compact form layout for limited space' },
  { component: FormLayoutAdvanced, title: 'Advanced Form', description: 'Advanced form with validation and custom fields' },
];

export default function Page() {
  return (
    <PageWrapper 
      showBackButton 
      title="Form Layout Components" 
      description="Form layouts and input components with various styles and validation patterns"
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
