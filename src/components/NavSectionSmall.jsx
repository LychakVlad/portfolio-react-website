import React from 'react';
import IconsSection from './IconsSection';
import cn from 'classnames';

const NavSectionSmall = ({ links, opened, menuHandler }) => {
  return (
    <div
      className={cn(
        'nav-section min-h-screen min-w-full bg-neutral-100 fixed z-30 flex flex-col dark:bg-indigo-950 opacity-0 pointer-events-none transition-all duration-300 top-[80px]',
        { ' opacity-100 pointer-events-auto': opened }
      )}
    >
      <ul className="flex flex-col justify-center items-center mt-10">
        {links.map((link) => (
          <li className="mx-4 my-6 relative group text-3xl" key={link}>
            <a
              onClick={menuHandler}
              href={'#' + link.toLocaleLowerCase()}
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300 pointer-events-auto"
            >
              {link}
            </a>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center my-32">
        <IconsSection menuHandler={menuHandler} />
      </div>
    </div>
  );
};

export default NavSectionSmall;
