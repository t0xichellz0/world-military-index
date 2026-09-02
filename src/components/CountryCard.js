import React from 'react';

const CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20 },
  { key: 'Arms', label: 'Conventional Arms', max: 12 },
  { key: 'Drones', label: 'Drone Capability', max: 8 },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15 },
  { key: 'Combat', label: 'Combat Experience', max: 15 },
  { key: 'Willingness', label: 'Willingness to Fight', max: 15 },
  { key: 'Budget', label: 'Defence Budget', max: 15 },
];

export default function CountryCard({ country, rank, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: 4,
        padding: '24px 28px',
        marginBottom: 14,
        borderLeft: rank <= 3 ? '3px solid #1a1a1a' : '3px solid #ddd',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#1a1a1a';
        e.currentTarget.style.background = '#fafafa';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = rank <= 3 ? '#1a1a1a' : '#ddd';
        e.currentTarget.style.background = '#ffffff';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            fontWeight: 700,
            minWidth: 36,
            color: '#999',
            lineHeight: 1
          }}>
            {rank}
          </div>
          <div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 20,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 3
            }}>
              {country.Country}
            </div>
            <div style={{
              fontSize: 11.5,
              color: '#888'
            }}>
              View full profile →
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 30,
            fontWeight: 600,
            color: '#1a1a1a',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums'
          }}>
            {Number(country.Total).toFixed(1)}
          </div>
          <div style={{
            fontSize: 10,
            color: '#999',
            marginTop: 5,
            letterSpacing: 1
          }}>
            OUT OF 100
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {CATEGORIES.map(cat => {
          const val = country[cat.key] || 0;
          const pct = Math.min(Math.round((val / cat.max) * 100), 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                fontSize: 12.5,
                color: '#555',
                width: 165,
                flexShrink: 0
              }}>
                {cat.label}
              </div>
              <div style={{
                flex: 1,
                height: 5,
                background: '#eee',
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: '#555',
                  borderRadius: 2,
                  transition: 'width 0.5s ease'
                }} />
              </div>
              <div style={{
                fontSize: 12.5,
                color: '#1a1a1a',
                width: 38,
                textAlign: 'right',
                flexShrink: 0,
                fontWeight: 600,
                fontVariantNumeric: 'tabular-nums'
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