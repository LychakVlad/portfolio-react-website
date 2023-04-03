import React from 'react';

const LargeSubTitle = (props) => {
  return (
    <p className=" font-normal  text-3xl text-slate-600 dark:text-slate-300">
      {props.title}
    </p>
  );
};

export default LargeSubTitle;
