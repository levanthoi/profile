import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';

interface Props {
  article: Blog;
  sizes?: string;
  className?: string;
}

const ImageBlog: React.FC<Props> = ({ article, sizes, className }) => {
  return (
    <Image
      src={article.image.filePath.replace('../public', '')}
      width={article.image.width}
      height={article.image.height}
      alt={article.title}
      placeholder="blur"
      blurDataURL={article.image.blurhashDataUrl}
      className={`w-full h-fit object-cover object-center group-hover:scale-105 transition-all ease duration-300 ${className}`}
      sizes={sizes}
      priority
    />
  );
};

export default ImageBlog;
