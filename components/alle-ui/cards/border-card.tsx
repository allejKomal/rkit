import React from 'react';

import { Card } from '@/components/ui/card';

function BorderCard() {
  return (
    <Card className="border-l-6 border-l-primary rounded-none p-4 flex flex-col gap-2">
      <span className="text-primary">Unique visitors</span>
      <p className="text-4xl font-bold">23,000 users</p>
    </Card>
  );
}

export default BorderCard;
