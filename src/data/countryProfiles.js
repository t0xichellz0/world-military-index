export const PROFILES = {
  'United States': {
    overview: 'The United States maintains the largest defence budget in the world and a full nuclear triad, with sustained power projection capability across all domains.',
    manpower: {
      total_population: 'Not yet sourced to standard',
      available_manpower: 'Not yet sourced to standard',
      active_personnel: '1,330,000',
      reserve_personnel: '770,000',
      paramilitary: '0',
      army_personnel: 'Pending second source',
      navy_personnel: 'Pending second source',
      airforce_personnel: 'Pending second source',
    },
    land: {
      tanks: 'Pending IISS-standard verification',
      armored_vehicles: 'Pending IISS-standard verification',
      self_propelled_artillery: 'Pending IISS-standard verification',
      towed_artillery: 'Pending IISS-standard verification',
      rocket_artillery: 'Pending IISS-standard verification',
    },
    airpower: {
      total_aircraft: 'Pending IISS-standard verification',
      fighters: 'Pending IISS-standard verification',
      attack_aircraft: 'Pending IISS-standard verification',
      transport: 'Pending IISS-standard verification',
      trainers: 'Pending IISS-standard verification',
      helicopters: 'Pending IISS-standard verification',
      attack_helicopters: 'Pending IISS-standard verification',
      tanker_fleet: 'Pending IISS-standard verification',
    },
    naval: {
      total_assets: 'Pending IISS-standard verification',
      aircraft_carriers: '11',
      helicopter_carriers: 'Pending second source',
      destroyers: 'Pending second source',
      submarines: 'Pending second source',
      frigates: '0',
      corvettes: '0',
      patrol_vessels: 'Pending second source',
    },
    nuclear: {
      has_nuclear: true,
      has_triad: true,
      warheads: '~3,700 stockpile / 1,770 deployed',
      note: 'Federation of American Scientists Nuclear Notebook (Jan 2025), cross-verified with Arms Control Association factsheet (July 2025). Full triad: land-based ICBMs, submarine-launched ballistic missiles, strategic bombers.',
    },
    budget: {
      annual_usd: '$954 billion (2025, SIPRI)',
      pct_gdp: 'Per SIPRI Military Expenditure Database',
      note: 'SIPRI Military Expenditure Database, April 2026 release: US military spending was $954 billion in 2025, a 7.5% real-terms decline from $997 billion in 2024. The US remains the single largest military spender globally, though its 2025 figure represents a rare year-on-year decrease.',
    },
    sources: [
      'SIPRI Military Expenditure Database — Press Release, 27 April 2026 (2025 figures)',
      'SIPRI Military Expenditure Database — Press Release, 28 April 2025 (2024 figures)',
      'Federation of American Scientists — Nuclear Notebook, United States 2025 (January 2025)',
      'Arms Control Association — Nuclear Weapons: Who Has What at a Glance (July 2025)',
      '[Additional data pending IISS Military Balance subscription access or equivalent verified second source]',
    ]
  }
};