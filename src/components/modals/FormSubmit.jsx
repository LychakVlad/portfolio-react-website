import React from 'react';
import LargeSubTitle from '../Titles/LargeSubTitle';
import Button from '../UI/Button';
import cn from 'classnames';

const FormSubmit = ({ popup, closePopup }) => {
  return (
    <div
      onClick={closePopup}
      className={cn(
        'opacity-0 pointer-events-none min-h-screen min-w-full z-50 bg-slate-950 bg-opacity-40 fixed left-0 bottom-0 transition-opacity duration-300',
        { 'opacity-100 pointer-events-auto': popup }
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white  p-12 fixed left-2/4 top-2/4  -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      >
        <h2 className="font-bold  text-7xl  flex justify-center leading-tight text-indigo-900 mb-8">
          Thank you!
        </h2>
        <LargeSubTitle title="I'll try to answer as soon as possible" />
        <div className="flex justify-around items-center mt-8">
          <Button
            onClick={closePopup}
            title="Back"
            className=" text-2xl text-indigo-900  p-6 rounded-lg transition-opacity duration-300 hover:opacity-50"
          />
          <a
            href="https://github.com/LychakVlad"
            className="text-2xl border-0 text-white bg-indigo-500 p-6 rounded-lg  hover:bg-indigo-400 transition-color duration-300 focus:bg-indigo-600"
          >
            More projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
