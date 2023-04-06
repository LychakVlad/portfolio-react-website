import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavSection = () => {
  const links = ['Skills', 'Projects', 'About', 'Contact'];

  return (
    <div className="max-lg:hidden ">
      <ul className="flex">
        {links.map((link) => (
          <li className="mx-4 relative group">
            <AnchorLink
              href={'#' + link}
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              {link}
            </AnchorLink>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSection;
