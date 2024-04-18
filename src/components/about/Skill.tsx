'use client';

import Image from 'next/image';
import React, { useState } from 'react';
// import { motion } from 'framer-motion';

const dataSkills = [
  {
    id: 1,
    title: 'Reactjs',
    sub: '',
    image: 'reactjs',
  },
  {
    id: 2,
    title: 'React Native',
    sub: '',
    image: 'reactnative',
  },
  {
    id: 3,
    title: 'Nextjs',
    sub: '',
    image: 'nextjs',
  },
  {
    id: 4,
    title: 'Android Java',
    sub: '',
    image: 'java',
  },
  {
    id: 5,
    title: 'TailwindCSS',
    sub: '',
    image: 'tailwindcss',
  },
  {
    id: 6,
    title: 'Framer Motion',
    sub: '',
    image: 'framer-motion',
  },
  {
    id: 7,
    title: 'PHP',
    sub: '',
    image: 'php',
  },
  {
    id: 8,
    title: 'Laravel',
    sub: '',
    image: 'laravel',
  },
  {
    id: 9,
    title: 'Mongodb',
    sub: '',
    image: 'mongodb',
  },
];

const Skill = () => {
  const [skill, setSkill] = useState<string>('');
  return (
    <section className="my-8 relative py-8">
      <h3 className="uppercase text-2xl text-center">Skills & Tools</h3>
      <p className="text-center">For those who know what they’re looking for..</p>

      <div className="relative flex justify-center items-center my-10 z-20">
        <ul className="w-[90vw] md:w-[40vw] grid grid-cols-5 gap-3">
          {dataSkills?.map((item, key) => (
            <li
              key={item.id}
              onMouseEnter={() => {
                setSkill(item.title);
              }}
              onMouseLeave={() => {
                setSkill('');
              }}
              //   initial={{
              //     x: key % 2 == 0 ? 100 : -100,
              //   }}
              //   whileInView={{
              //     y: 0,
              //     x: 0,
              //   }}
              //   transition={{
              //     duration: 1,
              //   }}
              className="w-full h-full cursor-pointer p-4 rounded-lg bg-purple-200 flex justify-center items-center"
            >
              <Image src={`/skills/${item.image}.png`} alt={item.title} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
      <div className="z-0 absolute bg-[#F7AB0A]/10 w-full top-0 skew-x-12 left-0 h-full flex items-end justify-start xl:items-start  xl:justify-end">
        <h3 className="w-[35vw] sm:w-[32vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 pt-11 pb-6 tracking-[20px] transition-all animate-[bounce_2s_ease-in-out_infinite] z-0">
          {skill}
        </h3>
      </div>

      <p>Đang Phát triển tiếp</p>
    </section>
  );
};

export default Skill;
