import React from 'react';

const COUNTRY_CODES = {
  'United States': 'us',
  'Russia': 'ru',
  'China': 'cn',
  'Israel': 'il',
  'Ukraine': 'ua',
  'India': 'in',
  'United Kingdom': 'gb',
  'France': 'fr',
  'Germany': 'de',
  'Japan': 'jp',
  'South Korea': 'kr',
  'Turkiye': 'tr',
  'Pakistan': 'pk',
  'North Korea': 'kp',
  'Italy': 'it',
  'Brazil': 'br',
  'Indonesia': 'id',
  'Iran': 'ir',
  'Australia': 'au',
  'Spain': 'es',
  'Egypt': 'eg',
  'Saudi Arabia': 'sa',
  'Poland': 'pl',
'Taiwan': 'tw',
'Vietnam': 'vn',
'Thailand': 'th',
'Sweden': 'se',
'Algeria': 'dz',
'Canada': 'ca',
'Singapore': 'sg',
};

const CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20 },
  { key: 'Arms', label: 'Conventional Arms', max: 20 },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15 },
  { key: 'Combat', label: 'Combat Experience', max: 15 },
  { key: 'Willingness', label: 'Willingness to Fight', max: 10 },
  { key: 'Budget', label: 'Defence Budget', max: 15 },
];

export default function CountryCard({ country, rank, onClick }) {
  const countryCode = COUNTRY_CODES[country.Country];

  return (
    <div
      onClick={onClick}
      className="wmi-card"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #cfcfcf',
        padding: '30px 4px 28px',
        cursor: 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#fafafa';
        const n = e.currentTarget.querySelector('.wmi-name');
        if (n) n.style.textDecoration = 'underline';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#ffffff';
        const n = e.currentTarget.querySelector('.wmi-name');
        if (n) n.style.textDecoration = 'none';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 22
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div style={{
            fontSize: 34,
            fontWeight: 400,
            minWidth: 44,
            color: rank <= 3 ? '#1a1a1a' : '#a0a0a0',
            lineHeight: 1,
            fontVariantNumeric: 'lining-nums tabular-nums'
          }}>
            {rank}
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 5
            }}>
              {countryCode && (
                <img
                  src={`https://flagcdn.com/w40/${countryCode}.png`}
                  alt={`${country.Country} flag`}
                  style={{
                    width: 28,
                    height: 'auto',
                    border: '1px solid #cfcfcf',
                    display: 'block'
                  }}
                />
              )}
              <div className="wmi-name" style={{
                fontSize: 25,
                fontWeight: 600,
                color: '#1a1a1a',
                letterSpacing: -0.2,
                textUnderlineOffset: 5,
                textDecorationThickness: 1
              }}>
                {country.Country}
              </div>
            </div>
            <div style={{
              fontSize: 11,
              color: '#777',
              letterSpacing: 1.5,
              textTransform: 'uppercase'
            }}>
              View full profile →
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontSize: 42,
            fontWeight: 600,
            color: '#1a1a1a',
            lineHeight: 1,
            fontVariantNumeric: 'lining-nums tabular-nums'
          }}>
            {Number(country.Total).toFixed(1)}
          </div>
          <div style={{
            fontSize: 10,
            color: '#777',
            marginTop: 7,
            letterSpacing: 2
          }}>
            OUT OF 100
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 66 }} className="wmi-bars">
        {CATEGORIES.map(cat => {
          const val = country[cat.key] || 0;
          const pct = Math.min(Math.round((val / cat.max) * 100), 100);
          return (
            <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="wmi-cat-label" style={{
                fontSize: 13.5,
                color: '#444',
                width: 170,
                flexShrink: 0
              }}>
                {cat.label}
              </div>
              <div style={{
                flex: 1,
                height: 3,
                background: '#e6e6e6'
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: '#1a1a1a',
                  transition: 'width 0.5s ease'
                }} />
              </div>
              <div style={{
                fontSize: 13.5,
                color: '#1a1a1a',
                width: 42,
                textAlign: 'right',
                flexShrink: 0,
                fontWeight: 600,
                fontVariantNumeric: 'lining-nums tabular-nums'
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
