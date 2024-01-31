import React from "react"
import styles from "./SectionTitle.module.css"

interface ISectionTitle {
  title: string
  size?: number
}

export default function SectionTitle({ title, size }: ISectionTitle) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <h5 className={styles.sectionTitle}>{title}</h5>
      {size !== undefined && size > 0 && (
        <span className={styles.tableSize}>[{size}]</span>
      )}
    </div>
  )
}
