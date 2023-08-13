export const getRepositories = () => {
  //   const x = `${process.env.NEXT_PUBLIC_API_GITHUB}`;
  const token = `${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
  return fetch(`${process.env.NEXT_PUBLIC_API_GITHUB}`, {
    headers: { Authorization: 'token ' + token },
  });
};
