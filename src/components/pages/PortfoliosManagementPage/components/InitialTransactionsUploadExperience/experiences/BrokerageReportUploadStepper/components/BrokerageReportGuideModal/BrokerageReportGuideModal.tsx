import { Drawer, IDrawer, Option } from "@core"
import React, { memo } from "react"

interface IBrokerageReportGuideModal
  extends Pick<IDrawer, "isOpen" | "setIsOpen"> {
  brokerages: Option[]
}

const BrokerageReportGuideModal = ({
  isOpen,
  setIsOpen,
  brokerages,
}: IBrokerageReportGuideModal) => {
  const drawerTitle = (
    <>
      {/* Where to get <span className="font-semibold">{brokerages.TODO}</span>{" "} */}
      Where to get <span className="font-semibold">Exante</span> brokerage
      report?
    </>
  )

  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title={drawerTitle}>
      {/* {brokerages.reportDownloadGuideComponent} */}
      hi
    </Drawer>
  )
}

export default memo(BrokerageReportGuideModal)
