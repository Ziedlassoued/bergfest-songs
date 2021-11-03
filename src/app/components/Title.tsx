import React from 'react';
import styles from './Title.module.css';

function Title(): JSX.Element {
  return (
    <h1 className={styles.title}>
      Bergfest <span>by Neue Fische</span>
    </h1>
  );
}
export default Title;
