import React, { useEffect, useRef, useState } from 'react';

interface Props {
  // isLoading: boolean;
}

const Screen: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const text = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      text?.current?.classList.add('animate-title');
      setIsLoading(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-purple-500 text-white overflow-hidden fixed top-0 left-0 z-50  duration-1000`}
      style={isLoading ? { top: '-100%', opacity: 0 } : {}}
    >
      <p
        className={`text-9xl font-bold drop-shadow-sm`}
        // style={isLoading ? { animation: 'animate-title' } : {}}
        ref={text}
      >
        Onembes
      </p>
    </div>
  );
};

export default Screen;
