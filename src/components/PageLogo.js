import React from 'react';

export default function PageLogo() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center',
      marginBottom: 24, paddingBottom: 16,
      borderBottom: '1px solid #ddd'
    }}>
      <img
        src="/wmi-logo.png"
        alt="World Military Index"
        style={{ height: 170, width: 'auto', maxWidth: '100%' }}
      />
    </div>
  );
}
