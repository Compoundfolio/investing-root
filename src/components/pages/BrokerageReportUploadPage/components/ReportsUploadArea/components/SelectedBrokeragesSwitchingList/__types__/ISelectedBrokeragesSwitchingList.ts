import { 
  IHandleUpdateSelectedBrokerages,
} from "../../../../BrokeragesSelectionZone/components/SelectableBrokerage/__types__"

export default interface ISelectedBrokeragesSwitchingList {
  selectedBrokerageName: string
  handleChangeSelectedBrokerage: ({ Brokerage }: IHandleUpdateSelectedBrokerages) => void
}