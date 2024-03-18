import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import TableContainer from '../components/MapTable';
import '../components/cssFiles/mapPage.css';

function MapPage() {
    const [coordinatesData, setCoordinatesData] = useState('');

    useEffect(() => {
        console.log("showClick tetiklendi:", coordinatesData);
    }, [coordinatesData]); 

    function showClick(row) {
        setCoordinatesData(row.features);
    }

    return (
        <div className='main-container'>
            <div className='left-part'>
                <TableContainer showClick={showClick} />
            </div>
            <div className='right-part'>
                <Map coordinatesData={coordinatesData} />
            </div>
        </div>
    );
}

export default MapPage;
