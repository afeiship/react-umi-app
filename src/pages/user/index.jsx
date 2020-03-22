import React from 'react';
import styles from './style.less';
import cx from 'classnames';
import { connect, select } from 'dva';

export default connect(data => data)((data, dispatch) => {
  return (
    <div className="rua-page-user">
      <h1 className={cx(styles.title, 'global-css')}>Page user</h1>
    </div>
  );
});
