import ProjectItem from '@/components/project/ProjectItem';
import { getRepositories } from '@/services/project.service';
import React from 'react';

async function getProjects() {
  const res = await getRepositories();
  return res.json();
}

const page = async () => {
  const projects = await getProjects();

  return (
    <div className="my-4">
      {projects?.map((project: any) => <ProjectItem key={project?.id} project={project} />)}
    </div>
  );
};

export default page;
