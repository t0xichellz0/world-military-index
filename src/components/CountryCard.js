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
      background: '#0b1120', border: '1px solid #1e2d45',
      borderRadius: 10, padding: '16px 20px',
      display: 'grid', gridTemplateColumns: '48px 1fr 100px',
      gap: 16, alignItems: 'center', marginBottom: 8,
      borderLeft: rank <= 3 ? '3px solid #c8a84b' : '3px solid #1e2d45'
    }}>
      <div style={{ fontFamily: 'serif', fontSize: 24, fontWeight: 700, color: rank === 1 ? '#c8a84b' : '#5a7090', textAlign: 'center' }}>
        {rank}
      </div>
      <div>
        <div style={{ fontFamily: 'serif', fontSize: 16, fontWeight: 700, marginBottom: 10, color: '#e8edf5' }}>
          {country.Country}
        </div>
        {CATEGORIES.map(cat => {
          const pct = Math.round((country[cat.key] / cat.max) * 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090', width: 90 }}>{cat.key}</div>
              <div style={{ flex: 1, height: 4, background: '#1e2d45', borderRadius: 2, maxWidth: 200 }}>
                <div style={{ width: `${pct}%`, height: '100%', background: cat.color, borderRadius: 2 }} />
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090', width: 28, textAlign: 'right' }}>
                {country[cat.key]}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: 'serif', fontSize: 28, fontWeight: 700, color: '#e8edf5' }}>
          {Number(country.Total).toFixed(1)}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090', marginTop: 4 }}>/ 100</div>
      </div>
    </div>
  );
}