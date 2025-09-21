import React from 'react';

import { ArrowUpIcon, EditIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';

export default function StatisticsCard() {
  return (
    <Card className="p-8 space-y-2 items-center gap-0">
      <div className="inline-flex mb-2 items-center justify-center w-20 h-20 rounded-full bg-red-200 bg-opacity-20 text-red-700">
        <EditIcon className="w-6 h-6" />
      </div>
      <div className="text-4xl font-medium">10,000</div>
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Users</div>
      <div className="inline-flex items-center text-sm font-semibold text-green-500">
        <ArrowUpIcon className="w-4 h-4 mr-1" />
        12.5%
      </div>
    </Card>
  );
}
