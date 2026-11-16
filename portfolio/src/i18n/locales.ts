export type Locale = 'en' | 'pl' | 'es';

export const LOCALES: Locale[] = ['en', 'pl', 'es'];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

type JourneyItem = {
  period: string;
  org: string;
  role: string;
  summary: string;
};

type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  tag: string;
  summary: string;
  outcomes: string[];
  href: string;
};

export type LocalizedPage = {
  lang: Locale;
  ui: {
    metaTitle: string;
    metaDescription: string;
    navAbout: string;
    navJourney: string;
    navPortfolio: string;
    navContact: string;
    openMenu: string;
    heroHeadline: string;
    heroLede: string;
    ctaPortfolio: string;
    ctaJourney: string;
    aboutEyebrow: string;
    aboutHeadline: string;
    credentials: string;
    languagesLabel: string;
    focus: string;
    journeyEyebrow: string;
    journeyHeadline: string;
    journeyLede: string;
    portfolioEyebrow: string;
    portfolioHeadline: string;
    portfolioLede: string;
    portfolioNoteBefore: string;
    portfolioNoteLink: string;
    contactEyebrow: string;
    contactHeadline: string;
    contactBody: string;
    linkedinCta: string;
    footerMark: string;
    langLabel: string;
  };
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    about: string[];
    credentials: string[];
    languages: string[];
    focus: string[];
    journey: JourneyItem[];
    portfolio: PortfolioItem[];
  };
};

const linkedin = 'https://www.linkedin.com/in/prez-bobel-73500511';
const email = 'prez.bobel@outlook.com';

export const pages: Record<Locale, LocalizedPage> = {
  en: {
    lang: 'en',
    ui: {
      metaTitle: 'Prez Bobel — Enterprise & SAP Program Delivery',
      metaDescription:
        'Prez Bobel — Project Manager & Scrum Master delivering enterprise, government, and SAP programs across M365, S/4HANA, and infrastructure.',
      navAbout: 'About',
      navJourney: 'Journey',
      navPortfolio: 'Portfolio',
      navContact: 'Contact',
      openMenu: 'Open menu',
      heroHeadline: 'Programs that ship in the hardest rooms.',
      heroLede:
        'Enterprise, government & SAP delivery — M365 migrations, S/4HANA transformations, and cross-stakeholder execution where complexity is the default.',
      ctaPortfolio: 'View portfolio',
      ctaJourney: 'Career journey',
      aboutEyebrow: 'About',
      aboutHeadline: 'Built for complexity. Wired for delivery.',
      credentials: 'Credentials',
      languagesLabel: 'Languages',
      focus: 'Focus',
      journeyEyebrow: 'Career Journey',
      journeyHeadline: 'A path through enterprise, telecom, SAP, and government.',
      journeyLede:
        'From engineering leadership at TELUS to federal M365 and SAP transformation programs — delivery ownership at every altitude.',
      portfolioEyebrow: 'Portfolio',
      portfolioHeadline: 'Selected programs & outcomes.',
      portfolioLede:
        'Flagship delivery across government, SAP/ERP, telecom, and financial services — including high-demand EU and Poland transformation patterns.',
      portfolioNoteBefore: 'Full case context and recommendations available on',
      portfolioNoteLink: 'LinkedIn',
      contactEyebrow: 'Contact',
      contactHeadline: 'Let’s talk delivery.',
      contactBody:
        'Open to conversations on enterprise programs, SAP S/4HANA transformations, government initiatives, and high-stakes infrastructure delivery.',
      linkedinCta: 'LinkedIn profile',
      footerMark: 'Enterprise delivery. Edgy execution.',
      langLabel: 'Language',
    },
    profile: {
      name: 'Prez Bobel',
      title:
        'Project Manager & Scrum Master | SAP & Enterprise Systems | M365 Migrations & Infrastructure Delivery',
      location: 'Toronto, Ontario, Canada',
      email,
      linkedin,
      about: [
        'I lead complex enterprise, government, and SAP technology programs — specializing in M365 migrations, infrastructure delivery, and SAP S/4HANA / RISE transformations. With 12+ years across telecom, banking, and the public sector, I focus on one thing: getting programs delivered where complexity, stakeholders, and dependencies are high.',
        'I operate as both Project Manager and Scrum Master across Agile, Hybrid, and Waterfall — leading cross-functional teams, working directly with executives, and delivering across federal departments and enterprise organizations. I also manage SAP projects spanning ECC to S/4HANA migrations, RISE with SAP, greenfield and brownfield rollouts, and EU regulatory readiness.',
        'Experience includes TELUS, Rogers, Bell, KPMG, and Government of Canada organizations such as Shared Services Canada, RCMP, CSC, CRA, and CBSA.',
      ],
      credentials: [
        'PMP — Project Management Professional',
        'Professional Engineering License',
        'MBA — EDHEC Business School',
        'B.Eng Electrical — Ryerson University',
      ],
      languages: [
        'English — Native',
        'Polish — Native',
        'Spanish — Professional',
      ],
      focus: [
        'SAP S/4HANA',
        'RISE with SAP',
        'M365 Migrations',
        'Infrastructure',
        'Scrum',
        'GovTech',
        'Telecom',
        'KSeF / Compliance',
      ],
      journey: [
        {
          period: '2023 — Present',
          org: 'Shared Services Canada',
          role: 'Project Manager & Scrum Master',
          summary:
            'Enterprise-scale M365 migration and infrastructure programs across multiple federal departments. Aligning CRA, CBSA, CSC, and NRC in high-dependency environments while driving Agile and Hybrid execution.',
        },
        {
          period: 'Ongoing',
          org: 'SAP Program Delivery',
          role: 'Project Manager — SAP Transformations',
          summary:
            'Managing SAP programs aligned to the highest-demand EU and Poland patterns: S/4HANA migrations, RISE with SAP / Private Cloud, greenfield & brownfield conversions, multi-country rollouts, supply-chain (IBP/EWM/TM), and KSeF-ready compliance integration.',
        },
        {
          period: '2022',
          org: 'Capgemini',
          role: 'Scrum Master / Senior Project Manager',
          summary:
            'Intelligent Process Automation for financial services using Blue Prism. On time, on budget — ~10% DOE reduction and reliability for ~$20M/day transaction operations.',
        },
        {
          period: '2021 — 2022',
          org: 'Rogers Communications',
          role: 'Project Manager & Scrum Master',
          summary:
            'Nuisance Call Filtering with Big Data analytics and Microsoft Teams mobile integration. Orchestrated ~25 stakeholders with Director and VP executive cadence.',
        },
        {
          period: '2015 — 2021',
          org: 'TELUS',
          role: 'Program Manager — Architecture & New Technology',
          summary:
            'Multi-year programs with budgets from $2M–$18M. Delivered Telecom Regulatory Policy 2018-466 IPR/MRS on time, mitigating millions in potential penalties — briefing through to CTO.',
        },
        {
          period: '2014 — 2020',
          org: 'Bobel Investments',
          role: 'Founder — Derivatives & Markets',
          summary:
            'Applied complex derivative strategies to consistently beat average market returns. Primary focus on equity markets, with additional experience trading forex and commodities for private investors and asset managers.',
        },
        {
          period: '2008 — 2011',
          org: 'TELUS GELP',
          role: 'Engineering Leadership Rotations',
          summary:
            'Sales, RF, and Network Engineering. C-suite consulting driving ~12% YoY sales growth, a closed $2M RFP, and a 90% faster traffic reporting pipeline.',
        },
      ],
      portfolio: [
        {
          id: 'sap-eu-pl',
          title: 'SAP S/4HANA & RISE Program Delivery',
          client: 'EU & Poland enterprise transformations',
          tag: 'SAP',
          summary:
            'Managing SAP transformation programs matching the most active EU and Polish market demand: ECC→S/4HANA migrations, RISE with SAP / Private Cloud, greenfield & brownfield, multi-country rollouts, and KSeF / regulatory readiness — with stakeholder, risk, and cutover control.',
          outcomes: [
            'S/4HANA & RISE program leadership',
            'Greenfield / brownfield & carve-out patterns',
            'KSeF & EU compliance-aligned delivery',
          ],
          href: linkedin,
        },
        {
          id: 'ssc-m365',
          title: 'Federal M365 Migration Program',
          client: 'Shared Services Canada',
          tag: 'Government',
          summary:
            'Enterprise-scale Microsoft 365 migration and infrastructure delivery spanning multiple federal departments—CRA, CBSA, CSC, and NRC.',
          outcomes: [
            'Cross-department stakeholder alignment',
            'Agile & Hybrid delivery at scale',
            'Security-aware infrastructure execution',
          ],
          href: linkedin,
        },
        {
          id: 'capgemini-ipa',
          title: 'Intelligent Process Automation',
          client: 'Capgemini · Financial Services',
          tag: 'Automation',
          summary:
            'Blue Prism automation of high-volume clearing and transactional back-office workflows for a major financial services client.',
          outcomes: [
            '~10% reduction in Direct Operating Expenses',
            'Fewer SLA breaches and penalties',
            'Reliability for ~$20M/day operations',
          ],
          href: linkedin,
        },
        {
          id: 'rogers-ncf',
          title: 'Nuisance Call Filtering',
          client: 'Rogers Communications',
          tag: 'Telecom',
          summary:
            'Introduced Big Data analytics to filter unwanted calls and integrated Microsoft Teams into mobile—strengthening brand and RFP competitiveness.',
          outcomes: [
            'Parity with Bell & TELUS capabilities',
            '25+ stakeholder orchestration',
            'Director & VP executive cadence',
          ],
          href: linkedin,
        },
        {
          id: 'telus-ipr',
          title: 'Regulatory IPR / MRS Delivery',
          client: 'TELUS',
          tag: 'Regulatory',
          summary:
            'Delivered Telecom Regulatory Policy 2018-466 requirements on time—meeting IPR/MRS criteria and unlocking communication improvements for the DHHSI community.',
          outcomes: [
            'Millions in penalties mitigated',
            'Programs up to $18M budget',
            'CTO-level executive reporting',
          ],
          href: linkedin,
        },
        {
          id: 'bobel-investments',
          title: 'Derivatives & Multi-Market Investing',
          client: 'Bobel Investments',
          tag: 'Markets',
          summary:
            'Built and ran complex derivative strategies designed to consistently beat average market returns—primarily in equities, with additional execution experience across forex and commodities.',
          outcomes: [
            'Complex derivative strategy design',
            'Equity-market primary focus',
            'Forex & commodities experience',
          ],
          href: linkedin,
        },
      ],
    },
  },

  pl: {
    lang: 'pl',
    ui: {
      metaTitle: 'Prez Bobel — Dostarczanie programów enterprise i SAP',
      metaDescription:
        'Prez Bobel — Project Manager i Scrum Master prowadzący programy enterprise, rządowe oraz SAP: M365, S/4HANA i infrastruktura.',
      navAbout: 'O mnie',
      navJourney: 'Ścieżka',
      navPortfolio: 'Portfolio',
      navContact: 'Kontakt',
      openMenu: 'Otwórz menu',
      heroHeadline: 'Programy, które dowożą w najtrudniejszych warunkach.',
      heroLede:
        'Dostarczanie enterprise, rządowe i SAP — migracje M365, transformacje S/4HANA oraz egzekucja przy wielu interesariuszach, gdzie złożoność jest normą.',
      ctaPortfolio: 'Zobacz portfolio',
      ctaJourney: 'Ścieżka kariery',
      aboutEyebrow: 'O mnie',
      aboutHeadline: 'Zbudowany na złożoność. Nastawiony na dostarczanie.',
      credentials: 'Kwalifikacje',
      languagesLabel: 'Języki',
      focus: 'Fokus',
      journeyEyebrow: 'Ścieżka kariery',
      journeyHeadline: 'Droga przez enterprise, telecom, SAP i sektor publiczny.',
      journeyLede:
        'Od liderstwa inżynierskiego w TELUS po federalne programy M365 i transformacje SAP — pełna odpowiedzialność za dostarczanie na każdym poziomie.',
      portfolioEyebrow: 'Portfolio',
      portfolioHeadline: 'Wybrane programy i rezultaty.',
      portfolioLede:
        'Flagowe dostawy w sektorze publicznym, SAP/ERP, telecom i finansach — w tym najpopularniejsze wzorce transformacji w UE i Polsce.',
      portfolioNoteBefore: 'Pełny kontekst case’ów i rekomendacje dostępne na',
      portfolioNoteLink: 'LinkedIn',
      contactEyebrow: 'Kontakt',
      contactHeadline: 'Porozmawiajmy o dostarczaniu.',
      contactBody:
        'Otwarty na rozmowy o programach enterprise, transformacjach SAP S/4HANA, inicjatywach rządowych i krytycznej infrastrukturze.',
      linkedinCta: 'Profil LinkedIn',
      footerMark: 'Enterprise delivery. Edgy execution.',
      langLabel: 'Język',
    },
    profile: {
      name: 'Prez Bobel',
      title:
        'Project Manager i Scrum Master | Systemy SAP i Enterprise | Migracje M365 i dostarczanie infrastruktury',
      location: 'Toronto, Ontario, Kanada',
      email,
      linkedin,
      about: [
        'Prowadzę złożone programy technologiczne w środowisku enterprise, rządowym i SAP — specjalizując się w migracjach M365, dostarczaniu infrastruktury oraz transformacjach SAP S/4HANA / RISE. Z ponad 12-letnim doświadczeniem w telecom, bankowości i sektorze publicznym skupiam się na jednym: dowiezieniu programów tam, gdzie złożoność, interesariusze i zależności są wysokie.',
        'Działam jako Project Manager i Scrum Master w modelach Agile, Hybrid i Waterfall — prowadząc zespoły cross-funkcyjne, współpracując z kadrą zarządzającą oraz dostarczając w departamentach federalnych i organizacjach enterprise. Zarządzam także projektami SAP: migracje ECC → S/4HANA, RISE with SAP, wdrożenia greenfield i brownfield oraz gotowość regulacyjną w UE.',
        'Doświadczenie obejmuje TELUS, Rogers, Bell, KPMG oraz organizacje Rządu Kanady, w tym Shared Services Canada, RCMP, CSC, CRA i CBSA.',
      ],
      credentials: [
        'PMP — Project Management Professional',
        'Licencja Professional Engineer',
        'MBA — EDHEC Business School',
        'Inż. elektryk — Ryerson University',
      ],
      languages: [
        'Angielski — ojczysty',
        'Polski — ojczysty',
        'Hiszpański — zawodowy',
      ],
      focus: [
        'SAP S/4HANA',
        'RISE with SAP',
        'Migracje M365',
        'Infrastruktura',
        'Scrum',
        'GovTech',
        'Telecom',
        'KSeF / Compliance',
      ],
      journey: [
        {
          period: '2023 — obecnie',
          org: 'Shared Services Canada',
          role: 'Project Manager i Scrum Master',
          summary:
            'Programy migracji M365 i infrastruktury w skali enterprise w wielu departamentach federalnych. Synchronizacja CRA, CBSA, CSC i NRC w środowisku o wysokich zależnościach — Agile i Hybrid.',
        },
        {
          period: 'Bieżące',
          org: 'Dostarczanie programów SAP',
          role: 'Project Manager — transformacje SAP',
          summary:
            'Zarządzanie programami SAP zgodnymi z największym popytem w UE i Polsce: migracje S/4HANA, RISE with SAP / Private Cloud, greenfield i brownfield, rollouty wielokrajowe, łańcuch dostaw (IBP/EWM/TM) oraz integracje pod KSeF.',
        },
        {
          period: '2022',
          org: 'Capgemini',
          role: 'Scrum Master / Senior Project Manager',
          summary:
            'Intelligent Process Automation dla klienta finansowego (Blue Prism). Na czas i w budżecie — ok. 10% redukcji DOE oraz niezawodność operacji ~20 mln USD/dzień.',
        },
        {
          period: '2021 — 2022',
          org: 'Rogers Communications',
          role: 'Project Manager i Scrum Master',
          summary:
            'Filtrowanie połączeń uciążliwych (Big Data) oraz integracja Microsoft Teams z mobile. Ok. 25 interesariuszy, codzienny rytm z dyrektorem i cotygodniowy z VP.',
        },
        {
          period: '2015 — 2021',
          org: 'TELUS',
          role: 'Program Manager — Architecture & New Technology',
          summary:
            'Wieloletnie programy z budżetami 2–18 mln USD. Dostarczenie IPR/MRS (Telecom Regulatory Policy 2018-466) na czas — uniknięcie milionowych kar, raportowanie do CTO.',
        },
        {
          period: '2014 — 2020',
          org: 'Bobel Investments',
          role: 'Założyciel — instrumenty pochodne i rynki',
          summary:
            'Stosowanie złożonych strategii na instrumentach pochodnych w celu systematycznego przebijania przeciętnych stóp zwrotu rynku. Główny fokus: rynki akcji, z dodatkowym doświadczeniem na rynku forex oraz towarów — dla inwestorów prywatnych i asset managerów.',
        },
        {
          period: '2008 — 2011',
          org: 'TELUS GELP',
          role: 'Rotacje Engineering Leadership',
          summary:
            'Sales, RF i Network Engineering. Consulting na poziomie C-suite (~12% YoY sprzedaży), zamknięte RFP na 2 mln USD oraz raporty ruchu szybsze o 90%.',
        },
      ],
      portfolio: [
        {
          id: 'sap-eu-pl',
          title: 'Dostarczanie programów SAP S/4HANA i RISE',
          client: 'Transformacje enterprise w UE i Polsce',
          tag: 'SAP',
          summary:
            'Zarządzanie programami SAP odpowiadającymi na najsilniejszy popyt w UE i Polsce: migracje ECC→S/4HANA, RISE with SAP / Private Cloud, greenfield i brownfield, rollouty wielokrajowe oraz gotowość KSeF / compliance — z kontrolą interesariuszy, ryzyka i cutoveru.',
          outcomes: [
            'Liderstwo programów S/4HANA i RISE',
            'Wzorce greenfield / brownfield i carve-out',
            'Dostawa zgodna z KSeF i regulacjami UE',
          ],
          href: linkedin,
        },
        {
          id: 'ssc-m365',
          title: 'Federalny program migracji M365',
          client: 'Shared Services Canada',
          tag: 'Sektor publiczny',
          summary:
            'Migracja Microsoft 365 i infrastruktura w skali enterprise obejmująca wiele departamentów federalnych — CRA, CBSA, CSC i NRC.',
          outcomes: [
            'Wyrównanie interesariuszy między departamentami',
            'Dostawa Agile i Hybrid w dużej skali',
            'Egzekucja infrastruktury z naciskiem na security',
          ],
          href: linkedin,
        },
        {
          id: 'capgemini-ipa',
          title: 'Intelligent Process Automation',
          client: 'Capgemini · Usługi finansowe',
          tag: 'Automatyzacja',
          summary:
            'Automatyzacja Blue Prism procesów clearingowych i transakcyjnych back-office dla dużego klienta finansowego.',
          outcomes: [
            'Ok. 10% redukcji Direct Operating Expenses',
            'Mniej naruszeń SLA i kar',
            'Niezawodność operacji ~20 mln USD/dzień',
          ],
          href: linkedin,
        },
        {
          id: 'rogers-ncf',
          title: 'Filtrowanie połączeń uciążliwych',
          client: 'Rogers Communications',
          tag: 'Telecom',
          summary:
            'Wprowadzenie analityki Big Data do filtrowania niechcianych połączeń oraz integracja Microsoft Teams z mobile — wzmocnienie marki i pozycji w RFP.',
          outcomes: [
            'Parytet możliwości z Bell i TELUS',
            'Orkiestracja 25+ interesariuszy',
            'Rytm raportowania Director / VP',
          ],
          href: linkedin,
        },
        {
          id: 'telus-ipr',
          title: 'Dostawa regulacyjna IPR / MRS',
          client: 'TELUS',
          tag: 'Regulacje',
          summary:
            'Dostarczenie wymagań Telecom Regulatory Policy 2018-466 na czas — spełnienie kryteriów IPR/MRS i poprawa komunikacji społeczności DHHSI.',
          outcomes: [
            'Uniknięcie milionowych kar',
            'Programy do 18 mln USD budżetu',
            'Raportowanie na poziomie CTO',
          ],
          href: linkedin,
        },
        {
          id: 'bobel-investments',
          title: 'Instrumenty pochodne i inwestowanie multi-market',
          client: 'Bobel Investments',
          tag: 'Rynki',
          summary:
            'Budowa i prowadzenie złożonych strategii na instrumentach pochodnych nastawionych na systematyczne przebijanie przeciętnych stóp zwrotu rynku — głównie na akcjach, z dodatkowym doświadczeniem na forex i towarach.',
          outcomes: [
            'Projektowanie złożonych strategii pochodnych',
            'Główny fokus: rynki akcji',
            'Doświadczenie na forex i towarach',
          ],
          href: linkedin,
        },
      ],
    },
  },

  es: {
    lang: 'es',
    ui: {
      metaTitle: 'Prez Bobel — Entrega de programas enterprise y SAP',
      metaDescription:
        'Prez Bobel — Project Manager y Scrum Master entregando programas enterprise, gubernamentales y SAP: M365, S/4HANA e infraestructura.',
      navAbout: 'Sobre mí',
      navJourney: 'Trayectoria',
      navPortfolio: 'Portafolio',
      navContact: 'Contacto',
      openMenu: 'Abrir menú',
      heroHeadline: 'Programas que se entregan en las salas más difíciles.',
      heroLede:
        'Entrega enterprise, gubernamental y SAP — migraciones M365, transformaciones S/4HANA y ejecución multi-stakeholder donde la complejidad es la norma.',
      ctaPortfolio: 'Ver portafolio',
      ctaJourney: 'Trayectoria',
      aboutEyebrow: 'Sobre mí',
      aboutHeadline: 'Hecho para la complejidad. Orientado a la entrega.',
      credentials: 'Credenciales',
      languagesLabel: 'Idiomas',
      focus: 'Enfoque',
      journeyEyebrow: 'Trayectoria',
      journeyHeadline: 'Un camino por enterprise, telecom, SAP y gobierno.',
      journeyLede:
        'Desde liderazgo de ingeniería en TELUS hasta programas federales M365 y transformaciones SAP — ownership de entrega en cada nivel.',
      portfolioEyebrow: 'Portafolio',
      portfolioHeadline: 'Programas y resultados seleccionados.',
      portfolioLede:
        'Entrega emblemática en gobierno, SAP/ERP, telecom y servicios financieros — incluidos los patrones de transformación más demandados en la UE y Polonia.',
      portfolioNoteBefore: 'Contexto completo de casos y recomendaciones en',
      portfolioNoteLink: 'LinkedIn',
      contactEyebrow: 'Contacto',
      contactHeadline: 'Hablemos de entrega.',
      contactBody:
        'Abierto a conversaciones sobre programas enterprise, transformaciones SAP S/4HANA, iniciativas gubernamentales e infraestructura de alto riesgo.',
      linkedinCta: 'Perfil de LinkedIn',
      footerMark: 'Enterprise delivery. Edgy execution.',
      langLabel: 'Idioma',
    },
    profile: {
      name: 'Prez Bobel',
      title:
        'Project Manager y Scrum Master | Sistemas SAP y Enterprise | Migraciones M365 y entrega de infraestructura',
      location: 'Toronto, Ontario, Canadá',
      email,
      linkedin,
      about: [
        'Lidero programas tecnológicos complejos en enterprise, gobierno y SAP — especializado en migraciones M365, entrega de infraestructura y transformaciones SAP S/4HANA / RISE. Con más de 12 años en telecom, banca y sector público, me enfoco en una cosa: entregar programas donde la complejidad, los stakeholders y las dependencias son altas.',
        'Opero como Project Manager y Scrum Master en Agile, Hybrid y Waterfall — liderando equipos multifuncionales, trabajando con ejecutivos y entregando en departamentos federales y organizaciones enterprise. También gestiono proyectos SAP: migraciones ECC → S/4HANA, RISE with SAP, despliegues greenfield y brownfield, y preparación regulatoria en la UE.',
        'La experiencia incluye TELUS, Rogers, Bell, KPMG y organizaciones del Gobierno de Canadá como Shared Services Canada, RCMP, CSC, CRA y CBSA.',
      ],
      credentials: [
        'PMP — Project Management Professional',
        'Licencia Professional Engineer',
        'MBA — EDHEC Business School',
        'Ing. Eléctrica — Ryerson University',
      ],
      languages: [
        'Inglés — Nativo',
        'Polaco — Nativo',
        'Español — Profesional',
      ],
      focus: [
        'SAP S/4HANA',
        'RISE with SAP',
        'Migraciones M365',
        'Infraestructura',
        'Scrum',
        'GovTech',
        'Telecom',
        'KSeF / Compliance',
      ],
      journey: [
        {
          period: '2023 — Presente',
          org: 'Shared Services Canada',
          role: 'Project Manager y Scrum Master',
          summary:
            'Programas de migración M365 e infraestructura a escala enterprise en múltiples departamentos federales. Alineación de CRA, CBSA, CSC y NRC en entornos de alta dependencia con ejecución Agile e Hybrid.',
        },
        {
          period: 'En curso',
          org: 'Entrega de programas SAP',
          role: 'Project Manager — Transformaciones SAP',
          summary:
            'Gestión de programas SAP alineados a la demanda más alta en la UE y Polonia: migraciones S/4HANA, RISE with SAP / Private Cloud, greenfield y brownfield, rollouts multinacionales, cadena de suministro (IBP/EWM/TM) e integración lista para KSeF.',
        },
        {
          period: '2022',
          org: 'Capgemini',
          role: 'Scrum Master / Senior Project Manager',
          summary:
            'Intelligent Process Automation para un cliente financiero con Blue Prism. A tiempo y en presupuesto — ~10% de reducción de DOE y fiabilidad para operaciones de ~$20M/día.',
        },
        {
          period: '2021 — 2022',
          org: 'Rogers Communications',
          role: 'Project Manager y Scrum Master',
          summary:
            'Filtrado de llamadas molestas con Big Data e integración de Microsoft Teams en móvil. ~25 stakeholders con cadencia diaria al Director y semanal al VP.',
        },
        {
          period: '2015 — 2021',
          org: 'TELUS',
          role: 'Program Manager — Architecture & New Technology',
          summary:
            'Programas plurianuales con presupuestos de $2M–$18M. Entrega a tiempo de IPR/MRS (Telecom Regulatory Policy 2018-466), mitigando millones en posibles sanciones — reportando hasta CTO.',
        },
        {
          period: '2014 — 2020',
          org: 'Bobel Investments',
          role: 'Fundador — Derivados y mercados',
          summary:
            'Aplicación de estrategias complejas con derivados para superar de forma consistente los retornos medios del mercado. Enfoque principal en renta variable, con experiencia adicional en forex y materias primas para inversores privados y asset managers.',
        },
        {
          period: '2008 — 2011',
          org: 'TELUS GELP',
          role: 'Rotaciones Engineering Leadership',
          summary:
            'Sales, RF y Network Engineering. Consulting C-suite con ~12% YoY en ventas, RFP cerrado de $2M y reporting de tráfico 90% más rápido.',
        },
      ],
      portfolio: [
        {
          id: 'sap-eu-pl',
          title: 'Entrega de programas SAP S/4HANA y RISE',
          client: 'Transformaciones enterprise en la UE y Polonia',
          tag: 'SAP',
          summary:
            'Gestión de programas SAP alineados a la demanda más activa en la UE y Polonia: migraciones ECC→S/4HANA, RISE with SAP / Private Cloud, greenfield y brownfield, rollouts multinacionales y preparación KSeF / compliance — con control de stakeholders, riesgo y cutover.',
          outcomes: [
            'Liderazgo de programas S/4HANA y RISE',
            'Patrones greenfield / brownfield y carve-out',
            'Entrega alineada a KSeF y compliance UE',
          ],
          href: linkedin,
        },
        {
          id: 'ssc-m365',
          title: 'Programa federal de migración M365',
          client: 'Shared Services Canada',
          tag: 'Gobierno',
          summary:
            'Migración Microsoft 365 e infraestructura a escala enterprise en múltiples departamentos federales—CRA, CBSA, CSC y NRC.',
          outcomes: [
            'Alineación de stakeholders entre departamentos',
            'Entrega Agile e Hybrid a escala',
            'Ejecución de infraestructura con foco en seguridad',
          ],
          href: linkedin,
        },
        {
          id: 'capgemini-ipa',
          title: 'Intelligent Process Automation',
          client: 'Capgemini · Servicios financieros',
          tag: 'Automatización',
          summary:
            'Automatización Blue Prism de flujos de clearing y back-office transaccional de alto volumen para un gran cliente financiero.',
          outcomes: [
            '~10% de reducción en Direct Operating Expenses',
            'Menos incumplimientos de SLA y sanciones',
            'Fiabilidad para operaciones de ~$20M/día',
          ],
          href: linkedin,
        },
        {
          id: 'rogers-ncf',
          title: 'Filtrado de llamadas molestas',
          client: 'Rogers Communications',
          tag: 'Telecom',
          summary:
            'Introducción de analítica Big Data para filtrar llamadas no deseadas e integración de Microsoft Teams en móvil—fortaleciendo marca y competitividad en RFP.',
          outcomes: [
            'Paridad de capacidades con Bell y TELUS',
            'Orquestación de 25+ stakeholders',
            'Cadencia Director / VP',
          ],
          href: linkedin,
        },
        {
          id: 'telus-ipr',
          title: 'Entrega regulatoria IPR / MRS',
          client: 'TELUS',
          tag: 'Regulatorio',
          summary:
            'Entrega a tiempo de los requisitos de Telecom Regulatory Policy 2018-466—cumpliendo criterios IPR/MRS y mejorando comunicación para la comunidad DHHSI.',
          outcomes: [
            'Millones en sanciones mitigadas',
            'Programas de hasta $18M de presupuesto',
            'Reporting a nivel CTO',
          ],
          href: linkedin,
        },
        {
          id: 'bobel-investments',
          title: 'Derivados e inversión multi-mercado',
          client: 'Bobel Investments',
          tag: 'Mercados',
          summary:
            'Diseño y ejecución de estrategias complejas con derivados orientadas a superar de forma consistente los retornos medios del mercado — principalmente en renta variable, con experiencia adicional en forex y materias primas.',
          outcomes: [
            'Diseño de estrategias complejas con derivados',
            'Enfoque principal en renta variable',
            'Experiencia en forex y commodities',
          ],
          href: linkedin,
        },
      ],
    },
  },
};
