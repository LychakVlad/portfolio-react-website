import React, { useState } from 'react';
import IconsSection from '../IconsSection';
import DarkModeToggle from '../UI/DarkModeToggle';
import BurgerIcon from '../UI/BurgerIcon';
import NavSectionBig from '../NavSectionBig';
import NavSectionSmall from '../NavSectionSmall';
import useBodyScrollLock from '../hooks/useBodyScrollLock';
import useBodyScrollLockIos from '../hooks/useBodyScrollLockIos';

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [isLocked, toggleLock] = useBodyScrollLock();
  const [isFixed, toggleFix] = useBodyScrollLockIos();

  const menuHandler = (e) => {
    toggleLock(e);
    toggleFix(e);
    setOpened(!opened);
  };

  const links = ['Skills', 'Projects', 'Contact'];

  return (
    <header>
      <div className="fixed left-2/4 transition-color duration-300 -translate-x-2/4 h-[80px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins max-lg:px-10 max-lg:justify-between max-lg:mx-0  z-50 bg-neutral-100 dark:bg-indigo-950 shadow-[0_-80px_15px_100px_rgba(245,245,245,1)] dark:shadow-[0_-80px_15px_100px_rgba(30,27,75,1)] ">
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
