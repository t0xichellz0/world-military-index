function field(value) {
  return { value };
}

export const PROFILES = {

  'United States': {
    overview: 'The United States maintains the largest defence budget in the world and a full nuclear triad, with sustained power projection capability across all domains.',
    manpower: {
      active_personnel: field('1,349,597 (IISS 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('6,600 (IISS 2026)') },
    airpower: { fighters: field('2,150 (IISS 2026)') },
    naval: { total_assets: field('296 (IISS 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('War with Iran (2026–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Extraction of Venezuela president (2025), War with Iran (2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$997 billion (2025) (SIPRI).'),
    },
    willingness: {
      note: field('37% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'Russia': {
    overview: 'Russia fields the world\'s largest nuclear warhead stockpile and a wartime-expanded military, its equipment base heavily depleted and reconstituted through the war in Ukraine.',
    manpower: {
      active_personnel: field('1,500,000 (IISS 2026)'),
      conscription: field('Yes — 12-month conscription for men aged 18–30'),
    },
    land: { tanks: field('13,000 (IISS 2026)') },
    airpower: { fighters: field('1,120 (IISS 2026)') },
    naval: { total_assets: field('230 (IISS 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('War with Ukraine (2022–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Military engagement in Syria and Africa via Wagner/Africa Corps (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$149 billion (2025) (SIPRI).'),
    },
    willingness: {
      note: field('68.2% (World Values Survey).'),
    },
  },

  'China': {
    overview: 'China operates the world\'s largest navy by hull count and is undergoing rapid nuclear and conventional force modernization, with defence spending the second-highest globally.',
    manpower: {
      active_personnel: field('2,035,000 (IISS 2026)'),
      conscription: field('Nominally yes (constitutional obligation), in practice overwhelmingly volunteer force'),
    },
    land: { tanks: field('5,800 (IISS 2026)') },
    airpower: { fighters: field('1,350 (IISS 2026)') },
    naval: { total_assets: field('370 (IISS 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$314 billion (2025, official) (SIPRI).'),
    },
    willingness: {
      note: field('88.6% (World Values Survey).'),
    },
  },

  'Israel': {
    overview: 'Israel fields a highly advanced, combat-experienced military with an undeclared nuclear capability and one of the world\'s most battle-tested air defence systems.',
    manpower: {
      active_personnel: field('173,000 (IISS 2026)'),
      conscription: field('Yes — mandatory service, ~32 months men / ~24 months women'),
    },
    land: { tanks: field('1,600 (IISS 2026)') },
    airpower: { fighters: field('336 (IISS 2026)') },
    naval: { total_assets: field('67 (IISS 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('War in Gaza (2023–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Conflict with Hezbollah/Lebanon (2024–2025), strikes on Iran (2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$30 billion (pre-war baseline; wartime spending significantly higher) (SIPRI).'),
    },
    willingness: {
      note: field('66% (World Values Survey).'),
    },
  },

  'Ukraine': {
    overview: 'Ukraine sustains the highest military spending burden as a share of GDP in the world, fighting a large-scale war while rapidly developing indigenous drone warfare capability.',
    manpower: {
      active_personnel: field('800,000 (IISS 2026)'),
      conscription: field('Yes — martial law mobilization since Feb 2022, men 18–60'),
    },
    land: { tanks: field('1,000 (IISS 2026)') },
    airpower: { fighters: field('85 (IISS 2026)') },
    naval: { total_assets: field('10 (IISS 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('War with Russia (2022–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Incursion into Kursk Oblast, Russia (2024–2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$45 billion (2025) (SIPRI).'),
    },
    willingness: {
      note: field('56.9% (Win/Gallup).'),
    },
  },

  'India': {
    overview: 'India fields the world\'s second-largest active military and a growing nuclear arsenal, with defence spending among the top five globally and an increasingly indigenous procurement base.',
    manpower: {
      active_personnel: field('~1,475,750 (WorldPowerStats 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('~4,614 (WorldPowerStats 2026)') },
    airpower: { fighters: field('~588 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('~351 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None classified as major war; India–Pakistan clash (May 2025) under review (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('India–Pakistan military clash (May 2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$92.1 billion (2025) (SIPRI).'),
    },
    willingness: {
      note: field('76% (Gallup International, 2023–2024 wave).'),
    },
  },

   'United Kingdom': {
    overview: 'The United Kingdom maintains a nuclear-armed, NATO-integrated military centred on its Continuous At-Sea Deterrent, with defence spending rising toward 2.5% of GDP.',
    manpower: {
      active_personnel: field('144,400 (+70,650 reserve) (UK MoD, 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('285 Challenger 2 (UK MoD, 2026)') },
    airpower: { fighters: field('158 (111 Typhoon + 47 F-35B) (UK MoD/RAF, 2026)') },
    naval: { total_assets: field('73 (UK MoD, 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('~$74 billion (2025–26) (UK MoD).'),
    },
    willingness: {
      note: field('42% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'France': {
    overview: 'France fields an independent nuclear triad and the most complete sovereign defence industrial base in Europe, spanning nuclear propulsion, carriers, and strategic missiles.',
    manpower: {
      active_personnel: field('264,000 (French MoD, 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('215 Leclerc (French MoD, 2026)') },
    airpower: { fighters: field('264 (French MoD, 2026)') },
    naval: { total_assets: field('166 (French MoD, 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('€61.8 billion / ~$71.7 billion (2025) (French MoD).'),
    },
    willingness: {
      note: field('42% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'Germany': {
    overview: 'Germany fields the heaviest armored force in Western Europe and the region\'s largest defence budget, but does not possess nuclear weapons of its own.',
    manpower: {
      active_personnel: field('~181,000 (German MoD, 2026)'),
      conscription: field('No — voluntary service model with mandatory suitability questionnaire since Jan 2026'),
    },
    land: { tanks: field('296 Leopard 2 (German MoD, 2026)') },
    airpower: { fighters: field('224 (German MoD, 2026)') },
    naval: { total_assets: field('72 (German MoD, 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('~$112.5 billion (2025) (German MoD).'),
    },
    willingness: {
      note: field('27% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

    'Japan': {
    overview: 'Japan operates a constitutionally constrained but highly modern self-defence force, non-nuclear, with rising defence spending amid regional tensions with China and North Korea.',
    manpower: {
      active_personnel: field('247,150 (Japan MoD, 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('1,004 (WorldPowerStats 2026)') },
    airpower: { fighters: field('217 (WorldPowerStats 2026)') },
    naval: { total_assets: field('155 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$50.2 billion (2025) (Japan MoD).'),
    },
    willingness: {
      note: field('11% (WIN/Gallup International).'),
    },
  },

  'South Korea': {
    overview: 'South Korea fields one of Asia\'s most capable and heavily armed militaries, shaped by the unresolved armistice with North Korea and a rapidly growing indigenous defence industry.',
    manpower: {
      active_personnel: field('555,000 (WorldPowerStats 2026)'),
      conscription: field('Yes — mandatory service, ~18-21 months'),
    },
    land: { tanks: field('2,501 (WorldPowerStats 2026)') },
    airpower: { fighters: field('406 (WorldPowerStats 2026)') },
    naval: { total_assets: field('200 (WorldPowerStats 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$46.4 billion (2025) (WorldPowerStats).'),
    },
    willingness: {
      note: field('42% (Gallup, 2025).'),
    },
  },

  'Turkiye': {
    overview: 'Turkiye fields NATO\'s second-largest standing army and a rapidly expanding domestic defence industry, including the world\'s first purpose-built drone carrier.',
    manpower: {
      active_personnel: field('512,000 (GlobalMilitary.net 2026)'),
      conscription: field('Yes — mandatory service, ~6-12 months'),
    },
    land: { tanks: field('2,238 (GlobalMilitary.net 2026)') },
    airpower: { fighters: field('299 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('191 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None formally classified as inter-state major war (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Sustained conflict with PKK (ongoing since 1984) and cross-border operations in northern Syria/Iraq (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$25.0 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('88% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026) — highest of all NATO member states surveyed.'),
    },
  },

   'Pakistan': {
    overview: 'Pakistan fields the world\'s 9th-ranked military with a confirmed nuclear arsenal and among the highest societal willingness to fight recorded globally.',
    manpower: {
      active_personnel: field('654,000 (GlobalMilitary.net 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('2,680 (WorldPowerStats 2026)') },
    airpower: { fighters: field('387 (WorldPowerStats 2026)') },
    naval: { total_assets: field('114 (WorldPowerStats 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None formally classified as inter-state major war in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Sustained counter-insurgency operations and border tensions with India and Afghanistan (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$7.8 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('86% (Gallup International/Gallup Pakistan) — among the highest recorded globally.'),
    },
  },

  'North Korea': {
    overview: 'North Korea fields one of the world\'s largest standing militaries by personnel and a confirmed nuclear arsenal, though its economic and technological base severely limits modern equipment quality.',
    manpower: {
      active_personnel: field('1,320,000 (MilitaryCompare 2026)'),
      conscription: field('Yes — mandatory service, several years'),
    },
    land: { tanks: field('5,845 (WorldPowerStats 2026)') },
    airpower: { fighters: field('458 (WorldPowerStats 2026)') },
    naval: { total_assets: field('391-505 (WorldPowerStats/GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None formally classified in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None formally classified in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('Estimate only — North Korea does not publish official defence spending figures.'),
    },
    willingness: {
      note: field(''),
    },
  },

  'Italy': {
    overview: 'Italy fields a balanced NATO-integrated military with two aircraft carriers and deep involvement in Mediterranean and European defence programs, though it hosts rather than owns nuclear weapons.',
    manpower: {
      active_personnel: field('165,500 (Italian MoD, Wikipedia 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('200 (GlobalMilitary.net 2026)') },
    airpower: { fighters: field('94 (WorldPowerStats 2026)') },
    naval: { total_assets: field('184 (WorldPowerStats 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$48.1 billion (2025) (SIPRI, confirmed 27 April 2026).'),
    },
    willingness: {
      note: field('20% (WIN/Gallup International).'),
    },
  },

  'Brazil': {
    overview: 'Brazil fields Latin America\'s largest military, with a growing indigenous defence industry centred on the ongoing PROSUB nuclear submarine program.',
    manpower: {
      active_personnel: field('376,000 (Visual Capitalist/GlobalMilitary.net 2026)'),
      conscription: field('Yes — nominal conscription, largely voluntary in practice'),
    },
    land: { tanks: field('294 (GlobalMilitary.net 2026)') },
    airpower: { fighters: field('65 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('68 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$20.9 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('48% (World of Statistics survey compilation).'),
    },
  },

  'Indonesia': {
    overview: 'Indonesia fields Southeast Asia\'s largest navy by vessel count and maintains a non-aligned defence posture centred on regional maritime security.',
    manpower: {
      active_personnel: field('404,500 (GlobalMilitary.net 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('331 (GlobalFirepower/GlobalMilitary.net 2026)') },
    airpower: { fighters: field('52 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('326-345 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$11.0-11.2 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('70% (World of Statistics survey compilation).'),
    },
  },

  'Iran': {
    overview: 'Iran fought a direct major war against Israel and the United States in 2026, and maintains the largest conventional ground force in the Middle East despite lacking nuclear weapons.',
    manpower: {
      active_personnel: field('610,000 (GlobalMilitary.net 2026)'),
      conscription: field('Yes — mandatory service, ~18-24 months'),
    },
    land: { tanks: field('1,713 (GlobalMilitary.net 2026)') },
    airpower: { fighters: field('286-295 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('97-112 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('2026 Iran war — direct conflict with Israel and the United States, Feb–May 2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Ongoing regional proxy engagements via allied militias (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$7.9 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('74% (Gallup International survey).'),
    },
  },

  'Australia': {
    overview: 'Australia maintains a modest but highly capable professional military, anchored by the AUKUS nuclear submarine partnership and deep interoperability with US forces.',
    manpower: {
      active_personnel: field('~59,000 (GlobalMilitary.net 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('75 (GlobalMilitary.net 2026)') },
    airpower: { fighters: field('108 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('41 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None formally classified as major war (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Support role in the 2026 Iran war — RAAF and Army personnel deployed, AUKUS submarine crew involved in the sinking of IRIS Dena (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$33.8 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('29% (World of Statistics survey compilation).'),
    },
  },

  'Spain': {
    overview: 'Spain fields a NATO-integrated force built around amphibious and carrier aviation capability, with deep involvement in European frigate and submarine programs.',
    manpower: {
      active_personnel: field('120,350 (GlobalMilitary.net 2026)'),
      conscription: field('No — all-volunteer force'),
    },
    land: { tanks: field('317-327 (GlobalMilitary.net/WorldPowerStats 2026)') },
    airpower: { fighters: field('178 (GlobalMilitary.net 2026)') },
    naval: { total_assets: field('87 (GlobalMilitary.net 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$35 billion (2025) (GlobalMilitary.net).'),
    },
    willingness: {
      note: field('21% (WIN/Gallup International, 2015 survey).'),
    },
  },

  'Egypt': {
    overview: 'Egypt fields the largest navy and one of the largest air forces in the Middle East and North Africa, anchored by control of the strategic Suez Canal corridor.',
    manpower: {
      active_personnel: field('438,500-440,000 (GlobalFirepower/GlobalMilitary.net 2026)'),
      conscription: field('Yes — mandatory service, 1-3 years depending on education'),
    },
    land: { tanks: field('2,160-3,620 (GlobalMilitary.net, wide source variance 2026)') },
    airpower: { fighters: field('237 (WorldPowerStats 2026)') },
    naval: { total_assets: field('318-319 (GlobalMilitary.net/WorldPowerStats 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$4.4-5.19 billion (2025, wide source variance) (GlobalMilitary.net/MilitaryCompare).'),
    },
    willingness: {
      note: field(''),
    },
  },

};