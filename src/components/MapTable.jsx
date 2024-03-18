import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { Button } from '@mui/material';


var coordinatesData = {
  "type": "FeatureCollection",
  "name": "Path Test",
  "features": [
    { "type": "Feature", "properties": { "Name": "Line 1" }, "geometry": { "type": "LineString", "coordinates": [[27.8908299, 37.1600766], [27.8929757, 37.1592216], [27.8944348, 37.156588], [27.8947781, 37.1528598], [27.8955077, 37.15156], [27.8962801, 37.1501576], [27.8962372, 37.1469764]] } },
    { "type": "Feature", "properties": { "Name": "Line 2" }, "geometry": { "type": "LineString", "coordinates": [[27.8982113, 37.1495419], [27.896881, 37.1530308], [27.8958081, 37.1538175], [27.8912161, 37.1560408]] } },
    { "type": "Feature", "properties": { "Name": "Line 3" }, "geometry": { "type": "LineString", "coordinates": [[27.8950356, 37.1600766], [27.895336, 37.1571695], [27.895851, 37.1547068], [27.8982113, 37.1530308], [27.8994988, 37.1499523], [27.898383, 37.1480026]] } }
  ]
};

const sample = [
  ['Sefer-1', 'Label', coordinatesData],
  ['Sefer-2', 'Label', coordinatesData],
  ['Sefer-3', 'Label', coordinatesData],
];

function createData(id, Name, label, features) {
  return { id, Name, label, features };
}

const columns = [
  {
    width: 200,
    label: 'Sefer Adı',
    dataKey: 'Name',
  },
  {
    width: 120,
    label: 'Label',
    dataKey: 'label',
    numeric: false,
  },
  {
    width: 120,
    label: 'Features',
    dataKey: 'Coordinates',
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
              <Button variant="outlined" onClick={() => handleSeferlerClick(row)}>Show</Button>
            </TableCell>
          );
        } else if (column.dataKey === 'Coordinates') {
          return (
            <TableCell
              key={column.dataKey}
              align={column.numeric || false ? 'right' : 'left'}
            >
              Coordinates
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
  console.log("Map data button clicked for row:", row)
  ;
}

export default function ReactVirtualizedTable(row) {
  return (
    <Paper style={{ height: 720, width: '50%' , padding: 5,border: '2px solid black',borderRadius: 20 ,marginLeft: 5, marginRight: 5,marginTop: 8}}>

      
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
