import React from 'react';
import styles from './style.less';
import cx from 'classnames';
import { connect, useModel } from 'umi';

export default connect()(props => {
  return <button className={styles['rua-button']}>{props.children}</button>;
});
