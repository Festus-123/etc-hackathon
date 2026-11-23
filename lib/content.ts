// All editable website content lives here. Change text, dates or add items
// (tracks, FAQ, challenges, announcements) without touching the page layout.

export const EMAIL = "etc.oaustech@gmail.com";
export const TBA = "To be announced";

export const DATES = {
  start: "12 December 2026",
  deadline: "12 January 2027",
  pitch: "16 January 2027",
  venue: "Venue to be announced",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "How It Works", href: "#how" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const KEY_DATES = [
  { label: "Starts", value: DATES.start },
  { label: "Submission deadline", value: DATES.deadline },
  { label: "Pitch day", value: DATES.pitch },
  { label: "Venue", value: TBA },
];

export const AUDIENCE = [
  { title: "Developers", text: "Build apps, tools and AI solutions." },
  { title: "Designers", text: "Create product designs and prototypes." },
  {
    title: "Engineers and thinkers",
    text: "Design models, concepts and ideas that solve real problems.",
  },
];

export const TRACKS = [
  { title: "Software Development", text: "Apps, websites, tools and systems." },
  {
    title: "UI/UX and Product Design",
    text: "Interfaces, user journeys and interactive prototypes.",
  },
  {
    title: "AI and Emerging Technologies",
    text: "Solutions using AI, data, IoT or other new technology.",
  },
  {
    title: "Engineering and Social Impact",
    text: "Engineering designs, models and solutions for community problems.",
  },
];

// Add challenge cards here once released: { title: "...", text: "..." }
export const CHALLENGES: { title: string; text: string }[] = [];
export const CHALLENGES_NOTE =
  "Challenge statements will be released on 12 December 2026.";

export const CAN_BUILD = [
  "A software app or digital product",
  "A UI/UX concept or interactive prototype",
  "An AI or emerging-technology solution",
  "An engineering design, physical concept, model or simulation",
  "A solution focused on social or community impact",
];

export const STEPS = [
  {
    title: "Register",
    text: "Sign up on this website, alone or with your team. Registration is open from 12 December 2026 to 12 January 2027.",
  },
  {
    title: "Get your team",
    text: 'Already have a team? List them when you register. Need teammates? Register alone and choose "I need a team". We will add you to a group chat to find teammates.',
  },
  {
    title: "Build",
    text: "The challenges are released on 12 December 2026 on this website. Build in your own time, wherever you like. There are no sessions you must attend.",
  },
  {
    title: "Submit",
    text: "Send your project through the submission form on this website by 12 January 2027.",
  },
  {
    title: "Pitch",
    text: "Present your solution to the judges in person on 16 January 2027. Venue: to be announced.",
  },
];

export const TIMELINE = [
  {
    date: "12 December 2026",
    what: "Hackathon starts. Registration opens. Challenges released.",
  },
  {
    date: "12 January 2027",
    what: "Registration closes. Submission deadline.",
  },
  {
    date: "16 January 2027",
    what: "Pitch day and judging. Venue to be announced.",
  },
];

export const RULES = [
  {
    title: "Who can join",
    items: [
      "Open to current students of the Olusegun Agagu University of Science and Technology (OAUSTECH) only.",
    ],
  },
  {
    title: "Teams",
    items: [
      "A team can have up to 5 members.",
      "Join alone and be matched with others, or register with your own team.",
      "Each person can be in only one team.",
      "Members can come from different departments and levels. We encourage this.",
      "Team members cannot be changed after the project is submitted.",
    ],
  },
  {
    title: "What to build",
    items: [
      "Choose one of the tracks and one of the challenge statements released on 12 December 2026.",
      "Software, a design prototype, an engineering concept, a model, a simulation or a proof of concept.",
      "Coding is not required for every team member.",
    ],
  },
  {
    title: "Originality",
    items: [
      "Your work must be created by your team during the hackathon.",
      "Open-source tools, libraries and public resources are fine, but say what you used.",
      "If you use AI tools, state clearly what for and where.",
      "Copying another team's work, or presenting someone else's as yours, leads to disqualification.",
    ],
  },
  {
    title: "What to submit",
    items: [
      "Project name, team name, chosen track and challenge.",
      "A clear problem statement and who it is for.",
      "Your solution and how it solves the problem.",
      "A link to your prototype, product, design, model, simulation or proof of concept.",
      "Short documentation (about one page). A demo video link is optional.",
      "Late submissions are not accepted. After the deadline, projects cannot be changed.",
    ],
  },
  {
    title: "Pitch day",
    items: [
      "Teams pitch in person on 16 January 2027.",
      "5 minutes to pitch and 3 minutes for judges' questions.",
      "Bring a live demo or slides.",
      "Every team member must be present. A solo participant pitches alone.",
    ],
  },
  {
    title: "Conduct",
    items: [
      "Be respectful to every participant, organiser and judge.",
      "Harassment, cheating or abusive behaviour leads to removal.",
      "The decisions of the organisers and judges are final.",
    ],
  },
  {
    title: "Prizes and recognition",
    items: ["Details of prizes and recognition will be announced."],
  },
];

// Proposed, to be confirmed with the judges.
export const CRITERIA = [
  { name: "Problem understanding", weight: 20 },
  { name: "Creativity", weight: 15 },
  { name: "Technical execution", weight: 25 },
  { name: "Design / user experience", weight: 15 },
  { name: "Practicality / impact", weight: 15 },
  { name: "Pitch / presentation", weight: 10 },
];

export const FAQ: [string, string][] = [
  ["Who can join the hackathon?", "Only current OAUSTECH students."],
  ["Is it free?", "Yes, registration is free."],
  [
    "Do I need to know how to code?",
    "No. Developers are welcome, but so are designers, engineers, researchers, product thinkers and presenters. A good team needs different skills.",
  ],
  [
    "Can I join alone?",
    'Yes. Register alone and choose "I need a team". We will add you to a group chat so you can find teammates.',
  ],
  ["How big can a team be?", "Up to 5 members."],
  ["Can I be in more than one team?", "No. Each person can join only one team."],
  [
    "Can my team have members from different departments?",
    "Yes, and we encourage it.",
  ],
  [
    "Do I have to attend a workshop or building session?",
    "No. You build in your own time, wherever you like. The only in-person event is pitch day on 16 January 2027.",
  ],
  [
    "Is there an orientation?",
    "No. Everything you need is on this website. Please read the rules.",
  ],
  ["When are the challenges released?", "On 12 December 2026, on this website."],
  [
    "What can I build?",
    "Software, a design prototype, an AI solution, an engineering design, a model, a simulation or a proof of concept. It should solve a real problem.",
  ],
  [
    "How do I submit my project?",
    "Through the submission form on this website. It opens on 12 December 2026 and closes on 12 January 2027.",
  ],
  ["What if I miss the deadline?", "Late submissions are not accepted."],
  [
    "Can I register after the hackathon starts?",
    "Yes. Registration stays open until 12 January 2027, but your project must be submitted by then too.",
  ],
  [
    "When and where is the pitch?",
    "On 16 January 2027. The venue will be announced.",
  ],
  [
    "Do I have to be there to pitch?",
    "Yes. Every team member must be there on pitch day. If you are participating alone, you come alone.",
  ],
  [
    "How long is the pitch?",
    "5 minutes to pitch and 3 minutes for judges' questions.",
  ],
  [
    "How will projects be judged?",
    "Judges score problem understanding, creativity, technical execution, design and user experience, practicality and impact, and the pitch.",
  ],
  ["What do winners get?", "Details of prizes and recognition will be announced."],
  ["Who do I contact with a question?", `Email ${EMAIL}.`],
];

// Newest first: { date: "12 December 2026", title: "..." }
export const UPDATES: { date: string; title: string }[] = [];
