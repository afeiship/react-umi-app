import React from 'react';
import styles from './style.less';
import cx from 'classnames';

export default props => {
  return <button className={styles['rua-button']}>{props.children}</button>;
};
