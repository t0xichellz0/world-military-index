import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';
import AboutUs from './pages/AboutUs';

export default function App() {
  const [page, setPage] = useState('Rankings');

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'Georgia, serif', display: 'flex', flexDirection: 'column' }}>
      <Navbar page={page} setPage={setPage} />
      <div style={{ flex: 1 }}>
        {page === 'Rankings' && <Rankings />}
        {page === 'Methodology' && <Methodology />}
        {page === 'About Us' && <AboutUs />}
      </div>
      <Footer />
    </div>
  );
}