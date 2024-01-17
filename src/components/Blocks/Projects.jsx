import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import ProjectItem from '../UI/ProjectItem';
import Allegria from '../../assets/allegria.png';
import News from '../../assets/news.png';
import RecipeBlog from '../../assets/recipe-blog.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce website',
    description:
      'The e-commerce clothing shop is a website that allows users to browse and purchase a variety of clothing products online. It includes a product catalog, shopping cart, checkout process, form validation, and other features.',
    techs: ['HTML', 'Js', 'Scss', 'Gulp', 'Pug', 'Webpack'],
    link2: 'https://github.com/LychakVlad/e-commerce-clothing-shop',
    link1: 'https://lychakvlad.github.io/e-commerce-clothing-shop/',
  };

  const thirdProject = {
    title: 'Financial Management Application',
    description:
      'This web-based financial management application simplifies tracking income, managing expenses, calculating taxes, and budget planning, while ensuring secure user authentication.',
    techs: ['React', 'Redux', 'CSS', 'Firebase', 'Jest', 'Cypress'],
    link2: 'https://github.com/LychakVlad/financial-management-app',
    link1: 'https://budget-buddy-finance.netlify.app/',
  };

  const fourthProject = {
    title: 'Recipe Blog Website',
    description:
      'User-friendly recipe web app for creation, editing, and deletion. Ratings and comments supported. Intuitive interface for easy management and quick access across devices.',
    techs: [
      'NextJS',
      'Typescript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Tailwind',
      'Cypress',
      'AWS',
    ],
    link2: 'https://github.com/LychakVlad/my-food-blog',
    link1: 'https://my-food-blog-two.vercel.app/',
  };

  return (
    <div
      id="projects"
      className="  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col mb-24 px-8"
    >
      <div className="text-center my-20">
        <LargeTitle title="Projects" />
        <LargeSubTitle title="Things i have built so far" />
      </div>
      <div className="max-lg:w-3/4 max-md:w-auto transition-all duration-300">
        <ProjectItem link={News} project={thirdProject} />
        <ProjectItem link={RecipeBlog} project={fourthProject} />
        <ProjectItem link={Allegria} project={firstProject} />
      </div>
    </div>
  );
};

export default Projects;
