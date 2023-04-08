import React, { useState } from 'react';
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
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
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={44} />
    </div>
  );
};

export default DarkModeToggle;
