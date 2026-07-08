import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';
import Drones from './pages/Drones';

export default function App() {
  const [page, setPage] = useState('Rankings');

  return (
    <div style={{ background: '#05080f', minHeight: '100vh', color: '#e8edf5' }}>
      <div style={{
        background: '#0b1120',
        borderBottom: '1px solid #1e2d45',
        padding: '4px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }}>
        <img
          src="/wmi-logo.png"
          alt="World Military Index"
          style={{
            height: 90,
            width: 'auto',
            filter: 'brightness(0) invert(1)',
            opacity: 0.95
          }}
        />
        <div style={{ fontFamily: 'serif', fontSize: 26, fontWeight: 700 }}>
          World <span style={{ color: '#c8a84b' }}>Military</span> Index
        </div>
      </div>
      <Navbar page={page} setPage={setPage} />
      {page === 'Rankings' && <Rankings />}
      {page === 'Methodology' && <Methodology />}
      {page === 'Drones' && <Drones />}
    </div>
  );
}