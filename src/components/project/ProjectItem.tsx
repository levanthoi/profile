import React from 'react';
// import ProjectContent from './ProjectContent';
// import ProjectImage from './ProjectImage';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IContributors, IProject } from '@/types/project.type';
import { Copy, Eye, GitFork, Star } from 'lucide-react';
import ProjectIcon from './ProjectIcon';
import { useWindowDemension } from '@/hooks/useWindowDemension';

interface Props {
  project: IProject;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  const { trafficViews, trafficClones, languages, forks, stargazers_count, contributors } = project;

  // const {windowDemension} = useWindowDemension()
  return (
    <div className="lg:flex even:flex-row-reverse lg:my-16 lg:gap-8 my-8">
      {/* Content */}
      <div className="basis-1/2 flex flex-col gap-4">
        <Link href={project.html_url || '/'}>
          <b className="lg:text-3xl sm:text-2xl text-lg text-secondary-foreground hover:underline hover:text-purple-700 duration-200">
            {project.name}
          </b>
        </Link>
        <div className="flex justify-between sm:flex-row flex-col gap-2">
          <div className="flex gap-2">
            <ProjectIcon text={trafficViews.count} Icon={Eye} tooltip="Views" bg="bg-purple-500" />
            <ProjectIcon text={trafficClones.count} Icon={Copy} tooltip="Clones" bg="bg-sky-500" />
            <ProjectIcon text={forks} Icon={GitFork} tooltip="Forks" bg="bg-pink-500" />
            <ProjectIcon text={stargazers_count} Icon={Star} tooltip="Stars" bg="bg-teal-500" />
          </div>
          <div className="flex">
            {contributors?.map((contributor: IContributors) => (
              <Link key={contributor.id} href={contributor.html_url}>
                <Avatar>
                  <AvatarImage src={contributor.avatar_url} />
                  <AvatarFallback>{contributor.login}</AvatarFallback>
                </Avatar>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-base text-muted-foreground">{project.description}</p>
        <div className="flex gap-2 items-center">
          <span className="px-3 py-1 border border-spacing-2 rounded-md uppercase text-card-foreground">
            {project.visibility}
          </span>
          <ul className="flex gap-2">
            {Object.keys(languages).map((key: string) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
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
      <div className="lg:basis-1/2 lg:flex-grow hidden lg:block">
        <div className="w-full h-full relative overflow-hidden border border-spacing-2">
          <Image src="/proj1.png" alt="hook" width={650} height={300} className="h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
