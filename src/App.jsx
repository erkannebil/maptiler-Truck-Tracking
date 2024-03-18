import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import MapPage from './pages/MapPage'; 
import TruckPage from './pages/TruckPage';

export default function App() {
  return (
    <Router>
      <div>
        <Navigationbar />      
        <Routes>
          <Route path="/mapPage/:truckName" element={<MapPage />} />
          <Route path="/truckPage" element={<TruckPage />} />
        </Routes>
      </div>
    </Router>
  );
}
