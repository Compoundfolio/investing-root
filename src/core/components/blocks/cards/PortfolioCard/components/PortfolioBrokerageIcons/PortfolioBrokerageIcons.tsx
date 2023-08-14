import Image from "next/image"
import React, { memo } from "react"

interface IPortfolioBrokerageIcons {
  iconsList: string[]
}

const iconSize = 24

const PortfolioBrokerageIcons = ({ iconsList }: IPortfolioBrokerageIcons) => {
  return (
    <section className="absolute flex flex-col items-center gap-2 top-2 left-2">
      {iconsList.map((iconSrc) => (
        <Image
          key={iconSrc}
          src={iconSrc}
          width={iconSize}
          height={iconSize}
          alt="Brokerage icon"
        />
      ))}
    </section>
  )
}

export default memo(PortfolioBrokerageIcons)
