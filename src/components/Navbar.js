import React from 'react';

export default function Navbar({ page, setPage }) {
  const tabs = ['Rankings', 'Methodology', 'About Us'];
  return (
    <nav style={{
      borderTop: '4px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      overflowX: 'auto',
      background: '#ffffff'
    }}>
      {tabs.map(tab => (
        <button key={tab} className="wmi-tab" onClick={() => setPage(tab)} style={{
          background: 'none',
          border: 'none',
          borderBottom: page === tab ? '3px solid #1a1a1a' : '3px solid transparent',
          marginBottom: -1,
          color: page === tab ? '#1a1a1a' : '#6b6b6b',
          padding: '16px 20px 13px',
          cursor: 'pointer',
          fontSize: 12.5,
          fontWeight: page === tab ? 700 : 600,
          letterSpacing: 2,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'color 0.2s ease, border-color 0.2s ease'
        }}>
          {tab}
        </button>
      ))}
    </nav>
  );
}
