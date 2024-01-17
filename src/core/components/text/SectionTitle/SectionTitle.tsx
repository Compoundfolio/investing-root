import React from "react"
import styles from "./SectionTitle.module.css"

export default function SectionTitle({ title }) {
  return <h5 className={styles.sectionTitle}>{title}</h5>
}
