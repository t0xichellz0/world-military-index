import React from 'react';

export default function PageLogo({ subtitle }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      marginBottom: 36, paddingBottom: 26,
      borderBottom: '1px solid #1a1a1a'
    }}>
      <img
        src="/wmi-logo.png"
        alt="World Military Index"
        style={{ height: 190, width: 'auto', maxWidth: '100%' }}
      />
      {subtitle && (
        <div style={{
          marginTop: 18, fontSize: 13, letterSpacing: 2.5,
          textTransform: 'uppercase', color: '#555', textAlign: 'center'
        }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
