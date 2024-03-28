import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navigationbar from './components/Navigationbar';
import MapPage from './pages/MapPage';
import TruckPage from './pages/TruckPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/loginPage" />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><TruckPage /></PrivateRoute>} />
            <Route path="/truckPage" element={<TruckPage />} />
            <Route path="/mapPage" element={<MapPage />} />
            <Route path="/mapPage/:truckName" element={<MapPage />} />


          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}
