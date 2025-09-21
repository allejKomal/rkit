import React from 'react';

import { Clock10Icon, DollarSignIcon } from 'lucide-react';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';

function IconCard() {
  return (
    <Card className="w-64 mx-auto">
      <CardHeader className="flex flex-col items-center gap-2 py-8">
        <div className="mx-auto w-20 h-20 flex mb-4 items-center justify-center rounded-full bg-emerald-100/50">
          <DollarSignIcon className="w-6 h-6 text-emerald-600" />
        </div>
        <span className="text-base font-semibold text-gray-900">Invoicing</span>
        <p className="text-sm text-gray-500 text-center">
          Save time by invoicing based on reported time for accurate billing.
        </p>
      </CardHeader>
    </Card>
  );
}

export default IconCard;
