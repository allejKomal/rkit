import React from 'react';

import AvatarDropdown from '@/components/alle-ui/avatar/avatar-dropdown';
import { AvatarGroupDropdown } from '@/components/alle-ui/avatar/avatar-group-dropdown';
import { AvatarGroupOutline } from '@/components/alle-ui/avatar/avatar-group-outline';
import { AvatarGroupText } from '@/components/alle-ui/avatar/avatar-group-text';
import { AvatarGroupTooltip } from '@/components/alle-ui/avatar/avatar-group-tooltip';
import { AvatarGroupTooltipTransition } from '@/components/alle-ui/avatar/avatar-group-tooltip-transition';
import { AvatarGroupTransition } from '@/components/alle-ui/avatar/avatar-group-transition';
import { AvatarIcon } from '@/components/alle-ui/avatar/avatar-icon';
import AvatarInfo from '@/components/alle-ui/avatar/avatar-info';
import { AvatarInitialsSquare } from '@/components/alle-ui/avatar/avatar-initial-square';
import { AvatarIntials } from '@/components/alle-ui/avatar/avatar-initials';
import { AvatarNotification } from '@/components/alle-ui/avatar/avatar-notification';
import { AvatarNotificationPanel } from '@/components/alle-ui/avatar/avatar-notification-panel';
import { AvatarNumber } from '@/components/alle-ui/avatar/avatar-number';
import { AvatarPlus } from '@/components/alle-ui/avatar/avatar-plus';
import { AvatarProgress } from '@/components/alle-ui/avatar/avatar-progress';
import { AvatarRing } from '@/components/alle-ui/avatar/avatar-ring';
import { AvatarRounded } from '@/components/alle-ui/avatar/avatar-rounded';
import { AvatarSqaure } from '@/components/alle-ui/avatar/avatar-square';
import { AvatarStatusRing } from '@/components/alle-ui/avatar/avatar-status-ring';
import AvatarWithToolTip from '@/components/alle-ui/avatar/avatar-tooltip';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: AvatarRounded, title: 'Avatar Rounded' },
  { component: AvatarSqaure, title: 'Avatar Square' },
  { component: AvatarStatusRing, title: 'Avatar Status Ring' },
  { component: AvatarWithToolTip, title: 'Avatar With Tooltip' },
  { component: AvatarRing, title: 'Avatar Ring' },
  { component: AvatarPlus, title: 'Avatar Plus' },
  { component: AvatarNumber, title: 'Avatar Number' },
  { component: AvatarDropdown, title: 'Avatar Dropdown' },
  { component: AvatarNotificationPanel, title: 'Avatar Notification Panel' },
  { component: AvatarNotification, title: 'Avatar Notification' },
  { component: AvatarIntials, title: 'Avatar Initials' },
  { component: AvatarInitialsSquare, title: 'Avatar Initials Square' },
  { component: AvatarIcon, title: 'Avatar Icon' },
  { component: AvatarProgress, title: 'Avatar Progress' },
  { component: AvatarGroupTooltip, title: 'Avatar Group Tooltip' },
  { component: AvatarGroupTransition, title: 'Avatar Group Transition' },
  { component: AvatarGroupTooltipTransition, title: 'Avatar Group Tooltip Transition' },
  { component: AvatarGroupText, title: 'Avatar Group Text' },
  { component: AvatarGroupOutline, title: 'Avatar Group Outline' },
  { component: AvatarGroupDropdown, title: 'Avatar Group Dropdown' },
  { component: AvatarInfo, title: 'Avatar Info' },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Avatar Components"
      description="User profile pictures and avatar variations with different styles and states"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {components.map(({ component: Component, title }) => (
            <ComponentWrapper key={title} title={title} block>
              <Component />
            </ComponentWrapper>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
