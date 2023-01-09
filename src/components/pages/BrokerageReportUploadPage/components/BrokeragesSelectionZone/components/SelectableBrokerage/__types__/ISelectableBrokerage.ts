import { SupportedBrokerage } from '../../../../../consts';

export default interface ISelectableBrokerage {
  Brokerage: SupportedBrokerage
  isSelected: boolean
  handleUpdateSelectedBrokerages: (props: {
    Brokerage: SupportedBrokerage, 
    isDelete?: boolean,
  }) => void // TODO: Refactor
}