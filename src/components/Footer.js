import React from 'react';

export default function Footer() {
  return (
    <div style={{
      borderTop: '1px solid #d0d0d0',
      marginTop: 40,
      padding: '32px 40px',
      fontFamily: "'Helvetica Neue', Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: 920,
        margin: '0 auto',
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start'
      }}>
        <img
          src="/cgs-logo.jpg"
          alt="Center for Geopolitical Studies Riga"
          style={{ height: 60, width: 'auto', flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
            Center for Geopolitical Studies Riga
          </div>
          <div style={{ fontSize: 12.5, color: '#666', lineHeight: 1.7, maxWidth: 600, marginBottom: 14 }}>
            Established in 2022, the Center for Geopolitical Studies Riga is an independent research think-tank based in Latvia. It focuses on security dilemmas and geopolitical rivalries in the Baltic Sea region and beyond.
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/company/geopolitics-center/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#1a1a1a', textDecoration: 'underline' }}>LinkedIn</a>
            <a href="https://twitter.com/RigaGeopolitics" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#1a1a1a', textDecoration: 'underline' }}>X / Twitter</a>
            <a href="https://www.instagram.com/geopoliticsriga" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#1a1a1a', textDecoration: 'underline' }}>Instagram</a>
            <a href="https://www.facebook.com/geopolitics.center" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#1a1a1a', textDecoration: 'underline' }}>Facebook</a>
          </div>
          <div style={{ fontSize: 11, color: '#999' }}>
            Center for Geopolitical Studies Riga / Ģeopolitikas pētījumu centrs
          </div>
        </div>
      </div>
    </div>
  );
}