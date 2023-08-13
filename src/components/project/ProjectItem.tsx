import React from 'react';
import ProjectContent from './ProjectContent';
import ProjectImage from './ProjectImage';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  project: any;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex even:flex-row-reverse my-6 gap-2">
      {/* Content */}
      <div className="basis-1/2">
        <Link href={project.html_url}>
          <b className="text-2xl hover:underline hover:text-purple-700 duration-200">
            {project.name}
          </b>
        </Link>
        <p className="text-base">{project.description}</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 border border-spacing-2 rounded-md">
            {project.private ? 'Private' : 'Public'}
          </span>
          <span>{project.language}</span>
        </div>
      </div>
      {/* Image */}
      <div className="basis-1/2 flex-grow">
        <div className="w-full h-full">
          <Image src="/signature.png" alt="hook" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
