import React from 'react';
import { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  article: Blog;
}

const RenderMdx: React.FC<Props> = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code);
  return <MDXContent />;
};

export default RenderMdx;
