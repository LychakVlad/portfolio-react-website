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
              onClick={opened ? menuHandler : null}
              href={opened ? '#' + link.toLocaleLowerCase() : null}
              className={cn(
                ' dark:text-neutral-200 transition-colors duration-300 pointer-events-auto',
                { 'pointer-events-none cursor-default': opened }
              )}
            >
              {link}
            </a>
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
