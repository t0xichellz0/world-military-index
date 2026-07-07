import React from 'react';

const CATEGORIES = [
  { title: 'Military Personnel', weight: '20%', desc: 'Active members count plus conscription system. Conscription indicates reserve readiness — critical in total war scenarios.' },
  { title: 'Conventional Arms', weight: '20%', desc: 'Main battle tanks, fighter jets, and naval vessels. Type matters as much as count.' },
  { title: 'Nuclear Arsenal', weight: '15%', desc: 'Whether a state possesses nuclear weapons and a nuclear triad. Fundamentally changes strategic calculations.' },
  { title: 'Recent Combat Experience', weight: '15%', desc: 'Major or minor war in past five years (Uppsala Conflict Data Program). China scores 0, Ukraine scores maximum.' },
  { title: 'Defence Budget', weight: '15%', desc: 'Absolute USD spending. Reflects modernisation resources. Cross-referenced against multiple sources.' },
  { title: 'Societal Willingness to Fight', weight: '15%', desc: 'Percentage willing to fight for their country. Source: World Values Survey / European Values Study.' },
];

export default function Methodology() {
  return (
    <div style={{ padding: '24px 32px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} style={{ background: '#0b1120', border: '1px solid #1e2d45', borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontFamily: 'serif', fontSize: 15, fontWeight: 700, color: '#e8edf5' }}>{cat.title}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#c8a84b', background: 'rgba(200,168,75,0.12)', border: '1px solid rgba(200,168,75,0.25)', padding: '3px 10px', borderRadius: 999 }}>{cat.weight}</div>
            </div>
            <div style={{ fontSize: 13, color: '#5a7090', lineHeight: 1.7 }}>{cat.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#0b1120', border: '1px solid rgba(200,168,75,0.2)', borderRadius: 10, padding: '20px 24px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a84b', marginBottom: 12 }}>Caveats</div>
        <div style={{ fontSize: 13, color: '#5a7090', lineHeight: 1.8 }}>
          Comparing military powers is notoriously difficult. Smaller, better-trained armies can defeat larger forces. Equipment type matters as much as count. Drones and AI further complicate measurement. This index is a structured reference tool, not a definitive verdict.
        </div>
      </div>
    </div>
  );
}