import React, { useState, useEffect } from 'react';
import { PROFILES } from '../data/countryProfiles';

const SCORE_CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20, desc: 'Active members and conscription system assessment.' },
  { key: 'Arms', label: 'Conventional Arms', max: 20, desc: 'Main battle tanks, fighter jets, and naval vessels.' },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15, desc: 'Nuclear weapons possession and triad capability.' },
  { key: 'Combat', label: 'Recent Combat Experience', max: 15, desc: 'Major or minor war in past five years (UCDP methodology).' },
  { key: 'Willingness', label: 'Societal Willingness to Fight', max: 15, desc: 'World Values Survey / European Values Study data.' },
  { key: 'Budget', label: 'Defence Budget', max: 15, desc: 'Absolute USD defence spending.' },
];

const TABS = ['Overview', 'Manpower', 'Land', 'Airpower', 'Naval', 'Nuclear'];

function safeText(val) {
  if (val && typeof val === 'object' && 'value' in val) {
    return val.value;
  }
  return val || '';
}

function StatCard({ label, field, sub }) {
  const isFieldObj = field && typeof field === 'object' && 'value' in field;
  const val = isFieldObj ? field.value : (field ?? '');
  const sourceCount = isFieldObj ? (field.sources?.length || 0) : 0;
  const verified = isFieldObj ? !!field.verified : false;
  const displayVal = val === '' || val === null || val === undefined ? 'Pending' : val;

  return (
    <div style={{
      background: '#fafafa',
      border: '1px solid #ddd',
      borderRadius: 4,
      padding: '16px 18px',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, gap: 8 }}>
        <div style={{
          fontSize: 10.5, color: '#888',
          letterSpacing: 1,
          textTransform: 'uppercase'
        }}>
          {label}
        </div>
        {sourceCount > 0 && (
          <div style={{
            fontSize: 9, color: verified ? '#2a7a3b' : '#c07800',
            border: `1px solid ${verified ? '#2a7a3b44' : '#c0780044'}`,
            padding: '1px 6px', borderRadius: 3,
            flexShrink: 0
          }}>
            {sourceCount} src{sourceCount > 1 ? 's' : ''}{verified ? ' ✓' : ''}
          </div>
        )}
      </div>
      <div style={{
        fontFamily: 'Georgia, serif', fontSize: 17,
        fontWeight: 700, color: displayVal === 'Pending' ? '#ccc' : '#1a1a1a', lineHeight: 1.3,
        wordBreak: 'break-word'
      }}>
        {displayVal}
      </div>
      {sub && <div style={{ fontSize: 11.5, color: '#888', marginTop: 6, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{
      padding: '8px 0',
      fontSize: 11,
      fontWeight: 600,
      color: '#1a1a1a',
      marginBottom: 14,
      marginTop: 26,
      letterSpacing: 2,
      textTransform: 'uppercase',
      borderBottom: '2px solid #1a1a1a'
    }}>
      {title}
    </div>
  );
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
  const [activeTab, setActiveTab] = useState('Overview');
  const [tabVisible, setTabVisible] = useState(true);
  const profile = PROFILES[country.Country];
  const total = Number(country.Total).toFixed(1);

  function switchTab(tab) {
    setTabVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setTabVisible(true);
    }, 150);
  }

  const comingSoon = (
    <div style={{
      background: '#fafafa',
      border: '1px solid #ddd',
      borderRadius: 4,
      padding: '70px 24px',
      textAlign: 'center'
    }}>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#1a1a1a', marginBottom: 14 }}>
        Detailed Profile Coming Soon
      </div>
      <div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.8, maxWidth: 420, margin: '0 auto' }}>
        Full country profiles are under development. Data is being verified
        against primary sources including national Ministries of Defence,
        IISS Military Balance, and SIPRI.
      </div>
    </div>
  );

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

        <div style={{ display: 'flex', gap: 6, marginBottom: 22, overflowX: 'auto', paddingBottom: 4 }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => switchTab(tab)} style={{
              background: activeTab === tab ? '#1a1a1a' : '#ffffff',
              border: '1px solid',
              borderColor: activeTab === tab ? '#1a1a1a' : '#ccc',
              color: activeTab === tab ? '#ffffff' : '#555',
              fontSize: 11,
              letterSpacing: 1,
              padding: '8px 16px',
              borderRadius: 3,
              cursor: 'pointer',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.15s ease',
              fontWeight: activeTab === tab ? 600 : 400
            }}>
              {tab}
            </button>
          ))}
        </div>

        <div style={{
          opacity: tabVisible ? 1 : 0,
          transform: tabVisible ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.15s ease, transform 0.15s ease'
        }}>

          {!profile && comingSoon}

          {profile && activeTab === 'Overview' && (
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
          )}

          {profile && activeTab === 'Manpower' && (
            <div>
              <SectionHeader title="Manpower" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
                <StatCard label="Total Population" field={profile.manpower.total_population} />
                <StatCard label="Available Manpower" field={profile.manpower.available_manpower} />
                <StatCard label="Active Personnel" field={profile.manpower.active_personnel} />
                <StatCard label="Reserve Personnel" field={profile.manpower.reserve_personnel} />
                <StatCard label="Paramilitary" field={profile.manpower.paramilitary} />
              </div>
              <SectionHeader title="Service Branch Personnel" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
                <StatCard label="Army Personnel" field={profile.manpower.army_personnel} />
                <StatCard label="Navy Personnel" field={profile.manpower.navy_personnel} />
                <StatCard label="Air Force Personnel" field={profile.manpower.airforce_personnel} />
              </div>
            </div>
          )}

          {profile && activeTab === 'Land' && (
            <div>
              <SectionHeader title="Land Forces" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
                <StatCard label="Main Battle Tanks" field={profile.land.tanks} />
                <StatCard label="Armored Vehicles" field={profile.land.armored_vehicles} />
                <StatCard label="Self-Propelled Artillery" field={profile.land.self_propelled_artillery} />
                <StatCard label="Towed Artillery" field={profile.land.towed_artillery} />
                <StatCard label="Rocket Artillery (MLRS)" field={profile.land.rocket_artillery} />
              </div>
            </div>
          )}

          {profile && activeTab === 'Airpower' && (
            <div>
              <SectionHeader title="Air Power" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
                <StatCard label="Total Active Aircraft" field={profile.airpower.total_aircraft} sub="All types combined" />
                <StatCard label="Fighter Aircraft" field={profile.airpower.fighters} />
                <StatCard label="Attack Aircraft" field={profile.airpower.attack_aircraft} />
                <StatCard label="Transport Aircraft" field={profile.airpower.transport} />
                <StatCard label="Trainer Aircraft" field={profile.airpower.trainers} />
                <StatCard label="Total Helicopters" field={profile.airpower.helicopters} />
                <StatCard label="Attack Helicopters" field={profile.airpower.attack_helicopters} />
                <StatCard label="Aerial Tankers" field={profile.airpower.tanker_fleet} />
              </div>
            </div>
          )}

          {profile && activeTab === 'Naval' && (
            <div>
              <SectionHeader title="Naval Forces" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
                <StatCard label="Total Battle Force Ships" field={profile.naval.total_assets} />
                <StatCard label="Aircraft Carriers" field={profile.naval.aircraft_carriers} sub="Largest carrier fleet in the world" />
                <StatCard label="Helicopter Carriers" field={profile.naval.helicopter_carriers} />
                <StatCard label="Destroyers" field={profile.naval.destroyers} />
                <StatCard label="Submarines" field={profile.naval.submarines} sub="All nuclear-powered" />
                <StatCard label="Frigates" field={profile.naval.frigates} />
                <StatCard label="Corvettes" field={profile.naval.corvettes} />
                <StatCard label="Patrol Vessels" field={profile.naval.patrol_vessels} />
              </div>
            </div>
          )}

          {profile && activeTab === 'Nuclear' && (
            <div>
              <SectionHeader title="Nuclear Capability" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14, marginBottom: 18 }}>
                <StatCard
                  label="Nuclear Power"
                  field={{
                    value: profile.nuclear.has_nuclear?.value ? 'Yes' : 'No',
                    sources: profile.nuclear.has_nuclear?.sources,
                    verified: profile.nuclear.has_nuclear?.verified
                  }}
                />
                <StatCard
                  label="Nuclear Triad"
                  field={{
                    value: profile.nuclear.has_triad?.value ? 'Yes' : 'No',
                    sources: profile.nuclear.has_triad?.sources,
                    verified: profile.nuclear.has_triad?.verified
                  }}
                />
                <StatCard label="Estimated Warheads" field={profile.nuclear.warheads} />
              </div>
              <div style={{ background: '#fafafa', border: '1px solid #ddd', borderRadius: 4, padding: '18px 22px', marginBottom: 10 }}>
                <div style={{ fontSize: 10.5, color: '#888', letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>Nuclear Note</div>
                <div style={{ fontSize: 13.5, color: '#444', lineHeight: 1.8 }}>{safeText(profile.nuclear.note)}</div>
              </div>

              <SectionHeader title="Defence Budget" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14, marginBottom: 18 }}>
                <StatCard label="Annual Budget (USD)" field={profile.budget.annual_usd} />
                <StatCard label="Percentage of GDP" field={profile.budget.pct_gdp} />
              </div>
              <div style={{ background: '#fafafa', border: '1px solid #ddd', borderRadius: 4, padding: '18px 22px', marginBottom: 18 }}>
                <div style={{ fontSize: 10.5, color: '#888', letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>Budget Note</div>
                <div style={{ fontSize: 13.5, color: '#444', lineHeight: 1.8 }}>{safeText(profile.budget.note)}</div>
              </div>
            </div>
          )}

        </div>
      </div>
    </FadeIn>
  );
}