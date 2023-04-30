import React, { useEffect, useState } from 'react';
import IconsSection from '../IconsSection';
import DarkModeToggle from '../UI/DarkModeToggle';
import BurgerIcon from '../UI/BurgerIcon';
import NavSectionBig from '../NavSectionBig';
import NavSectionSmall from '../NavSectionSmall';
import { ScrollLock } from '.././jsPlugin/scrollLock';

window.scrollLock = new ScrollLock();

const Header = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      window.scrollLock.disableScrolling();
    } else {
      window.scrollLock.enableScrolling();
    }
  }, [opened]);

  const menuHandler = (e) => {
    setOpened(!opened);
  };

  const links = ['Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full h-[80px] z-40 top-0 left-0 right-0 transition-color duration-300 bg-neutral-100 dark:bg-indigo-950 shadow-[0_-60px_30px_100px_rgba(245,245,245,1)] dark:shadow-[0_-60px_30px_100px_rgba(30,27,75,1)] ">
      <div className="fixed left-2/4  -translate-x-2/4 h-[80px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins max-lg:px-10 max-lg:justify-between max-lg:mx-0  ">
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
