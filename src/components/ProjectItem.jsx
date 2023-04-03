import React from 'react';
import MediumTitle from './Titles/MediumTitle';
import GitHub from '../assets/github.svg';
import Search from '../assets/search.svg';

const ProjectItem = ({ link, project }) => {
  return (
    <div className="flex rounded-3xl overflow-hidden bg-white dark:bg-neutral-100 p-16 items-center mb-14 hover:scale-105 transition-transform duration-300 cursor-default shadow-xl">
      <div className=" max-w-sm mr-8">
        <MediumTitle title={project.title} />
        <p className="text-slate-600">{project.description}</p>
        <div className="mt-5">
          {project.techs.map((item) => (
            <span className=" p-1 px-5 bg-slate-300 rounded-md  mr-5 pointer-events-none">
              {item}
            </span>
          ))}
        </div>
        <div className="flex mt-8">
          <a
            href={project.link2}
            className="flex items-center mr-6 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GitHub}
              alt="github"
              style={{ width: '36px' }}
              className="mr-2"
            />
            <p className="relative group">
              <span className="relative">View Code </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-indigo-950 transition-width duration-300 group-hover:w-full"></span>
            </p>
          </a>
          <a
            href={project.link1}
            className="flex items-center mr-6 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Search}
              alt="search"
              style={{ width: '30px' }}
              className="mr-2"
            />
            <p className="relative group">
              <span className="relative">Live Preview </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-indigo-950 transition-width duration-300 group-hover:w-full"></span>
            </p>
          </a>
        </div>
      </div>
      <div className="" style={{ width: '600px' }}>
        <img src={link} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectItem;
