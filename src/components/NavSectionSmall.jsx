import React from 'react';
import IconsSection from './IconsSection';
import cn from 'classnames';

const NavSectionSmall = ({ links, opened, menuHandler }) => {
  return (
    <div
      className={cn(
        'nav-section min-h-screen min-w-full opacity-0 bg-neutral-100 fixed z-20 flex flex-col dark:bg-indigo-950 pointer-events-none  transition-all duration-300 top-[80px] ',
        { 'opacity-100 pointer-events-auto': opened }
      )}
    >
      <ul className="flex flex-col justify-center items-center mt-10">
        {links.map((link) => (
          <li className="mx-4 my-6 relative group text-3xl" key={link}>
            <a
              onClick={opened ? menuHandler : null}
              href={opened ? '#' + link.toLocaleLowerCase() : null}
              className=" dark:text-neutral-200 transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={cn('flex items-center justify-center my-32', {
          hidden: opened !== true,
        })}
      >
        <IconsSection menuHandler={menuHandler} />
      </div>
    </div>
  );
};

export default NavSectionSmall;
