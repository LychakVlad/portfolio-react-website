import React from 'react';
import { FaBars } from 'react-icons/fa';
import IconsSection from './IconsSection';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className=" absolute  left-2/4  -translate-x-2/4 h-[90px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins">
      <div>
        <ul className="flex">
          <li className="mx-4 relative group">
            <AnchorLink
              href="#skills"
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Skills
            </AnchorLink>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
          <li className="mx-4 relative group">
            <AnchorLink
              href="#projects"
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Projects
            </AnchorLink>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
          <li className="mx-4 relative group">
            <AnchorLink
              href="#about"
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              About
            </AnchorLink>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
          <li className="mx-4 relative group">
            <AnchorLink
              href="#contact"
              className="hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Contact
            </AnchorLink>
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-indigo-600  dark:bg-indigo-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
          </li>
        </ul>
      </div>
      <IconsSection />
      <DarkMode />
    </div>
  );
};

export default Navbar;
