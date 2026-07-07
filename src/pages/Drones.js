import React, { useState } from 'react';

const TIERS = [
  {
    tier: 'TIER I',
    name: 'Tactical / Expendable',
    cost: '<$5,000 per unit',
    desc: 'FPV kamikaze drones and modified commercial platforms. Single-use, swarm-capable. Decisive in attritional warfare at high volume.',
    examples: ['FPV Kamikaze', 'Modified DJI', 'Cheap Shahed variants'],
    color: '#c84b4b'
  },
  {
    tier: 'TIER II',
    name: 'Operational / Loitering Munitions',
    cost: '$10,000–$100,000',
    desc: 'Loiters over target area before striking. Medium range, precision strike. Game-changing in Ukraine and Nagorno-Karabakh.',
    examples: ['Shahed-136', 'Lancet-3', 'Switchblade 600', 'Harop'],
    color: '#c8784b'
  },
  {
    tier: 'TIER III',
    name: 'Theatre / MALE Drones',
    cost: '$1M–$10M',
    desc: 'Medium Altitude Long Endurance. Multi-mission ISR and strike. Requires trained operators and ground infrastructure.',
    examples: ['Bayraktar TB2', 'ANKA-S', 'Wing Loong II', 'Heron TP'],
    color: '#c8a84b'
  },
  {
    tier: 'TIER IV',
    name: 'Strategic / HALE Drones',
    cost: '$10M–$200M',
    desc: 'High Altitude Long Endurance. Strategic ISR and precision strike at intercontinental distances. Near-peer to manned aircraft.',
    examples: ['MQ-9 Reaper', 'RQ-4 Global Hawk', 'WZ-7 Soaring Dragon'],
    color: '#4b8bc8'
  },
  {
    tier: 'TIER V',
    name: 'Autonomous / AI-Enabled',
    cost: 'Variable — Emerging',
    desc: 'Minimal or no human control in targeting loop. Fastest-developing category. Classification methodology under active peer review.',
    examples: ['XQ-58A Valkyrie', 'Loyal Wingman programs', 'AI swarm systems'],
    color: '#7b4bc8'
  },
];

const COUNTRIES = [
  {
    name: 'United States',
    tiers: {
      'TIER I': { level: 'medium', note: 'Scaling up — historically focused on higher tiers' },
      'TIER II': { level: 'high', note: 'Switchblade proven in combat' },
      'TIER III': { level: 'high', note: 'Large MQ-9 Reaper fleet — 135 operational (May 2026)' },
      'TIER IV': { level: 'dominant', note: 'RQ-4 Global Hawk — world leader' },
      'TIER V': { level: 'high', note: 'XQ-58A Valkyrie, active AI programs' },
    }
  },
  {
    name: 'Russia',
    tiers: {
      'TIER I': { level: 'dominant', note: '7.3M FPV drones planned for 2026 — world scale production' },
      'TIER II': { level: 'dominant', note: 'Shahed-136 & Lancet-3 — extensively combat proven' },
      'TIER III': { level: 'low', note: 'Limited MALE capability' },
      'TIER IV': { level: 'minimal', note: 'Near-zero HALE assets' },
      'TIER V': { level: 'low', note: 'Early development stage' },
    }
  },
  {
    name: 'China',
    tiers: {
      'TIER I': { level: 'high', note: 'Large scale domestic production capacity' },
      'TIER II': { level: 'high', note: 'ASN-301 loitering munition — Harpy-class' },
      'TIER III': { level: 'high', note: 'Wing Loong II — exported to multiple states' },
      'TIER IV': { level: 'high', note: 'WZ-7 Soaring Dragon operational' },
      'TIER V': { level: 'high', note: 'Active AI drone programs — significant investment' },
    }
  },
  {
    name: 'Israel',
    tiers: {
      'TIER I': { level: 'medium', note: 'Active deployment in Gaza operations' },
      'TIER II': { level: 'high', note: 'IAI Harop — 1,200 built, combat proven' },
      'TIER III': { level: 'high', note: 'Heron TP — long endurance, operational' },
      'TIER IV': { level: 'medium', note: 'Limited HALE capability' },
      'TIER V': { level: 'high', note: 'Advanced AI integration in existing systems' },
    }
  },
  {
    name: 'Ukraine',
    tiers: {
      'TIER I': { level: 'dominant', note: '8M+ FPV/year production capacity — world leader by necessity' },
      'TIER II': { level: 'high', note: 'Domestic Beaver & Baba Yaga — combat proven' },
      'TIER III': { level: 'medium', note: 'Bayraktar TB2 + developing domestic platforms' },
      'TIER IV': { level: 'minimal', note: 'Near-zero HALE assets' },
      'TIER V': { level: 'low', note: 'Early AI integration — developing rapidly' },
    }
  },
];

const LEVEL_CONFIG = {
  dominant: { label: 'Dominant', color: '#4bc87a', bg: 'rgba(75,200,122,0.12)', border: 'rgba(75,200,122,0.3)', width: '100%' },
  high:     { label: 'High',     color: '#c8a84b', bg: 'rgba(200,168,75,0.12)', border: 'rgba(200,168,75,0.3)', width: '72%' },
  medium:   { label: 'Medium',   color: '#4b8bc8', bg: 'rgba(75,139,200,0.12)', border: 'rgba(75,139,200,0.3)', width: '45%' },
  low:      { label: 'Low',      color: '#c8784b', bg: 'rgba(200,120,75,0.12)', border: 'rgba(200,120,75,0.3)', width: '20%' },
  minimal:  { label: 'Minimal',  color: '#5a7090', bg: 'rgba(90,112,144,0.08)', border: 'rgba(90,112,144,0.2)', width: '8%' },
};

export default function Drones() {
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <div style={{ padding: '16px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{
        background: '#0b1120', border: '1px solid rgba(75,139,200,0.3)',
        borderRadius: 10, padding: '18px 20px', marginBottom: 20
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#4b8bc8', marginBottom: 8 }}>
          Research in Progress · 2026
        </div>
        <div style={{ fontFamily: 'serif', fontSize: 18, fontWeight: 700, color: '#e8edf5', marginBottom: 8 }}>
          Drone Arsenal Classification
        </div>
        <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 1.7 }}>
          No existing military index accounts for drone capability. This section proposes the first open-source tier-based classification framework for comparing drone arsenals across states. Scores are qualitative assessments based on open-source intelligence — not yet quantified. Methodology under active peer review.
        </div>
      </div>

      {/* Tier legend */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#5a7090', marginBottom: 12 }}>
          Classification Framework
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {TIERS.map(t => (
            <div key={t.tier} style={{
              background: '#0b1120', border: '1px solid #1e2d45',
              borderRadius: 8, padding: '12px 16px',
              display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap'
            }}>
              <div style={{
                fontFamily: 'monospace', fontSize: 10, fontWeight: 500,
                color: t.color, background: `${t.color}18`,
                border: `1px solid ${t.color}44`,
                padding: '4px 10px', borderRadius: 4, flexShrink: 0
              }}>
                {t.tier}
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontFamily: 'serif', fontSize: 13, fontWeight: 700, color: '#e8edf5', marginBottom: 2 }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: t.color, marginBottom: 4 }}>
                  {t.cost}
                </div>
                <div style={{ fontSize: 12, color: '#5a7090', lineHeight: 1.6 }}>
                  {t.desc}
                </div>
              </div>
              <div style={{ flexShrink: 0, minWidth: 140 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#5a7090', letterSpacing: 1, marginBottom: 4 }}>
                  EXAMPLES
                </div>
                {t.examples.map(ex => (
                  <div key={ex} style={{
                    display: 'inline-block', fontSize: 10, color: '#5a7090',
                    border: '1px solid #1e2d45', padding: '2px 6px',
                    borderRadius: 3, marginRight: 4, marginBottom: 4
                  }}>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Country profiles */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#5a7090', marginBottom: 8 }}>
          Country Assessments
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(75,139,200,0.08)', border: '1px solid rgba(75,139,200,0.2)',
          borderRadius: 6, padding: '6px 12px', marginBottom: 12
        }}>
          <span style={{ fontSize: 13 }}></span>
          <span style={{ fontSize: 12, color: '#4b8bc8', fontFamily: 'monospace' }}>
            Click any country to expand its full tier breakdown
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {COUNTRIES.map(country => {
          const isOpen = activeCountry === country.name;
          return (
            <div key={country.name} style={{
              background: '#0b1120',
              border: `1px solid ${isOpen ? 'rgba(200,168,75,0.3)' : '#1e2d45'}`,
              borderRadius: 10, overflow: 'hidden'
            }}>
              <div
                onClick={() => setActiveCountry(isOpen ? null : country.name)}
                style={{
                  padding: '14px 16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 12
                }}
              >
                <div style={{ fontFamily: 'serif', fontSize: 15, fontWeight: 700, color: '#e8edf5' }}>
                  {country.name}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {Object.entries(country.tiers).map(([tier, data]) => {
                    const cfg = LEVEL_CONFIG[data.level];
                    return (
                      <div key={tier} style={{
                        fontFamily: 'monospace', fontSize: 8,
                        color: cfg.color, background: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                        padding: '2px 6px', borderRadius: 3
                      }}>
                        {tier.replace('TIER ', 'T')} · {cfg.label}
                      </div>
                    );
                  })}
                  <span style={{ color: '#5a7090', fontSize: 12, marginLeft: 4 }}>
                    {isOpen ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {isOpen && (
                <div style={{ padding: '0 16px 16px', borderTop: '1px solid #1e2d45' }}>
                  <div style={{ paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {Object.entries(country.tiers).map(([tier, data]) => {
                      const cfg = LEVEL_CONFIG[data.level];
                      const tierInfo = TIERS.find(t => t.tier === tier);
                      return (
                        <div key={tier}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <div style={{
                              fontFamily: 'monospace', fontSize: 9,
                              color: tierInfo.color, width: 52, flexShrink: 0
                            }}>
                              {tier}
                            </div>
                            <div style={{
                              flex: 1, height: 6,
                              background: '#1e2d45', borderRadius: 3, overflow: 'hidden'
                            }}>
                              <div style={{
                                width: cfg.width, height: '100%',
                                background: cfg.color, borderRadius: 3
                              }} />
                            </div>
                            <div style={{
                              fontFamily: 'monospace', fontSize: 9,
                              color: cfg.color, width: 60,
                              textAlign: 'right', flexShrink: 0
                            }}>
                              {cfg.label}
                            </div>
                          </div>
                          <div style={{
                            fontSize: 11.5, color: '#5a7090',
                            lineHeight: 1.6, paddingLeft: 60
                          }}>
                            {data.note}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{
                    marginTop: 14, padding: '8px 12px',
                    background: 'rgba(200,168,75,0.06)',
                    border: '1px solid rgba(200,168,75,0.15)',
                    borderRadius: 6, fontFamily: 'monospace',
                    fontSize: 9, color: '#5a7090', letterSpacing: 0.5
                  }}>
                    ⚠ Assessments are qualitative estimates based on open-source intelligence. Not yet quantified. Under peer review.
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