import React, { useState } from 'react';
import IconsSection from '../IconsSection';
import DarkModeToggle from '../UI/DarkModeToggle';
import BurgerIcon from '../UI/BurgerIcon';
import NavSectionBig from '../NavSectionBig';
import NavSectionSmall from '../NavSectionSmall';
import { ScrollLock } from '.././jsPlugin/scrollLock';

window.scrollLock = new ScrollLock();

const Header = () => {
  const [opened, setOpened] = useState(false);

  const menuHandler = (e) => {
    setOpened(!opened);

    if (opened === false) {
      window.scrollLock.disableScrolling();
    } else {
      window.scrollLock.enableScrolling();
    }
  };

  const links = ['Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed z-50" data-fix="block">
      <div
        data-fix="block"
        className="fixed left-2/4 transition-color duration-300 -translate-x-2/4 h-[80px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins max-lg:px-10 max-lg:justify-between max-lg:mx-0  z-50 bg-neutral-100 dark:bg-indigo-950 shadow-[0_-60px_30px_100px_rgba(245,245,245,1)] dark:shadow-[0_-60px_30px_100px_rgba(30,27,75,1)] "
      >
        <NavSectionBig links={links} />
        <div className="max-lg:hidden">
          <IconsSection />
        </div>
        <DarkModeToggle />
        <BurgerIcon opened={opened} menuHandler={menuHandler} />
      </div>
      <NavSectionSmall
        opened={opened}
        links={links}
        menuHandler={menuHandler}
      />
    </header>
  );
};

export default Header;
