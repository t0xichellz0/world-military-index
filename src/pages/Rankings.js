import React, { useState } from 'react';
import { useSheetData } from '../data/useSheetData';
import CountryCard from '../components/CountryCard';
import CountryProfile from './CountryProfile';

export default function Rankings() {
  const { data, loading } = useSheetData();
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: 60, color: '#5a7090', fontFamily: 'monospace' }}>
      Loading data...
    </div>
  );

  if (selectedCountry) {
    const rank = data.findIndex(c => c.Country === selectedCountry.Country) + 1;
    return (
      <CountryProfile
        country={selectedCountry}
        rank={rank}
        onBack={() => setSelectedCountry(null)}
      />
    );
  }

  return (
    <div style={{ padding: '16px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 8
      }}>
        <div style={{ fontFamily: 'serif', fontSize: 18, fontStyle: 'italic', color: '#5a7090' }}>
          Top Military Powers — Current Assessment
        </div>
        <div style={{
          fontFamily: 'monospace', fontSize: 11, color: '#c8a84b',
          border: '1px solid rgba(200,168,75,0.3)', padding: '4px 12px', borderRadius: 4
        }}>
          2026
        </div>
      </div>
      {data.map((country, i) => (
        <CountryCard
          key={country.Country}
          country={country}
          rank={i + 1}
          onClick={() => setSelectedCountry(country)}
        />
      ))}
    </div>
  );
}