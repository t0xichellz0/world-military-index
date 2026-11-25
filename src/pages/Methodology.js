import React from 'react';
import PageLogo from '../components/PageLogo';

const CATEGORIES = [
  { title: 'Military Personnel', weight: '20%', desc: 'The starting point is the number of active military personnel (this excludes voluntary organizations and reserve forces). Countries with the numerically largest armed forces are further analyzed and ranked. Assessment is scored out of 17 points based on active personnel count relative to the highest-ranked country, plus 3 points if the country has a conscription system — conscription indicates greater reserve mobilization capability.' },
  { title: 'Conventional Arms', weight: '20%', desc: 'Includes the number of main battle tanks, fighter jets, and total military vessels. Vessels are counted as listed in the IISS Military Balance: submarines, principal surface combatants, patrol and coastal combatants, mine warfare vessels, and principal amphibious and landing ships. Landing craft, logistics and support ships, and coast guard and other paramilitary vessels are not counted. Only equipment in service is counted; equipment in store is excluded. While this approach omits many other categories of military equipment, these are selected as the most representative of the land, sea, and air domains. Note: while both MiG-21 and F-22 are fighter jets, and both T-55 and Merkava 4 are tanks — their capabilities are hardly comparable.' },
  { title: 'Nuclear Arsenal', weight: '15%', desc: 'Assesses whether the country has a nuclear arsenal and if it possesses a nuclear triad. While nuclear weapons are primarily meant for deterrence, their existence is a notable factor in measuring military power. A nuclear arsenal accounts for 10 points, while a nuclear triad accounts for 5 points. Only confirmed, operational capabilities are counted; systems that are in development, in testing, or merely declared do not qualify. A triad requires operational land-based, sea-based and air-delivered legs.' },
  { title: 'Recent Combat Experience', weight: '15%', desc: 'Assesses whether the country has engaged in a major or minor war over the past five years. Definitions based on the Uppsala Conflict Data Program (UCDP) methodology. Engagement in a major war results in 15 points; engagement in only a minor war results in 5 points. Countries with no qualifying conflict receive 0. The period assessed is 2022–2026. A country that is a primary party to a conflict is scored on the intensity of that conflict; a country that only sends supporting troops to the war of another party receives the minor-war score.' },
  { title: 'Defence Budget', weight: '15%', desc: 'The national defence budget is assessed in absolute USD terms. This helps determine not only the resources devoted to the armed forces but also corroborates the level of modernity and size of the armed forces. The highest-ranked country in each category receives the maximum points. All others receive points relative to the highest value.' },
  { title: 'Societal Willingness to Fight', weight: '10%', desc: 'This factor helps explain the readiness of society — and the armed forces as an integral part of it — to fight for their country.' },
];

export default function Methodology() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      <PageLogo />

      <div style={{
        background: '#fafafa', border: '1px solid #ddd',
        borderRadius: 4, padding: '24px 28px', marginBottom: 24
      }}>
        <div style={{ fontSize: 10.5, letterSpacing: 1.5, color: '#888', marginBottom: 12, textTransform: 'uppercase' }}>
          Overview
        </div>
        <div style={{ fontSize: 14, color: '#333', lineHeight: 1.9 }}>
          The World Military Index ranks the top military powers based on measurable criteria where possible. The priority is to use objective, verifiable data to avoid subjectivity. The index uses data on military personnel, conventional arms, nuclear arsenals, recent combat experience, defence budgets, and societal willingness to fight.
        </div>
        <div style={{ fontSize: 14, color: '#333', lineHeight: 1.9, marginTop: 12 }}>
          The highest-ranked country in each category receives the maximum points. All others receive points relative to the highest value.
        </div>
        <div style={{ fontSize: 14, color: '#333', lineHeight: 1.9, marginTop: 12 }}>
          Data come from reputable, neutral scientific institutions and initiatives such as the International Institute for Strategic Studies (IISS), IISS Military Balance and Stockholm International Peace Research Institute (SIPRI). Assessed based on the latest data from the European Values Study (EVS), where possible, and other data where no data is available from these sources. At least two sources are used per data point where possible, since governments may overreport or underreport numbers.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 24 }}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} style={{
            background: '#ffffff', border: '1px solid #ddd',
            borderRadius: 4, padding: '20px 22px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{cat.title}</div>
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
          Although there is no credible method or index to measure drone power, drones cannot be ignored when assessing military power. Therefore, we offer our assessment of each country's drone capacities as part of the conventional arms category. Each country receives a drone score from 0 to 10, which is divided by two and contributes up to 5 of the 20 conventional arms points (the same weight as tanks, fighter jets and vessels). The scale reflects demonstrated capability, not announced plans: 10 means mass wartime production and use of drones in combat; scores in the upper-middle range mean large, operationally proven drone forces and domestic industry; middle scores mean combat-proven or substantial fleets with limited production scale; low scores mean drones used mostly for intelligence, surveillance and reconnaissance, or programmes that are still planned. Countries with no meaningful drone force or industry score 0. These scores are our assessment and are reviewed as new evidence emerges.
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