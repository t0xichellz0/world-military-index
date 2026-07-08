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
        background: '#0d1420',
        border: '1px solid #1e2d45',
        borderRadius: 14,
        padding: '28px 32px',
        marginBottom: 14,
        borderLeft: rank <= 3 ? '4px solid #c8a84b' : '4px solid #1e2d45',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(200,168,75,0.4)';
        e.currentTarget.style.background = '#111a2b';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = rank <= 3 ? '#c8a84b' : '#1e2d45';
        e.currentTarget.style.background = '#0d1420';
      }}
    >
      {/* Top row */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 22
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{
            fontFamily: 'serif',
            fontSize: 34,
            fontWeight: 700,
            minWidth: 44,
            color: rank === 1 ? '#c8a84b' : rank === 2 ? '#a0a8b8' : rank === 3 ? '#a0805a' : '#3a4a63',
            lineHeight: 1
          }}>
            {rank}
          </div>
          <div>
            <div style={{
              fontFamily: 'serif',
              fontSize: 23,
              fontWeight: 700,
              color: '#f0f4fa',
              marginBottom: 4
            }}>
              {country.Country}
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 10.5,
              color: '#5f8fc4',
              letterSpacing: 0.5
            }}>
              View full profile →
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: 'serif',
            fontSize: 40,
            fontWeight: 700,
            color: '#f0f4fa',
            lineHeight: 1
          }}>
            {Number(country.Total).toFixed(1)}
          </div>
          <div style={{
            fontFamily: 'monospace',
            fontSize: 10,
            color: '#5a7090',
            marginTop: 5,
            letterSpacing: 1
          }}>
            OUT OF 100
          </div>
        </div>
      </div>

      {/* Score bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {CATEGORIES.map(cat => {
          const val = country[cat.key] || 0;
          const pct = Math.min(Math.round((val / cat.max) * 100), 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: 11.5,
                color: '#7a90ad',
                width: 175,
                flexShrink: 0,
                letterSpacing: 0.3
              }}>
                {cat.label}
              </div>
              <div style={{
                flex: 1,
                height: 7,
                background: '#1a2536',
                borderRadius: 4,
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: cat.color,
                  borderRadius: 4,
                  transition: 'width 0.5s ease'
                }} />
              </div>
              <div style={{
                fontFamily: 'monospace',
                fontSize: 11.5,
                color: '#e8edf5',
                width: 42,
                textAlign: 'right',
                flexShrink: 0,
                fontWeight: 500
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