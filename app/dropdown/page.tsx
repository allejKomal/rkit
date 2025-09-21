import React from 'react';

import { CheckboxTreeDropdown } from '@/components/alle-ui/dropdown/checkbox-tree-dropdown';
import DropdownAddOption from '@/components/alle-ui/dropdown/dropdown-add-option';
import DropdownAdvanced from '@/components/alle-ui/dropdown/dropdown-advanced';
import { DropdownBasic } from '@/components/alle-ui/dropdown/dropdown-basic';
import DropdownCompact from '@/components/alle-ui/dropdown/dropdown-compact';
import DropdownCustomStyled from '@/components/alle-ui/dropdown/dropdown-custom-styled';
import DropdownIcon from '@/components/alle-ui/dropdown/dropdown-icon';
import DropdownLarge from '@/components/alle-ui/dropdown/dropdown-large';
import DropdownMultiSelection from '@/components/alle-ui/dropdown/dropdown-multi-selection';
import DropdownRadioGroup from '@/components/alle-ui/dropdown/dropdown-radio-group';
import { DropdownScrollable } from '@/components/alle-ui/dropdown/dropdown-scrollable';
import DropdownWithSearch from '@/components/alle-ui/dropdown/dropdown-with-search';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  {
    component: DropdownBasic,
    title: 'Basic Dropdown',
    description: 'A simple dropdown for selecting a single option from a list.',
  },
  {
    component: DropdownScrollable,
    title: 'Scrollable Dropdown',
    description: 'A dropdown with scrollable options and buttons',
  },
  {
    component: DropdownWithSearch,
    title: 'Search Dropdown',
    description: 'Dropdown with search and selection functionality',
  },
  {
    component: DropdownAddOption,
    title: 'Add New Option Dropdown',
    description: 'Dropdown with add new option capability',
  },
  {
    component: DropdownIcon,
    title: 'Icon Dropdown',
    description: 'Dropdown with icon integration',
  },
  {
    component: DropdownCustomStyled,
    title: 'Custom Styled Dropdown',
    description: 'Dropdown with custom styling',
  },
  {
    component: DropdownMultiSelection,
    title: 'Multi Selection Dropdown',
    description: 'Dropdown with multi-selection capability',
  },
  {
    component: DropdownRadioGroup,
    title: 'Radio Group Dropdown',
    description: 'Dropdown with radio group selection',
  },
  {
    component: DropdownCompact,
    title: 'Compact Dropdown',
    description: 'Compact version of dropdown',
  },
  { component: DropdownLarge, title: 'Large Dropdown', description: 'Large version of dropdown' },
  {
    component: DropdownAdvanced,
    title: 'Advanced Dropdown',
    description: 'Advanced dropdown with multiple features',
  },
  {
    component: CheckboxTreeDropdown,
    title: 'Checkbox Tree Dropdown',
    description: 'Dropdown with checkbox tree structure',
  },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Dropdown Components"
      description="Interactive dropdown menus and selection components with various styles and functionalities"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {components.map(({ component: Component, title, description }) => (
            <ComponentWrapper key={title} title={title} description={description} block>
              <Component />
            </ComponentWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
