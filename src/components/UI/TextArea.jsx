import React from 'react';

const TextArea = (props) => {
  return (
    <div>
      <label
        for="message"
        className="block mb-2 text-lg font-medium text-indigo-950 dark:text-white"
      >
        Your message
      </label>
      <textarea {...props}></textarea>
    </div>
  );
};

export default TextArea;
