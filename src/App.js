import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';
import AboutUs from './pages/AboutUs';

export default function App() {
  const [page, setPage] = useState('Rankings');

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'Georgia, serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        borderBottom: '1px solid #d0d0d0',
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img
            src="/wmi-logo.png"
            alt="World Military Index"
            style={{ height: 130, width: 'auto' }}
          />
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 32, fontWeight: 700, color: '#1a1a1a' }}>
            World Military Index
          </div>
        </div>
        <img
          src="/cgs-logo.jpg"
          alt="Center for Geopolitical Studies Riga"
          style={{ height: 60, width: 'auto' }}
        />
      </div>
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