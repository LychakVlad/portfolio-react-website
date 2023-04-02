import React from 'react';

const Input = (ref) => {
  return (
    <div class="relative">
      <input {...ref} />
      <label
        for="floating_outlined"
        class="pointer-events-none absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-2 origin-[0] bg-transparent dark:bg-gray-900 px-3  peer-focus:text-indigo-600  peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
      >
        {ref.placeholder}
      </label>
    </div>
  );
};

export default Input;
