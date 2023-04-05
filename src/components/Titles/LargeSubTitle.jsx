import React from 'react';

const LargeSubTitle = (props) => {
  return (
    <p className=" font-normal  text-3xl text-slate-600 dark:text-slate-300 max-lg:text-xl">
      {props.title}
    </p>
  );
};

export default LargeSubTitle;
