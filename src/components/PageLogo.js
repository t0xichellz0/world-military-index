import React from 'react';

export default function PageLogo() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center',
      marginBottom: 36, paddingBottom: 26,
      borderBottom: '1px solid #1a1a1a'
    }}>
      <a
        href="#/"
        aria-label="World Military Index - home"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ display: 'block', cursor: 'pointer', lineHeight: 0 }}
      >
        <img
          src="/wmi-logo.png"
          alt="World Military Index"
          draggable="false"
          style={{ height: 190, width: 'auto', maxWidth: '100%', transition: 'opacity 0.2s ease' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = 0.7; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = 1; }}
        />
      </a>
    </div>
  );
}
