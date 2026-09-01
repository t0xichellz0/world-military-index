function field(value, sources = [], verified = false) {
  return { value, sources, verified };
}

export const PROFILES = {

  'United States': {
    overview: 'The United States maintains the largest defence budget in the world and a full nuclear triad, with sustained power projection capability across all domains.',
    manpower: {
      total_population: field('341,963,408', [{ name: 'U.S. Census Bureau', url: 'https://www.census.gov' }], false),
      available_manpower: field('~150,000,000', [{ name: 'CIA World Factbook', url: 'https://www.cia.gov/the-world-factbook' }], false),
      active_personnel: field('1,349,597 (March 2026)', [
        { name: 'DMDC, Oct 2025', url: 'https://dwp.dmdc.osd.mil' },
        { name: 'North American Community Hub, DMDC March 2026', url: 'https://nchstats.com' },
      ], true),
      reserve_personnel: field('~790,000', [
        { name: 'Garmont Tactical, 2025–2026', url: 'https://garmonttactical.com' },
        { name: 'Business Stats 2026', url: 'https://businesstats.com' },
      ], true),
      paramilitary: field('0', [], false),
      army_personnel: field('455,824 active (+328,000 Guard +172,000 Reserve)', [
        { name: 'DMDC, Oct 31 2025', url: 'https://dwp.dmdc.osd.mil' },
        { name: 'Business Stats 2026', url: 'https://businesstats.com' },
      ], true),
      navy_personnel: field('341,496 active', [
        { name: 'DMDC, Oct 31 2025', url: 'https://dwp.dmdc.osd.mil' },
        { name: 'Business Stats 2026', url: 'https://businesstats.com' },
      ], true),
      airforce_personnel: field('318,983 active', [
        { name: 'DMDC, Oct 31 2025', url: 'https://dwp.dmdc.osd.mil' },
        { name: 'Business Stats 2026', url: 'https://businesstats.com' },
      ], true),
    },
    land: {
      tanks: field('~1,392 active (16 ABCTs × 87) + ~2,000 reserve', [
        { name: 'CRS IF12495, Dec 15 2025', url: 'https://www.congress.gov/crs-product/IF12495' },
        { name: 'GlobalSecurity.org', url: 'https://www.globalsecurity.org' },
      ], true),
      armored_vehicles: field('~45,000+', [{ name: 'GlobalSecurity.org', url: 'https://www.globalsecurity.org' }], false),
      self_propelled_artillery: field('~1,500 (M109 Paladin)', [{ name: 'GlobalSecurity.org', url: 'https://www.globalsecurity.org' }], false),
      towed_artillery: field('~1,800 (M777)', [{ name: 'GlobalSecurity.org', url: 'https://www.globalsecurity.org' }], false),
      rocket_artillery: field('~1,700 (HIMARS/MLRS)', [{ name: 'GlobalSecurity.org', url: 'https://www.globalsecurity.org' }], false),
    },
    airpower: {
      total_aircraft: field('5,004 (USAF)', [
        { name: 'Aviation A2Z 2025', url: 'https://aviationa2z.com' },
        { name: '2025 USAF Almanac', url: 'https://www.airandspaceforces.com' },
      ], true),
      fighters: field('~1,271 combat-coded (FY2026)', [
        { name: '2025 USAF Almanac', url: 'https://www.airandspaceforces.com' },
        { name: 'Breaking Defense, Oct 2025', url: 'https://breakingdefense.com' },
      ], true),
      attack_aircraft: field('~202 (A-10C + AC-130J)', [{ name: '2025 USAF Almanac', url: 'https://www.airandspaceforces.com' }], false),
      transport: field('~700 (C-17, C-130)', [{ name: 'Aviation A2Z 2025', url: 'https://aviationa2z.com' }], false),
      trainers: field('~1,100', [{ name: '2025 USAF Almanac', url: 'https://www.airandspaceforces.com' }], false),
      helicopters: field('~5,442 (all branches)', [{ name: 'Aviation A2Z 2025', url: 'https://aviationa2z.com' }], false),
      attack_helicopters: field('~983 (AH-64 Apache)', [{ name: 'Aviation A2Z 2025', url: 'https://aviationa2z.com' }], false),
      tanker_fleet: field('~453 (KC-135, KC-46)', [{ name: 'Aviation A2Z 2025', url: 'https://aviationa2z.com' }], false),
    },
    naval: {
      total_assets: field('291 battle force ships (May 2026)', [
        { name: 'CBO, May 2026', url: 'https://www.cbo.gov/publication/62389' },
        { name: 'Naval History & Heritage Command', url: 'https://www.history.navy.mil' },
      ], true),
      aircraft_carriers: field('11 (all nuclear-powered)', [
        { name: 'CBO, May 2026', url: 'https://www.cbo.gov/publication/62389' },
        { name: 'US Navy, 10 U.S.C. §5062', url: 'https://www.navy.mil' },
      ], true),
      helicopter_carriers: field('9 (Wasp/America-class)', [{ name: 'CRS, Jan 2025', url: 'https://www.congress.gov' }], false),
      destroyers: field('~75 (Arleigh Burke)', [{ name: 'Naval History & Heritage Command', url: 'https://www.history.navy.mil' }], false),
      submarines: field('~68 (all nuclear-powered)', [{ name: 'CRS, Jan 2025', url: 'https://www.congress.gov' }], false),
      frigates: field('0 (Constellation-class pending)', [{ name: 'CRS, Jan 2025', url: 'https://www.congress.gov' }], false),
      corvettes: field('0', [], false),
      patrol_vessels: field('~20 (Cyclone-class)', [{ name: 'Naval History & Heritage Command', url: 'https://www.history.navy.mil' }], false),
    },
    nuclear: {
      has_nuclear: field(true, [
        { name: 'FAS Nuclear Notebook 2025', url: 'https://fas.org' },
        { name: 'Arms Control Association, Jul 2025', url: 'https://www.armscontrol.org' },
      ], true),
      has_triad: field(true, [
        { name: 'FAS Nuclear Notebook 2025', url: 'https://fas.org' },
        { name: 'Arms Control Association, Jul 2025', url: 'https://www.armscontrol.org' },
      ], true),
      warheads: field('~3,700 stockpile / 1,770 deployed', [
        { name: 'FAS Nuclear Notebook 2025', url: 'https://fas.org' },
        { name: 'Arms Control Association, Jul 2025', url: 'https://www.armscontrol.org' },
      ], true),
      note: 'Full triad: Minuteman III ICBMs, Ohio-class SSBNs, B-2/B-52 bombers.',
    },
    budget: {
      annual_usd: field('$954 billion (2025)', [
        { name: 'SIPRI, 27 Apr 2026', url: 'https://www.sipri.org' },
        { name: 'Business Stats 2026', url: 'https://businesstats.com' },
      ], true),
      pct_gdp: field('~3.4%', [{ name: 'SIPRI Military Expenditure DB', url: 'https://www.sipri.org' }], false),
      note: '7.5% decline from $997B (2024) to $954B (2025). Still ~32% of world military spending.',
    },
  },

  'Russia': {
    overview: 'Russia fields the world\'s largest nuclear warhead stockpile and a wartime-expanded military, its equipment base heavily depleted and reconstituted through the war in Ukraine.',
    manpower: {
      total_population: field('~143,800,000', [{ name: 'World Bank', url: 'https://data.worldbank.org' }], false),
      available_manpower: field('~69,000,000 (fit for service estimate)', [], false),
      active_personnel: field('~1,134,000–1,320,000', [
        { name: 'IISS Military Balance 2025, via SPF analysis', url: 'https://www.spf.org' },
        { name: 'GlobalMilitary.net Russia Profile, 2026', url: 'https://www.globalmilitary.net/countries/rus' },
      ], true),
      reserve_personnel: field('~2,000,000 trained reservists', [{ name: 'Military Power Rankings 2026', url: 'https://www.militarypowerrankings.com/military-power/russia' }], false),
      paramilitary: field('~340,000 (Rosgvardiya)', [{ name: 'MilitarySpend.org', url: 'https://militaryspend.org/country-profiles/russia' }], false),
      army_personnel: field('~550,000 (estimate, Ground Forces)', [], false),
      navy_personnel: field('~900,000 per IISS classification (2025); Naval Infantry ~119,000', [
        { name: 'Kristoffer\'s Universe Wiki, citing IISS 2025', url: 'https://thekristoffersuniverseinwar.fandom.com' },
        { name: 'SPF analysis, citing IISS Military Balance', url: 'https://www.spf.org' },
      ], true),
      airforce_personnel: field('~165,000 (VKS, estimate)', [], false),
    },
    land: {
      tanks: field('~12,566 total inventory; ~10,832 claimed destroyed since Feb 2022 (contested)', [
        { name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' },
        { name: 'Kyiv Independent/Ukrainska Pravda, citing Ukraine General Staff, May 2026', url: 'https://www.yahoo.com' },
      ], true),
      armored_vehicles: field('~30,122', [{ name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' }], false),
      self_propelled_artillery: field('~6,000 (est., incl. 2S19 Msta-S)', [], false),
      towed_artillery: field('~4,000 (est.)', [], false),
      rocket_artillery: field('~4,000 (est., incl. BM-21 Grad, Tornado-S)', [], false),
    },
    airpower: {
      total_aircraft: field('~4,255–4,300', [
        { name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' },
        { name: 'Statista, citing IISS Military Balance 2026', url: 'https://www.statista.com' },
      ], true),
      fighters: field('~809', [{ name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' }], false),
      attack_aircraft: field('~400 (est., Su-25, Su-34)', [], false),
      transport: field('~400 (est., Il-76 family)', [], false),
      trainers: field('~500 (est.)', [], false),
      helicopters: field('~1,547', [{ name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' }], false),
      attack_helicopters: field('~500 (est., Ka-52, Mi-28)', [], false),
      tanker_fleet: field('~20 (Il-78 family)', [], false),
    },
    naval: {
      total_assets: field('~781 total ships (incl. auxiliaries)', [{ name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' }], false),
      aircraft_carriers: field('1 (Admiral Kuznetsov, non-operational/in refit)', [{ name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' }], false),
      helicopter_carriers: field('0', [], false),
      destroyers: field('~13 (est.)', [], false),
      submarines: field('~65–135 depending on classification', [
        { name: 'WorldPowerStats 2026', url: 'https://worldpowerstats.com/country/russia.html' },
        { name: 'Kristoffer\'s Universe Wiki, citing Jan 2025', url: 'https://thekristoffersuniverseinwar.fandom.com' },
      ], true),
      frigates: field('~11 (est.)', [], false),
      corvettes: field('~85 (est.)', [], false),
      patrol_vessels: field('~100+ (est.)', [], false),
    },
    nuclear: {
      has_nuclear: field(true, [
        { name: 'FAS Nuclear Notebook 2025', url: 'https://fas.org' },
        { name: 'Military Power Rankings 2026', url: 'https://www.militarypowerrankings.com' },
      ], true),
      has_triad: field(true, [{ name: 'FAS Nuclear Notebook 2025', url: 'https://fas.org' }], false),
      warheads: field('~5,580 (world\'s largest stockpile)', [
        { name: 'Military Power Rankings 2026', url: 'https://www.militarypowerrankings.com/military-power/russia' },
        { name: 'FAS Nuclear Notebook estimate', url: 'https://fas.org' },
      ], true),
      note: 'Strategic Rocket Forces field ~310 ICBMs (Yars, Sarmat, Avangard). World\'s largest nuclear stockpile by warhead count.',
    },
    budget: {
      annual_usd: field('$190 billion (2025, SIPRI); alt. estimates $86B–$152B', [
        { name: 'SIPRI Fact Sheet, 27 Apr 2026', url: 'https://www.sipri.org' },
        { name: 'GlobalMilitary.net, lower estimate', url: 'https://www.globalmilitary.net/countries/rus' },
      ], true),
      pct_gdp: field('7.5% (2024)', [{ name: 'Wikipedia/Russian Armed Forces, citing SIPRI', url: 'https://en.wikipedia.org' }], false),
      note: 'SIPRI\'s $190B figure for 2025; Russia\'s 2026 federal budget nominally reduces defence spending for the first time since 2022.',
    },
  },

  'China': {
    overview: 'China operates the world\'s largest navy by hull count and is undergoing rapid nuclear and conventional force modernization, with defence spending the second-highest globally.',
    manpower: {
      total_population: field('~1,410,000,000', [{ name: 'World Bank', url: 'https://data.worldbank.org' }], false),
      available_manpower: field('~750,000,000 (est., fit for service)', [], false),
      active_personnel: field('2,035,000', [
        { name: 'GlobalMilitary.net China Profile, 2026', url: 'https://www.globalmilitary.net/countries/chn' },
        { name: 'IISS Military Balance (widely cited baseline)', url: 'https://www.iiss.org' },
      ], true),
      reserve_personnel: field('~510,000 (est.)', [], false),
      paramilitary: field('~625,000 (People\'s Armed Police)', [{ name: 'MilitarySpend.org China Profile', url: 'https://militaryspend.org/country-profiles/china' }], false),
      army_personnel: field('~965,000 (PLA Army, estimate)', [], false),
      navy_personnel: field('384,000 (PLAN, 2025)', [{ name: 'Wikipedia/PLAN, citing official PLAN figures', url: 'https://en.wikipedia.org' }], false),
      airforce_personnel: field('~395,000 (PLAAF, estimate)', [], false),
    },
    land: {
      tanks: field('~4,788 (incl. ~1,200 Type 99A)', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      armored_vehicles: field('~35,000', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      self_propelled_artillery: field('~2,000 (est., PLZ-05, PLZ-07)', [], false),
      towed_artillery: field('~6,000 (est.)', [], false),
      rocket_artillery: field('7,000+ (combined artillery pieces, all types)', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
    },
    airpower: {
      total_aircraft: field('3,304 (PLA Air Force, 2024 baseline)', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      fighters: field('1,207 fighters/interceptors', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      attack_aircraft: field('371', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      transport: field('281', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      trainers: field('402', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      helicopters: field('901', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      attack_helicopters: field('281', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
      tanker_fleet: field('10+', [{ name: 'WorldMetrics.org, verified May 2026', url: 'https://worldmetrics.org' }], false),
    },
    naval: {
      total_assets: field('~370–384 ships, world\'s largest navy by hull count', [
        { name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' },
        { name: 'MilitarySpend.org China Profile', url: 'https://militaryspend.org/country-profiles/china' },
      ], true),
      aircraft_carriers: field('3 (Liaoning, Shandong, Fujian)', [
        { name: 'MilitarySpend.org China Profile', url: 'https://militaryspend.org/country-profiles/china' },
        { name: 'CSIS — China\'s Military in 10 Charts', url: 'https://www.csis.org' },
      ], true),
      helicopter_carriers: field('4 (amphibious assault ships)', [{ name: 'Wikipedia/PLAN', url: 'https://en.wikipedia.org' }], false),
      destroyers: field('62', [{ name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' }], false),
      submarines: field('64+ (nuclear and conventional)', [{ name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' }], false),
      frigates: field('54', [{ name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' }], false),
      corvettes: field('50', [{ name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' }], false),
      patrol_vessels: field('82 missile boats', [{ name: 'Wikipedia/PLAN, 2025', url: 'https://en.wikipedia.org' }], false),
    },
    nuclear: {
      has_nuclear: field(true, [
        { name: 'CSIS — China\'s Military in 10 Charts', url: 'https://www.csis.org' },
        { name: 'FAS Nuclear Notebook', url: 'https://fas.org' },
      ], true),
      has_triad: field(true, [{ name: 'DoD China Military Power Report 2025', url: '' }], false),
      warheads: field('~600 (2025), projected ~1,500 by 2035', [
        { name: 'CSIS, citing DoD estimate', url: 'https://www.csis.org' },
        { name: 'Fox News, citing DoD China Military Power Report', url: 'https://www.foxnews.com' },
      ], true),
      note: 'PLA Rocket Force operates ~3,000 ballistic and cruise missiles including DF-26, DF-27, DF-41. Nuclear stockpile more than doubled since 2019.',
    },
    budget: {
      annual_usd: field('$336 billion (SIPRI estimate, 2025) / $249B official budget', [
        { name: 'MilitarySpend.org China Profile', url: 'https://militaryspend.org/country-profiles/china' },
        { name: 'CSIS — China\'s Military in 10 Charts', url: 'https://www.csis.org' },
      ], true),
      pct_gdp: field('~1.7%', [{ name: 'SIPRI Military Expenditure DB', url: 'https://www.sipri.org' }], false),
      note: 'Official 2025 budget (~$249B) reported to the National People\'s Congress; SIPRI\'s higher $336B estimate adds paramilitary, R&D, and other excluded categories.',
    },
  },

  'Israel': {
    overview: 'Israel fields a highly advanced, combat-experienced military with an undeclared nuclear capability and one of the world\'s most battle-tested air defence systems.',
    manpower: {
      total_population: field('~9,500,000', [{ name: 'The Global Statistics, 2026', url: 'https://www.theglobalstatistics.com' }], false),
      available_manpower: field('~3,500,000 (est., fit for service)', [], false),
      active_personnel: field('169,500', [
        { name: 'Wikipedia/IDF, citing IISS 2023 baseline', url: 'https://en.wikipedia.org' },
        { name: 'MilitarySpend.org Israel Profile', url: 'https://militaryspend.org/country-profiles/israel' },
      ], true),
      reserve_personnel: field('~465,000', [
        { name: 'Wikipedia/IDF, citing SIPRI 2023', url: 'https://en.wikipedia.org' },
        { name: 'Military Power Rankings', url: 'https://www.militarypowerrankings.com/military-power/israel' },
      ], true),
      paramilitary: field('~8,000', [{ name: 'Military Power Rankings, citing CIA World Factbook', url: 'https://www.militarypowerrankings.com/military-power/israel' }], false),
      army_personnel: field('526,000 (incl. wartime reserve mobilization)', [{ name: 'Statista, IDF by Branch 2025', url: 'https://www.statista.com' }], false),
      navy_personnel: field('19,500', [{ name: 'Statista, IDF by Branch 2025', url: 'https://www.statista.com' }], false),
      airforce_personnel: field('89,000', [{ name: 'Statista, IDF by Branch 2025', url: 'https://www.statista.com' }], false),
    },
    land: {
      tanks: field('~1,300 (Merkava Mk 4 "Barak")', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      armored_vehicles: field('~5,540 ground vehicles total', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      self_propelled_artillery: field('~300 (est., M109 fleet, transitioning to SIGMA 155)', [{ name: 'Breaking Defense / Defense Post, 2025', url: 'https://breakingdefense.com' }], false),
      towed_artillery: field('~100 (est.)', [], false),
      rocket_artillery: field('~150 (est., incl. PULS, MLRS)', [], false),
    },
    airpower: {
      total_aircraft: field('525–531', [
        { name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' },
        { name: 'The World Data — IDF Statistics 2026', url: 'https://theworlddata.com' },
      ], true),
      fighters: field('263 combat aircraft', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      attack_aircraft: field('Included in combat aircraft total', [], false),
      transport: field('~50 (est.)', [], false),
      trainers: field('~50 (est.)', [], false),
      helicopters: field('~150 (est., incl. AH-64, CH-53K)', [], false),
      attack_helicopters: field('AH-64 Apache fleet (fleet-wide count not separately published)', [], false),
      tanker_fleet: field('~8 (est.)', [], false),
    },
    naval: {
      total_assets: field('52 warships', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      aircraft_carriers: field('0', [], false),
      helicopter_carriers: field('0', [], false),
      destroyers: field('0', [], false),
      submarines: field('6 (Dolphin-class)', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      frigates: field('0', [], false),
      corvettes: field('Sa\'ar 6 and Sa\'ar 5-class', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
      patrol_vessels: field('Sa\'ar 4.5-class missile boats', [{ name: 'GlobalMilitary.net Israel Profile, 2026', url: 'https://www.globalmilitary.net/countries/isr' }], false),
    },
    nuclear: {
      has_nuclear: field(true, [{ name: 'Military Power Rankings, citing SIPRI 2023', url: 'https://www.militarypowerrankings.com/military-power/israel' }], false),
      has_triad: field(true, [{ name: 'Military Power Rankings — inferred via Jericho, air-launched, Dolphin-class SLCM', url: 'https://www.militarypowerrankings.com/military-power/israel' }], false),
      warheads: field('80–100 (undeclared, unconfirmed officially)', [{ name: 'Military Power Rankings, citing SIPRI 2023', url: 'https://www.militarypowerrankings.com/military-power/israel' }], false),
      note: 'Israel has never officially confirmed its nuclear arsenal. Estimated capability based on Jericho ballistic missiles, air-launched systems, and possible SLCMs on Dolphin-class submarines.',
    },
    budget: {
      annual_usd: field('$46.5 billion (2025, wartime-elevated)', [
        { name: 'MilitarySpend.org Israel Profile', url: 'https://militaryspend.org/country-profiles/israel' },
        { name: 'Wikipedia/IDF, citing 2024 SIPRI figure', url: 'https://en.wikipedia.org' },
      ], true),
      pct_gdp: field('~8.8% (2024)', [{ name: 'Wikipedia/IDF', url: 'https://en.wikipedia.org' }], false),
      note: 'Pre-October 2023 baseline was ~$23 billion (~5% of GDP). Sustained wartime footing pushed spending to $46.5B by 2025.',
    },
  },

  'Ukraine': {
    overview: 'Ukraine sustains the highest military spending burden as a share of GDP in the world, fighting a large-scale war while rapidly developing indigenous drone warfare capability.',
    manpower: {
      total_population: field('~36,700,000 (wartime estimate)', [], false),
      available_manpower: field('~15,000,000 (est.)', [], false),
      active_personnel: field('900,000 (2025)', [
        { name: 'Wikipedia/Armed Forces of Ukraine', url: 'https://en.wikipedia.org' },
        { name: 'Visual Capitalist — Europe\'s Biggest Armies 2025', url: 'https://www.visualcapitalist.com' },
      ], true),
      reserve_personnel: field('~4,000,000 (total force incl. reserve pool)', [{ name: 'Wikipedia/Armed Forces of Ukraine', url: 'https://en.wikipedia.org' }], false),
      paramilitary: field('National Guard, State Border Guard Service, Territorial Defence Forces (not separately quantified)', [{ name: 'MilitarySpend.org Ukraine Profile', url: 'https://militaryspend.org/country-profiles/ukraine' }], false),
      army_personnel: field('~700,000 (est., Ground Forces majority of Defence Forces)', [], false),
      navy_personnel: field('Minimal — Black Sea Fleet capability largely inactive/relocated', [], false),
      airforce_personnel: field('~35,000 (2022 baseline, pre-reorganization)', [{ name: 'Wikipedia/Ukrainian Air Force', url: 'https://en.wikipedia.org' }], false),
    },
    land: {
      tanks: field('~1,114–1,392 (active + reserve, incl. Leopard 2, Challenger 2, M1 Abrams donations)', [
        { name: 'GlobalMilitary.net Ukraine Profile, 2026', url: 'https://www.globalmilitary.net/countries/ukr' },
        { name: 'Statista, Russia/Ukraine Comparison 2026', url: 'https://www.statista.com' },
      ], true),
      armored_vehicles: field('~3,000+ (est., mixed Soviet-legacy and Western-donated)', [], false),
      self_propelled_artillery: field('~500 (est., incl. 2S1, Caesar, PzH 2000, Archer)', [], false),
      towed_artillery: field('~800 (est., incl. donated Western 155mm systems)', [], false),
      rocket_artillery: field('~200 (est., incl. HIMARS, M270 MLRS)', [], false),
    },
    airpower: {
      total_aircraft: field('335–347 (2026)', [
        { name: 'GlobalMilitary.net Air Forces, Ukraine 2026', url: 'https://www.globalmilitary.net/air_forces/ukr' },
        { name: 'Statista, Russia/Ukraine Comparison 2026', url: 'https://www.statista.com' },
      ], true),
      fighters: field('137 combat aircraft (incl. F-16, MiG-29, Su-27, Mirage 2000-5F)', [{ name: 'GlobalMilitary.net Air Forces, Ukraine 2026', url: 'https://www.globalmilitary.net/air_forces/ukr' }], false),
      attack_aircraft: field('Included in combat aircraft figure (Su-24M, Su-25)', [], false),
      transport: field('~27', [{ name: 'GlobalMilitary.net Air Forces, Ukraine 2026', url: 'https://www.globalmilitary.net/air_forces/ukr' }], false),
      trainers: field('~42 (est., L-39 Albatros)', [], false),
      helicopters: field('~136', [{ name: 'GlobalMilitary.net Air Forces, Ukraine 2026', url: 'https://www.globalmilitary.net/air_forces/ukr' }], false),
      attack_helicopters: field('Mi-24 Hind (~39 active)', [{ name: 'GlobalMilitary.net Air Forces, Ukraine 2026', url: 'https://www.globalmilitary.net/air_forces/ukr' }], false),
      tanker_fleet: field('0 (none confirmed operational)', [], false),
    },
    naval: {
      total_assets: field('~41 vessels (mostly coastal patrol; Black Sea Fleet capability largely lost)', [{ name: 'GlobalMilitary.net Ukraine Profile, 2026', url: 'https://www.globalmilitary.net/countries/ukr' }], false),
      aircraft_carriers: field('0', [], false),
      helicopter_carriers: field('0', [], false),
      destroyers: field('0', [], false),
      submarines: field('0', [], false),
      frigates: field('0', [], false),
      corvettes: field('Limited coastal patrol craft only', [], false),
      patrol_vessels: field('Primary naval focus — patrol and unmanned surface vessels (Magura V5 and related USVs)', [], false),
    },
    nuclear: {
      has_nuclear: field(false, [{ name: 'Budapest Memorandum, 1994', url: '' }], false),
      has_triad: field(false, [], false),
      warheads: field('0', [], false),
      note: 'Ukraine surrendered its Soviet-inherited nuclear arsenal (once the world\'s third-largest, ~5,000 warheads) under the 1994 Budapest Memorandum and holds no nuclear weapons.',
    },
    budget: {
      annual_usd: field('$84.1 billion (2025)', [
        { name: 'SIPRI Fact Sheet, Apr 2026', url: 'https://www.sipri.org' },
        { name: 'MilitarySpend.org Ukraine Profile', url: 'https://militaryspend.org/country-profiles/ukraine' },
      ], true),
      pct_gdp: field('~40% (2025); ~27.2% projected 2026', [
        { name: 'SIPRI Fact Sheet, Apr 2026', url: 'https://www.sipri.org' },
        { name: 'MilitarySpend.org Ukraine Profile', url: 'https://militaryspend.org/country-profiles/ukraine' },
      ], true),
      note: 'Highest defence burden as a share of GDP in the world. Excludes foreign military assistance (over €120 billion in commitments since Feb 2022), counted separately.',
    },
  },

  'India': {
    overview: 'India fields the world\'s second-largest active military and a growing nuclear arsenal, with defence spending among the top five globally and an increasingly indigenous procurement base.',
    manpower: {
      total_population: field('~1,450,000,000', [{ name: 'World Bank', url: 'https://data.worldbank.org' }], false),
      available_manpower: field('~665,000,000 (est., fit for service)', [], false),
      active_personnel: field('~1,475,750 (world\'s 2nd largest)', [
        { name: 'GlobalMilitary.net India Profile, 2026', url: 'https://www.globalmilitary.net/countries/ind' },
        { name: 'WorldPowerStats — India Military Power 2026', url: 'https://worldpowerstats.com/country/india.html' },
      ], true),
      reserve_personnel: field('~1,155,000 (est.)', [], false),
      paramilitary: field('Central Armed Police Forces (CAPF), included in SIPRI budget figure', [], false),
      army_personnel: field('~1,240,000 (Indian Army, 14 corps)', [{ name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' }], false),
      navy_personnel: field('~70,000 (est., Indian Navy)', [], false),
      airforce_personnel: field('~140,000 (est., Indian Air Force)', [], false),
    },
    land: {
      tanks: field('~4,614', [{ name: 'WorldPowerStats — India Military Power 2026', url: 'https://worldpowerstats.com/country/india.html' }], false),
      armored_vehicles: field('~8,700 (est.)', [], false),
      self_propelled_artillery: field('~200 (est., incl. K9 Vajra)', [], false),
      towed_artillery: field('~3,000 (est.)', [], false),
      rocket_artillery: field('Pinaka rocket system (indigenous) — ~300 launchers est.', [{ name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' }], false),
    },
    airpower: {
      total_aircraft: field('~2,256–2,296', [
        { name: 'GlobalMilitary.net India Profile, 2026', url: 'https://www.globalmilitary.net/countries/ind' },
        { name: 'WorldPowerStats — India Military Power 2026', url: 'https://worldpowerstats.com/country/india.html' },
      ], true),
      fighters: field('~588 combat aircraft; ~31 fighter squadrons (target 42)', [
        { name: 'GlobalMilitary.net India Profile, 2026', url: 'https://www.globalmilitary.net/countries/ind' },
        { name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' },
      ], true),
      attack_aircraft: field('~130 (est., Jaguar, Su-30MKI strike variants)', [], false),
      transport: field('~250 (est., C-17, C-130J, An-32)', [], false),
      trainers: field('~350 (est., incl. Hawk, PC-7, HTT-40)', [], false),
      helicopters: field('~800 (est., incl. Dhruv, Mi-17)', [], false),
      attack_helicopters: field('~156 LCH Prachand (Light Combat Helicopter) on order/delivery', [], false),
      tanker_fleet: field('~6 (Il-78 fleet)', [], false),
    },
    naval: {
      total_assets: field('~351 warships', [{ name: 'GlobalMilitary.net India Profile, 2026', url: 'https://www.globalmilitary.net/countries/ind' }], false),
      aircraft_carriers: field('2 (INS Vikramaditya, INS Vikrant)', [
        { name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' },
        { name: 'GlobalMilitary.net India Profile, 2026', url: 'https://www.globalmilitary.net/countries/ind' },
      ], true),
      helicopter_carriers: field('0', [], false),
      destroyers: field('~13 (est., incl. Kolkata, Visakhapatnam-class)', [], false),
      submarines: field('4 Arihant-class SSBNs (2 operational, 2 under construction) + ~16 Kalvari/Sindhughosh-class conventional', [{ name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' }], false),
      frigates: field('~13 (est., incl. Shivalik, Nilgiri-class)', [], false),
      corvettes: field('~26 (est., incl. Kamorta, Kora-class)', [], false),
      patrol_vessels: field('~135 (est., incl. offshore and coastal patrol vessels)', [], false),
    },
    nuclear: {
      has_nuclear: field(true, [
        { name: 'SIPRI Yearbook 2026, via Tribune India, Jun 2026', url: 'https://www.tribuneindia.com' },
        { name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' },
      ], true),
      has_triad: field(true, [{ name: 'MilitarySpend.org — Agni IRBM/ICBM, Arihant-class SSBN, air-delivered', url: 'https://militaryspend.org/country-profiles/india' }], false),
      warheads: field('~190 (as of Jan 2026)', [
        { name: 'SIPRI Yearbook 2026, via Tribune India', url: 'https://www.tribuneindia.com' },
        { name: 'Business Standard, citing SIPRI, Jun 2026', url: 'https://www.business-standard.com' },
      ], true),
      note: 'India maintains a no-first-use policy. Nuclear triad based on Agni-series IRBMs/ICBMs, Arihant-class SSBNs, and air-delivered systems.',
    },
    budget: {
      annual_usd: field('$92.1 billion (2025)', [
        { name: 'SIPRI Yearbook 2026, via Business Standard', url: 'https://www.business-standard.com' },
        { name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' },
      ], true),
      pct_gdp: field('~2.3%', [{ name: 'MilitarySpend.org India Profile', url: 'https://militaryspend.org/country-profiles/india' }], false),
      note: 'World\'s 5th-largest military spender (2025), an 8.9% increase from 2024.',
    },
  },

};