export type Locale = 'en' | 'bn' | 'hi'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  bn: 'বাংলা',
  hi: 'हिंदी',
}

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  bn: 'বাং',
  hi: 'हि',
}

type Content = {
  meta: { title: string; description: string }
  nav: { home: string; about: string; impact: string; journey: string; media: string }
  header: { identity: string; menu: string; close: string }
  hero: {
    name: string
    role: string
    statement: string
    cta: string
    strip: { value: string; label: string }[]
  }
  about: {
    eyebrow: string
    title: string
    lead: string
    body: string[]
    pillars: { title: string; text: string }[]
  }
  leadership: {
    eyebrow: string
    title: string
    intro: string
    roles: { title: string; org: string }[]
  }
  journey: {
    eyebrow: string
    title: string
    intro: string
    roles: { title: string; detail: string }[]
  }
  impact: {
    eyebrow: string
    title: string
    intro: string
    themes: { title: string; text: string }[]
    numbers: { value: string; label: string }[]
  }
  culture: {
    eyebrow: string
    title: string
    lead: string
    body: string
    highlights: string[]
    initiativesLabel: string
    initiatives: string[]
  }
  engagement: {
    eyebrow: string
    title: string
    intro: string
    items: { event: string; place: string }[]
  }
  media: {
    eyebrow: string
    title: string
    guest: string
    lead: string
    body: string
    cta: string
    note: string
  }
  education: {
    eyebrow: string
    title: string
    items: { degree: string; institution: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    emailLabel: string
    phoneLabel: string
  }
  footer: {
    role: string
    rights: string
  }
}

export const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: 'Smt. Nibedita Nayak — Social Leader & Policy Influencer',
      description:
        'Smt. Nibedita Nayak is a socio-political leader, development strategist, and cultural ambassador of Odisha with over two decades of experience in grassroots transformation, governance, and public policy.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      impact: 'Impact',
      journey: 'Journey',
      media: 'Media',
    },
    header: {
      identity: 'Social Leader & Policy Influencer',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      name: 'Smt. Nibedita Nayak',
      role: 'Social Leader & Policy Influencer',
      statement:
        'More than two decades of grassroots transformation, governance, and public policy — advancing social justice, gender equality, inclusive growth, and Odisha’s cultural legacy.',
      cta: 'Explore her journey',
      strip: [
        { value: '20+ Years', label: 'Grassroots Transformation & Governance' },
        { value: 'Public Policy', label: 'Social Justice & Inclusive Growth' },
        { value: 'Odisha', label: 'Culture · Community · Development' },
      ],
    },
    about: {
      eyebrow: '01 — The Story',
      title: 'A life bridging policy and people',
      lead:
        'Smt. Nibedita Nayak is a distinguished socio-political leader, development strategist, and cultural ambassador of Odisha.',
      body: [
        'With over two decades of experience in grassroots transformation, governance, and public policy, she has emerged as a strong advocate for social justice, gender equality, inclusive growth, and preservation of Odisha’s cultural legacy.',
        'Her political vision is rooted in empowering marginalized communities, advancing women and youth leadership, ensuring access to healthcare and education, and promoting sustainable livelihoods. She has worked relentlessly to bridge the gap between policy and people, ensuring that welfare schemes reach the last mile.',
      ],
      pillars: [
        { title: 'Governance', text: 'Public institutions, welfare delivery, and accountable local leadership.' },
        { title: 'Social Justice', text: 'Gender equality, child rights, and dignity for marginalized communities.' },
        { title: 'Inclusive Growth', text: 'Healthcare, education, livelihoods, and cultural continuity.' },
      ],
    },
    leadership: {
      eyebrow: '02 — Current Leadership',
      title: 'Where she leads today',
      intro: 'Active engagements across agriculture, social welfare, cultural stewardship, and cooperative development.',
      roles: [
        { title: 'State President, Odisha', org: 'Bharatiya Krushak Samaj (Women Wing)' },
        { title: 'Member Convenor, Odisha', org: 'Bharat Tibbet Sangh' },
        { title: 'Founder & Chairperson', org: 'Sthapana Charitable Trust' },
        { title: 'President', org: 'Odisha Life Mission' },
        { title: 'National Director', org: 'SEVAC Multi-State Cooperative Society, New Delhi' },
      ],
    },
    journey: {
      eyebrow: '03 — Leadership & Governance',
      title: 'A journey through public responsibility',
      intro:
        'Roles held across state and national platforms — from women and child welfare to healthcare access and agricultural policy.',
      roles: [
        {
          title: 'Chairperson, Odisha State Social Welfare Board',
          detail: 'Advocated policies on women and child welfare.',
        },
        {
          title: 'Member, Odisha State Commission for Protection of Child Rights',
          detail: 'Strengthened laws and mechanisms for safeguarding children.',
        },
        {
          title: 'Member, State PC & PNDT Supervisory Board',
          detail: 'Championed awareness against gender discrimination and female foeticide.',
        },
        {
          title: 'State Advisor, Biju Swasthya Kalyan Yojana',
          detail: 'Played a pivotal role in expanding healthcare access to rural households.',
        },
        {
          title: 'Member, Central Fertilizer Advisory Committee',
          detail: 'Contributed to national agricultural policy discussions (Govt. of India).',
        },
        {
          title: 'National Jury Member, Dr. Durga Bai Deshmukh Award Screening Committee',
          detail: 'Encouraged grassroots initiatives on women empowerment.',
        },
      ],
    },
    impact: {
      eyebrow: '04 — Impact',
      title: 'Where leadership becomes change',
      intro:
        'From sanitation and irrigation to livelihoods, healthcare, and cultural identity — work measured in communities reached and institutions strengthened.',
      themes: [
        {
          title: 'Rural Development',
          text: 'Implemented 40+ Minor Irrigation Projects and multiple rural drinking water & sanitation projects.',
        },
        {
          title: 'Sanitation & Governance',
          text: 'Spearheaded Odisha’s first Open Defecation Free (ODF) District in Deogarh, showcasing effective local governance.',
        },
        {
          title: 'Rural Livelihoods',
          text: 'Promoted rural livelihoods by supporting Women Producer Groups and Tribal Cooperatives.',
        },
        {
          title: 'Healthcare',
          text: 'As State Advisor to Biju Swasthya Kalyan Yojana, helped expand healthcare access for rural households.',
        },
        {
          title: 'Women & Child Welfare',
          text: 'Governance and policy roles focused on welfare delivery, child rights, and gender justice.',
        },
        {
          title: 'Culture & Identity',
          text: 'Advanced Odisha’s cultural-political identity, including installing statues of Malati Choudhary and Raja Basudev Sudhaldev.',
        },
      ],
      numbers: [
        { value: '40+', label: 'Minor Irrigation Projects' },
        { value: '30', label: 'Districts — Bande Odisha' },
        { value: '1000+', label: 'Kirtan Mandalis' },
        { value: '200', label: 'Bhagavad Tungis' },
      ],
    },
    culture: {
      eyebrow: '05 — Culture & Odisha Identity',
      title: 'Bande Odisha',
      lead:
        'A movement to arise and awaken the spirit of Odisha Asmita across 30 districts of Odisha.',
      body:
        'Through Sthapana Charitable Trust and allied cultural-political initiatives, she has built platforms of socio-cultural unity — linking heritage, livelihoods, and community pride.',
      highlights: [
        'Formation of 1000+ Kirtan Mandalis and 200 Bhagavad Tungis as platforms of socio-cultural unity.',
        'Organized SRUJANIKA — Tribal Women Producers Group for medicinal plants & herbs, linking culture with livelihoods.',
        "Produced 'Jungle Jaluchhe' — a socio-political film highlighting lost cultural heritage and environment conservation.",
      ],
      initiativesLabel: 'Selected initiatives',
      initiatives: [
        'Ama Matira Kala',
        'Mitti Ka Guman',
        'Odisha Women Fest',
        'Loka Mancha',
        'Bande Odisha',
        'SRUJANIKA',
        'Jungle Jaluchhe',
      ],
    },
    engagement: {
      eyebrow: '06 — National & International',
      title: 'A voice beyond the state',
      intro: 'Engagements across conferences and forums on water, disaster risk, education, gender, and urban resilience.',
      items: [
        { event: 'World Conference on Women & Girl Child', place: 'IISc, Bengaluru' },
        { event: 'SAARC Conference on Water Management', place: 'Sri Lanka (twice)' },
        { event: 'South Asian Conference on Disaster & Risk Management', place: 'Gujarat' },
        { event: 'National Conference on Domestic Violence Act', place: 'Kerala' },
        { event: 'National Conference on Right to Education', place: 'Sikkim' },
        { event: 'UNDP & AIDMI South Citizenry Academy on Urban Resilience', place: 'Ahmedabad' },
        { event: 'Guest Speaker — Ahmedabad International Literature Festival', place: '2023' },
      ],
    },
    media: {
      eyebrow: '07 — Media',
      title: 'In Conversation with Odisha Talks',
      guest: 'Nibedita Nayak Baliarsingh',
      lead:
        'Featured on Odisha Talks as a trailblazer in government initiatives and women empowerment — including her association with Biju Swasthya Kalyan Yojana.',
      body:
        'Odisha Talks is a podcast and content platform highlighting beliefs, thoughts, culture, and struggle stories of Odia people. This conversation offers a public window into her work on welfare, healthcare access, and leadership.',
      cta: 'Watch the Conversation',
      note: 'Source: Odisha Talks Episode 9',
    },
    education: {
      eyebrow: '08 — Education',
      title: 'Academic foundation',
      items: [
        { degree: 'Post Graduate Diploma in Public Health', institution: 'IGNOU, New Delhi' },
        { degree: 'Masters in History', institution: 'Utkal University, Bhubaneswar' },
        {
          degree: 'Bachelor of Education (English & History)',
          institution: 'Regional College of Education, Bhubaneswar',
        },
        {
          degree: 'B.A. (Honours with Distinction) in History',
          institution: 'BJB College, Bhubaneswar',
        },
      ],
    },
    contact: {
      eyebrow: '09 — Contact',
      title: 'Connect',
      intro: 'For institutional correspondence and engagement.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
    },
    footer: {
      role: 'Social Leader & Policy Influencer',
      rights: 'All rights reserved.',
    },
  },

  bn: {
    meta: {
      title: 'শ্রীমতি নিবেদিতা নায়ক — সামাজিক নেত্রী ও নীতিনির্ধারণী প্রভাবক',
      description:
        'শ্রীমতি নিবেদিতা নায়ক ওড়িশার একজন বিশিষ্ট সামাজিক-রাজনৈতিক নেত্রী, উন্নয়ন কৌশলবিদ ও সাংস্কৃতিক রাষ্ট্রদূত — দুই দশকেরও বেশি অভিজ্ঞতা নিয়ে তৃণমূল রূপান্তর, শাসন ও জননীতির ক্ষেত্রে।',
    },
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      impact: 'প্রভাব',
      journey: 'যাত্রা',
      media: 'মিডিয়া',
    },
    header: {
      identity: 'সামাজিক নেত্রী ও নীতিনির্ধারণী প্রভাবক',
      menu: 'মেনু',
      close: 'বন্ধ',
    },
    hero: {
      name: 'শ্রীমতি নিবেদিতা নায়ক',
      role: 'সামাজিক নেত্রী ও নীতিনির্ধারণী প্রভাবক',
      statement:
        'দুই দশকেরও বেশি তৃণমূল রূপান্তর, শাসন ও জননীতি — সামাজিক ন্যায়, লিঙ্গ সমতা, অন্তর্ভুক্তিমূলক বৃদ্ধি এবং ওড়িশার সাংস্কৃতিক উত্তরাধিকারকে এগিয়ে নিয়ে যাওয়া।',
      cta: 'তাঁর যাত্রা দেখুন',
      strip: [
        { value: '২০+ বছর', label: 'তৃণমূল রূপান্তর ও শাসন' },
        { value: 'জননীতি', label: 'সামাজিক ন্যায় ও অন্তর্ভুক্তিমূলক বৃদ্ধি' },
        { value: 'ওড়িশা', label: 'সংস্কৃতি · সম্প্রদায় · উন্নয়ন' },
      ],
    },
    about: {
      eyebrow: '০১ — কাহিনি',
      title: 'নীতি ও মানুষের সেতুবন্ধন',
      lead:
        'শ্রীমতি নিবেদিতা নায়ক ওড়িশার একজন বিশিষ্ট সামাজিক-রাজনৈতিক নেত্রী, উন্নয়ন কৌশলবিদ ও সাংস্কৃতিক রাষ্ট্রদূত।',
      body: [
        'তৃণমূল রূপান্তর, শাসন ও জননীতিতে দুই দশকেরও বেশি অভিজ্ঞতা নিয়ে তিনি সামাজিক ন্যায়, লিঙ্গ সমতা, অন্তর্ভুক্তিমূলক বৃদ্ধি এবং ওড়িশার সাংস্কৃতিক ঐতিহ্য সংরক্ষণের দৃঢ় প্রবক্তা হিসেবে আবির্ভূত হয়েছেন।',
        'তাঁর রাজনৈতিক দৃষ্টিভঙ্গি প্রান্তিক সম্প্রদায়কে ক্ষমতায়ন, নারী ও যুব নেতৃত্বের অগ্রগতি, স্বাস্থ্যসেবা ও শিক্ষার প্রবেশাধিকার এবং টেকসই জীবিকার প্রসারে নিহিত। তিনি নীতি ও মানুষের মধ্যে ব্যবধান কমাতে নিরলস কাজ করেছেন, যাতে কল্যাণমূলক প্রকল্পগুলো শেষ মাইল পর্যন্ত পৌঁছায়।',
      ],
      pillars: [
        { title: 'শাসন', text: 'জনপ্রতিষ্ঠান, কল্যাণ বিতরণ এবং দায়িত্বশীল স্থানীয় নেতৃত্ব।' },
        { title: 'সামাজিক ন্যায়', text: 'লিঙ্গ সমতা, শিশু অধিকার এবং প্রান্তিক সম্প্রদায়ের মর্যাদা।' },
        { title: 'অন্তর্ভুক্তিমূলক বৃদ্ধি', text: 'স্বাস্থ্যসেবা, শিক্ষা, জীবিকা এবং সাংস্কৃতিক ধারাবাহিকতা।' },
      ],
    },
    leadership: {
      eyebrow: '০২ — বর্তমান নেতৃত্ব',
      title: 'আজ যেখানে তিনি নেতৃত্ব দিচ্ছেন',
      intro: 'কৃষি, সামাজিক কল্যাণ, সাংস্কৃতিক তত্ত্বাবধান ও সমবায় উন্নয়নে সক্রিয় সম্পৃক্ততা।',
      roles: [
        { title: 'রাজ্য সভাপতি, ওড়িশা', org: 'ভারতীয় কৃষক সমাজ (মহিলা শাখা)' },
        { title: 'সদস্য আহ্বায়ক, ওড়িশা', org: 'ভারত তিব্বত সংঘ' },
        { title: 'প্রতিষ্ঠাতা ও চেয়ারপারসন', org: 'স্থাপনা চ্যারিটেবল ট্রাস্ট' },
        { title: 'সভাপতি', org: 'ওড়িশা লাইফ মিশন' },
        { title: 'জাতীয় পরিচালক', org: 'SEVAC মাল্টি-স্টেট কোঅপারেটিভ সোসাইটি, নতুন দিল্লি' },
      ],
    },
    journey: {
      eyebrow: '০৩ — নেতৃত্ব ও শাসন',
      title: 'জনদায়িত্বের যাত্রা',
      intro:
        'রাজ্য ও জাতীয় মঞ্চে ধারণ করা ভূমিকা — নারী ও শিশু কল্যাণ থেকে স্বাস্থ্যসেবা প্রবেশাধিকার ও কৃষি নীতি পর্যন্ত।',
      roles: [
        {
          title: 'চেয়ারপারসন, ওড়িশা রাজ্য সমাজকল্যাণ বোর্ড',
          detail: 'নারী ও শিশু কল্যাণ বিষয়ক নীতির পক্ষে সওয়াল।',
        },
        {
          title: 'সদস্য, ওড়িশা রাজ্য শিশু অধিকার সুরক্ষা কমিশন',
          detail: 'শিশু সুরক্ষার আইন ও প্রক্রিয়া শক্তিশালীকরণ।',
        },
        {
          title: 'সদস্য, রাজ্য PC ও PNDT তদারকি বোর্ড',
          detail: 'লিঙ্গ বৈষম্য ও কন্যাভ্রূণহত্যার বিরুদ্ধে সচেতনতার পক্ষে।',
        },
        {
          title: 'রাজ্য উপদেষ্টা, বিজু স্বাস্থ্য কল্যাণ যোজনা',
          detail: 'গ্রামীণ পরিবারে স্বাস্থ্যসেবা সম্প্রসারণে গুরুত্বপূর্ণ ভূমিকা।',
        },
        {
          title: 'সদস্য, কেন্দ্রীয় সার উপদেষ্টা কমিটি',
          detail: 'জাতীয় কৃষি নীতি আলোচনায় অবদান (ভারত সরকার)।',
        },
        {
          title: 'জাতীয় জুরি সদস্য, ডঃ দুর্গা বাই দেশমুখ পুরস্কার স্ক্রিনিং কমিটি',
          detail: 'নারী ক্ষমতায়নের তৃণমূল উদ্যোগকে উৎসাহ।',
        },
      ],
    },
    impact: {
      eyebrow: '০৪ — প্রভাব',
      title: 'নেতৃত্ব যেখানে পরিবর্তন হয়ে ওঠে',
      intro:
        'স্বাস্থ্যকর পরিবেশ ও সেচ থেকে জীবিকা, স্বাস্থ্যসেবা ও সাংস্কৃতিক পরিচয় — কাজের মাপকাঠি সম্প্রদায় ও প্রতিষ্ঠানের শক্তি।',
      themes: [
        {
          title: 'গ্রামীণ উন্নয়ন',
          text: '৪০+ ক্ষুদ্র সেচ প্রকল্প এবং একাধিক গ্রামীণ পানীয় জল ও স্যানিটেশন প্রকল্প বাস্তবায়ন।',
        },
        {
          title: 'স্যানিটেশন ও শাসন',
          text: 'দেওগড়ে ওড়িশার প্রথম মুক্ত মলত্যাগমুক্ত (ODF) জেলা গঠনে নেতৃত্ব — কার্যকর স্থানীয় শাসনের দৃষ্টান্ত।',
        },
        {
          title: 'গ্রামীণ জীবিকা',
          text: 'নারী উৎপাদক গোষ্ঠী ও আদিবাসী সমবায়কে সহায়তা করে গ্রামীণ জীবিকার প্রসার।',
        },
        {
          title: 'স্বাস্থ্যসেবা',
          text: 'বিজু স্বাস্থ্য কল্যাণ যোজনার রাজ্য উপদেষ্টা হিসেবে গ্রামীণ পরিবারে স্বাস্থ্যসেবা সম্প্রসারণ।',
        },
        {
          title: 'নারী ও শিশু কল্যাণ',
          text: 'কল্যাণ বিতরণ, শিশু অধিকার ও লিঙ্গ ন্যায়ে শাসন ও নীতিগত ভূমিকা।',
        },
        {
          title: 'সংস্কৃতি ও পরিচয়',
          text: 'মালতি চৌধুরী ও রাজা বাসুদেব সুধালদেবের মূর্তি স্থাপনসহ ওড়িশার সাংস্কৃতিক-রাজনৈতিক পরিচয়ের অগ্রগতি।',
        },
      ],
      numbers: [
        { value: '৪০+', label: 'ক্ষুদ্র সেচ প্রকল্প' },
        { value: '৩০', label: 'জেলা — বন্দে ওড়িশা' },
        { value: '১০০০+', label: 'কীর্তন মণ্ডলী' },
        { value: '২০০', label: 'ভাগবদ তুঙ্গি' },
      ],
    },
    culture: {
      eyebrow: '০৫ — সংস্কৃতি ও ওড়িশা পরিচয়',
      title: 'বন্দে ওড়িশা',
      lead: 'ওড়িশার ৩০টি জেলায় ওড়িশা অস্মিতার চেতনা জাগ্রত করার আন্দোলন।',
      body:
        'স্থাপনা চ্যারিটেবল ট্রাস্ট এবং সংশ্লিষ্ট সাংস্কৃতিক-রাজনৈতিক উদ্যোগের মাধ্যমে তিনি সামাজিক-সাংস্কৃতিক ঐক্যের মঞ্চ গড়েছেন — ঐতিহ্য, জীবিকা ও সম্প্রদায়ের গর্বকে যুক্ত করে।',
      highlights: [
        'সামাজিক-সাংস্কৃতিক ঐক্যের মঞ্চ হিসেবে ১০০০+ কীর্তন মণ্ডলী ও ২০০ ভাগবদ তুঙ্গি গঠন।',
        'SRUJANIKA — ঔষধি উদ্ভিদ ও ভেষজের জন্য আদিবাসী নারী উৎপাদক গোষ্ঠী, সংস্কৃতিকে জীবিকার সঙ্গে যুক্ত করে।',
        "'Jungle Jaluchhe' — হারানো সাংস্কৃতিক ঐতিহ্য ও পরিবেশ সংরক্ষণ তুলে ধরা সামাজিক-রাজনৈতিক চলচ্চিত্র।",
      ],
      initiativesLabel: 'নির্বাচিত উদ্যোগ',
      initiatives: [
        'Ama Matira Kala',
        'Mitti Ka Guman',
        'Odisha Women Fest',
        'Loka Mancha',
        'Bande Odisha',
        'SRUJANIKA',
        'Jungle Jaluchhe',
      ],
    },
    engagement: {
      eyebrow: '০৬ — জাতীয় ও আন্তর্জাতিক',
      title: 'রাজ্যের বাইরেও একটি কণ্ঠস্বর',
      intro: 'জল, দুর্যোগ ঝুঁকি, শিক্ষা, লিঙ্গ ও নগর স্থিতিস্থাপকতা বিষয়ক সম্মেলন ও ফোরামে সম্পৃক্ততা।',
      items: [
        { event: 'বিশ্ব সম্মেলন — নারী ও কন্যাশিশু', place: 'IISc, বেঙ্গালুরু' },
        { event: 'সার্ক সম্মেলন — জল ব্যবস্থাপনা', place: 'শ্রীলঙ্কা (দুবার)' },
        { event: 'দক্ষিণ এশীয় সম্মেলন — দুর্যোগ ও ঝুঁকি ব্যবস্থাপনা', place: 'গুজরাত' },
        { event: 'জাতীয় সম্মেলন — গার্হস্থ্য সহিংসতা আইন', place: 'কেরল' },
        { event: 'জাতীয় সম্মেলন — শিক্ষার অধিকার', place: 'সিক্কিম' },
        { event: 'UNDP ও AIDMI সাউথ সিটিজেনরি অ্যাকাডেমি — নগর স্থিতিস্থাপকতা', place: 'আহমেদাবাদ' },
        { event: 'অতিথি বক্তা — আহমেদাবাদ আন্তর্জাতিক সাহিত্য উৎসব', place: '২০২৩' },
      ],
    },
    media: {
      eyebrow: '০৭ — মিডিয়া',
      title: 'ওড়িশা টক্সের সঙ্গে আলাপ',
      guest: 'নিবেদিতা নায়ক বালিয়ারসিংহ',
      lead:
        'ওড়িশা টক্সে সরকারি উদ্যোগ ও নারী ক্ষমতায়নের অগ্রপথিক হিসেবে উপস্থাপিত — বিজু স্বাস্থ্য কল্যাণ যোজনার সঙ্গে তাঁর সম্পৃক্ততাসহ।',
      body:
        'ওড়িশা টক্স ওড়িয়া মানুষের বিশ্বাস, চিন্তা, সংস্কৃতি ও সংগ্রামের গল্প তুলে ধরা একটি পডকাস্ট ও কনটেন্ট প্ল্যাটফর্ম। এই আলাপ কল্যাণ, স্বাস্থ্যসেবা ও নেতৃত্বের কাজের একটি জনসমক্ষে উন্মুক্ত দরজা।',
      cta: 'আলাপটি দেখুন',
      note: 'উৎস: ওড়িশা টক্স পর্ব ৯',
    },
    education: {
      eyebrow: '০৮ — শিক্ষা',
      title: 'শৈক্ষিক ভিত্তি',
      items: [
        { degree: 'পাবলিক হেলথে স্নাতকোত্তর ডিপ্লোমা', institution: 'IGNOU, নতুন দিল্লি' },
        { degree: 'ইতিহাসে স্নাতকোত্তর', institution: 'উৎকল বিশ্ববিদ্যালয়, ভুবনেশ্বর' },
        {
          degree: 'শিক্ষায় স্নাতক (ইংরেজি ও ইতিহাস)',
          institution: 'রিজিওনাল কলেজ অফ এডুকেশন, ভুবনেশ্বর',
        },
        {
          degree: 'বি.এ. (অনার্স উইথ ডিস্টিংশন) ইতিহাস',
          institution: 'BJB কলেজ, ভুবনেশ্বর',
        },
      ],
    },
    contact: {
      eyebrow: '০৯ — যোগাযোগ',
      title: 'সংযোগ',
      intro: 'প্রাতিষ্ঠানিক যোগাযোগ ও সম্পৃক্ততার জন্য।',
      emailLabel: 'ইমেইল',
      phoneLabel: 'ফোন',
    },
    footer: {
      role: 'সামাজিক নেত্রী ও নীতিনির্ধারণী প্রভাবক',
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
    },
  },

  hi: {
    meta: {
      title: 'श्रीमती निबेदिता नायक — सामाजिक नेत्री एवं नीति प्रभावक',
      description:
        'श्रीमती निबेदिता नायक ओडिशा की एक प्रतिष्ठित सामाजिक-राजनीतिक नेत्री, विकास रणनीतिकार और सांस्कृतिक राजदूत हैं — दो दशकों से अधिक अनुभव के साथ जमीनी परिवर्तन, शासन और लोकनीति के क्षेत्र में।',
    },
    nav: {
      home: 'होम',
      about: 'परिचय',
      impact: 'प्रभाव',
      journey: 'यात्रा',
      media: 'मीडिया',
    },
    header: {
      identity: 'सामाजिक नेत्री एवं नीति प्रभावक',
      menu: 'मेनू',
      close: 'बंद',
    },
    hero: {
      name: 'श्रीमती निबेदिता नायक',
      role: 'सामाजिक नेत्री एवं नीति प्रभावक',
      statement:
        'दो दशकों से अधिक जमीनी परिवर्तन, शासन और लोकनीति — सामाजिक न्याय, लैंगिक समानता, समावेशी विकास और ओडिशा की सांस्कृतिक विरासत को आगे बढ़ाते हुए।',
      cta: 'उनकी यात्रा देखें',
      strip: [
        { value: '२०+ वर्ष', label: 'जमीनी परिवर्तन एवं शासन' },
        { value: 'लोकनीति', label: 'सामाजिक न्याय एवं समावेशी विकास' },
        { value: 'ओडिशा', label: 'संस्कृति · समुदाय · विकास' },
      ],
    },
    about: {
      eyebrow: '०१ — कहानी',
      title: 'नीति और लोगों के बीच सेतु',
      lead:
        'श्रीमती निबेदिता नायक ओडिशा की एक प्रतिष्ठित सामाजिक-राजनीतिक नेत्री, विकास रणनीतिकार और सांस्कृतिक राजदूत हैं।',
      body: [
        'जमीनी परिवर्तन, शासन और लोकनीति में दो दशकों से अधिक अनुभव के साथ वे सामाजिक न्याय, लैंगिक समानता, समावेशी विकास और ओडिशा की सांस्कृतिक विरासत के संरक्षण की प्रबल पक्षधर बनी हैं।',
        'उनकी राजनीतिक दृष्टि हाशिये पर स्थित समुदायों को सशक्त करने, महिला एवं युवा नेतृत्व को आगे बढ़ाने, स्वास्थ्य एवं शिक्षा की पहुँच सुनिश्चित करने तथा सतत आजीविका को बढ़ावा देने में निहित है। उन्होंने नीति और लोगों के बीच की दूरी घटाने के लिए निरंतर कार्य किया है, ताकि कल्याणकारी योजनाएँ अंतिम छोर तक पहुँचें।',
      ],
      pillars: [
        { title: 'शासन', text: 'सार्वजनिक संस्थान, कल्याण वितरण और जवाबदेह स्थानीय नेतृत्व।' },
        { title: 'सामाजिक न्याय', text: 'लैंगिक समानता, बाल अधिकार और हाशिये पर स्थित समुदायों की गरिमा।' },
        { title: 'समावेशी विकास', text: 'स्वास्थ्य, शिक्षा, आजीविका और सांस्कृतिक निरंतरता।' },
      ],
    },
    leadership: {
      eyebrow: '०२ — वर्तमान नेतृत्व',
      title: 'आज जहाँ वे नेतृत्व करती हैं',
      intro: 'कृषि, सामाजिक कल्याण, सांस्कृतिक संरक्षण और सहकारी विकास में सक्रिय भूमिकाएँ।',
      roles: [
        { title: 'राज्य अध्यक्ष, ओडिशा', org: 'भारतीय कृषक समाज (महिला शाखा)' },
        { title: 'सदस्य संयोजक, ओडिशा', org: 'भारत तिब्बत संघ' },
        { title: 'संस्थापक एवं अध्यक्ष', org: 'स्थापना चैरिटेबल ट्रस्ट' },
        { title: 'अध्यक्ष', org: 'ओडिशा लाइफ मिशन' },
        { title: 'राष्ट्रीय निदेशक', org: 'SEVAC मल्टी-स्टेट कोऑपरेटिव सोसाइटी, नई दिल्ली' },
      ],
    },
    journey: {
      eyebrow: '०३ — नेतृत्व एवं शासन',
      title: 'सार्वजनिक जिम्मेदारी की यात्रा',
      intro:
        'राज्य और राष्ट्रीय मंचों पर निभाई गई भूमिकाएँ — महिला एवं बाल कल्याण से स्वास्थ्य पहुँच और कृषि नीति तक।',
      roles: [
        {
          title: 'अध्यक्ष, ओडिशा राज्य समाज कल्याण बोर्ड',
          detail: 'महिला एवं बाल कल्याण संबंधी नीतियों का समर्थन।',
        },
        {
          title: 'सदस्य, ओडिशा राज्य बाल अधिकार संरक्षण आयोग',
          detail: 'बाल सुरक्षा के कानूनों और तंत्रों को सुदृढ़ किया।',
        },
        {
          title: 'सदस्य, राज्य PC एवं PNDT पर्यवेक्षी बोर्ड',
          detail: 'लैंगिक भेदभाव और कन्या भ्रूणहत्या के विरुद्ध जागरूकता।',
        },
        {
          title: 'राज्य सलाहकार, बीजू स्वास्थ्य कल्याण योजना',
          detail: 'ग्रामीण परिवारों तक स्वास्थ्य पहुँच बढ़ाने में महत्वपूर्ण भूमिका।',
        },
        {
          title: 'सदस्य, केंद्रीय उर्वरक सलाहकार समिति',
          detail: 'राष्ट्रीय कृषि नीति चर्चाओं में योगदान (भारत सरकार)।',
        },
        {
          title: 'राष्ट्रीय जूरी सदस्य, डॉ. दुर्गा बाई देशमुख पुरस्कार स्क्रीनिंग समिति',
          detail: 'महिला सशक्तिकरण के जमीनी प्रयासों को प्रोत्साहन।',
        },
      ],
    },
    impact: {
      eyebrow: '०४ — प्रभाव',
      title: 'जहाँ नेतृत्व परिवर्तन बनता है',
      intro:
        'स्वच्छता और सिंचाई से आजीविका, स्वास्थ्य और सांस्कृतिक पहचान तक — कार्य समुदायों और संस्थाओं की मजबूती में मापा जाता है।',
      themes: [
        {
          title: 'ग्रामीण विकास',
          text: '४०+ लघु सिंचाई परियोजनाएँ तथा अनेक ग्रामीण पेयजल एवं स्वच्छता परियोजनाएँ।',
        },
        {
          title: 'स्वच्छता एवं शासन',
          text: 'देवगढ़ में ओडिशा का पहला खुले में शौचमुक्त (ODF) जिला — प्रभावी स्थानीय शासन का उदाहरण।',
        },
        {
          title: 'ग्रामीण आजीविका',
          text: 'महिला उत्पादक समूहों और आदिवासी सहकारी समितियों के समर्थन से ग्रामीण आजीविका को बढ़ावा।',
        },
        {
          title: 'स्वास्थ्य',
          text: 'बीजू स्वास्थ्य कल्याण योजना की राज्य सलाहकार के रूप में ग्रामीण परिवारों तक स्वास्थ्य पहुँच का विस्तार।',
        },
        {
          title: 'महिला एवं बाल कल्याण',
          text: 'कल्याण वितरण, बाल अधिकार और लैंगिक न्याय पर शासन एवं नीति भूमिकाएँ।',
        },
        {
          title: 'संस्कृति एवं पहचान',
          text: 'मालती चौधरी और राजा बासुदेव सुधालदेव की मूर्तियों की स्थापना सहित ओडिशा की सांस्कृतिक-राजनीतिक पहचान को आगे बढ़ाना।',
        },
      ],
      numbers: [
        { value: '४०+', label: 'लघु सिंचाई परियोजनाएँ' },
        { value: '३०', label: 'जिले — बंदे ओडिशा' },
        { value: '१०००+', label: 'कीर्तन मंडलियाँ' },
        { value: '२००', label: 'भागवद तुंगी' },
      ],
    },
    culture: {
      eyebrow: '०५ — संस्कृति एवं ओडिशा पहचान',
      title: 'बंदे ओडिशा',
      lead: 'ओडिशा के ३० जिलों में ओडिशा अस्मिता की भावना जगाने का आंदोलन।',
      body:
        'स्थापना चैरिटेबल ट्रस्ट और संबंधित सांस्कृतिक-राजनीतिक पहलों के माध्यम से उन्होंने सामाजिक-सांस्कृतिक एकता के मंच बनाए हैं — विरासत, आजीविका और सामुदायिक गौरव को जोड़ते हुए।',
      highlights: [
        'सामाजिक-सांस्कृतिक एकता के मंच के रूप में १०००+ कीर्तन मंडलियाँ और २०० भागवद तुंगी।',
        'SRUJANIKA — औषधीय पौधों एवं जड़ी-बूटियों के लिए आदिवासी महिला उत्पादक समूह, संस्कृति को आजीविका से जोड़ते हुए।',
        "'Jungle Jaluchhe' — खोई सांस्कृतिक विरासत और पर्यावरण संरक्षण पर आधारित सामाजिक-राजनीतिक फिल्म।",
      ],
      initiativesLabel: 'चयनित पहल',
      initiatives: [
        'Ama Matira Kala',
        'Mitti Ka Guman',
        'Odisha Women Fest',
        'Loka Mancha',
        'Bande Odisha',
        'SRUJANIKA',
        'Jungle Jaluchhe',
      ],
    },
    engagement: {
      eyebrow: '०६ — राष्ट्रीय एवं अंतरराष्ट्रीय',
      title: 'राज्य से परे एक आवाज़',
      intro: 'जल, आपदा जोखिम, शिक्षा, लैंगिक मुद्दों और शहरी लचीलेपन पर सम्मेलनों एवं मंचों में भागीदारी।',
      items: [
        { event: 'विश्व सम्मेलन — महिला एवं बालिका', place: 'IISc, बेंगलुरु' },
        { event: 'सार्क सम्मेलन — जल प्रबंधन', place: 'श्रीलंका (दो बार)' },
        { event: 'दक्षिण एशियाई सम्मेलन — आपदा एवं जोखिम प्रबंधन', place: 'गुजरात' },
        { event: 'राष्ट्रीय सम्मेलन — घरेलू हिंसा अधिनियम', place: 'केरल' },
        { event: 'राष्ट्रीय सम्मेलन — शिक्षा का अधिकार', place: 'सिक्किम' },
        { event: 'UNDP एवं AIDMI साउथ सिटिजनरी अकादमी — शहरी लचीलापन', place: 'अहमदाबाद' },
        { event: 'अतिथि वक्ता — अहमदाबाद अंतरराष्ट्रीय साहित्य महोत्सव', place: '२०२३' },
      ],
    },
    media: {
      eyebrow: '०७ — मीडिया',
      title: 'ओडिशा टॉक्स के साथ संवाद',
      guest: 'निबेदिता नायक बलियारसिंह',
      lead:
        'ओडिशा टॉक्स पर सरकारी पहलों और महिला सशक्तिकरण की अग्रणी के रूप में प्रस्तुत — बीजू स्वास्थ्य कल्याण योजना से उनके जुड़ाव सहित।',
      body:
        'ओडिशा टॉक्स ओडिया लोगों की मान्यताओं, विचारों, संस्कृति और संघर्ष की कहानियों को उजागर करने वाला पॉडकास्ट एवं कंटेंट प्लेटफ़ॉर्म है। यह संवाद कल्याण, स्वास्थ्य पहुँच और नेतृत्व पर उनके कार्य की सार्वजनिक झलक देता है।',
      cta: 'संवाद देखें',
      note: 'स्रोत: ओडिशा टॉक्स एपिसोड ९',
    },
    education: {
      eyebrow: '०८ — शिक्षा',
      title: 'शैक्षिक आधार',
      items: [
        { degree: 'सार्वजनिक स्वास्थ्य में स्नातकोत्तर डिप्लोमा', institution: 'IGNOU, नई दिल्ली' },
        { degree: 'इतिहास में स्नातकोत्तर', institution: 'उत्कल विश्वविद्यालय, भुवनेश्वर' },
        {
          degree: 'शिक्षा स्नातक (अंग्रेज़ी एवं इतिहास)',
          institution: 'रीजनल कॉलेज ऑफ़ एजुकेशन, भुवनेश्वर',
        },
        {
          degree: 'बी.ए. (ऑनर्स विद डिस्टिंक्शन) इतिहास',
          institution: 'BJB कॉलेज, भुवनेश्वर',
        },
      ],
    },
    contact: {
      eyebrow: '०९ — संपर्क',
      title: 'संपर्क',
      intro: 'संस्थागत पत्राचार और सहयोग के लिए।',
      emailLabel: 'ईमेल',
      phoneLabel: 'फ़ोन',
    },
    footer: {
      role: 'सामाजिक नेत्री एवं नीति प्रभावक',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
  },
}
