import React from 'react';

const CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20, color: '#c8a84b' },
  { key: 'Arms', label: 'Conventional Arms', max: 20, color: '#c8a84b' },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15, color: '#4bc87a' },
  { key: 'Combat', label: 'Combat Experience', max: 15, color: '#4bc87a' },
  { key: 'Willingness', label: 'Willingness to Fight', max: 15, color: '#4b8bc8' },
  { key: 'Budget', label: 'Defence Budget', max: 15, color: '#c84b4b' },
];

export default function CountryCard({ country, rank, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#0b1120',
        border: '1px solid #1e2d45',
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 10,
        borderLeft: rank <= 3 ? '4px solid #c8a84b' : '4px solid #1e2d45',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,168,75,0.4)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = rank <= 3 ? '#c8a84b' : '#1e2d45'}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            fontFamily: 'serif', fontSize: 28, fontWeight: 700, minWidth: 36,
            color: rank === 1 ? '#c8a84b' : rank === 2 ? '#a0a8b8' : rank === 3 ? '#a0805a' : '#5a7090'
          }}>
            {rank}
          </div>
          <div>
            <div style={{ fontFamily: 'serif', fontSize: 20, fontWeight: 700, color: '#e8edf5' }}>
              {country.Country}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#4b8bc8', marginTop: 2 }}>
              Click to view full profile →
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'serif', fontSize: 36, fontWeight: 700, color: '#e8edf5', lineHeight: 1 }}>
            {Number(country.Total).toFixed(1)}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#5a7090', marginTop: 2 }}>/ 100</div>
        </div>
      </div>

      {/* Score bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {CATEGORIES.map(cat => {
          const val = country[cat.key] || 0;
          const pct = Math.min(Math.round((val / cat.max) * 100), 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                fontFamily: 'monospace', fontSize: 10,
                color: '#5a7090', width: 160, flexShrink: 0
              }}>
                {cat.label}
              </div>
              <div style={{
                flex: 1, height: 6,
                background: '#1e2d45', borderRadius: 3, overflow: 'hidden'
              }}>
                <div style={{
                  width: `${pct}%`, height: '100%',
                  background: cat.color, borderRadius: 3
                }} />
              </div>
              <div style={{
                fontFamily: 'monospace', fontSize: 10,
                color: '#5a7090', width: 36,
                textAlign: 'right', flexShrink: 0
              }}>
                {val % 1 === 0 ? val : val.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}