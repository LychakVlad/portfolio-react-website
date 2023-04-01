import React from 'react';
import Html from '../assets/html.svg';
import Css from '../assets/css3.svg';
import Js from '../assets/js.svg';
import ReactIcons from '../assets/react.svg';
import Tailwind from '../assets/tailwind.svg';
import Sass from '../assets/sass.svg';
import Bootstrap from '../assets/bootstrap.svg';
import Pug from '../assets/pug.svg';
import Gulp from '../assets/gulp.svg';
import Git from '../assets/git.svg';
import Node from '../assets/node-js.svg';
import Npm from '../assets/npm.svg';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div className="section container xl  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col">
      <div className="text-center my-20">
        <h3 className="font-bold text-5xl leading-tight text-indigo-900  my-4">
          My Tech Stack
        </h3>
        <p className=" font-normal  text-3xl text-slate-600">
          Technologies I have been working with recently
        </p>
      </div>
      <div className="grid grid-cols-6 grid-rows-2 gap-14">
        <SkillItem link={Html} title={'HTML5'} />
        <SkillItem link={Css} title={'CSS3'} />
        <SkillItem link={Js} title={'Java Script'} />
        <SkillItem link={ReactIcons} title={'React'} />
        <SkillItem link={Tailwind} title={'Tailwind'} />
        <SkillItem link={Sass} title={'SASS'} />
        <SkillItem link={Bootstrap} title={'Bootstrap'} />
        <SkillItem link={Pug} title={'Pug'} />
        <SkillItem link={Gulp} title={'Gulp'} />
        <SkillItem link={Git} title={'Git'} />
        <SkillItem link={Npm} title={'Npm'} />
        <SkillItem link={Node} title={'Node JS'} />
      </div>
    </div>
  );
};

export default Skills;
