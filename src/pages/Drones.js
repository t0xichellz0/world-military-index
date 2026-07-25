import React, { useState } from 'react';

const TIERS = [
  {
    tier: 'TIER I',
    name: 'Tactical / Expendable',
    cost: '<$5,000 per unit',
    desc: 'FPV kamikaze drones and modified commercial platforms. Single-use, swarm-capable. Decisive in attritional warfare at high volume.',
    examples: ['FPV Kamikaze', 'Modified DJI', 'Cheap Shahed variants'],
  },
  {
    tier: 'TIER II',
    name: 'Operational / Loitering Munitions',
    cost: '$10,000–$100,000',
    desc: 'Loiters over target area before striking. Medium range, precision strike. Game-changing in Ukraine and Nagorno-Karabakh.',
    examples: ['Shahed-136', 'Lancet-3', 'Switchblade 600', 'Harop'],
  },
  {
    tier: 'TIER III',
    name: 'Theatre / MALE Drones',
    cost: '$1M–$10M',
    desc: 'Medium Altitude Long Endurance. Multi-mission ISR and strike. Requires trained operators and ground infrastructure.',
    examples: ['Bayraktar TB2', 'ANKA-S', 'Wing Loong II', 'Heron TP'],
  },
  {
    tier: 'TIER IV',
    name: 'Strategic / HALE Drones',
    cost: '$10M–$200M',
    desc: 'High Altitude Long Endurance. Strategic ISR and precision strike at intercontinental distances. Near-peer to manned aircraft.',
    examples: ['MQ-9 Reaper', 'RQ-4 Global Hawk', 'WZ-7 Soaring Dragon'],
  },
  {
    tier: 'TIER V',
    name: 'Autonomous / AI-Enabled',
    cost: 'Variable — Emerging',
    desc: 'Minimal or no human control in targeting loop. Fastest-developing category. Classification methodology under active peer review.',
    examples: ['XQ-58A Valkyrie', 'Loyal Wingman programs', 'AI swarm systems'],
  },
];

const COUNTRIES = [
  {
    name: 'United States',
    tiers: {
      'TIER I': { level: 'Medium', note: 'Scaling up — historically focused on higher tiers' },
      'TIER II': { level: 'High', note: 'Switchblade proven in combat' },
      'TIER III': { level: 'High', note: 'Large MQ-9 Reaper fleet — 135 operational (May 2026)' },
      'TIER IV': { level: 'Dominant', note: 'RQ-4 Global Hawk — world leader' },
      'TIER V': { level: 'High', note: 'XQ-58A Valkyrie, active AI programs' },
    }
  },
  {
    name: 'Russia',
    tiers: {
      'TIER I': { level: 'Dominant', note: '7.3M FPV drones planned for 2026 — world scale production' },
      'TIER II': { level: 'Dominant', note: 'Shahed-136 & Lancet-3 — extensively combat proven' },
      'TIER III': { level: 'Low', note: 'Limited MALE capability' },
      'TIER IV': { level: 'Minimal', note: 'Near-zero HALE assets' },
      'TIER V': { level: 'Low', note: 'Early development stage' },
    }
  },
  {
    name: 'China',
    tiers: {
      'TIER I': { level: 'High', note: 'Large scale domestic production capacity' },
      'TIER II': { level: 'High', note: 'ASN-301 loitering munition — Harpy-class' },
      'TIER III': { level: 'High', note: 'Wing Loong II — exported to multiple states' },
      'TIER IV': { level: 'High', note: 'WZ-7 Soaring Dragon operational' },
      'TIER V': { level: 'High', note: 'Active AI drone programs — significant investment' },
    }
  },
  {
    name: 'Israel',
    tiers: {
      'TIER I': { level: 'Medium', note: 'Active deployment in Gaza operations' },
      'TIER II': { level: 'High', note: 'IAI Harop — 1,200 built, combat proven' },
      'TIER III': { level: 'High', note: 'Heron TP — long endurance, operational' },
      'TIER IV': { level: 'Medium', note: 'Limited HALE capability' },
      'TIER V': { level: 'High', note: 'Advanced AI integration in existing systems' },
    }
  },
  {
    name: 'Ukraine',
    tiers: {
      'TIER I': { level: 'Dominant', note: '8M+ FPV/year production capacity — world leader by necessity' },
      'TIER II': { level: 'High', note: 'Domestic Beaver & Baba Yaga — combat proven' },
      'TIER III': { level: 'Medium', note: 'Bayraktar TB2 + developing domestic platforms' },
      'TIER IV': { level: 'Minimal', note: 'Near-zero HALE assets' },
      'TIER V': { level: 'Low', note: 'Early AI integration — developing rapidly' },
    }
  },
];

const LEVEL_WIDTH = {
  Dominant: '100%',
  High: '72%',
  Medium: '45%',
  Low: '20%',
  Minimal: '8%',
};

export default function Drones() {
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      <div style={{
        background: '#fafafa', border: '1px solid #ddd',
        borderRadius: 4, padding: '22px 26px', marginBottom: 24
      }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 10, textTransform: 'uppercase' }}>
          Research in Progress · 2026
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 19, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>
          Drone Arsenal Classification
        </div>
        <div style={{ fontSize: 13.5, color: '#444', lineHeight: 1.8 }}>
          No existing military index accounts for drone capability. Global Firepower ignores drones entirely. This section proposes the first open-source tier-based classification framework for comparing drone arsenals across states. Scores are qualitative assessments based on open-source intelligence — not yet quantified. Methodology under active peer review.
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 14, textTransform: 'uppercase' }}>
          Classification Framework
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TIERS.map(t => (
            <div key={t.tier} style={{
              background: '#ffffff', border: '1px solid #ddd',
              borderRadius: 4, padding: '16px 20px',
              display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap'
            }}>
              <div style={{
                fontSize: 11, fontWeight: 600,
                color: '#1a1a1a',
                border: '1px solid #ccc',
                padding: '4px 10px', borderRadius: 3, flexShrink: 0
              }}>
                {t.tier}
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 11.5, color: '#666', marginBottom: 6 }}>
                  {t.cost}
                </div>
                <div style={{ fontSize: 12.5, color: '#555', lineHeight: 1.6 }}>
                  {t.desc}
                </div>
              </div>
              <div style={{ flexShrink: 0, minWidth: 150 }}>
                <div style={{ fontSize: 10, color: '#999', letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase' }}>
                  Examples
                </div>
                {t.examples.map(ex => (
                  <div key={ex} style={{
                    display: 'inline-block', fontSize: 11, color: '#555',
                    border: '1px solid #ddd', padding: '2px 8px',
                    borderRadius: 3, marginRight: 5, marginBottom: 5
                  }}>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 8, textTransform: 'uppercase' }}>
          Country Assessments
        </div>
        <div style={{
          fontSize: 12, color: '#666',
          border: '1px solid #ddd', borderRadius: 3,
          padding: '8px 14px', display: 'inline-block'
        }}>
          Click any country to expand its full tier breakdown
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COUNTRIES.map(country => {
          const isOpen = activeCountry === country.name;
          return (
            <div key={country.name} style={{
              background: '#ffffff',
              border: `1px solid ${isOpen ? '#1a1a1a' : '#ddd'}`,
              borderRadius: 4, overflow: 'hidden'
            }}>
              <div
                onClick={() => setActiveCountry(isOpen ? null : country.name)}
                style={{
                  padding: '16px 20px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 12
                }}
              >
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>
                  {country.name}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {Object.entries(country.tiers).map(([tier, data]) => (
                    <div key={tier} style={{
                      fontSize: 10, color: '#555',
                      border: '1px solid #ddd',
                      padding: '2px 7px', borderRadius: 3
                    }}>
                      {tier.replace('TIER ', 'T')} · {data.level}
                    </div>
                  ))}
                  <span style={{ color: '#999', fontSize: 12, marginLeft: 4 }}>
                    {isOpen ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {isOpen && (
                <div style={{ padding: '0 20px 20px', borderTop: '1px solid #eee' }}>
                  <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {Object.entries(country.tiers).map(([tier, data]) => (
                      <div key={tier}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                          <div style={{ fontSize: 10.5, color: '#555', width: 55, flexShrink: 0 }}>
                            {tier}
                          </div>
                          <div style={{
                            flex: 1, height: 6,
                            background: '#eee', borderRadius: 3, overflow: 'hidden'
                          }}>
                            <div style={{
                              width: LEVEL_WIDTH[data.level], height: '100%',
                              background: '#555', borderRadius: 3
                            }} />
                          </div>
                          <div style={{
                            fontSize: 10.5, color: '#1a1a1a',
                            width: 60, textAlign: 'right', flexShrink: 0, fontWeight: 600
                          }}>
                            {data.level}
                          </div>
                        </div>
                        <div style={{
                          fontSize: 12, color: '#666',
                          lineHeight: 1.6, paddingLeft: 65
                        }}>
                          {data.note}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: 16, padding: '10px 14px',
                    background: '#fafafa',
                    border: '1px solid #eee',
                    borderRadius: 3,
                    fontSize: 11, color: '#888'
                  }}>
                    Assessments are qualitative estimates based on open-source intelligence. Not yet quantified. Under peer review.
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}