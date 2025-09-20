import React from 'react';

import FAQBasic from '@/components/alle-ui/faq/faq-basic';
import FAQStyled from '@/components/alle-ui/faq/faq-styled';
import FAQSearchable from '@/components/alle-ui/faq/faq-searchable';
import FAQCategorized from '@/components/alle-ui/faq/faq-categorized';
import FAQCompact from '@/components/alle-ui/faq/faq-compact';
import FAQAdvanced from '@/components/alle-ui/faq/faq-advanced';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: FAQBasic, title: 'Basic FAQ Accordion', description: 'Simple FAQ with expandable answers' },
  { component: FAQStyled, title: 'Styled FAQ Section', description: 'FAQ with custom styling and icons' },
  { component: FAQSearchable, title: 'Searchable FAQ', description: 'FAQ with search functionality' },
  { component: FAQCategorized, title: 'Categorized FAQ', description: 'FAQ organized by categories' },
  { component: FAQCompact, title: 'Compact FAQ', description: 'Compact version of FAQ layout' },
  { component: FAQAdvanced, title: 'Advanced FAQ', description: 'Advanced FAQ with multiple features' },
];

export default function Page() {
  return (
    <PageWrapper 
      showBackButton 
      title="FAQ Components" 
      description="Frequently Asked Questions components with accordion layouts and search functionality"
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
