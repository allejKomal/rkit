import Link from 'next/link';

import { routeData } from '@/data/routes-data';

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full">
        <span className="text-xl">hi how are you</span>
        <div className="flex flex-col">
          {routeData.map((r, index) => (
            <Link key={r} href={r} className="hover:underline">
              {index + 1}. {r}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
