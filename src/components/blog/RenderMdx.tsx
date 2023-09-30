'use client';

import React from 'react';
import { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

interface Props {
  article: Blog;
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  Image,
};

const RenderMdx: React.FC<Props> = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code);
  return (
    <div className="prose prose-lg max-w-max">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
