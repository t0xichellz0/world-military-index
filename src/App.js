import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rankings from './pages/Rankings';
import Methodology from './pages/Methodology';
import AboutUs from './pages/AboutUs';

const PATHS = { Rankings: '#/', Methodology: '#/methodology', 'About Us': '#/about' };

function parseRoute() {
  let h = window.location.hash.replace(/^#\/?/, '');
  try { h = decodeURIComponent(h); } catch (e) { /* keep raw */ }
  if (h.startsWith('country/')) return { page: 'Rankings', country: h.slice(8) };
  if (h === 'methodology') return { page: 'Methodology', country: null };
  if (h === 'about') return { page: 'About Us', country: null };
  return { page: 'Rankings', country: null };
}

export default function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const setPage = (tab) => { window.location.hash = PATHS[tab]; };
  const openCountry = (name) => { window.location.hash = '#/country/' + encodeURIComponent(name); };
  const goHome = () => { window.location.hash = '#/'; };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#1a1a1a', fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif", display: 'flex', flexDirection: 'column' }}>
      <Navbar page={route.page} setPage={setPage} />
      <div style={{ flex: 1 }}>
        <div className="wmi-page" key={route.page + '|' + (route.country || '')}>
          {route.page === 'Rankings' && (
            <Rankings countryName={route.country} onOpen={openCountry} onBack={goHome} />
          )}
          {route.page === 'Methodology' && <Methodology />}
          {route.page === 'About Us' && <AboutUs />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
