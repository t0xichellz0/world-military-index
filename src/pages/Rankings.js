import React from 'react';
import { useSheetData } from '../data/useSheetData';
import CountryCard from '../components/CountryCard';
import CountryProfile from './CountryProfile';
import PageLogo from '../components/PageLogo';

export default function Rankings({ countryName, onOpen, onBack }) {
  const { data, loading } = useSheetData();
  const selectedCountry = countryName ? data.find(c => c.Country === countryName) : null;

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
        onBack={onBack}
      />
    );
  }

  return (
    <div style={{ padding: '40px 24px 24px', maxWidth: 880, margin: '0 auto' }}>
      <PageLogo />
      {data.map((country, i) => (
        <CountryCard
          key={country.Country}
          country={country}
          rank={i + 1}
          onClick={() => onOpen(country.Country)}
        />
      ))}
    </div>
  );
}