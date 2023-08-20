import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { getRandomColor } from '@/lib/helpers';

interface Props {
  Icon: LucideIcon;
  text: string | number;
  tooltip: string;
  bg: string;
}

const ProjectIcon = ({ Icon, text, tooltip, bg }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={`text-white px-2 py-1 flex gap-2 items-center w-fit rounded-md ${bg}`}>
            {text}
            <Icon color="white" size={16} strokeWidth={1} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProjectIcon;
