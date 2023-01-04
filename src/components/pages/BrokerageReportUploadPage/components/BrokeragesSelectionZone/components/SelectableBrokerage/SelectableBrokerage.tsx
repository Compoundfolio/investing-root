import React, { memo } from 'react'
import { ISelectableBrokerage } from './__types__'
import Image from 'next/image'

export default memo(function SelectableBrokerage({
  Brokerage,
}: ISelectableBrokerage) {
  return (
    <button
      // TODO:
      // onClick={() => setBrokerageClass(Brokerage)}
      // TODO: use CSS-in-JS lib
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#111F28",
        border: "1px solid rgba(15, 111, 114, 0.5)",
        boxShadow: "8px 8px 8px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
        width: "162px",
        height: "156px",
      }}
    >
      <Image
        width={64}
        height={64}
        alt={Brokerage.brandName}
        src={Brokerage.logoPath}
        style={{ border: "1px solid #fff", borderRadius: "16px" }}
      />
      <h2
        style={{
          fontFamily: 'Montserrat',
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "17px",
          textAlign: "center",
          color: "#4C596B",
          marginTop: "8px",
        }}
      >
        {Brokerage.brandName}
      </h2>
    </button>
  )
})
