import { DownloadCloud } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export const DialogWithIcon = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex-row gap-4 items-center">
          <div className="mb-4">
            <div className="bg-primary size-9 flex items-center justify-center rounded-full">
              <DownloadCloud className="size-5 text-background" />
            </div>
          </div>
          <div>
            <AlertDialogTitle>New Update is Available</AlertDialogTitle>
            <AlertDialogDescription>
              New update is available for your application. Please update to the latest version to
              enjoy new features.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <ol className="text-muted-foreground my-2 flex list-decimal flex-col gap-2 pl-6 text-sm">
          <li>New analytics widgets for daily/weekly metrics</li>
          <li>Simplified navigation menu</li>
          <li>Dark mode support</li>
          <li>Timeline: 6 weeks</li>
          <li>Follow-up meeting scheduled for next Tuesday</li>
        </ol>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Update Now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
