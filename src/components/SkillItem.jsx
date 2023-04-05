import React from 'react';

const SkillItem = ({ link, title }) => {
  return (
    <div className="flex flex-col  items-center opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer group">
      <img src={link} alt="icon" style={{ width: '100px' }} />
      <p className="font-normal  text-2xl text-slate-500 my-3 group-hover:dark:text-slate-50">
        {title}
      </p>
    </div>
  );
};

export default SkillItem;
