import React from 'react';
import styles from './style.less';
import cx from 'classnames';
import { useHistory } from 'umi';

export default () => {
  const history = useHistory();
  return (
    <div className="rua-page-about">
      <button
        onClick={e => {
          history.goBack();
        }}
      >
        Back ----
      </button>
      <h1 className={cx(styles.title, 'global-css')}>Page about</h1>
    </div>
  );
};
