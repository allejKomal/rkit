import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const DialogFullScreenDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Dialog</Button>
      </DialogTrigger>
      <DialogContent className="mb-8 flex h-[calc(100vh-2rem)] min-w-[calc(100vw-2rem)] flex-col justify-between gap-0 p-0">
        <ScrollArea className="flex flex-col justify-between overflow-hidden">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6">Travel Information</DialogTitle>
            <DialogDescription asChild>
              <div className="p-6">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  <div className="space-y-1">
                    <p>
                      <strong>Destination:</strong> Bali, Indonesia
                    </p>
                    <p>
                      Bali is a tropical paradise known for its stunning beaches, lush rice
                      terraces, and rich culture. Whether youre looking for relaxation or adventure,
                      this island offers something for every traveler. My journey through Bali was
                      nothing short of magical, with unforgettable experiences and jaw-dropping
                      landscapes.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Highlights of the Trip:</strong>
                    </p>
                    <ul>
                      <li>Surfing the waves at Uluwatu Beach</li>
                      <li>Exploring the Sacred Monkey Forest Sanctuary</li>
                      <li>Hiking up Mount Batur to watch the sunrise</li>
                      <li>Yoga retreat in Ubuds tranquil jungles</li>
                      <li>Visiting the famous Tanah Lot Temple at sunset</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Travel Tips:</strong>
                    </p>
                    <ul>
                      <li>Dont forget your sunscreen - Balis sun is intense!</li>
                      <li>Respect local customs and dress modestly when visiting temples</li>
                      <li>Renting a scooter is one of the best ways to explore the island</li>
                      <li>Always carry a refillable water bottle - the heat can be overwhelming</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Local Cuisine:</strong>
                    </p>
                    <p>
                      Balis food scene is vibrant, with a mix of traditional dishes and modern
                      twists. Some must-try foods include:
                    </p>
                    <ul>
                      <li>Nasi Goreng (Indonesian fried rice)</li>
                      <li>Satay skewers with peanut sauce</li>
                      <li>Babi Guling (suckling pig)</li>
                      <li>Lawar (traditional Balinese salad)</li>
                      <li>Fresh coconut juice</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Accommodation Recommendations:</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>Ubud:</strong> Green Field Hotel – an eco-friendly retreat
                        surrounded by rice paddies.
                      </li>
                      <li>
                        <strong>Canggu:</strong> The Slow – a chic boutique hotel with surf-inspired
                        décor.
                      </li>
                      <li>
                        <strong>Seminyak:</strong> W Bali – luxury resort with stunning beach views
                        and world-class amenities.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Local Experiences:</strong>
                    </p>
                    <ul>
                      <li>Private cooking class with a local chef</li>
                      <li>Traditional Balinese dance performance at Uluwatu Temple</li>
                      <li>Morning meditation and sunrise yoga overlooking the ocean</li>
                      <li>A day trip to the Nusa Islands for snorkeling and diving</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Final Thoughts:</strong>
                    </p>
                    <p>
                      Bali is an incredible destination that offers a perfect blend of adventure,
                      relaxation, culture, and natural beauty. Whether youre traveling solo, with
                      friends, or as a couple, this island will leave you with lifelong memories. I
                      cant wait to return!
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </ScrollArea>
        <DialogFooter className="px-6 pb-6 sm:justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button type="button">Read More</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFullScreenDemo;
