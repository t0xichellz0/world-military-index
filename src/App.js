import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';

export default function App() {
  const [page, setPage] = useState('Rankings');

  return (
    <div style={{ background: '#05080f', minHeight: '100vh', color: '#e8edf5' }}>
      <div style={{ background: '#0b1120', borderBottom: '1px solid #1e2d45', padding: '20px 32px' }}>
        <div style={{ fontFamily: 'serif', fontSize: 26, fontWeight: 700 }}>
          World <span style={{ color: '#c8a84b' }}>Military</span> Index
        </div>
      </div>
      <Navbar page={page} setPage={setPage} />
      {page === 'Rankings' && <Rankings />}
      {page === 'Methodology' && <Methodology />}
    </div>
  );
}