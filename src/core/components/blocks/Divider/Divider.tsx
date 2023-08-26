import React from "react"
import styles from "./Divider.module.css"

interface IDivider {
  color?: string
}

const Divider = ({ color }: IDivider) => {
  return <div className={styles.divider} style={{ ...(color && { backgroundColor: `${color}` }) }} />
}

export default Divider
