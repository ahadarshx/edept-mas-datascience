export const nav = [
  { label: 'Program', to: '/program' },
  { label: 'Cost & Savings', to: '/cost' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Why Illinois Tech', to: '/why-illinois-tech' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export const contact = {
  site: 'www.edept.co',
  siteUrl: 'https://www.edept.co',
  email: 'admissions@edept.co',
  qrTarget: 'https://www.edept.co',
  intake: 'Fall 2026 (August / September)',
  intakeTargetDate: '2026-08-15',
}

export const degreeName = 'Master of Applied Science (MAS) in Data Science'
export const degreeShort = 'MAS in Data Science'

export const cost = {
  fullCredits: 33,
  perCredit: 1851,
  fullCost: 61083,
  usPortionCredits: 24,
  usPortionCost: 44424,
  indiaPortionCredits: 9,
  indiaPortionInr: 317000,
  indiaPortionUsd: 3776,
  pathwayTotal: 48200,
  savingUsd: 12883,
  savingInr: 1077000,
  savingPct: 21,
  allInSavingPct: 33,
  livingCostRange: '$12,000–$15,000/year',
}

export const pillars = [
  {
    title: 'Single Global Credential',
    body: 'A U.S. Master of Applied Science, STEM-designated, from Illinois Institute of Technology, Chicago.',
  },
  {
    title: 'Smart Cost Structure',
    body: 'Reduce your overall cost by beginning studies in India: the same 33-credit degree, ~21% less tuition.',
  },
  {
    title: 'End-to-End Support',
    body: 'edept guides you through application, visa, travel, study, and graduation.',
  },
]

export const tracks = [
  {
    key: 'india',
    label: 'India Track',
    institution: 'Mahindra University',
    duration: '1 Semester · ~6 Months · 9 Credits',
    body: 'Study foundational and applied Data Science modules at Mahindra University.',
    courses: [
      'Programming for Data Science (Python)',
      'Statistics & Probability for Analytics',
      'Data Management & SQL',
      'Data Visualisation & Business Intelligence',
      'Introduction to Machine Learning',
      'Cloud & Data Infrastructure Fundamentals',
      'Applied Projects & Assessments',
    ],
  },
  {
    key: 'usa',
    label: 'USA Track',
    institution: 'Illinois Institute of Technology, Chicago',
    duration: '3 Semesters · 24 Credits',
    body: 'Complete the Master of Applied Science in Data Science at Illinois Institute of Technology, Chicago.',
    courses: [
      'Advanced Machine Learning',
      'Artificial Intelligence Foundations',
      'Big Data Analytics',
      'Data Engineering & High-Performance Computing',
      'Data Strategy & Governance',
      'Capstone Project / Master’s Thesis',
      'Industry-Oriented Project Work',
    ],
  },
]

export const whyUs = [
  {
    title: 'Strong Demand for Data & AI Talent',
    body: 'U.S. employers across industries continue to hire data scientists, AI engineers, and analytics professionals at scale.',
  },
  {
    title: 'High Career & Salary Potential',
    body: 'Data and AI roles in the U.S. offer strong starting salaries and sustained long-term career growth.',
  },
  {
    title: 'STEM Advantage for Intl. Students',
    body: 'STEM-designated graduates are eligible for up to 36 months of post-study work authorisation through OPT and STEM OPT.',
  },
  {
    title: 'Global Innovation Ecosystem',
    body: 'Unmatched access to leading technology companies, research labs, and startups.',
  },
]

export const whyPathway = [
  {
    title: 'Significantly Lower Total Cost',
    body: 'Begin in India to significantly reduce tuition and living expenses.',
  },
  {
    title: 'U.S. Master’s Degree, Optimised Spend',
    body: 'Pay U.S. costs only during the Chicago on-campus phase.',
  },
  {
    title: 'Seamless Academic Progression',
    body: 'India-earned credits align fully with the Illinois Tech curriculum.',
  },
  {
    title: 'Guided Visa & Transition Process',
    body: 'Complete guidance for visas, interviews, and relocation.',
  },
  {
    title: 'Accelerated Global Career Entry',
    body: 'Graduate sooner and enter the U.S. job market earlier.',
  },
  {
    title: 'STEM Degree, Extended Work Right',
    body: 'Up to 36 months of U.S. work authorisation via OPT and STEM OPT.',
  },
]

export const whyIllinois = [
  {
    title: 'Broad Career Opportunities',
    body: 'High demand for data science and AI roles across finance, healthcare, consulting, logistics, and technology.',
  },
  {
    title: 'Real-World Industry Exposure',
    body: 'Direct access to Fortune 500 companies, startups, applied projects, and professional networks.',
  },
  {
    title: 'Strong Academic Foundation',
    body: 'A dense network of universities and research centers supporting advanced data science education.',
  },
  {
    title: 'High Student Value',
    body: 'Lower cost of living than coastal hubs, reliable public transport, and a diverse international community.',
  },
  {
    title: 'Program-Industry Alignment',
    body: 'The MAS in Data Science at Illinois Institute of Technology is designed for Chicago’s application-driven industry ecosystem.',
  },
]

// Illustrative role <-> industry groupings (not placement statistics) so the
// outcomes section can show real structure, not just two flat pill lists.
export const careerIndustries = [
  { key: 'consulting', label: 'Consulting' },
  { key: 'finance', label: 'Finance & FinTech' },
  { key: 'tech', label: 'Technology & Software' },
  { key: 'healthcare', label: 'Healthcare & Life Sciences' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial Analytics' },
  { key: 'startups', label: 'Startups & Innovation Labs' },
]

export const careerRoles = [
  {
    role: 'Data Scientist',
    blurb: 'Builds predictive models and turns messy, real-world data into decisions.',
    industries: ['consulting', 'finance', 'tech', 'healthcare', 'startups'],
  },
  {
    role: 'Senior Data Analyst',
    blurb: 'Owns the metrics that leadership actually looks at every week.',
    industries: ['consulting', 'finance', 'healthcare'],
  },
  {
    role: 'Machine Learning Engineer',
    blurb: 'Ships models into production, not just notebooks.',
    industries: ['finance', 'tech'],
  },
  {
    role: 'AI Engineer',
    blurb: 'Builds applied AI systems on top of modern model infrastructure.',
    industries: ['tech', 'startups'],
  },
  {
    role: 'Data Engineer',
    blurb: 'Designs the pipelines everyone else’s analysis depends on.',
    industries: ['tech', 'healthcare', 'manufacturing'],
  },
  {
    role: 'Product & Growth Analyst',
    blurb: 'Turns user behaviour data into product and growth decisions.',
    industries: ['tech', 'startups'],
  },
  {
    role: 'Digital Transformation Analyst',
    blurb: 'Leads data-driven modernisation inside large, established organisations.',
    industries: ['consulting', 'manufacturing'],
  },
  {
    role: 'Business Analytics Manager',
    blurb: 'Bridges the analytics team and the business decisions it informs.',
    industries: ['consulting', 'manufacturing'],
  },
]

export const edeptAdvantage = [
  {
    title: 'Globally Experienced Leadership',
    body: 'edept’s founding team brings leadership experience from INSEAD, IIM Bangalore, and IIM Lucknow, ensuring programs are designed for global academic rigor and long-term career success.',
  },
  {
    title: 'Strong Academic Collaboration',
    body: 'The partnership between Mahindra University and Illinois Institute of Technology ensures academic continuity, structured progression, and a globally recognised degree.',
  },
  {
    title: 'End-to-End Student Support',
    body: 'edept supports students across admissions, transition, visa preparation, accommodation guidance, and career readiness, ensuring a smooth international education journey.',
  },
]

export const edeptDelivers = [
  'Global Academic Recognition',
  'Affordable Overseas Education',
  'Industry-Aligned Learning',
  'Strong Employability',
]

// Rankings verified independently via US News / iit.edu (see /about/rankings-and-recognition/numbers)
// since the source brochure cited them all as "U.S. News 2025" without checking, two are actually
// Wall Street Journal / College Pulse figures. Leads with the flattering ones per Changes.md guidance.
export const illinoisTechRankings = {
  headline: [
    {
      rank: '#1',
      label: 'in Illinois for Best Salaries of Graduates',
      source: 'Wall Street Journal / College Pulse, 2026',
    },
    {
      rank: '#30',
      label: 'Best Value School in the U.S.',
      source: 'U.S. News & World Report, 2026',
    },
  ],
  supporting: [
    {
      rank: '#22',
      label: 'in the U.S. for Best Salaries of Graduates',
      source: 'Wall Street Journal / College Pulse, 2026',
    },
    {
      rank: '#117',
      label: 'Best National University',
      source: 'U.S. News & World Report, 2026',
    },
    {
      rank: '#94',
      label: 'Best Graduate School for Computer Science',
      source: 'U.S. News & World Report, 2025',
    },
  ],
}

export const illinoisTech = {
  name: 'Illinois Institute of Technology, Chicago',
  founded: 1890,
  about:
    'Founded in 1890, Illinois Institute of Technology (Illinois Tech) is a renowned private research university recognised for its strong focus on engineering, computing, data science, and applied research.',
  points: [
    { title: 'STEM-Focused Curriculum', body: 'Strong emphasis on applied technology and analytics.' },
    { title: 'Industry Integration', body: 'Projects, labs, and collaborations with global employers.' },
    { title: 'Location Advantage', body: 'Situated in Chicago, one of the largest U.S. business and tech hubs.' },
    { title: 'Research Excellence', body: 'Advanced labs, innovation centres, and interdisciplinary research.' },
    { title: 'Global Alumni Network', body: 'Graduates working across the U.S. and globally.' },
  ],
}

export const mahindraUniversity = {
  name: 'Mahindra University',
  about:
    'Mahindra University, backed by the Mahindra Group, is a multidisciplinary institution focused on future-ready education through innovation, research, and industry collaboration.',
  points: [
    { title: 'Applied Learning', body: 'Strong emphasis on technology, analytics, and applied learning.' },
    { title: 'Modern Infrastructure', body: 'Modern campus with advanced labs and digital infrastructure.' },
    { title: 'Industry-Linked Curriculum', body: 'Curriculum aligned with global standards.' },
    { title: 'Holistic Development', body: 'Focus on holistic development and career readiness.' },
  ],
  stats: [
    { value: '1500+', label: 'Placements' },
    { value: '400+', label: 'Companies' },
    { value: '1000+', label: 'Publications' },
    { value: '80+', label: 'Awards' },
  ],
  statsSource: 'Source: Mahindra University institutional data, 2025',
}

export const admissionCriteria = [
  'Bachelor’s degree in Engineering, Computer Science, Mathematics, Statistics, or a related field',
  'Strong quantitative background',
  'Programming knowledge (Python / C++ / Java)',
]

export const admissionJourney = [
  {
    title: 'Application Submission',
    body: 'Apply through Mahindra University with edept support by submitting academic, professional, and English-proficiency credentials.',
  },
  {
    title: 'Academic Review & Eligibility',
    body: 'Joint academic evaluation ensures alignment with Illinois Tech’s MAS Data Science prerequisites; bridging courses assigned if required.',
  },
  {
    title: 'Conditional Offer',
    body: 'Eligible students receive a conditional offer confirming India-phase admission and U.S. transfer requirements.',
  },
  {
    title: 'U.S. Transition Preparation',
    body: 'edept supports visa guidance, financial documentation, and pre-departure orientation for the U.S. phase.',
  },
  {
    title: 'Study Phase: India',
    body: 'Complete foundational and applied coursework at Mahindra University with continuous academic monitoring and mentoring.',
  },
  {
    title: 'Study Phase: USA',
    body: 'Begin advanced MAS Data Science coursework at Illinois Tech, including capstone and project-based learning.',
  },
  {
    title: 'Graduation',
    body: 'Graduate with a STEM-designated MAS in Data Science from Illinois Institute of Technology, Chicago.',
  },
]

export const faqs = [
  {
    q: 'What degree will I receive?',
    a: 'A Master of Applied Science (MAS) in Data Science, STEM-designated, from Illinois Institute of Technology, Chicago.',
  },
  {
    q: 'How long does the program take, and where?',
    a: 'One semester (~6 months, 9 credits) at Mahindra University in India, followed by three semesters (24 credits) at Illinois Tech in Chicago: the same 33-credit degree as studying on-campus for the full duration, split across two countries.',
  },
  {
    q: 'Does this program offer U.S. work opportunities?',
    a: 'Yes. As a STEM-designated degree, graduates are eligible for up to 36 months of work authorisation through OPT and STEM OPT.',
  },
  {
    q: 'Is this better than a full MAS abroad?',
    a: 'You save roughly 21% on tuition (more once living costs are included), ease your academic transition with a semester in India first, and still earn the exact same U.S. degree from Illinois Tech.',
  },
  {
    q: 'Is there any placement support available?',
    a: 'Yes, we provide career support and employer exposure, though placements are not guaranteed.',
  },
  {
    q: 'What if my visa is not approved?',
    a: 'Alternative academic pathways will be guided as per university and edept policies.',
  },
]
