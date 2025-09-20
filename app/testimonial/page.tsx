import React from 'react';

import TestimonialBasic from '@/components/alle-ui/testimonial/testimonial-basic';
import TestimonialWithRating from '@/components/alle-ui/testimonial/testimonial-with-rating';
import TestimonialCard from '@/components/alle-ui/testimonial/testimonial-card';
import TestimonialSimple from '@/components/alle-ui/testimonial/testimonial-simple';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: TestimonialBasic, title: 'Basic Testimonial', description: 'Simple testimonial with quote and author info' },
  { component: TestimonialWithRating, title: 'Testimonial with Rating', description: 'Testimonial with star rating and detailed feedback' },
  { component: TestimonialCard, title: 'Testimonial Card', description: 'Card-style testimonial with enhanced design' },
  { component: TestimonialSimple, title: 'Simple Testimonial', description: 'Minimal testimonial design focused on content' },
];

export default function Page() {
  return (
    <PageWrapper 
      showBackButton 
      title="Testimonial Components" 
      description="Customer testimonial and review display components with various layouts"
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
