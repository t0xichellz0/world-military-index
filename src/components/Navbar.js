import React from 'react';

export default function Navbar({ page, setPage }) {
  const tabs = ['Rankings', 'Methodology', 'Drones'];
  return (
    <nav style={{ background: '#0b1120', borderBottom: '1px solid #1e2d45', padding: '0 16px', display: 'flex', gap: 4, overflowX: 'auto' }}>
      {tabs.map(tab => (
        <button key={tab} onClick={() => setPage(tab)} style={{
          background: 'none', border: 'none',
          borderBottom: page === tab ? '2px solid #c8a84b' : '2px solid transparent',
          color: page === tab ? '#c8a84b' : '#5a7090',
          padding: '16px 16px', cursor: 'pointer',
          fontSize: 13, fontFamily: 'monospace',
          letterSpacing: 1, textTransform: 'uppercase',
          whiteSpace: 'nowrap', flexShrink: 0
        }}>
          {tab}
        </button>
      ))}
    </nav>
  );
}