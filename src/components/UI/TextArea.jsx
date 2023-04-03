import React from 'react';

const TextArea = (ref) => {
  return (
    <div>
      <label
        for="message"
        className="block mb-2 text-lg font-medium text-indigo-950 dark:text-white"
      >
        Your message
      </label>
      <textarea {...ref}></textarea>
    </div>
  );
};

export default TextArea;
