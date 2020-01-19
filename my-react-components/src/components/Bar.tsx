/**
 * @class Bar
 */

import * as React from 'react'

import styles from './styles.css'

export type BarProps = { text: string }

const Bar: React.FC<BarProps> = (props) => {
  return (
      <div className={styles.test}>
        Bar Function Component: {props.text}
      </div>
  );
};
export default Bar;
