import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import ProjectItem from '../UI/ProjectItem';
import Allegria from '../../assets/allegria.png';
import News from '../../assets/news.png';
import ExDrop from '../../assets/ExDrop.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce website',
    description:
      'The e-commerce clothing shop is a website that allows users to browse and purchase a variety of clothing products online. It includes a product catalog, shopping cart, checkout process, form validation, and other features.',
    techs: ['HTML', 'Js', 'Scss', 'Gulp', 'Pug', 'Webpack'],
    link2: 'https://github.com/LychakVlad/e-commerce-clothing-shop',
    link1: 'https://lychakvlad.github.io/e-commerce-clothing-shop/',
  };

  const secondProject = {
    title: 'Delivery service website',
    description:
      'The Delivery Service Website is a business-oriented web application that enables users to calculate delivery costs, track packages, and find locations on an interactive map. ',
    techs: ['React', 'SCSS', 'Jest'],
    link2: 'https://github.com/LychakVlad/delivery-service-website',
    link1: 'https://ex-drop-delivery.netlify.app/',
  };

  const thirdProject = {
    title: 'News website',
    description:
      'The news website allows users to browse news articles from multiple news tellers without leaving one page, read full articles, and filter articles by source or through the keyword search bar.',
    techs: ['React', 'Tailwind', 'RESTful API'],
    link2: 'https://github.com/LychakVlad/news-website',
    link1: 'https://lychakvlad.github.io/news-website/',
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
        <ProjectItem link={Allegria} project={firstProject} />
        <ProjectItem link={ExDrop} project={secondProject} />
        <ProjectItem link={News} project={thirdProject} />
      </div>
    </div>
  );
};

export default Projects;
