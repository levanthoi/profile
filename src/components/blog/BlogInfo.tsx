import { Blog } from 'contentlayer/generated';
import { Eye, Hourglass, UserSquare2 } from 'lucide-react';
import React from 'react';

interface Props {
  blog: Blog;
}

const BlogInfo: React.FC<Props> = ({ blog }) => {
  return (
    <div className="my-8 flex items-center justify-center sm:gap-20 gap-8 flex-wrap">
      <div className="flex">
        <UserSquare2 color="#9c40ce" />
        <strong>{blog.author}</strong>
      </div>
      <div className="flex">
        <Hourglass color="#9c40ce" />
        <span className="text-secondary-foreground font-medium">
          {blog.readingTime?.text || ''}
        </span>
      </div>
      <div className="flex">
        <Eye color="#9c40ce" />
        1000 &nbsp; <span>views</span>
      </div>
    </div>
  );
};

export default BlogInfo;
