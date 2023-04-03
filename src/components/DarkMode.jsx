import React, { useState } from 'react';
import useDarkSide from './hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMode = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="flex items-center">
      <p className="mr-2">Mode</p>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={44} />
    </div>
  );
};

export default DarkMode;
