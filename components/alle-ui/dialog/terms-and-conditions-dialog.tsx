import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const DialogTermsAndCondition = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Dialog</Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0  sm:max-w-[800px]">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="px-6 py-4 bg-muted rounded-t-xl">Terms and Condition</DialogTitle>
          <div className="text-muted-foreground px-6 py-4 text-sm">
            <ol className="flex list-decimal flex-col gap-4 pl-6">
              <li>
                <strong className="text-primary">Eligibility:</strong> To access and use this
                service, you must be at least 18 years old or the age of majority in your
                jurisdiction, whichever is higher.
              </li>
              <li>
                <strong className="text-primary">Account Responsibility:</strong> You are solely
                responsible for the activity that occurs under your account. You must keep your
                login credentials, including your password, confidential and immediately notify us
                if you believe your account has been compromised.
              </li>
              <li>
                <strong className="text-primary">Usage of Service:</strong> You agree not to misuse
                or interfere with the normal operation of this service, including, but not limited
                to, attempts to disrupt, overload, or bypass security measures.
              </li>
              <li>
                <strong className="text-primary">Prohibited Activities:</strong> You may not engage
                in any activity that violates applicable laws or infringes upon the rights of
                others, including harassment, fraud, or the unauthorized use of intellectual
                property.
              </li>
              <li>
                <strong className="text-primary">Privacy and Data Collection:</strong> By using this
                service, you agree to our Privacy Policy, which details how we collect, store, and
                process your personal data. You consent to the use of your data for providing and
                improving our services.
              </li>
              <li>
                <strong className="text-primary">Intellectual Property:</strong> All content,
                trademarks, logos, and intellectual property associated with this service are the
                property of the company or its licensors. You are granted a limited, non-exclusive
                license to use the service for personal or internal business purposes.
              </li>
              <li>
                <strong className="text-primary">Modifications:</strong> We reserve the right to
                change, update, or modify these Terms and Conditions at any time. You will be
                notified of any significant changes, and continued use of the service constitutes
                your acceptance of the modified terms.
              </li>
              <li>
                <strong className="text-primary">Termination:</strong> We reserve the right to
                suspend or terminate your account and access to the service at our sole discretion
                if you violate these terms or engage in harmful behavior. You may also terminate
                your account at any time by notifying us.
              </li>
              <li>
                <strong className="text-primary">Limitation of Liability:</strong> To the fullest
                extent permitted by law, we are not liable for any indirect, incidental, special, or
                consequential damages arising from your use or inability to use the service.
              </li>
            </ol>
            <p className="mt-3">
              For the complete details of our agreement, including updates or changes, please read
              our full{' '}
              <a href="#" className="text-sky-600 hover:underline dark:text-sky-400">
                Terms & Conditions
              </a>
              .
            </p>
          </div>

          <DialogFooter className="px-6 pb-4 pt-4 flex justify-end bg-muted w-full">
            <div className="flex w-1/2 justify-between gap-4">
              <DialogClose asChild className="w-1/4">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild className="w-3/4">
                <Button type="button" className="flex-1">
                  I Agree
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogTermsAndCondition;
