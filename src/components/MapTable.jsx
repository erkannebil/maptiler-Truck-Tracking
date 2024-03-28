import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const sampleData = [
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm A",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[[27.949152,37.0839616],[27.949168,37.08396],[27.9492176,37.08396],[27.9457072,37.0861936],[27.9453376,37.0816992]]"
  },
  {
    "trip_id": 1200,
    "name": "Hüsamlar-Döküm B",
    "start_time": "2024-03-01T08:21:00.000Z",
    "finish_time": "2024-03-01T08:29:00.000Z",
    "trip_route": "[ [ 27.8908299, 37.1600766 ], [ 27.8929757, 37.1592216 ], [ 27.8944348, 37.156588 ], [ 27.8947781, 37.1528598 ], [ 27.8955077, 37.15156 ], [ 27.8962801, 37.1501576 ], [ 27.8962372, 37.1469764 ] ]" },
];


function formatDateTime(dateTimeString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateTime = new Date(dateTimeString);
  return new Intl.DateTimeFormat('tr-TR', options).format(dateTime);
}

const processSampleData = (data) => {
  return data.map((item) => ({
    trip_id: item.trip_id,
    name: item.name,
    start_time: item.start_time,
    finish_time: item.finish_time,
    trip_route: item.trip_route
  }));
};



const columns = [
  { label: "Sefer Adı", dataKey: "name" },
  { label: "Başlangıç Tarihi", dataKey: "start_time" },
  { label: "Bitiş Tarihi", dataKey: "finish_time" },
  { label: "Rota Koordinatları", dataKey: "trip_route" },
];

function ReactVirtualizedTable({ showClick, data }) {
  const [rows, setRows] = React.useState(processSampleData(sampleData));
  const renderTableHeader = () => (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>
            {column.label}
          </TableCell>
        ))}
        <TableCell>Aksiyonlar</TableCell>
      </TableRow>
    </TableHead>
  );

  const renderTableRow = (row, rowIndex, props) => (
    <TableRow key={rowIndex}>
      {columns.map((column, colIndex) => (
        <TableCell key={colIndex}>
          {column.dataKey === 'start_time' || column.dataKey === 'finish_time'
            ? formatDateTime(row[column.dataKey]) 
            : column.dataKey === 'trip_route'
            ? 'Coordinates'
            : row[column.dataKey]}
        </TableCell>
      ))}
      <TableCell>
      <Button variant="outlined" onClick={() => props.showClick(row.trip_route)}>Göster</Button>
      </TableCell>
    </TableRow>
  );

  return (
    <Paper style={{ height: 720, wtrip_idth: '105%', padding: 5, border: '2px soltrip_id black', borderRadius: 20, marginLeft: 5, marginRight: 5, marginTop: 8 }}>
      <TableContainer component={Paper} style={{ maxHeight: '705px', overflow: 'auto',borderRadius: 20 }}>
  <Table stickyHeader aria-label="sticky table">
    {renderTableHeader()}
    <TableBody>
      {rows.map((row, index) => renderTableRow(row, index, { showClick }))}
    </TableBody>
  </Table>
</TableContainer>
    </Paper>
  );
}

export default ReactVirtualizedTable;








