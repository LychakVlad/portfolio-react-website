import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import MediumTitle from '../Titles/MediumTitle';
import HikingPhoto from '../../assets/hiking.JPG';

const About = () => {
  return (
    <div
      id="about"
      className="section container xl  mx-auto min-h-full text-indigo-950 flex items-center font-poppins flex-col mb-36"
    >
      <div className="text-center my-20">
        <LargeTitle title="About me" />
      </div>
      <div className="grid  grid-cols-3">
        <div className=" bg-white dark:bg-indigo-900 p-12  rounded-3xl  mr-12 hover:scale-105 transition-transform duration-300 cursor-default relative group shadow-xl">
          <MediumTitle title="Experience" />
          <p className="text-slate-600 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            adipisci quis repudiandae placeat libero sed, alias ullam veniam
            velit, cupiditate eius. Fuga voluptatum repudiandae quod nostrum
            fugiat asperiores, reprehenderit quidem autem sit necessitatibus
            corporis officia reiciendis beatae.
          </p>
        </div>
        <div className=" bg-white p-12  dark:bg-indigo-900 rounded-3xl mr-12 hover:scale-105 transition-transform duration-300 cursor-default relative group shadow-xl">
          <MediumTitle title="Personal" />
          <p className="text-slate-600 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            adipisci quis repudiandae placeat libero sed, alias ullam veniam
            velit, cupiditate eius. Fuga voluptatum repudiandae quod nostrum
            fugiat asperiores, reprehenderit quidem autem sit necessitatibus
            corporis officia reiciendis.
          </p>
        </div>
        <div className=" bg-white  rounded-3xl  overflow-hidden relative shadow-xl">
          <img
            src={HikingPhoto}
            alt="photo"
            className=" object-contain object-center absolute bottom-0 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
