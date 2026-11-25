function field(value) {
  return { value };
}

export const PROFILES = {

  'United States': {
    overview: 'The United States maintains the largest defence budget in the world and a full nuclear triad, with sustained power projection capability across all domains.',
    manpower: {
      active_personnel: field('1,340,150 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('2,640 (IISS 2026)') },
    airpower: { fighters: field('2,865 (IISS 2026)') },
    naval: { total_assets: field('229 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('War with Iran (2026–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Extraction of Venezuela president (2025), War with Iran (2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$921 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('37% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'Russia': {
    overview: 'Russia fields the world\'s largest nuclear warhead stockpile and a wartime-expanded military, its equipment base heavily depleted and reconstituted through the war in Ukraine.',
    manpower: {
      active_personnel: field('1,264,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - 12-month conscription for men aged 18–30'),
    },
    land: { tanks: field('3,630 (IISS 2026)') },
    airpower: { fighters: field('773 (IISS 2026)') },
    naval: { total_assets: field('194 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('War with Ukraine (2022–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Military engagement in Syria and Africa via Wagner/Africa Corps (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$161 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('68.2% (World Values Survey).'),
    },
  },

  'China': {
    overview: 'China operates the world\'s largest navy by hull count and is undergoing rapid nuclear and conventional force modernization, with defence spending the second-highest globally.',
    manpower: {
      active_personnel: field('2,035,000 (IISS Military Balance 2026)'),
      conscription: field('Nominally yes (constitutional obligation), in practice overwhelmingly volunteer force'),
    },
    land: { tanks: field('4,700 (IISS 2026)') },
    airpower: { fighters: field('1,912 (IISS 2026)') },
    naval: { total_assets: field('313 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$251 billion (2025, official budget) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('88.6% (World Values Survey).'),
    },
  },

  'Israel': {
    overview: 'Israel fields a highly advanced, combat-experienced military with an undeclared nuclear capability and one of the world\'s most battle-tested air defence systems.',
    manpower: {
      active_personnel: field('169,500 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, ~32 months men / ~24 months women'),
    },
    land: { tanks: field('400 (IISS 2026)') },
    airpower: { fighters: field('316 (IISS 2026)') },
    naval: { total_assets: field('14 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('War in Gaza (2023–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Conflict with Hezbollah/Lebanon (2024–2025), strikes on Iran (2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$39.7 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('66% (World Values Survey).'),
    },
  },

  'Ukraine': {
    overview: 'Ukraine sustains the highest military spending burden as a share of GDP in the world, fighting a large-scale war while rapidly developing indigenous drone warfare capability.',
    manpower: {
      active_personnel: field('~677,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - martial law mobilization since Feb 2022, men 18–60'),
    },
    land: { tanks: field('1,323 (IISS 2026)') },
    airpower: { fighters: field('77 (IISS 2026)') },
    naval: { total_assets: field('5 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('War with Russia (2022–) (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Incursion into Kursk Oblast, Russia (2024–2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$44.4 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('56.9% (Win/Gallup).'),
    },
  },

  'India': {
    overview: 'India fields the world\'s second-largest active military and a growing nuclear arsenal, with defence spending among the top five globally and an increasingly indigenous procurement base.',
    manpower: {
      active_personnel: field('1,500,700 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('3,750 (IISS 2026)') },
    airpower: { fighters: field('471 (IISS 2026)') },
    naval: { total_assets: field('64 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(true),
    },
    combat: {
      major_wars: field('None classified as major war in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('India–Pakistan military clash (May 2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$78.3 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('76% (Gallup International, 2023–2024 wave).'),
    },
  },

   'United Kingdom': {
    overview: 'The United Kingdom maintains a nuclear-armed, NATO-integrated military centred on its Continuous At-Sea Deterrent, with defence spending rising toward 2.5% of GDP.',
    manpower: {
      active_personnel: field('141,350 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('213 (IISS 2026)') },
    airpower: { fighters: field('151 (IISS 2026)') },
    naval: { total_assets: field('34 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Joint air strikes with the US on Houthi targets in Yemen (2024–2025) and RAF air-defence patrols protecting Saudi Arabia from Houthi attacks (2026) (UK MoD; Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$94.3 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('42% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'France': {
    overview: 'France fields an independent nuclear triad and the most complete sovereign defence industrial base in Europe, spanning nuclear propulsion, carriers, and strategic missiles.',
    manpower: {
      active_personnel: field('203,900 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('200 (IISS 2026)') },
    airpower: { fighters: field('226 (IISS 2026)') },
    naval: { total_assets: field('51 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Air-defence and naval operations during the 2026 Iran war, including interception of Iranian drones and missiles (French MoD, press reporting 2026).'),
    },
    budget: {
      annual_usd: field('$70.0 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('42% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

  'Germany': {
    overview: 'Germany fields the heaviest armored force in Western Europe and the region\'s largest defence budget, but does not possess nuclear weapons of its own.',
    manpower: {
      active_personnel: field('185,350 (IISS Military Balance 2026)'),
      conscription: field('No - voluntary service model with mandatory suitability questionnaire since Jan 2026'),
    },
    land: { tanks: field('313 (IISS 2026)') },
    airpower: { fighters: field('138 (IISS 2026)') },
    naval: { total_assets: field('34 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$107 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('27% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026).'),
    },
  },

    'Japan': {
    overview: 'Japan operates a constitutionally constrained but highly modern self-defence force, non-nuclear, with rising defence spending amid regional tensions with China and North Korea.',
    manpower: {
      active_personnel: field('247,150 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('347 (IISS 2026)') },
    airpower: { fighters: field('340 (IISS 2026)') },
    naval: { total_assets: field('102 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$58.9 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('11% (WIN/Gallup International).'),
    },
  },

  'South Korea': {
    overview: 'South Korea fields one of Asia\'s most capable and heavily armed militaries, shaped by the unresolved armistice with North Korea and a rapidly growing indigenous defence industry.',
    manpower: {
      active_personnel: field('450,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, ~18-21 months'),
    },
    land: { tanks: field('2,210 (IISS 2026)') },
    airpower: { fighters: field('426 (IISS 2026)') },
    naval: { total_assets: field('77 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$43.8 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('42% (Gallup, 2025).'),
    },
  },

  'Turkiye': {
    overview: 'Turkiye fields NATO\'s second-largest standing army and a rapidly expanding domestic defence industry, including the world\'s first purpose-built drone carrier.',
    manpower: {
      active_personnel: field('355,200 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, ~6-12 months'),
    },
    land: { tanks: field('2,381 (IISS 2026)') },
    airpower: { fighters: field('293 (IISS 2026)') },
    naval: { total_assets: field('56 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None formally classified as inter-state major war in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Operations against the PKK and cross-border operations in northern Syria and Iraq (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$21.5 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('88% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026) - highest of all NATO member states surveyed.'),
    },
  },

   'Pakistan': {
    overview: 'Pakistan fields the world\'s 9th-ranked military with a confirmed nuclear arsenal and among the highest societal willingness to fight recorded globally.',
    manpower: {
      active_personnel: field('660,000 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('2,577 (IISS 2026)') },
    airpower: { fighters: field('375 (IISS 2026)') },
    naval: { total_assets: field('27 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('War-level fighting on the Afghan border and against anti-state insurgents (October 2025–), with 2025 the deadliest year for combat deaths in a decade (UCDP; UN and Pakistani security-monitor reporting 2026).'),
      minor_wars: field('India–Pakistan military clash (May 2025) (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$10.0 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('86% (Gallup International/Gallup Pakistan) - among the highest recorded globally.'),
    },
  },

  'North Korea': {
    overview: 'North Korea fields one of the world\'s largest standing militaries by personnel and a confirmed nuclear arsenal, though its economic and technological base severely limits modern equipment quality.',
    manpower: {
      active_personnel: field('1,280,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, several years'),
    },
    land: { tanks: field('3,500 (IISS 2026)') },
    airpower: { fighters: field('431 (IISS 2026)') },
    naval: { total_assets: field('113 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(true),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None formally classified in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Troop deployment in support of Russia\'s war against Ukraine (since October 2024; combat in Russia\'s Kursk Oblast, confirmed by Russia and North Korea in April 2025). Scored as a supporting party, not a primary party.'),
    },
    budget: {
      annual_usd: field('Estimate only - North Korea does not publish official defence spending figures.'),
    },
    willingness: {
      note: field('50% (placeholder, V-Dem closed autocracy default; no independent survey data exists for North Korea).'),
    },
  },

  'Italy': {
    overview: 'Italy fields a balanced NATO-integrated military with two aircraft carriers and deep involvement in Mediterranean and European defence programs, though it hosts rather than owns nuclear weapons.',
    manpower: {
      active_personnel: field('160,400 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('150 (IISS 2026)') },
    airpower: { fighters: field('138 (IISS 2026)') },
    naval: { total_assets: field('35 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$40.1 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('20% (WIN/Gallup International).'),
    },
  },

  'Brazil': {
    overview: 'Brazil fields Latin America\'s largest military, with a growing indigenous defence industry centred on the ongoing PROSUB nuclear submarine program.',
    manpower: {
      active_personnel: field('374,500 (IISS Military Balance 2026)'),
      conscription: field('Yes - nominal conscription, largely voluntary in practice'),
    },
    land: { tanks: field('292 (IISS 2026)') },
    airpower: { fighters: field('71 (IISS 2026)') },
    naval: { total_assets: field('18 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$24.3 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('48% (World of Statistics survey compilation).'),
    },
  },

  'Indonesia': {
    overview: 'Indonesia fields Southeast Asia\'s largest navy by vessel count and maintains a non-aligned defence posture centred on regional maritime security.',
    manpower: {
      active_personnel: field('433,700 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('103 (IISS 2026)') },
    airpower: { fighters: field('49 (IISS 2026)') },
    naval: { total_assets: field('67 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Counter-insurgency operations against Papuan separatist forces (TPNPB/OPM), ongoing (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$15.1 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('70% (World of Statistics survey compilation).'),
    },
  },

  'Iran': {
    overview: 'Iran fought a direct major war against Israel and the United States in 2026, and maintains the largest conventional ground force in the Middle East despite lacking nuclear weapons.',
    manpower: {
      active_personnel: field('610,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, ~18-24 months'),
    },
    land: { tanks: field('1,513 (IISS 2026)') },
    airpower: { fighters: field('201 (IISS 2026)') },
    naval: { total_assets: field('40 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('2026 Iran war - direct conflict with Israel and the United States, Feb–May 2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Ongoing regional proxy engagements via allied militias (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$6.1 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('74% (Gallup International survey).'),
    },
  },

  'Australia': {
    overview: 'Australia maintains a modest but highly capable professional military, anchored by the AUKUS nuclear submarine partnership and deep interoperability with US forces.',
    manpower: {
      active_personnel: field('58,900 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('36 (IISS 2026)') },
    airpower: { fighters: field('96 (IISS 2026)') },
    naval: { total_assets: field('21 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None formally classified in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Support role in the 2026 Iran war: RAAF and Army personnel deployed, and an AUKUS submarine crew reported in the sinking of IRIS Dena. Scored at the minor-war level as a supporting party (Uppsala Conflict Data Program 2026; press reporting).'),
    },
    budget: {
      annual_usd: field('$37.3 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('29% (World of Statistics survey compilation).'),
    },
  },

  'Spain': {
    overview: 'Spain fields a NATO-integrated force built around amphibious and carrier aviation capability, with deep involvement in European frigate and submarine programs.',
    manpower: {
      active_personnel: field('122,000 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('274 (IISS 2026)') },
    airpower: { fighters: field('182 (IISS 2026)') },
    naval: { total_assets: field('22 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$28.9 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('21% (WIN/Gallup International, 2015 survey).'),
    },
  },

  'Egypt': {
    overview: 'Egypt fields the largest navy and one of the largest air forces in the Middle East and North Africa, anchored by control of the strategic Suez Canal corridor.',
    manpower: {
      active_personnel: field('438,500 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, 1-3 years depending on education'),
    },
    land: { tanks: field('2,480 (IISS 2026)') },
    airpower: { fighters: field('294 (IISS 2026)') },
    naval: { total_assets: field('42 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$2.3 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('83.9% (World Values Survey, Wave 7, 2018).'),
    },
  },

    'Saudi Arabia': {
    overview: 'Saudi Arabia fields the Gulf region\'s most heavily funded military and recorded the highest societal willingness to fight of any country in the current dataset.',
    manpower: {
      active_personnel: field('257,000 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('1,085 (IISS 2026)') },
    airpower: { fighters: field('288 (IISS 2026)') },
    naval: { total_assets: field('19 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('Direct fighting with the Houthis in Yemen and Houthi attacks on Saudi territory (2026), following Iranian attacks on Saudi territory in February 2026; 2026 events are not yet coded by UCDP, so this classification is our assessment.'),
      minor_wars: field('None additional in 2022–2026 (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$72.5 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('94% (Gallup International) - highest recorded in current dataset.'),
    },
  },

    'Poland': {
    overview: 'Poland fields NATO\'s third-largest active military and the highest defence spending as a share of GDP among all NATO members, in the midst of a major rearmament program.',
    manpower: {
      active_personnel: field('173,400 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('897 (IISS 2026)') },
    airpower: { fighters: field('77 (IISS 2026)') },
    naval: { total_assets: field('30 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$33.2 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('47% (WIN/Gallup International, 2015 survey).'),
    },
  },

  'Taiwan': {
    overview: 'Taiwan maintains a defence posture increasingly focused on asymmetric warfare - distributed lethality, mobile coastal-defence missiles, and sea-mining - in the face of a potential Chinese invasion.',
    manpower: {
      active_personnel: field('170,600 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, extended to 1 year in 2024'),
    },
    land: { tanks: field('830 (IISS 2026)') },
    airpower: { fighters: field('323 (IISS 2026)') },
    naval: { total_assets: field('54 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$21.2 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('73% (Institute for National Defense and Security Research, 2025).'),
    },
  },

  'Vietnam': {
    overview: 'Vietnam fields a large, tank-heavy conventional force under its "Four Nos" non-alignment defence policy, with among the highest recorded societal willingness to fight globally.',
    manpower: {
      active_personnel: field('450,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service, 18-24 months'),
    },
    land: { tanks: field('1,379 (IISS 2026)') },
    airpower: { fighters: field('70 (IISS 2026)') },
    naval: { total_assets: field('38 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$8.4 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('89% (WIN/Gallup International, 2015 survey) - among the highest recorded globally.'),
    },
  },

    'Thailand': {
    overview: 'Thailand fields Southeast Asia\'s largest navy by vessel count, including a rare aircraft carrier, anchoring a "major non-NATO ally" defence relationship with the United States.',
    manpower: {
      active_personnel: field('360,850 (IISS Military Balance 2026)'),
      conscription: field('Yes - conscription in effect'),
    },
    land: { tanks: field('394 (IISS 2026)') },
    airpower: { fighters: field('70 (IISS 2026)') },
    naval: { total_assets: field('33 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in 2022–2026 (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('Cambodia–Thailand border clashes (July and December 2025) (Uppsala Conflict Data Program 2026; press reporting 2025).'),
    },
    budget: {
      annual_usd: field('$5.8 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('50% (placeholder, V-Dem electoral autocracy default; no independent survey data available).'),
    },
  },

  'Sweden': {
    overview: 'Sweden maintains a small, technologically advanced professional military built around domestic Gripen fighters and Baltic Sea submarine denial capability, since joining NATO in 2024.',
    manpower: {
      active_personnel: field('14,850 (IISS Military Balance 2026)'),
      conscription: field('Yes - selective conscription reinstated'),
    },
    land: { tanks: field('110 (IISS 2026)') },
    airpower: { fighters: field('99 (IISS 2026)') },
    naval: { total_assets: field('16 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$17.1 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('66% (Center for Geopolitical Studies Riga/Riga Stradiņš University 2026) - among highest in NATO.'),
    },
  },

  'Algeria': {
    overview: 'Algeria fields the Maghreb region\'s largest defence budget and military, built primarily around Russian-supplied equipment, amid an ongoing regional rivalry with Morocco.',
    manpower: {
      active_personnel: field('139,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - mandatory service'),
    },
    land: { tanks: field('1,395 (IISS 2026)') },
    airpower: { fighters: field('99 (IISS 2026)') },
    naval: { total_assets: field('21 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$25.2 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('50% (placeholder, V-Dem electoral autocracy default; no independent survey data available).'),
    },
  },

  'Canada': {
    overview: 'Canada fields a modest professional military deeply integrated with US and NATO command structures, with defence spending well below the NATO 2% GDP target.',
    manpower: {
      active_personnel: field('63,300 (IISS Military Balance 2026)'),
      conscription: field('No - all-volunteer force'),
    },
    land: { tanks: field('74 (IISS 2026)') },
    airpower: { fighters: field('89 (IISS 2026)') },
    naval: { total_assets: field('20 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$31.2 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('34% (Gallup International, End of Year 2023 Survey).'),
    },
  },

  'Singapore': {
    overview: 'Singapore maintains one of the highest per-capita defence budgets in the world, sustained through universal National Service and a substantial reserve force.',
    manpower: {
      active_personnel: field('51,000 (IISS Military Balance 2026)'),
      conscription: field('Yes - National Service, mandatory'),
    },
    land: { tanks: field('96 (IISS 2026)') },
    airpower: { fighters: field('99 (IISS 2026)') },
    naval: { total_assets: field('26 (IISS Military Balance 2026)') },
    nuclear: {
      has_nuclear: field(false),
      has_triad: field(false),
    },
    combat: {
      major_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
      minor_wars: field('None in past five years (Uppsala Conflict Data Program 2026).'),
    },
    budget: {
      annual_usd: field('$18.0 billion (2025) (IISS Military Balance 2026).'),
    },
    willingness: {
      note: field('50% (placeholder, V-Dem electoral autocracy default; no independent survey data available).'),
    },
  },

};