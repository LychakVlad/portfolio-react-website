import React from 'react';

import classNames from 'classnames';

function BurgerIcon({ opened, menuHandler }) {
  return (
    <div
      onClick={menuHandler}
      className={classNames(`tham tham-e-spin tham-w-9 hidden max-lg:block`, {
        'tham-active': opened,
      })}
    >
      <div className="tham-box">
        <div className="tham-inner bg-indigo-950 dark:bg-white" />
      </div>
    </div>
    // <div
    //   onClick={menuHandler}

    //   className={classNames(
    //     `tham tham-e-squeeze tham-w-9 hidden max-lg:block`,
    //     {
    //       'tham-active': opened,
    //     }
    //   )}
    // >
    //   <div className="tham-box">
    //     <div className="tham-inner bg-indigo-950 dark:bg-white" />
    //   </div>
    // </div>
  );
}

export default BurgerIcon;
