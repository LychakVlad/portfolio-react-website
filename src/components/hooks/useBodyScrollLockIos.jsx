import { useEffect, useState } from 'react';

const useBodyScrollLockIos = () => {
  const bodyStyle = document.body.style;

  const [isFixed, setIsFixed] = useState(bodyStyle.position === 'fixed');

  useEffect(() => {
    bodyStyle.width = '100%';
    bodyStyle.position = isFixed ? 'fixed' : 'relative';
  }, [isFixed, bodyStyle]);

  const toggleFix = () => setIsFixed(!isFixed);

  return [isFixed, toggleFix];
};

export default useBodyScrollLockIos;
