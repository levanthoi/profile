import Image from 'next/image';
import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div>
      <Image
        src="/avatar1.jpg"
        alt="Avatar onembes"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
