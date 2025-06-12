import React from 'react';
import './i18n';
import Home from './pages/Home';
import DailyHoroscope from './pages/DailyHoroscope';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<DailyHoroscope />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App; 