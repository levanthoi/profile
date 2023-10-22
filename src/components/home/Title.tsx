import React from 'react';

const Title = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-purple-700 text-7xl font-extrabold">Lê Văn Thời</p>
      <p className="text-muted-foreground font-semibold text-xl">Web/Mobile Developer</p>
      <div className="mb-3 flex flex-wrap gap-2 items-center">
        <span className="w-fit text-sm font-medium text-secondary-foreground bg-secondary p-2 rounded-xl">
          React/React-Native
        </span>
        <span className="w-fit text-sm font-medium text-secondary-foreground bg-secondary p-2 rounded-xl">
          Nextjs
        </span>
        <span className="w-fit text-sm font-medium text-secondary-foreground bg-secondary p-2 rounded-xl">
          PHP/Laravel
        </span>
      </div>
    </div>
  );
};

export default Title;
