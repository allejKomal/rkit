'use client';

import { Clock, Percent, TrendingDown, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const data = [
  {
    name: 'Unique visitors',
    stat: '10,450',
    change: '-12.5%',
    changeType: 'negative',
    text: 'vs last month',
    icon: Users,
  },
  {
    name: 'Bounce rate',
    stat: '56.1%',
    change: '+1.8%',
    changeType: 'positive',
    text: 'compared to previous period',
    icon: TrendingDown,
  },
  {
    name: 'Visit duration',
    stat: '5.2min',
    change: '+19.7%',
    changeType: 'positive',
    text: 'month-over-month',
    icon: Clock,
  },
  {
    name: 'Conversion rate',
    stat: '3.2%',
    change: '-2.4%',
    changeType: 'negative',
    text: 'vs last 30 days',
    icon: Percent,
  },
];

export default function StatsAdvanced() {
  return (
    <div className="flex items-center justify-center p-10 w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {data.map(item => {
          const isPositive = item.changeType === 'positive';
          const changeColor = isPositive ? 'text-green-600' : 'text-red-600';

          const Icon = item.icon;
          const iconBgColor = isPositive
            ? 'bg-green-100 text-green-600'
            : 'bg-red-100 text-red-600';

          return (
            <Card key={item.name} className="p-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <div className={cn('p-2 rounded-md', iconBgColor)}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-right">
                  <div className={cn('text-sm font-medium', changeColor)}>
                    {item.change} {isPositive ? 'increase' : 'decrease'}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.text}</div>
                </div>
              </div>

              <CardContent className="p-0">
                <dl>
                  <dd className="text-3xl font-semibold text-foreground">{item.stat}</dd>
                  <dt className="text-sm font-medium text-muted-foreground">{item.name}</dt>
                </dl>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
