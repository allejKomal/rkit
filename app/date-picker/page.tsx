import React from 'react';

import { BasicDatePicker } from '@/components/alle-ui/date-picker/basic-date-picker';
import { DatePickerDropdownMonthsYears } from '@/components/alle-ui/date-picker/date-picker-dropdown-months-years';
import { DatePickerDropdownYears } from '@/components/alle-ui/date-picker/date-picker-dropdown-years';
import { DatePickerMultiMonth } from '@/components/alle-ui/date-picker/date-picker-multi-month';
import { DatePickerMultipleSelection } from '@/components/alle-ui/date-picker/date-picker-multiple-selection';
import { DatePickerRange } from '@/components/alle-ui/date-picker/date-picker-range';
import { DatePickerWeekSelection } from '@/components/alle-ui/date-picker/date-picker-week-selection';
import { DatePickerWithRestrictions } from '@/components/alle-ui/date-picker/date-picker-with-restrictions';
import { MonthPickerBasic } from '@/components/alle-ui/date-picker/month-picker-basic';
import { MonthPickerDropdown } from '@/components/alle-ui/date-picker/month-picker-dropdown';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: BasicDatePicker,
    title: 'Basic Date Picker',
    description: 'Simple date picker with calendar interface',
  },
  {
    component: DatePickerWithRestrictions,
    title: 'Date Picker with Restrictions',
    description: 'Date picker with date restrictions and dropdown months',
  },
  {
    component: DatePickerDropdownYears,
    title: 'Date Picker with Dropdown Years',
    description: 'Date picker with dropdown year selection',
  },
  {
    component: DatePickerDropdownMonthsYears,
    title: 'Date Picker with Dropdown Months & Years',
    description: 'Date picker with dropdown month and year selection',
  },
  {
    component: DatePickerMultiMonth,
    title: 'Multi Month Date Picker',
    description: 'Date picker showing multiple months',
  },
  {
    component: DatePickerMultipleSelection,
    title: 'Multiple Date Selection',
    description: 'Date picker for selecting multiple dates',
  },
  {
    component: DatePickerRange,
    title: 'Date Range Picker',
    description: 'Date picker for selecting date ranges',
  },
  {
    component: DatePickerWeekSelection,
    title: 'Week Selection Picker',
    description: 'Date picker for selecting entire weeks',
  },
  {
    component: MonthPickerBasic,
    title: 'Basic Month Picker',
    description: 'Month picker with basic functionality',
  },
  {
    component: MonthPickerDropdown,
    title: 'Month Picker with Dropdown',
    description: 'Month picker with dropdown navigation',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Date Picker Components"
      description="Calendar and date selection components with various styles and functionalities"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {components.map(({ component: Component, title, description }) => (
            <ComponentWrapper key={title} title={title} description={description} block>
              <div className="w-[300px] mx-auto">
                <Component />
              </div>
            </ComponentWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
