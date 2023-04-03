import React from 'react';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';

const IconsSection = () => {
  return (
    <div className="flex ">
      <a
        href="mailto: lycakvladislav@gmail.com"
        className="px-2 hover:opacity-70  transition-opacity duration-300  dark:fill-slate-200"
      >
        <Google />
      </a>
      <a
        href="https://github.com/LychakVlad"
        target="_blank"
        rel="noreferrer"
        className="px-2 hover:opacity-70  transition-opacity duration-300 dark:fill-slate-200"
      >
        <Github />
      </a>
      <a
        href="https://t.me/Relast1"
        target="_blank"
        rel="noreferrer"
        className="px-2 hover:opacity-70  transition-opacity duration-300 dark:fill-slate-200"
      >
        <Telegram />
      </a>
      <a
        href="https://www.linkedin.com/in/vladislav-lychak/"
        target="_blank"
        rel="noreferrer"
        className="px-2 hover:opacity-70  transition-opacity duration-300 dark:fill-slate-200"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default IconsSection;
