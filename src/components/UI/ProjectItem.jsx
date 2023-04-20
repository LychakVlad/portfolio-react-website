import React from 'react';
import MediumTitle from '../Titles/MediumTitle';
import { ReactComponent as Githubs } from '../../assets/github-2.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

const ProjectItem = ({ link, project }) => {
  return (
    <div className="flex rounded-3xl overflow-hidden bg-white dark:bg-indigo-900 p-12 items-center mb-14 hover:scale-105 transition-transform duration-300 cursor-default shadow-xl max-lg:flex-col max-lg:p-0 ">
      <div className=" max-w-xs mr-8 max-lg:mr-0 max-md:px-4 max-md:pt-7 max-lg:pt-10 relative">
        <MediumTitle title={project.title} />
        <p className="text-slate-600 dark:text-slate-200 max-md:text-sm max-lg:text-xl">
          {project.description}
        </p>
        <div className="mt-5">
          {project.techs.map((item) => (
            <span
              className=" p-1 px-5 bg-slate-200 rounded-md  mr-5 pointer-events-none max-lg:text-sm max-md:mr-2 max-md:px-3 max-lg:mr-4"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex mt-8 max-md:flex-col">
          <a
            href={project.link2}
            className="flex items-center  hover:opacity-80 transition-opacity duration-300 cursor-pointer dark:fill-slate-200 fill-indigo-950 mr-2 max-md:mr-0 max-md:mb-3"
            target="_blank"
            rel="noreferrer"
          >
            <Githubs style={{ width: 38, height: 38, marginRight: 4 }} />
            <p className="relative group  ">
              <span className="relative dark:text-slate-200 ">View Code </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] dark:bg-slate-200 bg-indigo-950 transition-width duration-300 group-hover:w-full"></span>
            </p>
          </a>
          {project.noLink ? null : (
            <a
              href={project.link1}
              className="flex items-center  hover:opacity-80 transition-opacity duration-300 cursor-pointer dark:fill-slate-200  fill-indigo-950 ml-4 max-md:ml-0"
              target="_blank"
              rel="noreferrer"
            >
              <Search style={{ width: 34, height: 34 }} />
              <p className="relative group ml-2">
                <span className="relative dark:text-slate-200">
                  Live Preview{' '}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-indigo-950 dark:bg-slate-200 transition-width duration-300 group-hover:w-full"></span>
              </p>
            </a>
          )}
        </div>
      </div>
      <div className="w-[550px] max-lg:w-[450px] my-8 px-4 overflow-hidden max-md:w-[300px] max-h-80">
        <img src={link} alt={project.title} className="rounded-3xl" />
      </div>
    </div>
  );
};

export default ProjectItem;
