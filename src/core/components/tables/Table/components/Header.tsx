import {memo} from 'react'
import { TableHeaderProps } from 'react-virtualized';
import clsx from 'clsx';
import { ColumnData } from '../__types__';
import { StyledTableCell, classes } from '../styled';

export type HeaderProps = TableHeaderProps & {
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
    <StyledTableCell
      component="div"
      className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
      variant="head"
      headerHeight={headerHeight}
      align={columns[columnIndex].numeric || false ? 'right' : 'left'}
    >
      {/* @ts-ignore */}
      <span>{label}</span>
    </StyledTableCell>
  );
};

export default memo(Header)