import { Project } from '@/types/sanity.types';
import { client } from '@/sanity/client';

const PROJECTS_QUERY = `*[_type == "project"]`;
const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export const loadProjects = async () => {
  return await client.fetch<Project[]>(PROJECTS_QUERY, {}, options);
};

export const loadProject = async (slug: string) => {
  console.log('slug', slug);
  const projectAsArray = await client.fetch<Project>(
    PROJECT_QUERY,
    { slug },
    options
  );
  console.log('projectAsArray', projectAsArray);
  return projectAsArray;
};
