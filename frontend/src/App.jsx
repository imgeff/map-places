import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import GlobalProvider from './contexts/global/provider';

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
