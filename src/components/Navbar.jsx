import React from 'react';
import { FaBars } from 'react-icons/fa';
import IconsSection from './IconsSection';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DarkMode from './DarkMode';
import BurgerIcon from './UI/BurgerIcon';
import NavSection from './NavSection';

const Navbar = () => {
  return (
    <div className=" absolute  left-2/4  -translate-x-2/4 h-[90px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins max-lg:relative max-lg:px-10 max-lg:justify-between max-lg:mx-0">
      <NavSection />
      <div className="max-lg:hidden">
        <IconsSection />
      </div>
      <DarkMode />
      <BurgerIcon />
    </div>
  );
};

export default Navbar;
