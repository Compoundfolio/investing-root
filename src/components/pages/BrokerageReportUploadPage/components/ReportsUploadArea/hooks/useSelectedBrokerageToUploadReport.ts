import { useSelectedBrokeragesStore } from "../../../stores"
import { useCallback, useState } from 'react';
import { 
  IHandleUpdateSelectedBrokerages 
} from "../../BrokeragesSelectionZone/components/SelectableBrokerage/__types__";

/** 
 * Logic to choose the brokerage from previously selected brokerages list 
 * in order to upload report document according to selected brokerage
*/
const useSelectedBrokerageToUploadReport = () => {
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

  return {
    selectedBrokerageName,
    handleChangeSelectedBrokerage
  }
}

export default useSelectedBrokerageToUploadReport