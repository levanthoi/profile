import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImageBlog from '../global/ImageBlog';

interface Props {
  article: Blog;
}

const BlogCard: React.FC<Props> = ({ article }) => {
  // console.log(article);

  return (
    <article className="relative group ">
      <Link href={article.url} className="h-full overflow-hidden rounded-xl">
        <ImageBlog
          article={article}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <Link href={article.url} className="mt-2 inline-block">
        <h1 className="">
          <strong
            className="bg-gradient-to-r from-purple-500/50 to-purple-700/50  dark:from-purple-400
              dark:to-purple-500
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
          >
            {article.title}
          </strong>
        </h1>
      </Link>
      <p className="line-clamp-3">{article.description}</p>
    </article>
  );
};

export default BlogCard;
