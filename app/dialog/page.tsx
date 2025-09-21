import React from 'react';

import { Dialog } from '@/components/alle-ui/dialog/dialog';
import DialogBottomAlign from '@/components/alle-ui/dialog/dialog-bottom-align';
import DialogBottomLeftAlign from '@/components/alle-ui/dialog/dialog-bottom-left-align';
import DialogBottomRightAlign from '@/components/alle-ui/dialog/dialog-bottom-right-align';
import DialogDestructive from '@/components/alle-ui/dialog/dialog-destructive';
import DialogInviteFriends from '@/components/alle-ui/dialog/dialog-invite-friends';
import DialogMiddleLeftAlign from '@/components/alle-ui/dialog/dialog-middle-left-align';
import DialogMiddleRightAlign from '@/components/alle-ui/dialog/dialog-middle-right-align';
import DialogOTPVerification from '@/components/alle-ui/dialog/dialog-otp-verification';
import DialogRating from '@/components/alle-ui/dialog/dialog-rating';
import DialogReferEarn from '@/components/alle-ui/dialog/dialog-refer-earn';
import DialogSignIn from '@/components/alle-ui/dialog/dialog-signin';
import DialogSignUp from '@/components/alle-ui/dialog/dialog-signup';
import DialogSlideToRight from '@/components/alle-ui/dialog/dialog-slide-to-right';
import DialogSlideToTop from '@/components/alle-ui/dialog/dialog-slide-to-top';
import DialogTopAlign from '@/components/alle-ui/dialog/dialog-top-align';
import DialogTopLeftAlign from '@/components/alle-ui/dialog/dialog-top-left-align';
import DialogTopRightAlign from '@/components/alle-ui/dialog/dialog-top-right-align';
import { DialogWithIcon } from '@/components/alle-ui/dialog/dialog-with-icon';
import DialogZoomIn from '@/components/alle-ui/dialog/dialog-zoom-in';
import DialogFullScreenDemo from '@/components/alle-ui/dialog/full-page-dialog';
import DialogScrollable from '@/components/alle-ui/dialog/scrollable-dialog';
import DialogSubscribe from '@/components/alle-ui/dialog/subscribe-dialog';
import DialogTermsAndCondition from '@/components/alle-ui/dialog/terms-and-conditions-dialog';
import ComponentWrapper from '@/components/hoc/component-wrapper';
import PageWrapper from '@/components/hoc/page-wrapper';

const components = [
  { component: Dialog, title: 'Basic Dialog' },
  { component: DialogWithIcon, title: 'Dialog with Icon' },
  { component: DialogDestructive, title: 'Destructive Dialog' },
  { component: DialogScrollable, title: 'Scrollable Dialog' },
  { component: DialogFullScreenDemo, title: 'Full Screen Dialog' },
  { component: DialogTermsAndCondition, title: 'Terms & Conditions Dialog' },
  { component: DialogSubscribe, title: 'Subscribe Dialog' },
  { component: DialogReferEarn, title: 'Refer & Earn Dialog' },
  { component: DialogRating, title: 'Rating Dialog' },
  { component: DialogOTPVerification, title: 'OTP Verification Dialog' },
  { component: DialogSignUp, title: 'Sign Up Dialog' },
  { component: DialogSignIn, title: 'Sign In Dialog' },
  { component: DialogInviteFriends, title: 'Invite Friends Dialog' },
  { component: DialogTopLeftAlign, title: 'Top Left Align Dialog' },
  { component: DialogTopAlign, title: 'Top Align Dialog' },
  { component: DialogTopRightAlign, title: 'Top Right Align Dialog' },
  { component: DialogMiddleLeftAlign, title: 'Middle Left Align Dialog' },
  { component: DialogMiddleRightAlign, title: 'Middle Right Align Dialog' },
  { component: DialogBottomLeftAlign, title: 'Bottom Left Align Dialog' },
  { component: DialogBottomAlign, title: 'Bottom Align Dialog' },
  { component: DialogBottomRightAlign, title: 'Bottom Right Align Dialog' },
  { component: DialogSlideToTop, title: 'Slide to Top Dialog' },
  { component: DialogSlideToRight, title: 'Slide to Right Dialog' },
  { component: DialogZoomIn, title: 'Zoom In Dialog' },
];

export default function Page() {
  return (
    <PageWrapper
      showBackButton
      title="Dialog Components"
      description="A collection of dialog and modal components for user interactions"
    >
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
