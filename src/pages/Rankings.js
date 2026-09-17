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