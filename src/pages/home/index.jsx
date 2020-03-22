import React from 'react';
import styles from './style.scss';
import cx from 'classnames';

export default () => {
  return (
    <div className="rua-page-home">
      <h1 className={cx(styles.title, 'global-css')}>Page home</h1>
    </div>
  );
};
