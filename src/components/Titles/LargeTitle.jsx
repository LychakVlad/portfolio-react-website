import React from 'react';

const LargeTitle = (props) => {
  return (
    <h2 className="font-bold text-5xl leading-tight text-indigo-900  dark:text-indigo-300 my-4 max-sm:text-4xl">
      {props.title}
    </h2>
  );
};

export default LargeTitle;
