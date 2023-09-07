import { queryString } from '@/lib/queryString';

export const getRepositories = (params: any) => {
  const p = queryString(params);
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_V1}/projects?${p}`);
};
