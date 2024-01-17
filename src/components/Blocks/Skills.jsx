import React from 'react';
import HTML from '../../assets/html.svg';
import CSS3 from '../../assets/css3.svg';
import JavaScript from '../../assets/js.svg';
import ReactIcons from '../../assets/react.svg';
import Tailwind from '../../assets/tailwind.svg';
import Sass from '../../assets/sass.svg';
import Express from '../../assets/express-js.svg';
import Node from '../../assets/node-js.svg';
import TypeScript from '../../assets/typescript.svg';
import PostgreSQL from '../../assets/postgresql.svg';
import MongoDB from '../../assets/mongodb.svg';
import SkillItem from '../UI/SkillItem';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import Redux from '../../assets/redux.svg';

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
        <SkillItem link={HTML} title={'HTML5'} />
        <SkillItem link={CSS3} title={'CSS3'} />
        <SkillItem link={JavaScript} title={'JavaScript'} />
        <SkillItem link={ReactIcons} title={'React'} />
        <SkillItem link={TypeScript} title={'TypeScript'} />
        <SkillItem link={Node} title={'Node JS'} />
        <SkillItem link={Express} title={'ExpressJs'} />
        <SkillItem link={Redux} title={'Redux'} />
        <SkillItem link={Tailwind} title={'Tailwind'} />
        <SkillItem link={Sass} title={'SASS'} />
        <SkillItem link={MongoDB} title={'Mongo DB'} />
        <SkillItem link={PostgreSQL} title={'PostgreSQL'} />
      </div>
    </div>
  );
};

export default Skills;
