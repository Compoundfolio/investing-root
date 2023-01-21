import Row from "./Row";
import ColumnData from './ColumnData';

export default interface ITable {
  columns: readonly ColumnData[];
  headerHeight?: number;
  rowHeight?: number;
  rowCount: number;
  onRowClick?: () => void;
  rowGetter: (row: Row) => unknown;
}