"use client"

import { memo, useMemo } from "react"
import styles from "./PageTitle.module.css"
import Image from "next/image"
import { useBrokeragesData } from "src/store"

interface IPageTitle {
  title: string
  portfolioName: string
}

const PageTitle = ({ title, portfolioName }: IPageTitle) => {
  const { brokerageEntities } = useBrokeragesData()

  const brokeragesIconLinks = useMemo(() => {
    return brokerageEntities.map((brokerageEntity) =>
      brokerageEntity.getLogoPath()
    )
  }, [brokerageEntities])

  return (
    <div>
      <div className="flex items-center">
        <h1 className={styles.pageName}>{title}</h1>
        {brokeragesIconLinks && (
          <div className="flex items-center gap-1">
            {brokeragesIconLinks.map((link) => (
              <Image
                key={link}
                src={link}
                width={32}
                height={32}
                alt="Brokerage icon"
              />
            ))}
          </div>
        )}
      </div>
      <span className={styles.portfolioName}>{portfolioName}</span>
    </div>
  )
}

export default memo(PageTitle)
