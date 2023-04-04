import React from 'react';

const MediumTitle = (props) => {
  return (
    <h3 className="font-bold text-3xl leading-tight text-indigo-900 dark:text-indigo-400 mb-6 relative w-fit">
      {props.title}
      <span className="absolute -bottom-1 left-0 w-0 h-[3px]  bg-indigo-900 dark:bg-indigo-400 transition-width duration-300 group-hover:w-full"></span>
    </h3>
  );
};

export default MediumTitle;
