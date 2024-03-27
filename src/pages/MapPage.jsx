import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import TableContainer from '../components/MapTable';
import Grid from '@mui/material/Grid'; // Material-UI Grid bileşenini ekleyin


function MapPage() {
    const [coordinatesData, setCoordinatesData] = useState('');
    const [mapKey, setMapKey] = useState(0); // Anahtar için state oluştur

    useEffect(() => {
        console.log("showClick tetiklendi:", coordinatesData);
    }, [coordinatesData]); 

    async function showClick(row) {
        const newCoordinatesData = row.features;
        setCoordinatesData(newCoordinatesData);
        setMapKey(prevKey => prevKey + 1); // Anahtar değerini güncelle
    }
    

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            spacing={5}
            columns={12}
            className='main-container'
        >
            <Grid item xs={6}>
                <div className='left-part'>
                    <TableContainer showClick={showClick} />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='right-part'>
                    <Map key={mapKey} coordinatesData={coordinatesData} /> {/* Anahtarı Map bileşenine geçir */}
                </div>
            </Grid>
        </Grid>
    );
}

export default MapPage;
