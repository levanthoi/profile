import BlogCard from '@/components/blog/BlogCard';
import { allBlogs, Blog } from 'contentlayer/generated';
import React from 'react';

const Blogs: React.FC = () => {
  // console.log(allBlogs);

  return (
    // <Suspense fallback={<p>Loading weather...</p>}>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
      {allBlogs?.map((blog: Blog, index) => <BlogCard key={index} article={blog} />)}
    </div>
    // </Suspense>
  );
};

export default Blogs;
