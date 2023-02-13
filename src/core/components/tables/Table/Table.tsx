import * as React from 'react';
import clsx from 'clsx';
import { Theme, styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {
  AutoSizer,
  Column,
  Table as VirtualTable,
} from 'react-virtualized';
import { ITable, IVirtualizedTable, Row } from './__types__';
import { Cell, Header } from './components';
import { classes, styles } from './styled';

const TableWithVirtualization = ({ 
  columns, 
  rowHeight = 48, 
  headerHeight = 48, 
  ...tableProps
}: ITable) => {
  const getRowClassName = ({ index }: Row) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && tableProps?.onRowClick != null,
    });
  };

  return (
    // @ts-ignore
    <AutoSizer>
      {({ height, width }) => (
        // @ts-ignore
        <VirtualTable
          height={height}
          width={width}
          rowHeight={rowHeight!}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={headerHeight}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              // @ts-ignore
              <Column
                key={dataKey}
                headerRenderer={(headerProps) => (
                  <Header 
                    label={headerProps.label}
                    columnIndex={index} 
                    dataKey={headerProps.dataKey}  
                    headerHeight={headerHeight}
                    columns={columns}          
                  />
                )}
                className={classes.flexContainer}
                cellRenderer={(cellProps) => (
                  <Cell
                    cellData={cellProps.cellData}
                    columnIndex={index}
                    columns={columns}
                    rowHeight={rowHeight}
                    onRowClick={tableProps?.onRowClick} 
                    dataKey={cellProps.dataKey}                 
                  />
                )}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </VirtualTable>
      )}
    </AutoSizer>
  );
}

const Table = styled(TableWithVirtualization)(styles);

// ---

interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}
type Sample = [string, number, number, number, number];

const sample: readonly Sample[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const rowsExample: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rowsExample.push(createData(i, ...randomSelection));
}

const columnsExample = [
  {
    width: 200,
    label: 'Dessert',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
    numeric: true,
  },
  {
    width: 120,
    label: 'Protein\u00A0(g)',
    dataKey: 'protein',
    numeric: true,
  },
]

export default function VirtualizedTable({
  rows = rowsExample,
  columns = columnsExample,
}: IVirtualizedTable) {  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Table
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={columns}
      />
    </div>
  );
}
