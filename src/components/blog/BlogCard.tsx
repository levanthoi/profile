import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  article: Blog;
}

const BlogCard: React.FC<Props> = ({ article }) => {
  return (
    <article className="relative group ">
      <Link href={article.url} className="h-full overflow-hidden rounded-xl">
        <Image
          src={article.image.filePath.replace('../public', '')}
          width={article.image.width}
          height={article.image.height}
          alt={article.title}
          placeholder="blur"
          blurDataURL={article.image.blurhashDataUrl}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          priority
        />
      </Link>

      <Link href={article.url} className="mt-2 inline-block">
        <h1
          className="bg-gradient-to-r from-purple-500/50 to-purple-700/50  dark:from-purple-400
              dark:to-purple-500
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
        >
          {article.title}
        </h1>
      </Link>
      <p>{article.description}</p>
    </article>
  );
};

export default BlogCard;
