import React from 'react';

import BorderCard from '@/components/alle-ui/cards/border-card';
import CalendarCard from '@/components/alle-ui/cards/calendar-card';
import CardSimple from '@/components/alle-ui/cards/card-simple';
import { ClosestStoresCard } from '@/components/alle-ui/cards/closest-store-card';
import DateScheduleCard from '@/components/alle-ui/cards/date-schedule-card';
import IconCard from '@/components/alle-ui/cards/icon-card';
import NotesCard from '@/components/alle-ui/cards/notes-card';
import PostCard from '@/components/alle-ui/cards/post-card';
import StatisticsCard from '@/components/alle-ui/cards/statistics-card';
import TableCard from '@/components/alle-ui/cards/table-card';
import TestimonialCard from '@/components/alle-ui/cards/testimonial-card';
import UserCard from '@/components/alle-ui/cards/user-card';
import UserCardBackground from '@/components/alle-ui/cards/user-card-background';
import UserProfileCard from '@/components/alle-ui/cards/user-profile-card';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: CardSimple,
    title: 'Basic Card',
    description: 'Simple card layout for displaying cards and content in organized structures',
  },
  {
    component: TableCard,
    title: 'Table Card',
    description: 'Table card layout for displaying tables and content in organized structures',
  },
  {
    component: UserCard,
    title: 'User Card',
    description:
      'User card layout for displaying user information and content in organized structures',
  },
  {
    component: UserCardBackground,
    title: 'User Card Background',
    description:
      'User card layout for displaying user information and content in organized structures',
  },
  {
    component: PostCard,
    title: 'Post Card',
    description:
      'Post card layout for displaying post information and content in organized structures',
  },
  {
    component: UserProfileCard,
    title: 'User Profile Card',
    description:
      'User profile card layout for displaying user information and content in organized structures',
  },
  {
    component: CalendarCard,
    title: 'Calendar Card',
    description:
      'Calendar card layout for displaying calendar information and content in organized structures',
  },
  {
    component: DateScheduleCard,
    title: 'Date Schedule Card',
    description:
      'Date schedule card layout for displaying date schedule information and content in organized structures',
  },
  {
    component: IconCard,
    title: 'Icon Card',
    description:
      'Icon card layout for displaying icon information and content in organized structures',
  },
  {
    component: ClosestStoresCard,
    title: 'Closest Stores Card',
    description:
      'Closest stores card layout for displaying closest stores information and content in organized structures',
  },
  {
    component: BorderCard,
    title: 'Border Card',
    description:
      'Border card layout for displaying border information and content in organized structures',
  },
  {
    component: StatisticsCard,
    title: 'Statistics Card',
    description:
      'Statistics card layout for displaying statistics information and content in organized structures',
  },
  {
    component: NotesCard,
    title: 'Card Meeting Notes',
    description:
      'Card meeting notes layout for displaying card meeting notes information and content in organized structures',
  },
  {
    component: TestimonialCard,
    title: 'Testimonial Card',
    description:
      'Testimonial card layout for displaying testimonial information and content in organized structures',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Card Components"
      description="Simple card layout for displaying cards and content in organized structures"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
