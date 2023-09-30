import BlogInfo from '@/components/blog/BlogInfo';
import RenderMdx from '@/components/blog/RenderMdx';
import Tags from '@/components/blog/Tags';
import ImageBlog from '@/components/global/ImageBlog';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

const Blog: React.FC<Props> = ({ params }) => {
  const article = allBlogs?.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!article) notFound();
  return (
    <article className="my-16">
      <h1 className="uppercase leading-snug text-center text-7xl font-extrabold drop-shadow-textpurpleLight dark:drop-shadow-textpurpleDark">
        {article.title}
      </h1>
      <BlogInfo blog={article} />
      {article?.tags && <Tags tags={article?.tags} />}
      <ImageBlog article={article} sizes="100vw" className="my-8" />
      <RenderMdx article={article} />
    </article>
  );
};

export default Blog;
