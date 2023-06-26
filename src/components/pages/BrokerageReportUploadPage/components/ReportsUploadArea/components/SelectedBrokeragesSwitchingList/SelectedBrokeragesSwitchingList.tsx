import { memo } from "react"
import { SupportedBrokerage } from "src/components/pages/BrokerageReportUploadPage/consts"
import { useSelectedBrokeragesStore } from "src/components/pages/BrokerageReportUploadPage/stores"
import { SelectableBrokerage } from "../../../BrokeragesSelectionZone/components"
import { ISelectedBrokeragesSwitchingList } from "./__types__"

const SelectedBrokeragesSwitchingList = ({
  selectedBrokerageName,
  handleChangeSelectedBrokerage,
}: ISelectedBrokeragesSwitchingList) => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()

  return (
    <aside className="flex flex-col gap-8">
      {selectedBrokerages.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage
          key={Brokerage.brandName}
          Brokerage={Brokerage}
          isSelected={selectedBrokerageName === Brokerage.brandName}
          handleUpdateSelectedBrokerages={handleChangeSelectedBrokerage}
        />
      ))}
      {selectedBrokerages.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage
          key={Brokerage.brandName}
          Brokerage={Brokerage}
          isSelected={selectedBrokerageName === Brokerage.brandName}
          handleUpdateSelectedBrokerages={handleChangeSelectedBrokerage}
        />
      ))}
      {selectedBrokerages.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage
          key={Brokerage.brandName}
          Brokerage={Brokerage}
          isSelected={selectedBrokerageName === Brokerage.brandName}
          handleUpdateSelectedBrokerages={handleChangeSelectedBrokerage}
        />
      ))}
    </aside>
  )
}

export default memo(SelectedBrokeragesSwitchingList)
