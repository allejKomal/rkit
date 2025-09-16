import { JSX } from 'react';

import { Check, DownloadCloud, ImageIcon, Music, User2Icon } from 'lucide-react';

import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Research',
    description:
      'Gather information and analyze requirements to understand the problem and define objectives.',
    icon: <DownloadCloud />,
  },
  {
    title: 'Planning',
    description:
      'Create a roadmap, define the scope, and outline the necessary steps to achieve the goal.',
    icon: <Music />,
  },
  {
    title: 'Design',
    description:
      'Develop wireframes, mockups, and prototypes to visualize the structure and user experience.',
    icon: <User2Icon />,
  },
  {
    title: 'Development',
    description:
      'Write code, integrate features, and build the core functionality of the application.',
    icon: <ImageIcon />,
  },
];

function Timeline07() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto">
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {steps.map(({ title, description, icon }, index) => (
          <Timeline07Item
            key={index}
            title={title}
            description={description}
            icon={icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

type Timeline07ItemProps = {
  title?: string;
  description?: string;
  icon?: JSX.Element;
  index?: number;
};

function Timeline07Item({ title, description, icon, index }: Timeline07ItemProps) {
  return (
    <div key={index} className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline Icon */}
      <div
        className={cn(
          'absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground/40 flex items-center justify-center rounded-full bg-accent ring-8 ring-background'
        )}
      >
        <span className="font-semibold text-lg [&_svg]:size-5">
          {icon ?? <Check className="h-5 w-5" />}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {title && (
          <div className="flex flex-col">
            <span className="font-medium tracking-[-0.015em]">{title}</span>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
        )}
        <Textarea className="bg-muted" />
      </div>
    </div>
  );
}

export { Timeline07, Timeline07Item };
