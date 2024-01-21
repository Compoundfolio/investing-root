import { Drawer, IDrawer, Option } from "@core"
import React, { memo, useState } from "react"
import { BrokerageSelector } from "./components"

interface IBrokerageReportGuideModal
  extends Pick<IDrawer, "isOpen" | "setIsOpen"> {
  brokerages: Option[]
}

const BrokerageReportGuideModal = ({
  isOpen,
  setIsOpen,
  brokerages,
}: IBrokerageReportGuideModal) => {
  const [selectedBrokerage, setSelectedBrokerage] = useState<Option>(
    brokerages[0]
  )

  const drawerTitle = (
    <>
      {/* Where to get <span className="font-semibold">{brokerages.TODO}</span>{" "} */}
      Where to get <span className="font-semibold">Exante</span> brokerage
      report?
    </>
  )

  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title={drawerTitle}>
      <BrokerageSelector
        selectedBrokerage={selectedBrokerage}
        brokerages={brokerages}
        setSelectedBrokerage={setSelectedBrokerage}
      />
      {/* @ts-ignore */}
      {selectedBrokerage?.data?.reportGuide}
    </Drawer>
  )
}

export default memo(BrokerageReportGuideModal)
