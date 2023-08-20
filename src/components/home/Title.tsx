import React from 'react';

const Title = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-purple-700 text-7xl font-extrabold">Lê Văn Thời</p>
      <p className="text-muted-foreground font-semibold text-xl">Web Developer</p>
      <div className="mb-3">
        <span className="w-fit text-sm font-medium text-secondary-foreground bg-secondary px-4 mr-2 rounded-xl">
          React
        </span>
        <span className="w-fit text-sm font-medium text-secondary-foreground bg-secondary px-4 rounded-xl">
          Nextjs
        </span>
      </div>
    </div>
  );
};

export default Title;
