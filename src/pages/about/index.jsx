import React from 'react';
import styles from './style.less';
import cx from 'classnames';

export default () => {
  return (
    <div className="rua-page-about">
      <h1 className={cx(styles.title, 'global-css')}>Page about</h1>
    </div>
  );
};
