import React, { useState, useEffect } from 'react';
import { PROFILES } from '../data/countryProfiles';

const SCORE_CATEGORIES = [
  { key: 'Personnel', label: 'Military Personnel', max: 20, color: '#c8a84b', desc: 'Active members and conscription system assessment.' },
  { key: 'Arms', label: 'Conventional Arms', max: 20, color: '#c8a84b', desc: 'Main battle tanks, fighter jets, and naval vessels.' },
  { key: 'Nuclear', label: 'Nuclear Arsenal', max: 15, color: '#4bc87a', desc: 'Nuclear weapons possession and triad capability.' },
  { key: 'Combat', label: 'Recent Combat Experience', max: 15, color: '#4bc87a', desc: 'Major or minor war in past five years (UCDP methodology).' },
  { key: 'Willingness', label: 'Societal Willingness to Fight', max: 15, color: '#4b8bc8', desc: 'World Values Survey / European Values Study data.' },
  { key: 'Budget', label: 'Defence Budget', max: 15, color: '#c84b4b', desc: 'Absolute USD defence spending.' },
];

const TABS = ['Overview', 'Manpower', 'Land', 'Airpower', 'Naval', 'Nuclear'];

function StatCard({ label, value, sub, color }) {
  return (
    <div style={{
      background: '#111827',
      border: `1px solid ${color ? color + '33' : '#1e2d45'}`,
      borderRadius: 8,
      padding: '14px 16px',
    }}>
      <div style={{
        fontFamily: 'monospace', fontSize: 9,
        color: color || '#5a7090',
        letterSpacing: 1.5, marginBottom: 6,
        textTransform: 'uppercase'
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'serif', fontSize: 20,
        fontWeight: 700, color: '#e8edf5', lineHeight: 1.2
      }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 11, color: '#5a7090', marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{
      background: '#1a2535',
      padding: '10px 16px',
      borderRadius: 8,
      fontFamily: 'monospace',
      fontSize: 10,
      fontWeight: 500,
      color: '#c8a84b',
      marginBottom: 12,
      marginTop: 20,
      letterSpacing: 2,
      textTransform: 'uppercase',
      borderLeft: '3px solid #c8a84b'
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
      background: '#0b1120',
      border: '1px solid #1e2d45',
      borderRadius: 10,
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <div style={{ fontFamily: 'serif', fontSize: 20, color: '#e8edf5', marginBottom: 12 }}>
        Detailed Profile Coming Soon
      </div>
      <div style={{ fontSize: 13, color: '#5a7090', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
        Full country profiles are under development. Data is being verified
        against primary sources including national Ministries of Defence
        and IISS Military Balance.
      </div>
    </div>
  );

  return (
    <FadeIn>
      <div style={{ padding: '16px', maxWidth: 900, margin: '0 auto' }}>

        {/* Back button */}
        <button onClick={onBack} style={{
          background: 'none',
          border: '1px solid #1e2d45',
          color: '#5a7090',
          fontFamily: 'monospace',
          fontSize: 10,
          padding: '6px 14px',
          borderRadius: 6,
          cursor: 'pointer',
          marginBottom: 20,
          letterSpacing: 2,
          textTransform: 'uppercase',
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = '#c8a84b'; e.target.style.color = '#c8a84b'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#1e2d45'; e.target.style.color = '#5a7090'; }}
        >
          Back to Rankings
        </button>

        {/* Hero */}
        <div style={{
          background: '#0b1120',
          border: '1px solid #1e2d45',
          borderRadius: 12,
          padding: '24px',
          marginBottom: 16,
          borderLeft: rank <= 3 ? '4px solid #c8a84b' : '4px solid #1e2d45'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#5a7090', marginBottom: 8, textTransform: 'uppercase' }}>
                Rank #{rank} · World Military Index 2026
              </div>
              <div style={{ fontFamily: 'serif', fontSize: 28, fontWeight: 700, color: '#e8edf5' }}>
                {country.Country}
              </div>
              {profile && (
                <div style={{ fontSize: 13, color: '#5a7090', marginTop: 10, maxWidth: 500, lineHeight: 1.7 }}>
                  {profile.overview}
                </div>
              )}
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'serif', fontSize: 48, fontWeight: 700, color: '#c8a84b', lineHeight: 1 }}>
                {total}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#5a7090', marginTop: 4, letterSpacing: 1 }}>
                Out of 100
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => switchTab(tab)} style={{
              background: activeTab === tab ? '#c8a84b' : '#0b1120',
              border: '1px solid',
              borderColor: activeTab === tab ? '#c8a84b' : '#1e2d45',
              color: activeTab === tab ? '#05080f' : '#5a7090',
              fontFamily: 'monospace',
              fontSize: 10,
              letterSpacing: 1,
              padding: '7px 14px',
              borderRadius: 6,
              cursor: 'pointer',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.15s ease',
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content with fade */}
        <div style={{
          opacity: tabVisible ? 1 : 0,
          transform: tabVisible ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.15s ease, transform 0.15s ease'
        }}>

          {/* No profile */}
          {!profile && comingSoon}

          {/* Overview */}
          {profile && activeTab === 'Overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SCORE_CATEGORIES.map(cat => {
                const val = country[cat.key] || 0;
                const pct = Math.min(Math.round((val / cat.max) * 100), 100);
                return (
                  <div key={cat.key} style={{
                    background: '#0b1120',
                    border: '1px solid #1e2d45',
                    borderRadius: 10,
                    padding: '14px 18px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <div>
                        <div style={{ fontFamily: 'serif', fontSize: 13, fontWeight: 700, color: '#e8edf5' }}>{cat.label}</div>
                        <div style={{ fontSize: 11, color: '#5a7090', marginTop: 2 }}>{cat.desc}</div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                        <div style={{ fontFamily: 'serif', fontSize: 22, fontWeight: 700, color: cat.color }}>
                          {val % 1 === 0 ? val : val.toFixed(2)}
                        </div>
                        <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090' }}>/ {cat.max}</div>
                      </div>
                    </div>
                    <div style={{ height: 6, background: '#1e2d45', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: cat.color, borderRadius: 3, transition: 'width 0.6s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Manpower */}
          {profile && activeTab === 'Manpower' && (
            <div>
              <SectionHeader title="Manpower" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                <StatCard label="Total Population" value={profile.manpower.total_population} color="#4bc87a" />
                <StatCard label="Available Manpower" value={profile.manpower.available_manpower} color="#4bc87a" />
                <StatCard label="Active Personnel" value={profile.manpower.active_personnel} color="#c8a84b" />
                <StatCard label="Reserve Personnel" value={profile.manpower.reserve_personnel} color="#c8a84b" />
                <StatCard label="Paramilitary" value={profile.manpower.paramilitary} color="#5a7090" />
              </div>
              <SectionHeader title="Service Branch Personnel" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                <StatCard label="Army Personnel" value={profile.manpower.army_personnel} color="#c8a84b" />
                <StatCard label="Navy Personnel" value={profile.manpower.navy_personnel} color="#4b8bc8" />
                <StatCard label="Air Force Personnel" value={profile.manpower.airforce_personnel} color="#4b8bc8" />
              </div>
            </div>
          )}

          {/* Land */}
          {profile && activeTab === 'Land' && (
            <div>
              <SectionHeader title="Land Forces" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                <StatCard label="Main Battle Tanks" value={profile.land.tanks} color="#c8a84b" />
                <StatCard label="Armored Vehicles" value={profile.land.armored_vehicles} color="#c8a84b" />
                <StatCard label="Self-Propelled Artillery" value={profile.land.self_propelled_artillery} color="#c8784b" />
                <StatCard label="Towed Artillery" value={profile.land.towed_artillery} color="#c8784b" />
                <StatCard label="Rocket Artillery (MLRS)" value={profile.land.rocket_artillery} color="#c8784b" />
              </div>
            </div>
          )}

          {/* Airpower */}
          {profile && activeTab === 'Airpower' && (
            <div>
              <SectionHeader title="Air Power" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                <StatCard label="Total Active Aircraft" value={profile.airpower.total_aircraft} color="#4b8bc8" sub="All types combined" />
                <StatCard label="Fighter Aircraft" value={profile.airpower.fighters} color="#4b8bc8" />
                <StatCard label="Attack Aircraft" value={profile.airpower.attack_aircraft} color="#4b8bc8" />
                <StatCard label="Transport Aircraft" value={profile.airpower.transport} color="#5a7090" />
                <StatCard label="Trainer Aircraft" value={profile.airpower.trainers} color="#5a7090" />
                <StatCard label="Total Helicopters" value={profile.airpower.helicopters} color="#4bc87a" />
                <StatCard label="Attack Helicopters" value={profile.airpower.attack_helicopters} color="#4bc87a" />
                <StatCard label="Aerial Tankers" value={profile.airpower.tanker_fleet} color="#5a7090" />
              </div>
            </div>
          )}

          {/* Naval */}
          {profile && activeTab === 'Naval' && (
            <div>
              <SectionHeader title="Naval Forces" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                <StatCard label="Total Battle Force Ships" value={profile.naval.total_assets} color="#4b8bc8" />
                <StatCard label="Aircraft Carriers" value={profile.naval.aircraft_carriers} color="#4b8bc8" sub="Largest carrier fleet in the world" />
                <StatCard label="Helicopter Carriers" value={profile.naval.helicopter_carriers} color="#4b8bc8" />
                <StatCard label="Destroyers" value={profile.naval.destroyers} color="#4b8bc8" />
                <StatCard label="Submarines" value={profile.naval.submarines} color="#c8a84b" sub="All nuclear-powered" />
                <StatCard label="Frigates" value={profile.naval.frigates} color="#5a7090" />
                <StatCard label="Corvettes" value={profile.naval.corvettes} color="#5a7090" />
                <StatCard label="Patrol Vessels" value={profile.naval.patrol_vessels} color="#5a7090" />
              </div>
            </div>
          )}

          {/* Nuclear */}
          {profile && activeTab === 'Nuclear' && (
            <div>
              <SectionHeader title="Nuclear Capability" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10, marginBottom: 16 }}>
                <StatCard label="Nuclear Power" value={profile.nuclear.has_nuclear ? 'Yes' : 'No'} color={profile.nuclear.has_nuclear ? '#4bc87a' : '#c84b4b'} />
                <StatCard label="Nuclear Triad" value={profile.nuclear.has_triad ? 'Yes' : 'No'} color={profile.nuclear.has_triad ? '#4bc87a' : '#c84b4b'} />
                <StatCard label="Estimated Warheads" value={profile.nuclear.warheads} color="#c84b4b" />
              </div>
              <div style={{ background: '#0b1120', border: '1px solid rgba(200,75,75,0.2)', borderRadius: 10, padding: '16px 20px', marginBottom: 8 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#c84b4b', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>Nuclear Note</div>
                <div style={{ fontSize: 13, color: '#5a7090', lineHeight: 1.7 }}>{profile.nuclear.note}</div>
              </div>

              <SectionHeader title="Defence Budget" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10, marginBottom: 16 }}>
                <StatCard label="Annual Budget (USD)" value={profile.budget.annual_usd} color="#4bc87a" />
                <StatCard label="Percentage of GDP" value={profile.budget.pct_gdp} color="#4bc87a" />
              </div>
              <div style={{ background: '#0b1120', border: '1px solid rgba(75,200,122,0.2)', borderRadius: 10, padding: '16px 20px', marginBottom: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#4bc87a', letterSpacing: 2, marginBottom: 8, textTransform: 'uppercase' }}>Budget Note</div>
                <div style={{ fontSize: 13, color: '#5a7090', lineHeight: 1.7 }}>{profile.budget.note}</div>
              </div>

              <SectionHeader title="Sources" />
              <div style={{ background: '#0b1120', border: '1px solid #1e2d45', borderRadius: 10, padding: '16px 20px' }}>
                {profile.sources.map((s, i) => (
                  <div key={i} style={{ fontSize: 12, color: '#5a7090', lineHeight: 2, borderBottom: i < profile.sources.length - 1 ? '1px solid #1e2d45' : 'none', paddingBottom: 4, marginBottom: 4 }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </FadeIn>
  );
}