import React, { useEffect, useState } from 'react';
import Map from '../components/Map'; // Bu, varsayılan olarak dışa aktarılan bileşen.
import TableContainer from '../components/MapTable'; // Bu, varsayılan olarak dışa aktarılan bileşen.
import Grid from '@mui/material/Grid';

function MapPage() {
  const [coordinatesData, setCoordinatesData] = useState('');
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
   
  }, [coordinatesData]);

  async function showClick(row) {
    const newCoordinatesData = row; 
    setCoordinatesData(newCoordinatesData);
    setMapKey(prevKey => prevKey + 1);
  }
  

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={5} columns={12} className='main-container'>
      <Grid item xs={6}>
        <div className='left-part'>
          <TableContainer showClick={showClick} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className='right-part'>
          <Map key={mapKey} coordinatesData={coordinatesData} />
        </div>
      </Grid>
    </Grid>
  );
}

export default MapPage;
