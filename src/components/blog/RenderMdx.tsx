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
    <div
      className="prose prose-lg max-w-max 
    prose-blockquote:bg-purple-200 
    prose-blockquote:border-purple-600 
      prose-blockquote:p-2
      prose-blockquote:rounded-r-lg
      
      prose-li: marker:text-purple-700 dark:marker:text-purple-300
      

      dark:prose-invert
      dark:prose-blockquote:bg-purple-600/20
      "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
