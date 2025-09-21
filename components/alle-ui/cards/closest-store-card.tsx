import { ClockIcon, MapPinIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export function ClosestStoresCard() {
  return (
    <Card
      className="max-w-sm w-full rounded-xl shadow-lg
      bg-white text-gray-900
      dark:bg-[#1C1734] dark:text-white
    "
    >
      <CardHeader>
        <h3 className="text-lg font-semibold">Closest stores</h3>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Location input */}
        <div className="flex items-center gap-2">
          <Input type="text" defaultValue="5055" />
          <Button variant="secondary">
            <MapPinIcon className="w-4 h-4 mr-1" />
            Use my location
          </Button>
        </div>

        {/* Store 1 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">POINT Bergen Sentrum</h4>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full
              bg-pink-600 text-white
            "
            >
              Closed
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Strandgaten 55-57, 6007 Bergen</p>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <ClockIcon className="w-4 h-4" />
            9:00 - 19:00
          </div>
        </div>

        {/* Store 2 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">POIVestkanten</h4>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full
              bg-emerald-500 text-white
            "
            >
              Open
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Strandgaten 55-57, 6007 Bergen</p>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <ClockIcon className="w-4 h-4" />
            9:00 - 21:00
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">View all</Button>
      </CardFooter>
    </Card>
  );
}
