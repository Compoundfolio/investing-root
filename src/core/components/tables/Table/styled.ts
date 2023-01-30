import styled from "@emotion/styled";
import { TableCell, Theme } from "@mui/material";
import { HeaderProps } from "./components/Header";

export const classes = {
  flexContainer: 'ReactVirtualizedDemo-flexContainer',
  tableRow: 'ReactVirtualizedDemo-tableRow',
  tableRowHover: 'ReactVirtualizedDemo-tableRowHover',
  tableCell: 'ReactVirtualizedDemo-tableCell',
  noClick: 'ReactVirtualizedDemo-noClick',
};

// TODO: Refactor via @emotion 
export const styles = ({ theme }: { theme: Theme }) =>
({
  // temporary right-to-left patch, waiting for
  // https://github.com/bvaughn/react-virtualized/issues/454
  '& .ReactVirtualized__Table__headerRow': {
    ...(theme.direction === 'rtl' && {
      paddingLeft: '0 !important',
    }),
    ...(theme.direction !== 'rtl' && {
      paddingRight: undefined,
    }),
  },
  [`& .${classes.flexContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: "white"
  },
  [`& .${classes.tableRow}`]: {
    cursor: 'pointer',
  },
  // [`& .${classes.tableRowHover}`]: {
  //   '&:hover': {
  //     backgroundColor: theme.palette.grey[200],
  //   },
  // },
  [`& .${classes.tableCell}`]: {
    flex: 1,
  },
  [`& .${classes.noClick}`]: {
    cursor: 'initial',
  },
} as const);


export const StyledTableCell = styled(TableCell)
(({ headerHeight }: Pick<HeaderProps, "headerHeight">) => ({
  height: headerHeight,
}))