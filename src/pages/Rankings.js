import React, { useState } from 'react';
import { useSheetData } from '../data/useSheetData';
import CountryCard from '../components/CountryCard';
import CountryProfile from './CountryProfile';

export default function Rankings() {
  const { data, loading } = useSheetData();
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: 80, color: '#666', fontSize: 13 }}>
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
    <div style={{ padding: '32px 24px', maxWidth: 920, margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        flexWrap: 'wrap',
        gap: 10
      }}>
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: 18,
          fontStyle: 'italic',
          color: '#444'
        }}>
          Top Military Powers — Current Assessment
        </div>
        <div style={{
          fontSize: 11,
          color: '#1a1a1a',
          border: '1px solid #d0d0d0',
          padding: '5px 14px',
          borderRadius: 3,
          letterSpacing: 1
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