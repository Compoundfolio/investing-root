import React from "react"
import styles from "./THead.module.css"

function THead({ children }) {
  return <thead className={styles.thead}>{children}</thead>
}

export default THead
