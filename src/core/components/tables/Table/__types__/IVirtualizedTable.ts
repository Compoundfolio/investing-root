import ColumnData from "./ColumnData";

export default interface IVirtualizedTable {
  rows?: any[],
  columns?: ColumnData[],
}