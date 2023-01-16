import { memo, useState, useCallback } from 'react';
import { SupportedBrokerage } from 'src/components/pages/BrokerageReportUploadPage/consts'
import { useSelectedBrokeragesStore } from 'src/components/pages/BrokerageReportUploadPage/stores'
import { SelectableBrokerage } from '../../../BrokeragesSelectionZone/components'
import { IHandleUpdateSelectedBrokerages } from '../../../BrokeragesSelectionZone/components/SelectableBrokerage/__types__';

const SelectedBrokeragesSwitchingList = () => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()

  const [
    selectedBrokerageName, 
    setSelectedBrokerageName
  ] = useState<string>(selectedBrokerages[0].brandName)

  const handleChangeSelectedBrokerage = useCallback(({ 
    Brokerage
  }: IHandleUpdateSelectedBrokerages) => {
    setSelectedBrokerageName(Brokerage.brandName)
  }, [])

  return (
    <aside>
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