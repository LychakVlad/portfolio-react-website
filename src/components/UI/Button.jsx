import React from 'react';

const Button = (ref) => {
  return (
    <div>
      <button {...ref}> {ref.title}</button>
    </div>
  );
};

export default Button;
