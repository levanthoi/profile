import BlogInfo from '@/components/blog/BlogInfo';
import RenderMdx from '@/components/blog/RenderMdx';
import TableOfContent from '@/components/blog/TableOfContent';
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
      <h1 className="uppercase leading-snug text-center text-xl md:text-3xl lg:text-7xl font-extrabold drop-shadow-mdtextpurpleLight dark:drop-shadow-textpurpleDark md:drop-shadow-textpurpleLight md:dark:drop-shadow-textpurpleDark">
        {article.title}
      </h1>
      <BlogInfo blog={article} />
      {article?.tags && <Tags tags={article?.tags} />}
      <ImageBlog article={article} sizes="100vw" className="my-8" />
      <TableOfContent article={article} />
      <RenderMdx article={article} />
    </article>
  );
};

export default Blog;
