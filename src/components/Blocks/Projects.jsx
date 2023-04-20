import React from 'react';
import LargeTitle from '../Titles/LargeTitle';
import LargeSubTitle from '../Titles/LargeSubTitle';
import ProjectItem from '../UI/ProjectItem';
import Allegria from '../../assets/allegria.png';
import News from '../../assets/news.png';
import ToDo from '../../assets/ToDo.png';
import Crypto from '../../assets/crypto.png';
import Portfolio from '../../assets/portfolio.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce website',
    description:
      'This is an e-commerce website built with JavaScript, Gulp, Webpack, Pug, and Sass. It includes a product catalog, shopping cart, checkout process, form validation, and other features. ',
    techs: ['Pug', 'Js', 'Sass', 'Gulp'],
    link1: 'https://lychakvlad.github.io/e-commerce-clothing-shop/',
    link2: 'https://github.com/LychakVlad/e-commerce-clothing-shop',
  };

  const secondProject = {
    title: 'News website',
    description:
      'The news website is built using HTML, Tailwind, React. It allows users to browse news articles, read full articles, and filter articles by source or through the keyword search bar',
    techs: ['React', 'Tailwind', 'Figma'],
    link1: 'https://github.com/LychakVlad/news-website',
    link2: 'https://lychakvlad.github.io/news-website/',
  };

  const thirdProject = {
    title: 'Crypto Check App',
    description:
      'Cryptocurrency tracker app. Allows users to track the prices of cryptocurrencies. The project uses the CoinGecko API to fetch real-time cryptocurrency data and provides a user-friendly interface with a responsive design.',
    techs: ['React', 'Tailwind', 'HTML'],
    link1: 'https://github.com/LychakVlad/crypto-check-app',
    link2: 'https://lychakvlad.github.io/crypto-check-app/',
  };

  const fourthProject = {
    title: 'TO-DO App',
    description:
      'Todo list app built using React. The application allows users to create and manage their to-do list with features such as adding and deleting tasks. The project includes a simple, yet modern user interface that provides a responsive design for optimal user experience on both desktop and mobile devices.',
    techs: ['React', 'Tailwind', 'HTML'],
    link1: 'https://github.com/LychakVlad/react-todo-app',
    link2: 'https://lychakvlad.github.io/react-todo-app/',
  };

  const fivthProject = {
    title: 'Portfolio website',
    description:
      'This is a React-based portfolio website showcasing my skills and projects. It features an email form, modern design with CSS animations, fo a responsive layout.',
    techs: ['React', 'Tailwind', 'EmailJS'],
    link1: 'https://github.com/LychakVlad/portfolio-react-app',
    link2: 'https://github.com/LychakVlad/portfolio-react-app',
    noLink: true,
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
        <ProjectItem link={Portfolio} project={fivthProject} />
      </div>
    </div>
  );
};

export default Projects;
