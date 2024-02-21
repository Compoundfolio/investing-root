import React, { memo } from "react"
import styles from "./NoteWarning.module.css"

interface INoteWarning {
  message: React.ReactNode
}

const NoteWarning = ({ message }: INoteWarning) => {
  return (
    <section className={styles.warning}>
      <b>Note: </b>
      {message}
    </section>
  )
}

export default memo(NoteWarning)
