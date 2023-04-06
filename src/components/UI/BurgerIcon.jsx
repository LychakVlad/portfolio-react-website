import React, { useState } from 'react';

import classNames from 'classnames';

function BurgerIcon() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      onClick={() => setOpened(!opened)}
      className={classNames(
        `tham tham-e-squeeze tham-w-9 hidden max-lg:block`,
        {
          'tham-active': opened,
        }
      )}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}

export default BurgerIcon;
