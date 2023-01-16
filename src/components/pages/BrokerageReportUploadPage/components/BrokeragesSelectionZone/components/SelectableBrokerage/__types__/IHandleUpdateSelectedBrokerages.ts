import { SupportedBrokerage } from '../../../../../consts'

export default interface IHandleUpdateSelectedBrokerages {
  Brokerage: SupportedBrokerage
  isDelete?: boolean
}