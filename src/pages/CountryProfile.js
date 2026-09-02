import React, { useState, useEffect } from 'react';
import { PROFILES } from '../data/countryProfiles';

const SCORE_CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20, desc: 'Active members and conscription system assessment.' },
  { key: 'Arms', label: 'Conventional Arms', max: 20, desc: 'Main battle tanks, fighter jets, and naval vessels.' },
  { key: 'Drones', label: 'Drone Capability', max: 10, desc: 'Weighted from Conventional Arms — tactical, operational, and strategic drone inventory.' },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15, desc: 'Nuclear weapons possession and triad capability.' },
  { key: 'Combat', label: 'Recent Combat Experience', max: 15, desc: 'Major or minor war in past five years (UCDP methodology).' },
  { key: 'Willingness', label: 'Societal Willingness to Fight', max: 15, desc: 'World Values Survey / European Values Study data.' },
  { key: 'Budget', label: 'Defence Budget', max: 15, desc: 'Absolute USD defence spending.' },
];

function safeText(val) {
  if (val && typeof val === 'object' && 'value' in val) {
    return val.value;
  }
  return val || '';
}

function FadeIn({ children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(6px)',
      transition: 'opacity 0.25s ease, transform 0.25s ease'
    }}>
      {children}
    </div>
  );
}

export default function CountryProfile({ country, rank, onBack }) {
  const profile = PROFILES[country.Country];
  const total = Number(country.Total).toFixed(1);

  const armySize = profile?.manpower?.active_personnel ? safeText(profile.manpower.active_personnel) : null;
  const hasNuclear = profile?.nuclear?.has_nuclear ? safeText(profile.nuclear.has_nuclear.value ?? profile.nuclear.has_nuclear) : null;
  const nuclearYesNo = profile?.nuclear?.has_nuclear?.value === true ? 'Yes' : profile?.nuclear?.has_nuclear?.value === false ? 'No' : null;

  return (
    <FadeIn>
      <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

        <button onClick={onBack} style={{
          background: 'none',
          border: '1px solid #ccc',
          color: '#555',
          fontSize: 11,
          padding: '7px 16px',
          borderRadius: 3,
          cursor: 'pointer',
          marginBottom: 24,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = '#1a1a1a'; e.target.style.color = '#1a1a1a'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#ccc'; e.target.style.color = '#555'; }}
        >
          Back to Rankings
        </button>

        {/* Hero */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: 4,
          padding: '32px',
          marginBottom: 22,
          borderLeft: rank <= 3 ? '3px solid #1a1a1a' : '3px solid #ddd'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 10, textTransform: 'uppercase' }}>
                Rank #{rank} · World Military Index 2026
              </div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 700, color: '#1a1a1a' }}>
                {country.Country}
              </div>
              {profile && (
                <div style={{ fontSize: 14, color: '#444', marginTop: 14, maxWidth: 520, lineHeight: 1.8 }}>
                  {safeText(profile.overview)}
                </div>
              )}

              {/* Short summary line — army size + WMD status */}
              {profile && (
                <div style={{
                  display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap'
                }}>
                  {armySize && (
                    <div style={{
                      fontSize: 12, color: '#1a1a1a',
                      background: '#f2f2f2', border: '1px solid #ddd',
                      padding: '5px 12px', borderRadius: 3
                    }}>
                      <strong>Army:</strong> {armySize}
                    </div>
                  )}
                  {nuclearYesNo && (
                    <div style={{
                      fontSize: 12, color: '#1a1a1a',
                      background: nuclearYesNo === 'Yes' ? '#fdecec' : '#f2f2f2',
                      border: `1px solid ${nuclearYesNo === 'Yes' ? '#e0b0b0' : '#ddd'}`,
                      padding: '5px 12px', borderRadius: 3
                    }}>
                      <strong>WMD (Nuclear):</strong> {nuclearYesNo}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 46, fontWeight: 700, color: '#1a1a1a', lineHeight: 1 }}>
                {total}
              </div>
              <div style={{ fontSize: 10.5, color: '#888', marginTop: 6, letterSpacing: 1 }}>
                OUT OF 100
              </div>
            </div>
          </div>
        </div>

        {!profile && (
          <div style={{
            background: '#fafafa', border: '1px solid #ddd',
            borderRadius: 4, padding: '60px 24px', textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1a1a1a', marginBottom: 10 }}>
              Detailed data coming soon
            </div>
            <div style={{ fontSize: 13, color: '#666', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
              Score breakdown is based on live ranking data. Full country summary is being verified against primary sources.
            </div>
          </div>
        )}

        {/* Score breakdown — this IS the profile now */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SCORE_CATEGORIES.map(cat => {
            const val = country[cat.key] || 0;
            const pct = Math.min(Math.round((val / cat.max) * 100), 100);
            return (
              <div key={cat.key} style={{
                background: '#ffffff',
                border: '1px solid #ddd',
                borderRadius: 4,
                padding: '18px 22px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 14.5, fontWeight: 700, color: '#1a1a1a' }}>{cat.label}</div>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 3 }}>{cat.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                    <div style={{ fontSize: 22, fontWeight: 600, color: '#1a1a1a' }}>
                      {val % 1 === 0 ? val : val.toFixed(2)}
                    </div>
                    <div style={{ fontSize: 9.5, color: '#999' }}>/ {cat.max}</div>
                  </div>
                </div>
                <div style={{ height: 6, background: '#eee', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: '#555', borderRadius: 3, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            );
          })}
        </div>

        {profile?.nuclear?.note && (
          <div style={{
            background: '#fafafa', border: '1px solid #ddd', borderRadius: 4,
            padding: '16px 20px', marginTop: 16
          }}>
            <div style={{ fontSize: 10.5, color: '#888', letterSpacing: 1.5, marginBottom: 6, textTransform: 'uppercase' }}>Note</div>
            <div style={{ fontSize: 13, color: '#444', lineHeight: 1.7 }}>{safeText(profile.nuclear.note)}</div>
          </div>
        )}

      </div>
    </FadeIn>
  );
}