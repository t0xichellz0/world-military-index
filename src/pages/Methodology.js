import React from 'react';

const CATEGORIES = [
  { title: 'Military Personnel', weight: '20%', desc: 'The starting point is the number of active military personnel. Countries with the numerically largest armed forces are further analyzed and ranked. Assessment is scored out of 17 points based on active personnel count relative to the highest-ranked country, plus 3 points if the country has a conscription system — conscription indicates greater reserve mobilization capability.' },
  { title: 'Conventional Arms', weight: '20%', desc: 'Includes the number of main battle tanks, fighter jets, and total military vessels. While this approach omits many other categories of military equipment, these are selected as the most representative of the land, sea, and air domains. Note: while both MiG-21 and F-22 are fighter jets, and both T-55 and Merkava 4 are tanks — their capabilities are hardly comparable.' },
  { title: 'Nuclear Arsenal', weight: '15%', desc: 'Assesses whether the country has a nuclear arsenal and if it possesses a nuclear triad. While nuclear weapons are primarily meant for deterrence, their existence is a notable factor in measuring military power.' },
  { title: 'Recent Combat Experience', weight: '15%', desc: 'Assesses whether the country has engaged in a major or minor war over the past five years. The definition of major and minor wars is based on the Uppsala Conflict Data Program (UCDP) methodology. This factor tests whether armed forces have actual combat experience.' },
  { title: 'Defence Budget', weight: '15%', desc: 'Assessed in absolute USD terms. This helps determine not only the resources devoted to the armed forces but also corroborates the level of modernity and size of the armed forces.' },
  { title: 'Societal Willingness to Fight', weight: '15%', desc: 'Assessed based on the latest data from the World Values Survey or European Values Study, where possible, and other data where no data is available from these sources. This factor helps explain the readiness of society — and the armed forces as an integral part of it — to fight for their country.' },
];

export default function Methodology() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      <div style={{
        background: '#fafafa', border: '1px solid #ddd',
        borderRadius: 4, padding: '24px 28px', marginBottom: 24
      }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 12, textTransform: 'uppercase' }}>
          Overview
        </div>
        <div style={{ fontSize: 14, color: '#333', lineHeight: 1.9 }}>
          The World Military Index ranks the top military powers based on measurable criteria. The priority is to use objective, verifiable data to avoid subjectivity. The index uses data on military personnel, conventional arms, nuclear arsenals, recent combat experience, defence budgets, and societal willingness to fight.
        </div>
        <div style={{ fontSize: 14, color: '#333', lineHeight: 1.9, marginTop: 12 }}>
          The highest-ranked country in each category receives the maximum points. All others receive points relative to the highest value. Primary sources include respective ministries of defence, armed forces, parliaments, and governments. Where primary sources are unavailable, verified secondary sources are used, including IISS Military Balance and SIPRI. At least two sources are used per data point where possible, since governments may overreport or underreport numbers.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 24 }}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} style={{
            background: '#ffffff', border: '1px solid #ddd',
            borderRadius: 4, padding: '20px 22px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{cat.title}</div>
              <div style={{
                fontSize: 11, color: '#1a1a1a',
                border: '1px solid #ccc',
                padding: '3px 10px', borderRadius: 3, flexShrink: 0, marginLeft: 8
              }}>{cat.weight}</div>
            </div>
            <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{cat.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: '#fafafa', border: '1px solid #ddd',
        borderRadius: 4, padding: '20px 24px', marginBottom: 20
      }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 12, textTransform: 'uppercase' }}>
          Primary Sources
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 2 }}>
          National Ministries of Defence · Armed Forces official publications · Parliamentary budget documents · Uppsala Conflict Data Program (UCDP) · World Values Survey (WVS) · European Values Study (EVS) · SIPRI Military Expenditure Database · IISS Military Balance
        </div>
      </div>

      <div style={{
        background: '#ffffff', border: '1px solid #ddd',
        borderRadius: 4, padding: '20px 24px'
      }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 12, textTransform: 'uppercase' }}>
          Caveats
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 1.85 }}>
          Comparing military powers is notoriously difficult. Smaller but better-trained and equipped armies using advanced strategies and tactics can defeat larger armies. Over the past decades, Israel has been the most notable example of defeating much larger armies of neighbouring states. On the other hand, much larger, technologically advanced armies have struggled to defeat inferior adversaries — the United States was unable to subdue Afghanistan or Iraq.
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 1.85, marginTop: 10 }}>
          Most armies are designed for specific geographical areas and prepared to fight particular adversaries. For example, North Korea's armed forces are organized to fight South Korea and would not be able to project conventional power far from their borders. Not only the number but the type of military equipment matters — while both MiG-21 and F-22 are fighter jets, and both T-55 and Merkava 4 are tanks, their capabilities are hardly comparable.
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 1.85, marginTop: 10 }}>
          Furthermore, the role of drones and artificial intelligence across the military further complicates measuring military strength. A drone worth a few hundred dollars can take out tanks, air-defence systems, and idle bombers on airfields — Russia's war in Ukraine is a testament to this new battlefield reality. However, it remains difficult to quantify and measure drone power in a way comparable to the index's other categories, and this factor is not currently included in the scoring.
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 1.85, marginTop: 10 }}>
          Other aspects — such as military training, command and control, intelligence and counterintelligence, reconnaissance, logistics, civilian-military cooperation, and alliances — all matter and can be decisive in minor and major wars, but are difficult to quantify.
        </div>
        <div style={{ fontSize: 13, color: '#444', lineHeight: 1.85, marginTop: 10, fontStyle: 'italic' }}>
          Ultimately, you only really know your military's worth after a war is over.
        </div>
      </div>

    </div>
  );
}