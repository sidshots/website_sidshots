// ── SIDHHESH PORTFOLIO — CONTENT DATA ──────────────────────────────────────
window.T = {
  bg:      '#09070f',
  surface: '#130f22',
  card:    '#1a1230',
  violet:  '#8b5cf6',
  purple:  '#a855f7',
  lilac:   '#c084fc',
  yellow:  '#facc15',
  text:    '#f5f0ff',
  muted:   'rgba(245,240,255,0.55)',
  border:  'rgba(139,92,246,0.2)',
};

window.ROTATING_WORDS = ['Marketing', 'Storytelling', 'Branding', 'Growth', 'Creativity'];

// ── UPDATE THESE VIDEO IDs whenever you pick a new weekly rec ──────────────
window.VIDEO_PICKS = [
  {
    id:      'dQw4w9WgXcQ',          // ← replace with YouTube video ID
    title:   'How the creator economy actually works in 2026',
    channel: '@colinandsamir',
    note:    'Great take on platform shifts',
  },
  {
    id:      'LXb3EKWsInQ',          // ← replace with YouTube video ID
    title:   'Building brand communities from zero',
    channel: '@garyvee',
    note:    'Still the blueprint',
  },
  {
    id:      'ZXsQAXx_ao0',          // ← replace with YouTube video ID
    title:   'The dark side of gaming influencer marketing',
    channel: '@penguinz0',
    note:    'Important watch for anyone in this space',
  },
];

window.EXPERIENCES = [
  {
    company:  'STAN',
    domain:   'stan.gg',
    role:     'Branding & Marketing Manager',
    period:   'Mar 2022 — Present',
    location: 'Bengaluru',
    color:    '#8b5cf6',
    summary:  "Defined STAN's brand vision, mission, and positioning — solidifying STAN as India's community-first gaming and creator platform.",
    wins: [
      'Spearheaded STANFest 2024: 30K footfall, 400M+ impressions, 200+ creators',
      'Scaled Instagram 0→100K, monthly reach 7M+ organically, Twitter 0→26.8K',
      'Led GTM for STAN Photon (Web3): 3,000+ onchain wallets, 2K Twitter growth',
      'Directed 200+ creator partnerships & brand campaigns',
      'Launched Minecraft + Anime categories: 300+ creators onboarded',
      'Earned coverage from Google\'s AI Fund and a public mention from Sundar Pichai',
      'Led a 7-member content and design team',
    ],
    tags: ['Brand strategy', 'Creator economy', 'Web3 GTM', 'Community'],
  },
  {
    company:  'Sportskeeda',
    domain:   'sportskeeda.com',
    role:     'Content Producer',
    period:   'May 2022 — Jun 2025',
    location: 'Bengaluru',
    color:    '#a855f7',
    summary:  "Repositioned Sportskeeda from a general gaming page into India's esports-first media platform.",
    wins: [
      'Scaled Instagram 147K→324K (+115%) and monthly reach 1M→12M (+900%) in 14 months, purely organic',
      'Scaled YouTube revenue 30× and drove 120K+ new subscribers through data-driven evergreen content',
      'Built GameOnAir — original interview-led IP, 10M+ views across 10 episodes',
      'Launched Pick Your Best — interactive voting format, 10K+ follower growth in 5 days',
      'Led publisher partnerships: Krafton, Riot, Red Bull, Garena, Nodwin, Upthrust',
      'Forged brand partnerships: Intel, Alienware, LOCO, Game of Future Russia',
      'Managed a 10-member team',
    ],
    tags: ['Content strategy', 'Esports', 'YouTube growth', 'Publisher partnerships'],
  },
  {
    company:  'India Today Gaming',
    domain:   'indiatoday.in',
    role:     'Social Media Executive',
    period:   'Nov 2021 — Jan 2022',
    location: 'Remote',
    color:    '#c084fc',
    summary:  'Developed and executed the social media strategy for the Tri-Nation FreeFire tournament WEC.',
    wins: [
      'Led social strategy for the Tri-Nation FreeFire tournament WEC',
      'Delivered 1M+ impressions during the campaign',
      'Drove 20K+ new followers in a short-cycle esports event',
    ],
    tags: ['Esports tournaments', 'FreeFire', 'Social strategy'],
  },
  {
    company:  'Gaming Up',
    domain:   '',
    role:     'Founder',
    period:   '2019 — Present',
    location: 'Independent',
    color:    '#facc15',
    summary:  "Founded one of India's first esports community pages. Built foundational gaming industry relationships.",
    wins: [
      '0 → 30,000 followers in 6 months, purely organic',
      'Built foundational relationships across India\'s gaming industry',
      'Successfully sold the property',
    ],
    tags: ['Community', 'Founder', 'Early esports'],
  },
];

window.PARTNERSHIPS = [
  { name: 'Zingbus',         domain: 'zingbus.com',             color: '#FF6B35' },
  { name: 'Scapia',          domain: 'scapia.in',               color: '#7C3AED' },
  { name: 'Zupee',           domain: 'zupee.com',               color: '#F59E0B' },
  { name: 'OpenAI',          domain: 'openai.com',              color: '#10B981' },
  { name: 'Harley Davidson', domain: 'harley-davidson.com',     color: '#EF4444' },
  { name: 'Acer India',      domain: 'acer.com',                color: '#3B82F6' },
  { name: 'Flipkart',        domain: 'flipkart.com',            color: '#F97316' },
  { name: 'BattleBucks',     domain: 'battlebucks.in',          color: '#FACC15' },
  { name: 'Loco',            domain: 'loco.gg',                 color: '#8B5CF6' },
  { name: 'Rooter',          domain: 'rooter.gg',               color: '#EC4899' },
  { name: 'College Rivals',  domain: 'collegerivalsgaming.com', color: '#06B6D4' },
  { name: 'Nodwin Gaming',   domain: 'nodwin.com',              color: '#F59E0B' },
  { name: 'SuperGaming',     domain: 'supergaming.co',          color: '#8B5CF6' },
  { name: 'Upthrust Gaming', domain: 'upthrust.gg',             color: '#10B981' },
  { name: 'Spinbot',         domain: 'spinbot.io',              color: '#6366F1' },
];

// ── MEDIA GALLERY ────────────────────────────────────────────────────────────
// HOW TO ADD YOUR PHOTOS & VIDEOS:
//   1. Drag JPG/PNG/WebP/MP4 files into the project file panel (left sidebar)
//   2. Put them in a "media/" folder  (e.g. media/stanfest-1.jpg)
//   3. Update the src values below — they'll appear in the homepage gallery
//   4. Set type: 'image' or type: 'video'
//   5. For YouTube clips, use type: 'youtube' and src: 'YOUTUBE_VIDEO_ID'
window.MEDIA_GALLERY = [
  { src: 'media/stanfest-1.webp', caption: 'STANFest · With Jonathan',   tag: 'STAN',    type: 'image' },
  { src: 'media/stanfest-2.webp', caption: 'STANFest · Creator Stage',   tag: 'STAN',    type: 'image' },
  { src: 'media/stanfest-3.webp', caption: 'STANFest · Creator Meet',    tag: 'STAN',    type: 'image' },
  { src: 'media/stanfest-4.webp', caption: 'STANFest · On Stage',        tag: 'STAN',    type: 'image' },
  // Add more: { src: 'media/your-file.webp', caption: 'Caption', tag: 'Tag', type: 'image' }
];

// Work experience company logos (shown in experience section header)
window.EXP_LOGOS = {
  'STAN':               { domain: 'stan.gg',          color: '#8B5CF6' },
  'Sportskeeda':        { domain: 'sportskeeda.com',  color: '#EF4444' },
  'India Today Gaming': { domain: 'indiatoday.in',    color: '#E11D48' },
  'Gaming Up':          { domain: '',                 color: '#FACC15' },
};

// Fallback blog posts shown if Medium RSS fails
window.FALLBACK_POSTS = [
  {
    title:       'Data-informed creativity: the unfair advantage',
    link:        'https://medium.com/@sidhhesh',
    description: 'Creative instinct without data is guesswork. Data without creative instinct is just dashboards. Here\'s how I think about combining both.',
    pubDate:     'Apr 18, 2026',
    readMin:     5,
    tag:         'Essay',
    thumbnail:   'https://picsum.photos/seed/data1/800/450',
  },
  {
    title:       'Why organic still beats paid in gaming',
    link:        'https://medium.com/@sidhhesh',
    description: 'We grew Sportskeeda monthly reach 1M to 12M in 14 months with zero paid. The playbook is simpler — and harder — than you think.',
    pubDate:     'Mar 30, 2026',
    readMin:     6,
    tag:         'Playbook',
    thumbnail:   'https://picsum.photos/seed/organic2/800/450',
  },
  {
    title:       'What STANFest taught me about brand',
    link:        'https://medium.com/@sidhhesh',
    description: '30K footfall, 400M impressions, 200+ creators. But the real lesson was about something I didn\'t expect.',
    pubDate:     'Mar 14, 2026',
    readMin:     4,
    tag:         'Personal',
    thumbnail:   'https://picsum.photos/seed/stanfest3/800/450',
  },
];
