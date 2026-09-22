import React, { useState, useEffect } from 'react';
import { PROFILES } from '../data/countryProfiles';

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

const SCORE_CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20, desc: 'Measure based on active military personnel and conscription.' },
  { key: 'Arms', label: 'Conventional Arms', max: 20, desc: 'Measure based on the number of main battle tanks, fighter jets, military vessels, and drone power.' },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15, desc: 'Measure based on the existence of a nuclear arsenal and nuclear delivery systems.' },
  { key: 'Combat', label: 'Recent Combat Experience', max: 15, desc: 'Measure based on combat experience during the past five years.' },
  { key: 'Willingness', label: 'Societal Willingness to Fight', max: 15, desc: 'Measure based on the perceived societal willingness to fight for the country.' },
  { key: 'Budget', label: 'Absolute Defence Spending', max: 15, desc: 'Measure based on national defence spending.' },
];

function safeText(val) {
  if (val && typeof val === 'object' && 'value' in val) return val.value;
  return val || '';
}

function FadeIn({ children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 0.25s ease, transform 0.25s ease' }}>
      {children}
    </div>
  );
}

function SubRow({ label, value }) {
  const val = safeText(value);
  if (!val) return null;
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      padding: '9px 0', borderBottom: '1px solid #eee', gap: 12
    }}>
      <div style={{ fontSize: 12.5, color: '#666', flexShrink: 0, width: 150 }}>{label}</div>
      <div style={{ fontSize: 13, color: '#1a1a1a', textAlign: 'right', flex: 1 }}>
        {val}
      </div>
    </div>
  );
}

export default function CountryProfile({ country, rank, onBack }) {
  const profile = PROFILES[country.Country];
  const total = Number(country.Total).toFixed(1);
  const [expanded, setExpanded] = useState(null);
  const flagCode = COUNTRY_CODES[country.Country];

  function toggle(key) {
    setExpanded(expanded === key ? null : key);
  }

  return (
    <FadeIn>
      <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

        <button onClick={onBack} style={{
          background: 'none', border: '1px solid #ccc', color: '#555',
          fontSize: 11, padding: '7px 16px', borderRadius: 3, cursor: 'pointer',
          marginBottom: 24, letterSpacing: 1.5, textTransform: 'uppercase',
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = '#1a1a1a'; e.target.style.color = '#1a1a1a'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#ccc'; e.target.style.color = '#555'; }}
        >
          Back to Rankings
        </button>

        {/* Hero */}
        <div style={{
          background: '#ffffff', border: '1px solid #ddd', borderRadius: 4,
          padding: '32px', marginBottom: 22,
          borderLeft: rank <= 3 ? '3px solid #1a1a1a' : '3px solid #ddd'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 10, textTransform: 'uppercase' }}>
                Rank #{rank} · World Military Index
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {flagCode && (
                  <img
                    src={`https://flagcdn.com/w80/${flagCode}.png`}
                    alt={`${country.Country} flag`}
                    style={{ width: 48, height: 'auto', borderRadius: 3, border: '1px solid #ddd' }}
                  />
                )}
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 700, color: '#1a1a1a' }}>
                  {country.Country}
                </div>
              </div>
              {profile && (
                <div style={{ fontSize: 14, color: '#444', marginTop: 14, maxWidth: 520, lineHeight: 1.8 }}>
                  {safeText(profile.overview)}
                </div>
              )}
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 46, fontWeight: 700, color: '#1a1a1a', lineHeight: 1 }}>
                {total}
              </div>
              <div style={{ fontSize: 10.5, color: '#888', marginTop: 6, letterSpacing: 1 }}>OUT OF 100</div>
            </div>
          </div>
        </div>

        {!profile && (
          <div style={{ background: '#fafafa', border: '1px solid #ddd', borderRadius: 4, padding: '60px 24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1a1a1a', marginBottom: 10 }}>Detailed data coming soon</div>
            <div style={{ fontSize: 13, color: '#666', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
              Score breakdown is based on live ranking data. Full country summary is being verified against primary sources.
            </div>
          </div>
        )}

        {profile && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SCORE_CATEGORIES.map(cat => {
                const val = country[cat.key] || 0;
                const pct = Math.min(Math.round((val / cat.max) * 100), 100);
                const isOpen = expanded === cat.key;
                const hasExpand = ['Personnel', 'Arms', 'Nuclear', 'Budget', 'Combat', 'Willingness'].includes(cat.key);

                return (
                  <div key={cat.key} style={{
                    background: '#ffffff', border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden'
                  }}>
                    <div
                      onClick={() => hasExpand && toggle(cat.key)}
                      style={{ padding: '18px 22px', cursor: hasExpand ? 'pointer' : 'default' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <div>
                          <div style={{ fontFamily: 'Georgia, serif', fontSize: 14.5, fontWeight: 700, color: '#1a1a1a' }}>
                            {cat.label} {hasExpand && <span style={{ fontSize: 11, color: '#999', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>{isOpen ? '▲' : '▼ expand'}</span>}
                          </div>
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

                    {isOpen && cat.key === 'Personnel' && profile.manpower && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Total Active Personnel" value={profile.manpower.active_personnel} />
                        <SubRow label="Conscription" value={profile.manpower.conscription} />
                      </div>
                    )}

                    {isOpen && cat.key === 'Arms' && (profile.land || profile.airpower || profile.naval) && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Main Battle Tanks" value={profile.land?.tanks} />
                        <SubRow label="Fighter Jets" value={profile.airpower?.fighters} />
                        <SubRow label="Vessels" value={profile.naval?.total_assets} />
                      </div>
                    )}

                    {isOpen && cat.key === 'Nuclear' && profile.nuclear && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Has Nuclear Weapons" value={{ value: profile.nuclear.has_nuclear?.value ? 'Yes' : 'No' }} />
                        <SubRow label="Nuclear Triad" value={{ value: profile.nuclear.has_triad?.value ? 'Yes' : 'No' }} />
                      </div>
                    )}

                    {isOpen && cat.key === 'Combat' && profile.combat && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Major War(s)" value={profile.combat.major_wars} />
                        <SubRow label="Minor War(s)" value={profile.combat.minor_wars} />
                      </div>
                    )}

                    {isOpen && cat.key === 'Willingness' && profile.willingness?.note && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Willing to Fight" value={profile.willingness.note} />
                      </div>
                    )}

                    {isOpen && cat.key === 'Budget' && profile.budget && (
                      <div style={{ padding: '4px 22px 18px', borderTop: '1px solid #eee', background: '#fafafa' }}>
                        <SubRow label="Amount" value={profile.budget.annual_usd} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{
              fontSize: 12, color: '#888', marginTop: 16,
              textAlign: 'center', fontStyle: 'italic'
            }}>
              Please see the Methodology for further details on points construction.
            </div>
          </>
        )}

      </div>
    </FadeIn>
  );
}