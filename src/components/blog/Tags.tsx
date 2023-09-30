import Link from 'next/link';
import React from 'react';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <center className="flex flex-wrap justify-center gap-4">
      {tags?.map((tag: string, ind) => (
        <Link key={ind} href={`/categories/${tag}`}>
          <span className="sm:mx-4 mx-1 my-3 py-2 px-4 text-white rounded-md bg-purple-900">
            &#35;{tag}
          </span>
        </Link>
      ))}
    </center>
  );
};

export default Tags;
