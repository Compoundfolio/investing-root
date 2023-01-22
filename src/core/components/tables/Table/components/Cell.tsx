import { memo } from 'react'
import clsx from 'clsx';
import { TableCell } from '@mui/material';
import { TableHeaderProps } from 'react-virtualized';
import { ColumnData } from '../__types__';
import { classes } from '../styled';

type CellProps = TableHeaderProps & {
  columnIndex: number
  rowHeight: number
  columns: readonly ColumnData[]
  cellData: any
  onRowClick?: () => void
} 

const Cell = ({ 
  cellData, 
  columnIndex, 
  columns, 
  rowHeight, 
  onRowClick 
}: CellProps) => {
  return (
    <TableCell
      component="div"
      className={clsx(classes.tableCell, classes.flexContainer, {
        [classes.noClick]: onRowClick == null,
      })}
      variant="body"
      style={{ height: rowHeight }}
      align={
        (columnIndex != null && columns[columnIndex].numeric) || false
          ? 'right'
          : 'left'
      }
    >
      {cellData}
    </TableCell>
  );
};

export default memo(Cell)