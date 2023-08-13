import React from 'react';
import { ModeToggle } from '../global/darkmode';
import Avatar from './Avatar';
import Title from './Title';
import Navbar from '../global/Navbar';

const Main = () => {
  return (
    <div className="relative h-full flex items-center justify-center gap-4">
      <Avatar />
      <div>
        <Title />
        <Navbar />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Main;
