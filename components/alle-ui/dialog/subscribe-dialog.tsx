import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogCloseFull,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DialogSubscribe = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl">Subscribe blog for latest updates</DialogTitle>
          <DialogDescription className="text-base mt-4">
            Subscribe to our blog to stay updated with the latest posts and news. Simply enter your
            email address and click &apos;Subscribe&apos; to receive notifications.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grow-1 gap-3 my-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="abc@xyz.com" required />
        </div>
        <DialogFooter className="w-full flex gap-4">
          <DialogCloseFull>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogCloseFull>
          <DialogCloseFull>
            <Button className="w-full">Subscribe</Button>
          </DialogCloseFull>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSubscribe;
