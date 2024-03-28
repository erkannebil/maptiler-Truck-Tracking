import React from 'react';
import  { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { Button } from '@mui/material';
import ApiObj from "./FetchApi";


const [tokenData, setTokenData] = useState(" ");
const [data, setData] = useState([ ]);


useEffect(() => {
  const fetchData = async () => {
    const token = await ApiObj.tokenFetchData();
    setTokenData(token);
    console.log(token);

    const data = await ApiObj.fetchData(tokenData);
    setData(data.map(putTheDataOnTemplate)); 
    console.log(data);
  };

  fetchData();
}, []);


  const putTheDataOnTemplate = (data) => ({
    trip_id: data.trip_id,
    name: data.name,
    start_time: data.start_time,
    finish_time: data.finish_time,
    trip_route: {
      type: "FeatureCollection",
      name: "Path Test",
      features: [
        {
          type: "Feature",
          properties: { name: "Line 1" },
          geometry: {
            type: "LineString",
            coordinates: JSON.parse(data.trip_route) 
          }
        }
      ]
    }
  });
  //B PLANI BU MANTIK ÇALIŞMASSA FORLA DATAYI DÖN SAMPLE GİBİ BİR DİZİ OLUŞTUR ONA PUSH ET VE TABLOYA GÖNDER.
  
const sample = [
  data
];


function createData(trip_id,name, start_time, finish_time,trip_route) {
  return { trip_id, name, start_time,finish_time, trip_route };
}

const columns = [
  { width: 200, label: "Sefer Adı", dataKey: "name" },
  { width: 120, label: "Başlangıç Tarihi", dataKey: "start_time", numeric: false },
  { width: 120, label: "Bitiş Tarihi", dataKey: "finish_time", numeric: false },
  { width: 120, label: "Coordinates", dataKey: "trip_route", numeric: false },
  { width: 120, label: "Action", dataKey: "action", numeric: false },
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
          style={{ wtrip_idth: column.wtrip_idth }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.start_time}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row, props) {
  return (
    <React.Fragment>
      {columns.map((column) => {
        if (column.dataKey === 'action') {
          return (
            <TableCell key={column.dataKey}>
              <Button variant="outlined" onClick={() => props.showClick(row)}>Show</Button>
            </TableCell>
          );
        } else if (column.dataKey === 'trip_route') {
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


export default function ReactVirtualizedTable(props) {
  return (
    <Paper style={{ height: 720, wtrip_idth: '105%', padding: 5, border: '2px soltrip_id black', borderRadius: 20, marginLeft: 5, marginRight: 5, marginTop: 8 }}>


      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(index, row) => rowContent(index, row, props)}
      />
    </Paper>
  );
}
