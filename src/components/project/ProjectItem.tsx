import React from 'react';
// import ProjectContent from './ProjectContent';
// import ProjectImage from './ProjectImage';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  project: any;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex even:flex-row-reverse my-16 gap-2">
      {/* Content */}
      <div className="basis-1/2 flex flex-col gap-4">
        <Link href={project.html_url}>
          <b className="text-3xl hover:underline hover:text-purple-700 duration-200">
            {project.name}
          </b>
        </Link>
        <p className="text-secondary-foreground">Category</p>
        <p className="text-base text-muted-foreground">{project.description}</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 border border-spacing-2 rounded-md">
            {project.private ? 'Private' : 'Public'}
          </span>
          <span>{project.language}</span>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project?.topics?.length > 0
            ? project?.topics?.map((item: any) => (
                <span key={item} className="py-1 px-3 bg-input rounded-md uppercase">
                  {item}
                </span>
              ))
            : ''}
          <span></span>
        </div>
      </div>
      {/* Image */}
      <div className="basis-1/2 flex-grow">
        <div className="w-full h-full relative overflow-hidden border border-spacing-2">
          <Image src="/proj1.png" alt="hook" width={650} height={300} className="h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
