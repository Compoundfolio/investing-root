import React, { memo } from 'react'
import styles from './InModalWarning.module.css'

interface InModalWarning {
  message: string
}

const InModalWarning = ({
  message,
}: InModalWarning) => {
  return (
    <section className={styles.inModalWarning}>
      <b>Note: </b>{message}
    </section>
  )
}

export default memo(InModalWarning)