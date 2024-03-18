import React from 'react';
import Map from '../components/Map'
import TableContainer from '../components/MapTable'
import '../components/cssFiles/mapPage.css'
import  { useState } from 'react';

function MapPage() {
    const [data, setData] = useState([]);

    const handleDataUpdate = (newData) => {
        setData(newData);
        console.log(newData);
    };

    return (
        <div className='main-container'>
            <div className='left-part'>
                <TableContainer onTableDataUpdate={handleDataUpdate} />
            </div> 
            <div className='right-part'>
                <Map data={data} />
            </div> 
        </div>
    );
}

export default MapPage;