// UPSC GeoPrep — Data Module
// Auto-generated from comprehensive dataset

export const CAT = {
  city:     { color:'#2563EB', icon:'🏙️', label:'City' },
  river:    { color:'#0891B2', icon:'🌊', label:'River' },
  mountain: { color:'#7C3AED', icon:'⛰️', label:'Mountain' },
  pass:     { color:'#DC2626', icon:'🏔️', label:'Pass' },
  strait:   { color:'#0D9488', icon:'🌀', label:'Strait' },
  lake:     { color:'#0284C7', icon:'💧', label:'Lake' },
  island:   { color:'#059669', icon:'🏝️', label:'Island' },
  desert:   { color:'#D97706', icon:'🏜️', label:'Desert' },
  plateau:  { color:'#92400E', icon:'🗻', label:'Plateau' },
  canal:    { color:'#0E7490', icon:'⚓', label:'Canal/Water' },
  boundary: { color:'#BE185D', icon:'🔲', label:'Boundary' },
  pyq:      { color:'#E11D48', icon:'📝', label:'PYQ' },
  custom:   { color:'#6D28D9', icon:'📌', label:'Custom' },
};

// ═══ INDIA DATA ═══
export const indiaData = [
  // CITIES
  {id:'ic1',name:'New Delhi',lat:28.6139,lng:77.209,type:'city',info:'National capital. Seat of Parliament, Supreme Court, Rashtrapati Bhavan. On Yamuna River. Lutyens\' design. UNESCO: Qutub Minar, Humayun\'s Tomb, Red Fort.',upscRelevance:'Constitutional bodies HQ. UNESCO sites. NCT status — unique governance.'},
  {id:'ic2',name:'Mumbai',lat:19.076,lng:72.8777,type:'city',info:'Financial capital. RBI HQ, BSE, NSE, SEBI. Western coast (Konkan). Natural harbour. Elephanta Caves UNESCO.',upscRelevance:'RBI, stock exchanges, SEBI — Economy questions. Gateway of India. Western Ghats proximity.'},
  {id:'ic3',name:'Kolkata',lat:22.5726,lng:88.3639,type:'city',info:'Former British capital (till 1911). On Hooghly. Only riverine major port. Victoria Memorial.',upscRelevance:'Bengal Renaissance, Partition history. Ganga-Brahmaputra delta. Sundarbans gateway.'},
  {id:'ic4',name:'Chennai',lat:13.0827,lng:80.2707,type:'city',info:'Tamil Nadu capital. Coromandel Coast. "Detroit of India" (auto industry). Mahabalipuram UNESCO nearby.',upscRelevance:'Cyclone-prone coast. Dravidian architecture. Bharatanatyam. Auto industry hub.'},
  {id:'ic5',name:'Bengaluru',lat:12.9716,lng:77.5946,type:'city',info:'Karnataka capital. IT capital. HQ of ISRO, HAL, NAL. Deccan Plateau (~920m). Pleasant climate.',upscRelevance:'ISRO HQ — space missions. HAL — defence. Deccan Plateau geography.'},
  {id:'ic6',name:'Leh',lat:34.1526,lng:77.5771,type:'city',info:'Capital of Ladakh UT. ~3,500m. Indus Valley. Cold desert. Near LAC. Buddhist monasteries.',upscRelevance:'Cold desert ecosystem. India-China LAC. Galwan Valley. Pangong Tso.'},
  {id:'ic7',name:'Varanasi',lat:25.3176,lng:83.006,type:'city',info:'One of world\'s oldest cities. Holy city on Ganga. Sarnath nearby — Buddha\'s first sermon.',upscRelevance:'Ganga ghats — cultural heritage. Buddhist history. Silk weaving GI.'},
  {id:'ic8',name:'Port Blair',lat:11.6234,lng:92.7265,type:'city',info:'Capital of A&N Islands. Cellular Jail (freedom struggle). Only tri-service command (Andaman & Nicobar Command).',upscRelevance:'Strategic location near Malacca. Tri-service command. Cellular Jail — freedom struggle.'},
  {id:'ic9',name:'Hyderabad',lat:17.385,lng:78.4867,type:'city',info:'Telangana capital. DRDO labs. Charminar. Deccan Plateau. Pharma hub ("Vaccine Capital").',upscRelevance:'Pharma/biotech hub. Charminar — Qutb Shahi architecture. Nizam history.'},
  {id:'ic10',name:'Ahmedabad',lat:23.0225,lng:72.5714,type:'city',info:'Gujarat\'s largest city. Sabarmati River. UNESCO World Heritage City (2017). Textile industry.',upscRelevance:'First Indian city as UNESCO World Heritage. Sabarmati Ashram. Textile history.'},
  {id:'ic11',name:'Guwahati',lat:26.1445,lng:91.7362,type:'city',info:'Gateway to NE India. On Brahmaputra. Kamakhya Temple. IIT Guwahati.',upscRelevance:'NE connectivity. Brahmaputra floods. Act East Policy gateway.'},
  {id:'ic12',name:'Srinagar',lat:34.0837,lng:74.7973,type:'city',info:'Summer capital of J&K. Dal Lake. On Jhelum River. ~1,585m altitude.',upscRelevance:'Article 370 (revoked). Kashmir issue. Dal Lake ecology. Jhelum tributaries.'},
  {id:'ic13',name:'Thiruvananthapuram',lat:8.5241,lng:76.9366,type:'city',info:'Kerala capital. Near equator. Padmanabhaswamy Temple. Vikram Sarabhai Space Centre (VSSC).',upscRelevance:'VSSC — rocket launches. Backwaters. Monsoon arrival point (June 1).'},
  {id:'ic14',name:'Imphal',lat:24.817,lng:93.9368,type:'city',info:'Manipur capital. Imphal Valley. Battle of Imphal (1944) — turning point in Burma Campaign.',upscRelevance:'INA history. NE insurgency. Loktak Lake. AFSPA debates.'},
  {id:'ic15',name:'Gangtok',lat:27.3389,lng:88.6065,type:'city',info:'Sikkim capital. ~1,650m. Kangchenjunga views. Organic state (100% organic farming).',upscRelevance:'First fully organic state. Kangchenjunga NP UNESCO. Border with China.'},
  {id:'ic16',name:'Shimla',lat:31.1048,lng:77.1734,type:'city',info:'Himachal Pradesh capital. Former British summer capital. ~2,200m.',upscRelevance:'Shimla Agreement 1972. British hill stations. Lesser Himalayas.'},
  {id:'ic17',name:'Bhopal',lat:23.2599,lng:77.4126,type:'city',info:'Madhya Pradesh capital. "City of Lakes". 1984 gas tragedy. Bhimbetka caves nearby (UNESCO).',upscRelevance:'Bhopal Gas Tragedy — environmental law. Bhimbetka — prehistoric art. Central India.'},
  {id:'ic18',name:'Jaipur',lat:26.9124,lng:75.7873,type:'city',info:'Rajasthan capital. "Pink City". Amber Fort, Jantar Mantar (UNESCO). Founded by Sawai Jai Singh II.',upscRelevance:'UNESCO Walled City. Rajputana history. Jantar Mantar — astronomy.'},
  {id:'ic19',name:'Dispur',lat:26.1408,lng:91.7898,type:'city',info:'Assam capital (within Guwahati). Tea industry hub. NRC/CAA debates.',upscRelevance:'NRC & CAA. Tea plantations — colonial economy. Assam Accord.'},
  {id:'ic20',name:'Itanagar',lat:27.0844,lng:93.6053,type:'city',info:'Arunachal Pradesh capital. Near China border (McMahon Line). Tawang nearby.',upscRelevance:'McMahon Line dispute. Tawang monastery. 1962 war route.'},

  // RIVERS
  {id:'ir1',name:'Ganga',lat:25.4358,lng:81.8463,type:'river',info:'2,525 km. Origin: Gangotri (Bhagirathi) + Alaknanda merge at Devprayag. Major tributaries: Yamuna, Son, Ghaghara, Gandak, Kosi. Drains into Bay of Bengal via Sundarbans delta.',upscRelevance:'Namami Gange Mission. Sundarbans UNESCO/Ramsar. Farakka Barrage (India-Bangladesh). National River.'},
  {id:'ir2',name:'Brahmaputra',lat:26.19,lng:91.746,type:'river',info:'2,900 km. Origin: Angsi Glacier (Tibet), called Tsangpo. Enters India at Arunachal as Dihang. Braided river. Majuli — largest river island.',upscRelevance:'Antecedent river (older than Himalayas). India-China water issues. Majuli erosion. Floods.'},
  {id:'ir3',name:'Narmada',lat:22.6783,lng:75.8573,type:'river',info:'1,312 km. Origin: Amarkantak (MP). Flows WEST through rift valley into Arabian Sea. Sardar Sarovar Dam. Marble Rocks at Jabalpur.',upscRelevance:'Rift valley river. West-flowing (exam trap). Narmada Bachao Andolan. Vindhya-Satpura divide.'},
  {id:'ir4',name:'Godavari',lat:16.96,lng:81.78,type:'river',info:'1,465 km. "Dakshin Ganga". Origin: Trimbakeshwar, Nashik. Longest peninsular river. Tributaries: Pranhita, Indravati, Sabari.',upscRelevance:'Longest peninsular river. Polavaram Project. Inter-state water disputes (MH, TS, AP).'},
  {id:'ir5',name:'Kaveri (Cauvery)',lat:12.4244,lng:76.6549,type:'river',info:'800 km. Origin: Talakaveri, Kodagu (Karnataka). Through TN. Shivanasamudra Falls. Grand Anicut (oldest dam).',upscRelevance:'Cauvery Water Dispute (KA vs TN — SC tribunal). Grand Anicut — Chola engineering. PYQ: 2018.'},
  {id:'ir6',name:'Indus',lat:34.1674,lng:77.5786,type:'river',info:'3,180 km. Origin: near Lake Mansarovar (Tibet). Through Ladakh → Pakistan. Indus Water Treaty 1960 (India gets Beas, Ravi, Sutlej).',upscRelevance:'Indus Water Treaty (India-Pakistan). IVC. Trans-Himalayan river. Zanskar tributary.'},
  {id:'ir7',name:'Krishna',lat:16.5175,lng:80.6306,type:'river',info:'1,400 km. Origin: Mahabaleshwar (Maharashtra). Through KA, TS, AP. Nagarjuna Sagar Dam.',upscRelevance:'Krishna Water Disputes Tribunal. Second longest peninsular river. Nagarjuna Sagar — Buddhist site.'},
  {id:'ir8',name:'Yamuna',lat:28.6841,lng:77.2175,type:'river',info:'1,376 km. Origin: Yamunotri Glacier. Largest tributary of Ganga. Merges at Prayagraj (Sangam).',upscRelevance:'Most polluted stretch (Delhi). Yamuna Action Plan. Triveni Sangam — Kumbh Mela.'},
  {id:'ir9',name:'Mahanadi',lat:20.4625,lng:85.8828,type:'river',info:'858 km. Origin: Sihawa (Chhattisgarh). Hirakud Dam — longest dam in India. Flows east to Bay of Bengal.',upscRelevance:'Hirakud Dam. East-flowing (not west — exam trap). Odisha floods. CG-Odisha dispute.'},
  {id:'ir10',name:'Tapti (Tapi)',lat:21.1702,lng:72.8311,type:'river',info:'724 km. Origin: Betul (MP). West-flowing through rift valley. Parallel to Narmada but south of it.',upscRelevance:'West-flowing river (with Narmada). Rift valley. South of Satpura range.'},
  {id:'ir11',name:'Sutlej',lat:31.1,lng:77.17,type:'river',info:'1,450 km. Origin: Rakas Lake (Tibet). Antecedent river. Bhakra Nangal Dam. Part of IWT (India).',upscRelevance:'Indus Water Treaty — allocated to India. Bhakra Dam. Antecedent river.'},
  {id:'ir12',name:'Periyar',lat:10.0,lng:76.5,type:'river',info:'244 km. Longest river of Kerala. West-flowing. Periyar NP — elephants. Mullaperiyar Dam dispute (KL vs TN).',upscRelevance:'West-flowing river of Kerala. Mullaperiyar Dam dispute — SC cases. Periyar Tiger Reserve.'},

  // MOUNTAINS
  {id:'im1',name:'Kangchenjunga',lat:27.7025,lng:88.1475,type:'mountain',info:'8,586m. 3rd highest globally, highest in India. India-Nepal border (Sikkim). Kangchenjunga NP — UNESCO.',upscRelevance:'Highest peak in India. UNESCO NP. India-Nepal boundary.'},
  {id:'im2',name:'Western Ghats',lat:14.5,lng:75.5,type:'mountain',info:'~1,600 km range. UNESCO (2012). Older than Himalayas. 5,000+ flowering plants. Blocks SW monsoon. Key gaps: Palakkad, Bhor, Thal.',upscRelevance:'Biodiversity hotspot (1 of 4 in India). Rain shadow effect. Gaps — frequently asked. PYQ: 2022, 2019, 2014.'},
  {id:'im3',name:'Anamudi',lat:10.1667,lng:77.05,type:'mountain',info:'2,695m. Highest in Western Ghats & South India. In Eravikulam NP. Nilgiri Tahr habitat.',upscRelevance:'Highest in South India. Nilgiri Tahr (endemic, Vulnerable). Shola-grassland ecosystem.'},
  {id:'im4',name:'Siachen Glacier',lat:35.4167,lng:77.1,type:'mountain',info:'76 km. Karakoram range. World\'s highest battleground. India controls since Operation Meghdoot (1984).',upscRelevance:'Operation Meghdoot 1984. India-Pakistan. Longest glacier in Karakoram (outside polar).'},
  {id:'im5',name:'Eastern Ghats',lat:14.5,lng:79.5,type:'mountain',info:'Discontinuous range along east coast. Cut by rivers (Godavari, Krishna, Kaveri, Mahanadi). Araku Valley.',upscRelevance:'Discontinuous (vs continuous Western Ghats). Broken by rivers — trap question. Bauxite deposits.'},
  {id:'im6',name:'Nanda Devi',lat:30.3733,lng:79.9742,type:'mountain',info:'7,816m. Second highest in India. Uttarakhand. Nanda Devi NP — UNESCO. Nanda Devi Biosphere Reserve.',upscRelevance:'Second highest peak. UNESCO NP + BR. Valley of Flowers nearby.'},
  {id:'im7',name:'K2 (Godwin-Austen)',lat:35.8818,lng:76.5142,type:'mountain',info:'8,611m. 2nd highest globally. In POK (Karakoram). Highest peak in Karakoram range.',upscRelevance:'2nd highest globally. In POK — sovereignty issue. Karakoram range.'},
  {id:'im8',name:'Aravalli Range',lat:25.0,lng:73.5,type:'mountain',info:'~692 km. One of oldest mountain ranges in world. Guru Shikhar (1,722m) — highest. Rajasthan. Rich in minerals.',upscRelevance:'Oldest fold mountains in India. Blocks moisture → Thar desert formation. Mineral resources.'},

  // PASSES
  {id:'ip1',name:'Nathu La',lat:27.0767,lng:88.83,type:'pass',info:'4,310m. India-China border in Sikkim. Reopened 2006 for border trade. Site of 1967 clash.',upscRelevance:'India-China trade route. 1967 clash. Frequently asked pass. PYQ: 2017.'},
  {id:'ip2',name:'Palakkad Gap',lat:10.75,lng:76.6833,type:'pass',info:'Major break in Western Ghats. ~40 km wide. Allows NE monsoon moisture into Kerala.',upscRelevance:'Most asked WG gap. Monsoon mechanism. KL-TN connectivity. PYQ: 2019, 2014.'},
  {id:'ip3',name:'Karakoram Pass',lat:35.52,lng:77.83,type:'pass',info:'5,540m. India-China (Ladakh-Xinjiang). One of highest motorable passes. On LAC.',upscRelevance:'Highest pass on India border. LAC. Aksai Chin issue.'},
  {id:'ip4',name:'Rohtang Pass',lat:32.3722,lng:77.2478,type:'pass',info:'3,978m. HP. Connects Kullu to Lahaul-Spiti. Atal Tunnel (world\'s longest above 10,000ft).',upscRelevance:'Atal Tunnel — strategic connectivity to Ladakh. Pir Panjal crossing.'},
  {id:'ip5',name:'Bhor Ghat',lat:18.7,lng:73.4,type:'pass',info:'Western Ghats gap near Pune. Mumbai-Pune railway/expressway. British-era engineering.',upscRelevance:'Western Ghats gap. Mumbai-Pune connectivity. Railway engineering history.'},
  {id:'ip6',name:'Zoji La',lat:34.2833,lng:75.5167,type:'pass',info:'3,528m. J&K. Connects Srinagar to Leh. Gateway to Ladakh. Z-Morh tunnel under construction.',upscRelevance:'Srinagar-Leh connectivity. Z-Morh tunnel. Great Himalayas crossing.'},
  {id:'ip7',name:'Shipki La',lat:31.7833,lng:78.7667,type:'pass',info:'4,500m. HP-Tibet border. Sutlej enters India here. Indo-Tibet trade route.',upscRelevance:'Sutlej entry point. India-China border. Trade route.'},
  {id:'ip8',name:'Jelep La',lat:27.3,lng:88.87,type:'pass',info:'4,267m. Sikkim-Tibet. Old trade route to Lhasa. Near Nathu La.',upscRelevance:'Historic Sikkim-Tibet trade. Near Nathu La — compared in questions.'},

  // LAKES
  {id:'il1',name:'Chilika Lake',lat:19.72,lng:85.32,type:'lake',info:'Largest coastal lagoon in India (1,100 km²). Brackish. Odisha. First Ramsar site (1981). Irrawaddy dolphins.',upscRelevance:'Largest brackish lagoon. First Indian Ramsar. Irrawaddy dolphins. PYQ: 2018.'},
  {id:'il2',name:'Pangong Tso',lat:33.7578,lng:78.6635,type:'lake',info:'Endorheic salt lake at ~4,350m. 134 km long. 60% in China. 2020 India-China standoff site.',upscRelevance:'India-China standoff (Finger areas). Endorheic lake. LAC. PYQ: 2020.'},
  {id:'il3',name:'Loktak Lake',lat:24.55,lng:93.8,type:'lake',info:'Largest freshwater lake in NE India. Manipur. Phumdis (floating biomass). Keibul Lamjao NP — only floating NP.',upscRelevance:'Only floating NP globally. Sangai deer (Eld\'s deer — endemic). Phumdis. PYQ: 2016.'},
  {id:'il4',name:'Wular Lake',lat:34.37,lng:74.64,type:'lake',info:'Largest freshwater lake in India (by area). J&K. Fed by Jhelum. Ramsar site.',upscRelevance:'Largest freshwater lake (trap: not Chilika — that\'s brackish). Jhelum basin.'},
  {id:'il5',name:'Sambhar Lake',lat:26.9167,lng:75.1,type:'lake',info:'Largest inland saline lake in India. Rajasthan. Salt production. Ramsar site.',upscRelevance:'Largest inland salt lake. Salt production — economy. Flamingos. Ramsar.'},
  {id:'il6',name:'Dal Lake',lat:34.09,lng:74.84,type:'lake',info:'Srinagar. Famous houseboats. Floating gardens ("Rad"). Eutrophication threat.',upscRelevance:'Kashmir tourism. Eutrophication case study. Floating market.'},
  {id:'il7',name:'Vembanad Lake',lat:9.57,lng:76.35,type:'lake',info:'Longest lake in India (96 km). Kerala backwaters. Ramsar site. Kuttanad below sea level.',upscRelevance:'Longest lake. Kuttanad — below sea level farming (unique). Nehru Trophy boat race.'},

  // ISLANDS
  {id:'ii1',name:'Barren Island',lat:12.278,lng:93.858,type:'island',info:'Only confirmed active volcano in South Asia. Andaman Sea. Last major eruption 2017.',upscRelevance:'Only active volcano in India. Andaman tectonics. Indian plate subduction.'},
  {id:'ii2',name:'Majuli',lat:26.95,lng:94.1667,type:'island',info:'World\'s largest river island (~880 km²). In Brahmaputra. Neo-Vaishnavite Sattras. Shrinking due to erosion.',upscRelevance:'Largest river island. Brahmaputra erosion. Sattra culture. PYQ: 2016.'},
  {id:'ii3',name:'Lakshadweep',lat:10.5667,lng:72.6417,type:'island',info:'36 coral islands (10 inhabited). Only coral atoll group in India. Kavaratti capital. Arabian Sea.',upscRelevance:'Coral atolls. Only UT in Arabian Sea. Exclusive Economic Zone. Marine biodiversity.'},

  // PLATEAUS
  {id:'ipl1',name:'Deccan Plateau',lat:17.0,lng:78.0,type:'plateau',info:'Triangular plateau. Bounded by Western Ghats (W), Eastern Ghats (E), Satpura-Vindhya (N). Black soil (Regur). Avg elevation 600m.',upscRelevance:'Black soil — cotton. Peninsular rivers. Basaltic lava flows. Stable Indian plate.'},
  {id:'ipl2',name:'Ladakh Plateau',lat:34.0,lng:78.0,type:'plateau',info:'Part of Tibetan Plateau extension. ~4,500m avg. Cold desert. Rain shadow. Changthang Wildlife Sanctuary.',upscRelevance:'Cold desert. Pashmina goat rearing. Changpa nomads. Rain shadow of Himalayas.'},
  {id:'ipl3',name:'Chota Nagpur Plateau',lat:23.4,lng:85.3,type:'plateau',info:'Jharkhand. Rich mineral deposits — iron, coal, mica, manganese. "Ruhr of India" (industrial).',upscRelevance:'Mineral-rich. Damodar Valley. Industrial belt. Tribal population. PYQ: 2017.'},

  // PYQ LOCATIONS
  {id:'pyq1',name:'Silent Valley NP',lat:11.0833,lng:76.4167,type:'pyq',info:'Kerala. Western Ghats. Tropical evergreen. Lion-tailed macaque. Saved from dam by environmental movement (1970s-80s).',upscRelevance:'Landmark env activism. Endemic species. LTM. PYQ: 2019, 2016.'},
  {id:'pyq2',name:'Katchatheevu',lat:9.3833,lng:79.5333,type:'pyq',info:'Uninhabited island in Palk Strait. India ceded to Sri Lanka 1974. Tamil fishing rights dispute continues.',upscRelevance:'India-Sri Lanka maritime boundary. Palk Strait. PYQ: 2024.'},
  {id:'pyq3',name:'Dzukou Valley',lat:25.5167,lng:93.9833,type:'pyq',info:'Nagaland-Manipur border. ~2,400m. Endemic Dzukou lily. Indo-Burma biodiversity hotspot.',upscRelevance:'NE India biodiversity. Indo-Burma hotspot. PYQ: 2024.'},
  {id:'pyq4',name:'Polavaram Project',lat:17.249,lng:81.6436,type:'pyq',info:'Multi-purpose dam on Godavari, AP. National project status 2014. Inter-state submergence dispute (AP-TS-Odisha-CG).',upscRelevance:'Godavari river projects. Inter-state water disputes. PYQ: 2019.'},
  {id:'pyq5',name:'Indira Point',lat:6.7467,lng:93.8425,type:'pyq',info:'Southernmost point of India. Nicobar Islands (Pygmalion Point). Submerged after 2004 tsunami.',upscRelevance:'Extreme points of India. Tsunami impact. PYQ: 2017, 2012.'},
  {id:'pyq6',name:'Sivasamudram Falls',lat:12.2783,lng:77.1633,type:'pyq',info:'On Kaveri River. Karnataka. One of India\'s first hydroelectric plants (1902).',upscRelevance:'Early hydroelectric power. Kaveri River. PYQ: 2014.'},
  {id:'pyq7',name:'Sundarbans',lat:21.9497,lng:89.1833,type:'pyq',info:'World\'s largest mangrove forest. Ganga-Brahmaputra delta. UNESCO. Tiger reserve. India-Bangladesh shared.',upscRelevance:'Mangrove ecosystem. Tiger habitat. Climate change — sea level rise. PYQ: 2023, 2019, 2014.'},
  {id:'pyq8',name:'Nubra Valley',lat:34.7,lng:77.6,type:'pyq',info:'Ladakh. Confluence of Shyok & Nubra rivers. Diskit Monastery. Bactrian camels (double-humped).',upscRelevance:'Siachen approach. Double-humped camels. Karakoram crossing. PYQ: 2018.'},
  {id:'pyq9',name:'Dandakaranya',lat:19.5,lng:81.0,type:'pyq',info:'Forest region across CG, MH, Odisha, AP, TS. Named in Ramayana. Tribal areas. Bastar.',upscRelevance:'Tribal areas. Left-wing extremism. PVTG populations. PYQ: 2019.'},
  {id:'pyq10',name:'Doklam',lat:27.3569,lng:89.0558,type:'pyq',info:'Plateau at India-Bhutan-China tri-junction. 2017 standoff between India and China over road construction.',upscRelevance:'India-China-Bhutan tri-junction. 2017 standoff. PYQ: 2018.'},
  {id:'pyq11',name:'Sir Creek',lat:23.7,lng:68.8,type:'pyq',info:'Marshy tidal area on India-Pakistan border (Gujarat-Sindh). Disputed maritime boundary.',upscRelevance:'India-Pakistan maritime dispute. Rann of Kutch. PYQ: 2016, 2012.'},
  {id:'pyq12',name:'Agatti Island',lat:10.86,lng:72.17,type:'pyq',info:'Coral island in Lakshadweep. Airport. Pristine reefs. Lagoon ecosystem.',upscRelevance:'Coral reef ecosystem. Lakshadweep administration. PYQ: 2014.'},
];

// ═══ WORLD DATA ═══
export const worldData = [
  // CITIES
  {id:'wc1',name:'Geneva',lat:46.2044,lng:6.1432,type:'city',info:'Switzerland. HQ: WTO, WHO, UNHCR, WIPO, ICRC, CERN, ILO. Lake Geneva.',upscRelevance:'International organizations HQ. Geneva Conventions. CERN — particle physics.'},
  {id:'wc2',name:'The Hague',lat:52.0705,lng:4.3007,type:'city',info:'Netherlands. ICJ (principal UN judicial organ), ICC. Peace Palace. Dutch govt seat.',upscRelevance:'ICJ (Kulbhushan Jadhav, Chagos). ICC vs ICJ distinction. International law.'},
  {id:'wc3',name:'Vienna',lat:48.2082,lng:16.3738,type:'city',info:'Austria. HQ: IAEA, OPEC, OSCE, UNODC, UNIDO. Danube River.',upscRelevance:'IAEA — nuclear governance. OPEC HQ. JCPOA negotiations. Vienna Convention.'},
  {id:'wc4',name:'Nairobi',lat:-1.2921,lng:36.8219,type:'city',info:'Kenya. HQ: UNEP, UN-Habitat. On equator. Safari gateway.',upscRelevance:'UNEP HQ. Only UN env body HQ in developing world. UN-Habitat — urbanization.'},
  {id:'wc5',name:'Beijing',lat:39.9042,lng:116.4074,type:'city',info:'China capital. Forbidden City. HQ: SCO, AIIB, NDB. Great Wall nearby.',upscRelevance:'India-China relations. SCO, AIIB, BRI. UNSC P5. PYQ: 2019.'},
  {id:'wc6',name:'Cairo',lat:30.0444,lng:31.2357,type:'city',info:'Egypt capital. On Nile delta. Pyramids, Sphinx. Suez Canal nearby. Arab League HQ.',upscRelevance:'Nile civilization. Suez Canal. Arab League HQ. GERD dispute.'},
  {id:'wc7',name:'Addis Ababa',lat:9.025,lng:38.7469,type:'city',info:'Ethiopia capital. HQ: African Union (AU). High altitude (~2,400m). UNECA.',upscRelevance:'AU HQ. BRICS expansion (Ethiopia joined). GERD — Nile water dispute.'},
  {id:'wc8',name:'Kyiv',lat:50.4501,lng:30.5234,type:'city',info:'Ukraine capital. On Dnieper River. Center of Russia-Ukraine conflict since 2022.',upscRelevance:'Russia-Ukraine war. India\'s neutral stance. Energy & food security implications.'},
  {id:'wc9',name:'Taipei',lat:25.033,lng:121.5654,type:'city',info:'Taiwan. Semiconductor hub (TSMC). "One China" policy. Strait of Taiwan.',upscRelevance:'Taiwan Strait tensions. Semiconductor supply chain. One China Policy.'},
  {id:'wc10',name:'Jakarta',lat:-6.2088,lng:106.8456,type:'city',info:'Indonesia capital (moving to Nusantara). ASEAN secretariat. Ring of Fire. Sinking city.',upscRelevance:'ASEAN HQ. Capital relocation (Nusantara). Climate change — sinking city.'},
  {id:'wc11',name:'Brasília',lat:-15.7975,lng:-47.8919,type:'city',info:'Brazil capital. Planned city (Niemeyer/Costa). Cerrado biome. BRICS member.',upscRelevance:'BRICS. Amazon policy. Planned capital concept. South-South cooperation.'},
  {id:'wc12',name:'Djibouti',lat:11.5806,lng:43.1425,type:'city',info:'Strategic location at Bab-el-Mandeb. China\'s first overseas military base. Multiple foreign bases.',upscRelevance:'China military base. Bab-el-Mandeb control. Military base diplomacy.'},

  // RIVERS
  {id:'wr1',name:'Nile',lat:30.0444,lng:31.2357,type:'river',info:'~6,650 km. Longest river (disputed). 11 countries. White Nile + Blue Nile merge at Khartoum, Sudan.',upscRelevance:'Longest river debate. GERD (Grand Ethiopian Renaissance Dam) dispute. Nile civilization.'},
  {id:'wr2',name:'Amazon',lat:-3.4653,lng:-58.38,type:'river',info:'~6,400 km. Largest by discharge (20% of global freshwater). Amazon Rainforest. 9 countries.',upscRelevance:'Largest by volume. Climate change & deforestation. "Lungs of Earth" debate. COP.'},
  {id:'wr3',name:'Mekong',lat:15.87,lng:105.68,type:'river',info:'4,350 km. Through 6 countries (China→Myanmar→Laos→Thailand→Cambodia→Vietnam). China dams affect downstream.',upscRelevance:'Mekong-Ganga Cooperation. China dam diplomacy. SE Asia hydropolitics.'},
  {id:'wr4',name:'Congo',lat:-4.3226,lng:15.307,type:'river',info:'4,700 km. Deepest river (~220m). 2nd by discharge. Crosses equator TWICE. Congo Basin rainforest.',upscRelevance:'Deepest river. Crosses equator twice. Congo Basin — 2nd largest rainforest. PYQ: 2023.'},
  {id:'wr5',name:'Danube',lat:48.21,lng:16.37,type:'river',info:'2,850 km. 2nd longest in Europe. Through 10 countries (most of any river). Vienna, Budapest, Belgrade.',upscRelevance:'Most international river basin. EU waterway. Danube Commission.'},
  {id:'wr6',name:'Yangtze',lat:31.2304,lng:121.4737,type:'river',info:'6,300 km. Longest in Asia. Three Gorges Dam (largest power station). Through China.',upscRelevance:'Three Gorges Dam. Longest in Asia. Chinese economic artery.'},
  {id:'wr7',name:'Rhine',lat:51.9,lng:6.95,type:'river',info:'1,230 km. Western Europe. Switzerland→Germany→Netherlands. Major trade route. Rhine–Main–Danube Canal.',upscRelevance:'European trade artery. Rhine-Danube canal — connectivity. Industrial importance.'},

  // MOUNTAINS
  {id:'wm1',name:'Kilimanjaro',lat:-3.0674,lng:37.3556,type:'mountain',info:'5,895m. Highest in Africa. Tanzania. Free-standing volcanic mountain. Glaciers retreating rapidly.',upscRelevance:'Highest in Africa. Climate change indicator — glacier loss. Volcanic mountain.'},
  {id:'wm2',name:'Ural Mountains',lat:60,lng:60,type:'mountain',info:'~2,500 km. Conventional Europe-Asia boundary. Old fold mountains. Rich in iron, coal, minerals.',upscRelevance:'Europe-Asia boundary. Old fold mountains (vs Himalayas — young). Mineral resources.'},
  {id:'wm3',name:'Andes',lat:-13.1631,lng:-72.545,type:'mountain',info:'~7,000 km. Longest continental mountain range. Aconcagua (6,961m) — highest in Americas. Atacama Desert.',upscRelevance:'Longest continental range. Aconcagua — highest in W Hemisphere. Young fold mountains.'},
  {id:'wm4',name:'Alps',lat:46.8,lng:8.2,type:'mountain',info:'Europe\'s major range. ~1,200 km. Mont Blanc (4,808m). 8 countries. Rhine, Rhône, Po rivers originate.',upscRelevance:'Young fold mountains. River origins. Tourism & environment. Climate change.'},
  {id:'wm5',name:'Rockies',lat:39.55,lng:-105.782,type:'mountain',info:'~4,800 km. N America. Continental Divide. Yellowstone. Rich in minerals.',upscRelevance:'Continental Divide. Young fold mountains. Yellowstone supervolcano.'},
  {id:'wm6',name:'Atlas Mountains',lat:33.5,lng:-1.5,type:'mountain',info:'NW Africa (Morocco, Algeria, Tunisia). ~2,500 km. Toubkal (4,167m). Sahara barrier.',upscRelevance:'Mediterranean climate barrier. Sahara edge. North Africa geography.'},
  {id:'wm7',name:'Caucasus',lat:42.5,lng:44.5,type:'mountain',info:'Between Black Sea and Caspian Sea. Mt Elbrus (5,642m) — highest in Europe. Russia-Georgia border.',upscRelevance:'Europe\'s highest peak (Elbrus). Geopolitical corridor. Russia-Georgia. Oil pipelines.'},

  // STRAITS
  {id:'ws1',name:'Strait of Hormuz',lat:26.5667,lng:56.25,type:'strait',info:'Iran-Oman/UAE. ~39 km at narrowest. ~20-25% of global oil transit. Most strategic oil chokepoint.',upscRelevance:'Oil chokepoint. Iran tensions. India energy security (>60% crude via Hormuz). PYQ: 2024, 2022, 2019.'},
  {id:'ws2',name:'Strait of Malacca',lat:2.5,lng:101,type:'strait',info:'Malaysia-Indonesia (Sumatra). ~900 km. ~25-30% of global trade. Links Indian Ocean to Pacific.',upscRelevance:'India\'s A&N strategic advantage. China\'s "Malacca Dilemma". Piracy. PYQ: 2023, 2019.'},
  {id:'ws3',name:'Bab-el-Mandeb',lat:12.5833,lng:43.3333,type:'strait',info:'"Gate of Tears". Yemen-Djibouti. ~32 km. Connects Red Sea to Gulf of Aden → Indian Ocean.',upscRelevance:'Suez route chokepoint. Yemen/Houthi crisis. Red Sea shipping disruption. PYQ: 2021.'},
  {id:'ws4',name:'Bosphorus',lat:41.1194,lng:29.0764,type:'strait',info:'Divides Istanbul (Europe/Asia). Connects Sea of Marmara to Black Sea. Montreux Convention 1936.',upscRelevance:'Russia-Ukraine — Black Sea access. Montreux Convention. Kanal Istanbul proposal.'},
  {id:'ws5',name:'Strait of Gibraltar',lat:35.97,lng:-5.6,type:'strait',info:'Spain-Morocco. ~14 km at narrowest. Connects Mediterranean to Atlantic. Pillars of Hercules.',upscRelevance:'Mediterranean-Atlantic link. Spain-Morocco relations. Migration route.'},
  {id:'ws6',name:'Taiwan Strait',lat:24.5,lng:119.5,type:'strait',info:'~180 km wide. Separates Taiwan from mainland China. US freedom of navigation operations.',upscRelevance:'US-China tensions. Taiwan issue. Freedom of navigation. UNCLOS.'},
  {id:'ws7',name:'Palk Strait',lat:10.0,lng:79.7,type:'strait',info:'India (TN) - Sri Lanka. ~53-80 km. Ram Setu/Adam\'s Bridge. Fishing disputes.',upscRelevance:'India-Sri Lanka. Ram Setu debate. Sethusamudram project. PYQ: 2024.'},
  {id:'ws8',name:'Strait of Mozambique',lat:-17.0,lng:42.0,type:'strait',info:'Between Mozambique and Madagascar. ~1,600 km long. Indian Ocean. Warm Mozambique Current.',upscRelevance:'Indian Ocean trade. Mozambique Channel gas. Madagascar biodiversity.'},

  // DESERTS
  {id:'wd1',name:'Sahara',lat:23,lng:11,type:'desert',info:'Largest HOT desert. ~9.2M km². 11 countries. Sahel on southern edge. Growing due to desertification.',upscRelevance:'Largest HOT desert (trap: not largest overall — Antarctic is). UNCCD. Sahel crisis.'},
  {id:'wd2',name:'Atacama',lat:-23.8634,lng:-69.1328,type:'desert',info:'Driest non-polar place on Earth. Chile. Rich in lithium, copper, nitrates. Some spots — zero recorded rainfall.',upscRelevance:'Driest desert. Lithium — EV supply chain. Chile\'s resource diplomacy.'},
  {id:'wd3',name:'Antarctic Desert',lat:-82,lng:0,type:'desert',info:'Largest desert overall (14M km²). Polar desert. Ice sheet avg 2.16 km thick. 90% of Earth\'s ice.',upscRelevance:'LARGEST DESERT (common trap — not Sahara!). India stations: Maitri, Bharati. Antarctic Treaty.'},
  {id:'wd4',name:'Gobi',lat:42.5,lng:105,type:'desert',info:'Central Asia (Mongolia-China). Cold desert. Rain shadow of Himalayas. Expanding southward.',upscRelevance:'Cold desert. Rain shadow. Desertification — Great Green Wall of China.'},
  {id:'wd5',name:'Arabian Desert',lat:22,lng:48,type:'desert',info:'2.3M km². Saudi Arabia, Yemen, Oman, UAE. Rub al Khali (Empty Quarter) — largest sand desert.',upscRelevance:'Oil reserves beneath. Rub al Khali. Water scarcity. India\'s energy source.'},

  // PYQ WORLD
  {id:'wpyq1',name:'Suez Canal',lat:30.4358,lng:32.3442,type:'pyq',info:'Egypt. Mediterranean to Red Sea. ~193 km. No locks (sea level). ~12-15% of global trade. Expanded 2015.',upscRelevance:'Trade chokepoint. Suez Crisis 1956. 2021 Evergreen blockage. PYQ: 2023, 2017.'},
  {id:'wpyq2',name:'South China Sea',lat:14.5,lng:114,type:'pyq',info:'China\'s Nine-Dash Line claim. UNCLOS. Spratly & Paracel Islands. PCA ruling 2016 (against China).',upscRelevance:'UNCLOS, freedom of navigation. PCA ruling. India\'s Act East Policy. PYQ: 2024, 2022, 2019.'},
  {id:'wpyq3',name:'Golan Heights',lat:33.01,lng:35.75,type:'pyq',info:'Israel-Syria border. Captured by Israel 1967. US recognized Israeli sovereignty 2019. Water resources.',upscRelevance:'Israel-Syria conflict. UN resolutions. Strategic water source. PYQ: 2022, 2019.'},
  {id:'wpyq4',name:'Crimea',lat:44.9521,lng:34.1024,type:'pyq',info:'Black Sea peninsula. Russia annexed from Ukraine 2014. Sevastopol — Russian naval base. Bridge built 2018.',upscRelevance:'Russia-Ukraine conflict. International law — annexation. UN vote. PYQ: 2022, 2020.'},
  {id:'wpyq5',name:'Arctic Region',lat:78,lng:15,type:'pyq',info:'Arctic Council (8 members, India observer). Northern Sea Route. Melting ice opening new shipping lanes.',upscRelevance:'Arctic Council. India Arctic Policy 2022. Climate change. Resource scramble. PYQ: 2023, 2021, 2018.'},
  {id:'wpyq6',name:'Great Barrier Reef',lat:-18.2871,lng:147.6992,type:'pyq',info:'Largest coral reef system. Queensland, Australia. UNESCO. Severe bleaching events 2016-2024.',upscRelevance:'Coral bleaching. El Niño impact. Climate change. UNESCO status threat. PYQ: 2020, 2016.'},
  {id:'wpyq7',name:'Panama Canal',lat:9.08,lng:-79.68,type:'pyq',info:'82 km. Pacific to Atlantic via locks. US built, transferred to Panama 1999. ~5% of world trade.',upscRelevance:'Lock-based canal (vs Suez — no locks). Panama Papers. Trade route. PYQ: 2019.'},
  {id:'wpyq8',name:'Falkland Islands',lat:-51.75,lng:-59.0,type:'pyq',info:'South Atlantic. UK overseas territory. Argentina claims (Malvinas). 1982 Falklands War.',upscRelevance:'Sovereignty dispute. 1982 war — UK-Argentina. Maritime boundary. PYQ: 2017.'},
  {id:'wpyq9',name:'Horn of Africa',lat:9.0,lng:47.0,type:'pyq',info:'Somalia, Ethiopia, Eritrea, Djibouti. Strategic — controls Bab-el-Mandeb. Piracy, famine, conflict.',upscRelevance:'Piracy (Indian Navy operations). Famine. Bab-el-Mandeb access. India evacuations. PYQ: 2022.'},
  {id:'wpyq10',name:'Caspian Sea',lat:41.5,lng:51.0,type:'pyq',info:'Largest enclosed water body (371,000 km²). 5 countries: Russia, Kazakhstan, Turkmenistan, Iran, Azerbaijan. Oil & gas.',upscRelevance:'Lake or sea debate (resolved 2018). 5 bordering countries — frequently asked. Energy reserves. PYQ: 2021, 2018.'},
  {id:'wpyq11',name:'Dead Sea',lat:31.5,lng:35.5,type:'pyq',info:'Lowest point on Earth\'s surface (~430m below sea level). Israel-Jordan border. Hypersaline. Shrinking rapidly.',upscRelevance:'Lowest point on Earth. Hypersaline — buoyancy. Shrinking. Israel-Jordan. PYQ: 2017.'},
];

// ═══ QUIZ DATA ═══
export const quizData = [
  {q:'Consider the following rivers:\n1. Narmada\n2. Tapti\n3. Mahanadi\n4. Periyar\nWhich of the above are west-flowing?',opts:['1 and 2 only','1, 2 and 4 only','1, 2 and 3 only','All of the above'],ans:1,exp:'Narmada, Tapti (rift valley), and Periyar (Kerala) flow west. Mahanadi flows EAST into Bay of Bengal. West-flowing rivers are frequently asked.',region:'india'},
  {q:'The "Ring of Fire" is associated with:',opts:['Atlantic Ocean','Indian Ocean','Pacific Ocean','Arctic Ocean'],ans:2,exp:'Pacific Ring of Fire — 75% of world\'s active volcanoes and 90% of earthquakes. Horseshoe-shaped belt around Pacific.',region:'world'},
  {q:'Which of the following separates India from Sri Lanka?',opts:['Strait of Hormuz','Palk Strait','Ten Degree Channel','Eight Degree Channel'],ans:1,exp:'Palk Strait separates TN from Sri Lanka. Ten Degree Channel — Andaman from Nicobar. Eight Degree — Minicoy from Maldives.',region:'india'},
  {q:'The Caspian Sea is bordered by how many countries?',opts:['3','4','5','6'],ans:2,exp:'5 countries: Russia, Kazakhstan, Turkmenistan, Iran, Azerbaijan. Legal status resolved in 2018 Convention.',region:'world'},
  {q:'Which river originates from Amarkantak Plateau?',opts:['Godavari','Narmada','Mahanadi','Krishna'],ans:1,exp:'Narmada from Amarkantak (MP). Also Son river originates nearby. Godavari — Trimbakeshwar. Krishna — Mahabaleshwar.',region:'india'},
  {q:'Which is the deepest river in the world?',opts:['Amazon','Nile','Congo','Yangtze'],ans:2,exp:'Congo — depths exceeding 220m. Also unique: crosses the equator twice. Second largest by discharge after Amazon.',region:'world'},
  {q:'Barren Island volcano is located in:',opts:['Lakshadweep','Andaman Sea','Bay of Bengal','Arabian Sea'],ans:1,exp:'Only confirmed active volcano in India/South Asia. In Andaman Sea (not Bay of Bengal — trap!).',region:'india'},
  {q:'Which is the largest desert in the world?',opts:['Sahara','Gobi','Antarctic','Arabian'],ans:2,exp:'Antarctic (14M km²) is largest overall. Sahara is largest HOT desert. Very common UPSC trap!',region:'world'},
  {q:'Consider the following:\n1. Wular Lake — Largest freshwater lake\n2. Chilika — Largest brackish lake\n3. Sambhar — Largest inland saline lake\nWhich is/are correctly matched?',opts:['1 and 2 only','2 and 3 only','1 and 3 only','All of the above'],ans:3,exp:'All three are correct. Wular (J&K, Jhelum), Chilika (Odisha, coastal lagoon), Sambhar (Rajasthan, salt production).',region:'india'},
  {q:'The Grand Ethiopian Renaissance Dam (GERD) is built on which river?',opts:['White Nile','Blue Nile','Congo','Niger'],ans:1,exp:'GERD is on the Blue Nile in Ethiopia. Dispute with Egypt and Sudan over water sharing. Blue Nile contributes ~80% of Nile flow.',region:'world'},
  {q:'Palakkad Gap is a break in:',opts:['Eastern Ghats','Vindhya Range','Western Ghats','Aravalli Range'],ans:2,exp:'Palakkad Gap (~40 km wide) is the largest break in Western Ghats. Allows NE monsoon moisture into Kerala. Very frequently asked.',region:'india'},
  {q:'Strait of Malacca connects:',opts:['Red Sea & Mediterranean','Pacific & Atlantic','Indian Ocean & Pacific Ocean','Black Sea & Mediterranean'],ans:2,exp:'Malacca connects Indian Ocean to South China Sea (Pacific). ~25% of global trade. India\'s A&N Islands are strategically placed near it.',region:'world'},
  {q:'Which of the following is NOT a west-flowing river?\n1. Sabarmati  2. Mahi  3. Krishna  4. Luni',opts:['3 only','3 and 4','4 only','1 and 3'],ans:0,exp:'Krishna flows east. Sabarmati, Mahi, and Luni all flow west. Luni ends in Rann of Kutch (no sea outlet — endorheic).',region:'india'},
  {q:'The Montreux Convention regulates passage through:',opts:['Suez Canal','Panama Canal','Turkish Straits (Bosphorus & Dardanelles)','Strait of Hormuz'],ans:2,exp:'Montreux Convention (1936) governs naval vessel transit through Bosphorus and Dardanelles. Relevant in Russia-Ukraine context.',region:'world'},
  {q:'Keibul Lamjao National Park is unique because:',opts:['It is India\'s highest NP','It is a floating national park','It has the highest tiger density','It is India\'s smallest NP'],ans:1,exp:'Keibul Lamjao (Loktak Lake, Manipur) is the only floating NP in the world. Home to endangered Sangai deer.',region:'india'},
  {q:'Which canal has NO locks?',opts:['Panama Canal','Suez Canal','Kiel Canal','Both Suez and Kiel'],ans:1,exp:'Suez Canal is at sea level — no locks needed. Panama Canal uses locks to raise ships over the isthmus. Kiel Canal also has locks.',region:'world'},
  {q:'Atal Tunnel connects:',opts:['Srinagar to Leh','Manali to Lahaul-Spiti','Shimla to Kinnaur','Jammu to Srinagar'],ans:1,exp:'Atal Tunnel (Rohtang) connects Manali (Kullu) to Lahaul-Spiti under Pir Panjal range. World\'s longest tunnel above 10,000 ft.',region:'india'},
  {q:'The Nine-Dash Line is associated with:',opts:['India-Pakistan border','South China Sea claims','Israel-Palestine','Russia-Ukraine'],ans:1,exp:'Nine-Dash Line is China\'s expansive claim over most of the South China Sea, rejected by PCA 2016 ruling (Philippines case).',region:'world'},
];
