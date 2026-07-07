import React from 'react';
import { useSheetData } from '../data/useSheetData';
import CountryCard from '../components/CountryCard';

export default function Rankings() {
  const { data, loading } = useSheetData();

  if (loading) return (
    <div style={{ textAlign: 'center', padding: 60, color: '#5a7090', fontFamily: 'monospace' }}>
      Loading data...
    </div>
  );

  return (
    <div style={{ padding: '16px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8
      }}>
        <div style={{ fontFamily: 'serif', fontSize: 15, fontStyle: 'italic', color: '#5a7090' }}>
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
        <CountryCard key={country.Country} country={country} rank={i + 1} />
      ))}
    </div>
  );
}