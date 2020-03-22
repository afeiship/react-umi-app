import React from 'react';
import styles from './style.less';
import cx from 'classnames';
import { connect, useModel } from 'umi';

export default connect()(props => {
  console.log(useModel('@@initialState'));
  console.log(useModel('index1'));
  return <button className={styles['rua-button']}>{props.children}</button>;
});
