import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import ProjectItem from '../UI/ProjectItem';
import Allegria from '../../assets/allegria.png';
import News from '../../assets/news.png';
import ToDo from '../../assets/ToDo.png';
import Crypto from '../../assets/crypto.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce website',
    description:
      'The e-commerce clothing shop is a website that allows users to browse and purchase a variety of clothing products online. It includes a product catalog, shopping cart, checkout process, form validation, and other features. This is a prototype without a backend part. ',
    techs: ['HTML', 'Js', 'Sass', 'Gulp', 'Pug', 'Webpack'],
    link2: 'https://lychakvlad.github.io/e-commerce-clothing-shop/',
    link1: 'https://github.com/LychakVlad/e-commerce-clothing-shop',
  };

  const secondProject = {
    title: 'News website',
    description:
      'The news website allows users to browse news articles from multiple news tellers without leaving one page, read full articles, and filter articles by source or through the keyword search bar. Due to hosting, the first API loading might take up to 30sec.',
    techs: ['React', 'Tailwind', 'HTML', 'Figma'],
    link2: 'https://github.com/LychakVlad/news-website',
    link1: 'https://lychakvlad.github.io/news-website/',
  };

  const thirdProject = {
    title: 'Crypto Check App',
    description:
      'Cryptocurrency tracker app. Allows users to track the prices of cryptocurrencies. The project uses the CoinGecko API to fetch real-time cryptocurrency data and provides a user-friendly interface with a responsive design.',
    techs: ['React', 'Tailwind', 'HTML'],
    link2: 'https://github.com/LychakVlad/crypto-check-app',
    link1: 'https://lychakvlad.github.io/crypto-check-app/',
  };

  const fourthProject = {
    title: 'TO-DO App',
    description:
      'The application allows users to create and manage their to-do lists with features such as adding and deleting tasks. The project includes a simple, yet modern user interface that provides a responsive design for optimal user experience on both desktop and mobile devices.',
    techs: ['React', 'Tailwind', 'HTML'],
    link2: 'https://github.com/LychakVlad/react-todo-app',
    link1: 'https://lychakvlad.github.io/react-todo-app/',
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
        <ProjectItem link={News} project={secondProject} />
        <ProjectItem link={Crypto} project={thirdProject} />
        <ProjectItem link={ToDo} project={fourthProject} />
      </div>
    </div>
  );
};

export default Projects;
