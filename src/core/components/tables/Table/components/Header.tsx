import { TableCell } from '@mui/material';
import {memo} from 'react'
import { TableHeaderProps } from 'react-virtualized';
import clsx from 'clsx';
import { ColumnData } from '../__types__';

type HeaderProps = TableHeaderProps & {
  columnIndex: number
  headerHeight: number
  columns: readonly ColumnData[]
} 

const Header = ({
  label,
  columnIndex,
  headerHeight, 
  columns,
}: HeaderProps) => {
  return (
    <TableCell
      component="div"
      className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
      variant="head"
      style={{ height: headerHeight }}
      align={columns[columnIndex].numeric || false ? 'right' : 'left'}
    >
      {/* @ts-ignore */}
      <span>{label}</span>
    </TableCell>
  );
};

export default memo(Header)