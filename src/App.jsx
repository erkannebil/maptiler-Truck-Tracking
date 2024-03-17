import React from 'react';
import NavbarComponent from './components/Navigationbar';
import MapPage from './pages/MapPage'; 
import TruckPage from './pages/TruckPage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


export default function App () {

  return (
    <Router>
    <div>
      <NavbarComponent />      
      <Routes>
        <Route path="/mapPage" element={<MapPage />} />
        <Route path="/truckPage" element={<TruckPage/>} />
      </Routes>
    </div>
  </Router>


  );
}