import ProjectItem from '@/components/project/ProjectItem';
import { getRepositories } from '@/services/project.service';
import React from 'react';

async function getProjects() {
  const queryParams = {
    visibility: 'public',
    per_page: 10,
    sort: 'pushed',
  };
  const res = await getRepositories(queryParams);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async () => {
  const projects = await getProjects();

  return (
    <div className="my-4">
      {projects.data?.length > 0
        ? projects.data?.map((project: any) => <ProjectItem key={project?.id} project={project} />)
        : 'Nothing'}
    </div>
  );
};

export default page;
