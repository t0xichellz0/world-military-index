import React from 'react';

const CATEGORIES = [
  {
    title: 'Military Personnel',
    weight: '20%',
    desc: 'The starting point is the number of active military personnel. Countries with the numerically largest armed forces are further analyzed. Assessment includes active members count and whether the country has a conscription system — the latter helps understand reserve readiness and capability.'
  },
  {
    title: 'Conventional Arms',
    weight: '20%',
    desc: 'Includes the number of main battle tanks, fighter jets, and total military vessels. These are selected as the most representative indicators of the land, sea, and air domains. Note: while both MiG-21 and F-22 are fighter jets, and both T-55 and Merkava 4 are tanks — their capabilities are hardly comparable.'
  },
  {
    title: 'Nuclear Arsenal',
    weight: '15%',
    desc: 'Assesses whether the country has a nuclear arsenal and if it possesses a nuclear triad. While nuclear weapons are primarily meant for deterrence, their existence is a notable factor in measuring military power and fundamentally changes strategic calculations.'
  },
  {
    title: 'Recent Combat Experience',
    weight: '15%',
    desc: 'Assesses whether the country has engaged in a major or minor war over the past five years. The definition of major and minor wars is based on the Uppsala Conflict Data Program (UCDP) methodology. This factor tests whether armed forces have actual real-world combat experience.'
  },
  {
    title: 'Defence Budget',
    weight: '15%',
    desc: 'Assessed in absolute USD terms. This determines not only the resources devoted to the armed forces but also corroborates the level of modernity and size of the armed forces. Primary sources are national ministries of defence and parliamentary budget documents.'
  },
  {
    title: 'Societal Willingness to Fight',
    weight: '15%',
    desc: 'Assessed based on the latest data from the World Values Survey or European Values Study where possible, and other data where these sources are unavailable. This factor explains the readiness of society — and the armed forces as an integral part of it — to fight for their country.'
  },
];

export default function Methodology() {
  return (
    <div style={{ padding: '16px', maxWidth: 900, margin: '0 auto' }}>

      {/* Intro */}
      <div style={{
        background: '#0b1120', border: '1px solid #1e2d45',
        borderRadius: 10, padding: '20px 24px', marginBottom: 20
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a84b', marginBottom: 10 }}>
          Overview
        </div>
        <div style={{ fontSize: 13, color: '#a0b0c0', lineHeight: 1.8 }}>
          The World Military Index ranks the top 30 global military powers based on measurable criteria. The priority is to use objective, verifiable data to avoid subjectivity. The index uses data on military personnel, conventional arms, nuclear arsenals, recent combat experience, defence budgets, and societal willingness to fight.
        </div>
        <div style={{ fontSize: 13, color: '#a0b0c0', lineHeight: 1.8, marginTop: 10 }}>
          The highest-ranked country in each category receives the maximum points. All others receive points relative to the highest value. Wherever possible, primary sources are used — respective ministries of defence, armed forces, parliaments, and governments. Where primary sources are unavailable or cannot be trusted, secondary sources such as scientific studies, think-tank reports, and verified media reports are used. At least two sources are used per data point where possible, since governments may overreport or underreport numbers.
        </div>
      </div>

      {/* Category cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} style={{
            background: '#0b1120', border: '1px solid #1e2d45',
            borderRadius: 10, padding: '18px 20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontFamily: 'serif', fontSize: 14, fontWeight: 700, color: '#e8edf5' }}>{cat.title}</div>
              <div style={{
                fontFamily: 'monospace', fontSize: 11, color: '#c8a84b',
                background: 'rgba(200,168,75,0.12)', border: '1px solid rgba(200,168,75,0.25)',
                padding: '3px 10px', borderRadius: 999, flexShrink: 0, marginLeft: 8
              }}>{cat.weight}</div>
            </div>
            <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 1.7 }}>{cat.desc}</div>
          </div>
        ))}
      </div>

      {/* Sources */}
      <div style={{
        background: '#0b1120', border: '1px solid #1e2d45',
        borderRadius: 10, padding: '18px 24px', marginBottom: 16
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a84b', marginBottom: 12 }}>
          Primary Sources
        </div>
        <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 2 }}>
          National Ministries of Defence · Armed Forces official publications · Parliamentary budget documents · Uppsala Conflict Data Program (UCDP) · World Values Survey (WVS) · European Values Study (EVS) · SIPRI Military Expenditure Database · IISS Military Balance · Official government statistical agencies
        </div>
      </div>

      {/* Caveats */}
      <div style={{
        background: '#0b1120', border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 10, padding: '18px 24px'
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a84b', marginBottom: 12 }}>
          Caveats
        </div>
        <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 1.85 }}>
          Comparing military powers is notoriously difficult. Smaller but better-trained armies using advanced strategies can defeat larger ones — Israel is the most notable example. Conversely, larger technologically advanced armies have struggled against inferior adversaries; the United States was unable to subdue Afghanistan or Iraq.
        </div>
        <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 1.85, marginTop: 10 }}>
          Most armies are designed for specific geographical areas and particular adversaries. Not only the number but the type of equipment matters — a MiG-21 and an F-22 are both fighter jets, but their capabilities are hardly comparable. The role of drones and AI further complicates measurement: a drone worth a few hundred dollars can destroy tanks, air-defence systems, and aircraft. Other decisive factors — military training, command and control, intelligence, logistics, and civilian-military cooperation — are difficult to quantify but can determine the outcome of any conflict.
        </div>
        <div style={{ fontSize: 12.5, color: '#5a7090', lineHeight: 1.85, marginTop: 10, fontStyle: 'italic' }}>
          Ultimately, you only really know your military's worth after a war is over.
        </div>
      </div>

    </div>
  );
}