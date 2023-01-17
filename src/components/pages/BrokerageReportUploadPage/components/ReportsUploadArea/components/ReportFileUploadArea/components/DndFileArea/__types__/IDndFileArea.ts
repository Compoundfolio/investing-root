import { ISelectedBrokeragesSwitchingList } from "../../../../SelectedBrokeragesSwitchingList/__types__";

export default interface IDndFileArea extends Pick<
  ISelectedBrokeragesSwitchingList,
  "selectedBrokerageName"
> { }