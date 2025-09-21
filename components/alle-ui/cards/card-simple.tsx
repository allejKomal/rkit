'use client';

import React from 'react';

import { Coins } from 'lucide-react';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function CardSimple() {
  return (
    <Card className="bg-card text-foreground">
      <CardHeader>
        {/* Header Row */}
        <div className="flex justify-between items-center">
          {/* Title & Description */}
          <div className="flex flex-col gap-1.5">
            <CardTitle className="text-lg">Staking</CardTitle>
            <CardDescription>Stake your tokens to earn rewards</CardDescription>
          </div>

          {/* APY Tag */}
          <div className="bg-green-100 dark:bg-green-900 rounded-md px-3 py-1">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium whitespace-nowrap">
              Up to 10% APY
            </span>
          </div>
        </div>

        {/* Token Area */}
        <div
          className="flex flex-col gap-2 bg-muted dark:bg-muted/30 p-4 mt-4 rounded-md relative"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 55%, 85% 100%, 0 100%)',
          }}
        >
          <span className="text-sm font-medium text-muted-foreground">
            Available Tokens to Stake
          </span>

          <div className="flex items-center gap-6">
            {/* Token Amount */}
            <span className="text-3xl font-bold text-foreground">1000</span>

            {/* Token Label */}
            <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-md border">
              <Coins className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Tokens</span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CardSimple;
