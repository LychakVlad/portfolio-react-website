import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import ProjectItem from '../ProjectItem';
import Allegria from '../../assets/allegria.png';
import ToDo from '../../assets/ToDo.png';
import Portfolio from '../../assets/portfolio.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce-website',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for content',
    techs: ['Pug', 'Js', 'Scss', 'Gulp'],
    link1: 'https://lychakvlad.github.io/e-commerce-clothing-shop/',
    link2: 'https://github.com/LychakVlad/e-commerce-clothing-shop',
  };

  const secondProject = {
    title: 'TO-DO app',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for content',
    techs: ['React', 'Tailwind', 'HTML'],
    link1: 'https://lychakvlad.github.io/react-todo-app/',
    link2: 'https://github.com/LychakVlad/react-todo-app',
  };

  const thirdProject = {
    title: 'Portfolio website',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for content',
    techs: ['React', 'Tailwind', 'HTML'],
    link1: 'https://github.com/LychakVlad/portfolio-react-app',
    link2: 'https://github.com/LychakVlad/portfolio-react-app',
  };

  return (
    <div
      id="projects"
      className="container  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col mb-24"
    >
      <div className="text-center my-20">
        <LargeTitle title="Projects" />
        <LargeSubTitle title="Things i have built so far" />
      </div>
      <div>
        <ProjectItem link={Allegria} project={firstProject} />
        <ProjectItem link={Portfolio} project={thirdProject} />
        <ProjectItem link={ToDo} project={secondProject} />
      </div>
    </div>
  );
};

export default Projects;
