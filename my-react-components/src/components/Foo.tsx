/**
 * @class Foo
 */

import * as React from 'react'

import styles from './styles.css'

export type Props = { text: string }

export default class Foo extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Foo Class Component: {text}
      </div>
    )
  }
}
