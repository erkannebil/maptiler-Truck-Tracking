import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import TableContainer from '../components/MapTable';
import '../components/cssFiles/mapPage.css';

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
        <div className='main-container'>
            <div className='left-part'>
                <TableContainer showClick={showClick} />
            </div>
            <div className='right-part'>
                <Map key={mapKey} coordinatesData={coordinatesData} /> {/* Anahtarı Map bileşenine geçir */}
            </div>
        </div>
    );
}

export default MapPage;
