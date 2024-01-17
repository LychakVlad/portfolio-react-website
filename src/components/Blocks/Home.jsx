import React from 'react';
import Photo from '../../assets/photo.jpg';

const Home = () => {
  return (
    <div
      className="transform translate-z-0 container xl m-auto min-h-screen text-indigo-950 flex items-center justify-around font-poppins max-lg:flex-col px-8 max-lg 
      max-lg:justify-center max-lg:min-h-full pt-16 relative max-lg:pt-28 max-md:pt-36"
    >
      <div>
        <h1 className="font-bold  text-7xl   mx-4  leading-tight dark:text-neutral-100 max-sm:text-5xl">
          Hi <span className="inline-block animate-waving-hand z-10">👋 </span>
          <br /> My name is{' '}
          <p className="bg-gradient-to-r from-blue-400 to-emerald-400 dark:to-blue-600 dark:from-indigo-400 text-transparent bg-clip-text">
            Vladislav Lychak
          </p>
        </h1>
        <h2 className="text-5xl font-bold  m-4  leading-tight text-indigo-900 max-w-lg  dark:text-neutral-100 max-lg:text-4xl">
          Full-Stack developer
        </h2>
        <h3 className="font-medium text-3xl  m-4  leading-tight text-indigo-900 max-w-md dark:text-neutral-200 max-lg:text-xl ">
          I make usefull, responsive web-applications and websites
        </h3>
      </div>
      <div className="transform translate-z-0 perspective-1000">
        <div className="shape z-10 animate-morph overflow-hidden relative w-[380px]  max-md:w-[320px] max-lg:mt-10 max-md:mt-4 bg-neutral-100 dark:bg-indigo-950">
          <img
            src={Photo}
            alt="Me"
            className="transform translate-z-0 object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
