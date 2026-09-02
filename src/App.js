import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';

export default function App() {
  const [page, setPage] = useState('Rankings');

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
      <div style={{
        borderBottom: '1px solid #d0d0d0',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
        <img
          src="/wmi-logo.png"
          alt="World Military Index"
          style={{ height: 48, width: 'auto' }}
        />
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>
          World Military Index
        </div>
      </div>
      <Navbar page={page} setPage={setPage} />
      {page === 'Rankings' && <Rankings />}
      {page === 'Methodology' && <Methodology />}
    </div>
  );
}