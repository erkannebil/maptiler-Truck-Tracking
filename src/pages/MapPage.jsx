// MapPage.js
import React from 'react';
import Map from '../components/Map'
import TableContainer from '../components/MapTable'
import '../components/cssFiles/mapPage.css'

function MapPage() {
    return (
        <div className='main-container'>
            <div className='left-part'> <TableContainer /></div> 
           <div className='right-part'> <Map /></div> 
           
        </div>
    );
}

export default MapPage;
