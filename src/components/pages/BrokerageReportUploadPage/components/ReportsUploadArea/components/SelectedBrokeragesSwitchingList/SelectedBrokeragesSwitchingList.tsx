import { memo, useState, useCallback } from 'react';
import { SupportedBrokerage } from 'src/components/pages/BrokerageReportUploadPage/consts'
import { useSelectedBrokeragesStore } from 'src/components/pages/BrokerageReportUploadPage/stores'
import { SelectableBrokerage } from '../../../BrokeragesSelectionZone/components'

const SelectedBrokeragesSwitchingList = () => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()

  const [selectedBrokerage, setSelectedBrokerage] = useState<SupportedBrokerage>(selectedBrokerages[0])

  // TODO: Reuse part of ISelectableBrokerage
  const handleChangeSelectedBrokerage = useCallback(({ Brokerage }: any) => {
    setSelectedBrokerage(Brokerage)
  }, [])

  return (
    <aside>
      {selectedBrokerages.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage
          key={Brokerage.brandName}
          Brokerage={Brokerage}
          isSelected={selectedBrokerage.brandName === Brokerage.brandName}
          handleUpdateSelectedBrokerages={handleChangeSelectedBrokerage}
        />
      ))}
    </aside>
  )
}

export default memo(SelectedBrokeragesSwitchingList)