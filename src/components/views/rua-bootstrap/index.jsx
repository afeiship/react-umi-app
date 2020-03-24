import React from 'react';
import styles from './style.less';
import cx from 'classnames';
import { useStore, connect } from 'umi';
import RuaButton from 'views/rua-button';

export default connect(store => store)(props => {
  // console.log(props);
  return (
    <div className={styles['rua-bootstrap']}>
      {props.children}
      <RuaButton>BUTTON</RuaButton>
    </div>
  );
});
