import { ISelectedBrokeragesSwitchingList } from "../../SelectedBrokeragesSwitchingList/__types__";

export default interface IReportFileUploadArea extends Pick<
  ISelectedBrokeragesSwitchingList, 
  "selectedBrokerageName"
> {}