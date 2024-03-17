import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { blue } from '@mui/material/colors';

const sample = [
  ['Kamyon-x', 'Label', 'Truck'],
  ['Kamyon-y', 'Label', 'Truck'],
  ['Kamyon-z', 'Label', 'Truck'],
];

function createData(id, truckName, label, type) {
  return { id, truckName, label, type };
}

const columns = [
  {
    width: 200,
    label: 'Kamyon Adı',
    dataKey: 'truckName',
  },
  {
    width: 120,
    label: 'Label',
    dataKey: 'label',
    numeric: false,
  },
  {
    width: 120,
    label: 'Type',
    dataKey: 'type',
    numeric: false,
  },
  {
    width: 120,
    label: 'Action',
    dataKey: 'action',
    numeric: false,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => {
        if (column.dataKey === 'action') {
          return (
            <TableCell key={column.dataKey}>
              <button onClick={() => handleSeferlerClick(row)}>Seferler</button>
            </TableCell>
          );
        } else {
          return (
            <TableCell
              key={column.dataKey}
              align={column.numeric || false ? 'right' : 'left'}
            >
              {row[column.dataKey]}
            </TableCell>
          );
        }
      })}
    </React.Fragment>
  );
}

function handleSeferlerClick(row) {
  console.log("Seferler button clicked for row:", row);
}

export default function ReactVirtualizedTable() {
  const [rowData, setRowData] = useState(' ');

  return (
    <Paper style={{ height: 700, width: '90%', padding: 20, border: '2px solid black', borderRadius: 30, marginLeft: 'auto', marginRight: 'auto' ,marginTop: 20}}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
