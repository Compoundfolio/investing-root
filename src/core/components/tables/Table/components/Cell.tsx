import { memo } from 'react'
import clsx from 'clsx';
import { TableCell } from '@mui/material';
import type { TableCellRenderer } from 'react-virtualized';

const Cell = ({ cellData, columnIndex }) => {
// const Cell: TableCellRenderer = ({ cellData, columnIndex }) => {
  const { columns, rowHeight, onRowClick } = props;
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
}

export default memo(Cell)