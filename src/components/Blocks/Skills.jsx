import React from 'react';
import Html from '../../assets/html.svg';
import Css from '../../assets/css3.svg';
import Js from '../../assets/js.svg';
import Ts from '../../assets/ts.svg';
import ReactIcons from '../../assets/react.svg';
import Tailwind from '../../assets/tailwind.svg';
import Sass from '../../assets/sass.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import Pug from '../../assets/pug.svg';
import Gulp from '../../assets/gulp.svg';
import Git from '../../assets/git.svg';
import Node from '../../assets/node-js.svg';
import Npm from '../../assets/npm.svg';
import SkillItem from '../UI/SkillItem';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import VS from '../../assets/vs.svg';
import Redux from '../../assets/redux.svg';
import Figma from '../../assets/figma.svg';

const Skills = () => {
  return (
    <div
      id="skills"
      className="section container xl  mx-auto min-h-full text-indigo-950 flex items-center font-poppins flex-col mb-24 px-8"
    >
      <div className="text-center my-20">
        <LargeTitle title="My Tech Stack" />
        <LargeSubTitle title="Technologies I have been working with recently" />
      </div>
      <div className="grid grid-cols-6 grid-rows-2 max-sm:grid-cols-2 gap-14 max-md:grid-cols-3 max-lg:grid-cols-3">
        <SkillItem link={Html} title={'HTML5'} />
        <SkillItem link={Css} title={'CSS3'} />
        <SkillItem link={Js} title={'Java Script'} />
        <SkillItem link={Ts} title={'Type Script'} />
        <SkillItem link={ReactIcons} title={'React'} />
        <SkillItem link={Redux} title={'Redux'} />
        <SkillItem link={Tailwind} title={'Tailwind'} />
        <SkillItem link={Sass} title={'SASS'} />
        <SkillItem link={Bootstrap} title={'Bootstrap'} />
        <SkillItem link={Pug} title={'Pug'} />
        <SkillItem link={Gulp} title={'Gulp'} />
        <SkillItem link={VS} title={'VS Code'} />
        <SkillItem link={Figma} title={'Figma'} />
        <SkillItem link={Git} title={'Git'} />
        <SkillItem link={Npm} title={'Npm'} />
        <SkillItem link={Node} title={'Node JS'} />
        <p className="text-center flex  items-center opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer group max-lg:opacity-100 font-normal  text-2xl text-slate-500 my-3 group-hover:dark:text-white max-lg:dark:text-white col-start-5 col-end-7 max-lg:col-start-2 max-lg:col-end-4 max-sm:col-start-1 max-sm:col-end-3 max-sm:justify-center">
          To be continued...
        </p>
      </div>
    </div>
  );
};

export default Skills;
