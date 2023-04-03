import React from 'react';

const LargeTitle = (props) => {
  return (
    <h2 className="font-bold text-5xl leading-tight text-indigo-900  dark:text-indigo-500 my-4">
      {props.title}
    </h2>
  );
};

export default LargeTitle;
