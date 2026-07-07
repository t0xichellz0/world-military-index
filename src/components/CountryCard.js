import React from 'react';

const CATEGORIES = [
  { key: 'Personnel', max: 20, color: '#c8a84b' },
  { key: 'Arms', max: 20, color: '#c8a84b' },
  { key: 'Nuclear', max: 15, color: '#4bc87a' },
  { key: 'Combat', max: 15, color: '#4bc87a' },
  { key: 'Willingness', max: 15, color: '#4b8bc8' },
  { key: 'Budget', max: 15, color: '#c84b4b' },
];

export default function CountryCard({ country, rank }) {
  return (
    <div style={{
      background: '#0b1120',
      border: '1px solid #1e2d45',
      borderRadius: 10,
      padding: '14px 16px',
      marginBottom: 8,
      borderLeft: rank <= 3 ? '3px solid #c8a84b' : '3px solid #1e2d45',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      {/* Top row — rank, name, total */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            fontFamily: 'serif', fontSize: 22, fontWeight: 700,
            color: rank === 1 ? '#c8a84b' : rank === 2 ? '#a0a8b8' : rank === 3 ? '#a0805a' : '#5a7090',
            minWidth: 28
          }}>
            {rank}
          </div>
          <div style={{ fontFamily: 'serif', fontSize: 16, fontWeight: 700, color: '#e8edf5' }}>
            {country.Country}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'serif', fontSize: 24, fontWeight: 700, color: '#e8edf5', lineHeight: 1 }}>
            {Number(country.Total).toFixed(1)}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090' }}>/ 100</div>
        </div>
      </div>

      {/* Score bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {CATEGORIES.map(cat => {
          const val = country[cat.key] || 0;
          const pct = Math.min(Math.round((val / cat.max) * 100), 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                fontFamily: 'monospace', fontSize: 8,
                color: '#5a7090', width: 70, flexShrink: 0
              }}>
                {cat.key}
              </div>
              <div style={{
                flex: 1, height: 5,
                background: '#1e2d45', borderRadius: 3, overflow: 'hidden'
              }}>
                <div style={{
                  width: `${pct}%`, height: '100%',
                  background: cat.color, borderRadius: 3
                }} />
              </div>
              <div style={{
                fontFamily: 'monospace', fontSize: 8,
                color: '#5a7090', width: 32,
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