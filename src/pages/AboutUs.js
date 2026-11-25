import React from 'react';
import PageLogo from '../components/PageLogo';

export default function AboutUs() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 760, margin: '0 auto', fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif" }}>

      <PageLogo />

      <div style={{ height: 8 }} />

      <div style={{
        background: '#ffffff', border: '1px solid #ddd',
        borderRadius: 4, padding: '32px'
      }}>
        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          The Center for Geopolitical Studies Riga is an independent research think-tank based in Latvia. It focuses on security dilemmas and geopolitical rivalries in the Baltic Sea region and beyond.
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          Our flagship publication is{' '}
          <a href="https://www.geopolitics.center/outputs/latvias-security-barometer" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>
            Latvia's Security Barometer
          </a>
          , published quarterly.
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          Our articles have been published by the Center for European Policy Analysis, Foreign Policy Research Institute, Harvard University Davis Center, Macdonald-Laurier Institute, Canadian Foreign Policy Journal, Internationale Politik Quarterly, Central European Journal of International and Security Studies, Stars and Stripes, Michigan Daily and other outlets.
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          We or our quotes have appeared on Euronews, Financial Times, Foreign Policy, Deutsche Welle, France 24, National Public Radio, Washington Examiner, Politico, Stars and Stripes, TRT World, Christian Science Monitor, Harvard Crimson, Baltic Times and many other international media outlets. In Latvia, we are an integral part of the major media coverage.
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          The Center for Geopolitical Studies Riga was established in January 2022.
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8, marginBottom: 18 }}>
          Visit our website:{' '}
          <a href="https://www.geopolitics.center/latest" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>
            geopolitics.center
          </a>
        </div>

        <div style={{ fontSize: 17, color: '#2a2a2a', lineHeight: 1.8 }}>
          Follow us on{' '}
          <a href="https://www.linkedin.com/company/82962797/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>LinkedIn</a>
          {', '}
          <a href="https://twitter.com/RigaGeopolitics" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>X</a>
          {', '}
          <a href="https://www.instagram.com/geopoliticsriga" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Instagram</a>
          {' or '}
          <a href="https://www.facebook.com/geopolitics.center" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Facebook</a>
        </div>
      </div>

    </div>
  );
}