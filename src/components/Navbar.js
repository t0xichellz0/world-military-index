import React from 'react';

export default function Navbar({ page, setPage }) {
  const tabs = ['Rankings', 'Methodology'];
  return (
    <nav style={{
      borderBottom: '1px solid #d0d0d0',
      padding: '0 32px',
      display: 'flex',
      gap: 4,
      overflowX: 'auto',
      background: '#fafafa'
    }}>
      {tabs.map(tab => (
        <button key={tab} onClick={() => setPage(tab)} style={{
          background: 'none',
          border: 'none',
          borderBottom: page === tab ? '2px solid #1a1a1a' : '2px solid transparent',
          color: page === tab ? '#1a1a1a' : '#666',
          padding: '14px 16px',
          cursor: 'pointer',
          fontSize: 13,
          fontFamily: 'Georgia, serif',
          letterSpacing: 0.5,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}>
          {tab}
        </button>
      ))}
    </nav>
  );
}