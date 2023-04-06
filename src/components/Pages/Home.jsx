import React from 'react';
import Photo from '../../assets/photo.jpg';

const Home = () => {
  return (
    <div
      id="home"
      className="section container xl m-auto min-h-screen text-indigo-950 flex items-center justify-around font-poppins max-lg:flex-col px-8 max-lg 
      max-lg:justify-center max-lg:min-h-full pt-16"
    >
      <div>
        <h1 className="font-bold  text-7xl   mx-4  leading-tight dark:text-neutral-100 max-sm:text-5xl">
          Hi <span className="inline-block animate-waving-hand">👋 </span>
          <br /> My name is{' '}
          <p className="bg-gradient-to-r from-blue-400 to-emerald-400 dark:to-blue-600 dark:from-indigo-400 text-transparent bg-clip-text">
            Vladislav Lychak
          </p>
        </h1>
        <h2 className="font-medium text-3xl   m-4  leading-tight text-indigo-900 max-w-md dark:text-neutral-300 max-lg:text-xl">
          Front end developer with passion for problem solving and creating new
          things
        </h2>
      </div>
      <div>
        <div className="shape overflow-hidden shadow-2xl w-[400px]  max-md:w-[320px] max-lg:mt-10 max-md:mt-4">
          <img src={Photo} alt="My photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
