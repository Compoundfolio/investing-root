import { SupportedBrokerage } from "../../../../../consts"
import IHandleUpdateSelectedBrokerages from "./IHandleUpdateSelectedBrokerages"

export default interface ISelectableBrokerage {
  Brokerage: SupportedBrokerage
  isSelected: boolean
  handleUpdateSelectedBrokerages: (
    props: IHandleUpdateSelectedBrokerages
  ) => void
}
