export type LocationId = "downtown" | "westside" | "harbor";

export type Location = {
  id: LocationId;
  name: string;
  shortName: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  image: string;
  hours: { days: string; time: string }[];
  amenities: string[];
  size: string;
  description: string;
};

export type ClassType = {
  id: string;
  name: string;
  category: "hiit" | "cycle" | "strength" | "boxing" | "yoga" | "pilates" | "sculpt";
  blurb: string;
  duration: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  image: string;
  description: string;
};

export type Trainer = {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  clubs: LocationId[];
  image: string;
  bio: string;
  certs: string[];
};

export type Membership = {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export type ScheduleSlot = {
  id: string;
  classId: string;
  trainerId: string;
  locationId: LocationId;
  day: number;
  time: string;
  spots: number;
  taken: number;
};

export type Story = {
  id: string;
  name: string;
  result: string;
  quote: string;
  image: string;
  club: string;
  months: number;
};

export type Job = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

export const brand = {
  name: "Lapo Gym",
  short: "LAPO",
  tagline: "Train without compromise.",
  city: "New York",
  email: "hello@lapogym.com",
  phone: "(212) 555-0148",
};

export const locations: Location[] = [
  {
    id: "downtown",
    name: "Lapo Downtown",
    shortName: "Downtown",
    neighborhood: "SoHo",
    address: "88 Mercer Street",
    city: "New York, NY 10012",
    phone: "(212) 555-0148",
    email: "downtown@lapogym.com",
    image: "/images/location-downtown.jpg",
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 11:00 PM" },
      { days: "Sat–Sun", time: "7:00 AM – 9:00 PM" },
    ],
    amenities: [
      "Olympic lifting platforms",
      "Boxing lab",
      "Infrared recovery suite",
      "Member cafe",
      "Steam & cold plunge",
    ],
    size: "28,000 sq ft",
    description:
      "Our flagship floor — triple-height ceilings, a full combat studio, and the original Lapo strength hall.",
  },
  {
    id: "westside",
    name: "Lapo Westside",
    shortName: "Westside",
    neighborhood: "Upper West Side",
    address: "412 Columbus Avenue",
    city: "New York, NY 10024",
    phone: "(212) 555-0192",
    email: "westside@lapogym.com",
    image: "/images/location-westside.jpg",
    hours: [
      { days: "Mon–Fri", time: "5:30 AM – 10:00 PM" },
      { days: "Sat–Sun", time: "7:00 AM – 8:00 PM" },
    ],
    amenities: [
      "Reformer pilates studio",
      "Cycle theater",
      "Childcare mornings",
      "Rooftop mobility deck",
      "Towel service",
    ],
    size: "19,500 sq ft",
    description:
      "A brighter, residential club built for weekday performance and weekend restoration.",
  },
  {
    id: "harbor",
    name: "Lapo Harbor",
    shortName: "Harbor",
    neighborhood: "Brooklyn Waterfront",
    address: "15 Pier Walk",
    city: "Brooklyn, NY 11201",
    phone: "(718) 555-0174",
    email: "harbor@lapogym.com",
    image: "/images/location-harbor.jpg",
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:30 PM" },
      { days: "Sat–Sun", time: "7:00 AM – 8:00 PM" },
    ],
    amenities: [
      "Turf performance lane",
      "Open-air terrace",
      "Sauna",
      "Physio suite",
      "Secure bike storage",
    ],
    size: "22,000 sq ft",
    description:
      "Harbor light, long turf, and programming built for athletes who train before the city wakes up.",
  },
];

export const classTypes: ClassType[] = [
  {
    id: "lapo-hiit",
    name: "Lapo HIIT",
    category: "hiit",
    blurb: "Forty minutes. No wasted motion.",
    duration: 45,
    intensity: 5,
    image: "/images/hiit.jpg",
    description:
      "Interval blocks mixing sleds, kettlebells, and floor work. Coached tightly so every round has a purpose.",
  },
  {
    id: "cycle-forge",
    name: "Cycle Forge",
    category: "cycle",
    blurb: "Endurance with a soundtrack.",
    duration: 45,
    intensity: 4,
    image: "/images/cycling.jpg",
    description:
      "A darkened cycle theater, live coaching, and climbs that actually teach pacing — not just volume.",
  },
  {
    id: "strength-foundations",
    name: "Strength Foundations",
    category: "strength",
    blurb: "Barbell literacy for every body.",
    duration: 55,
    intensity: 3,
    image: "/images/strength.jpg",
    description:
      "Squat, hinge, press, pull. Small groups, serious cues, and progressive loading you can feel week to week.",
  },
  {
    id: "boxing-lab",
    name: "Boxing Lab",
    category: "boxing",
    blurb: "Footwork, power, composure.",
    duration: 50,
    intensity: 4,
    image: "/images/boxing.jpg",
    description:
      "Technical pad work and bag rounds coached like a fight camp, without the ego of one.",
  },
  {
    id: "yoga-restore",
    name: "Yoga Restore",
    category: "yoga",
    blurb: "Quiet strength. Longer exhale.",
    duration: 60,
    intensity: 2,
    image: "/images/yoga.jpg",
    description:
      "Slow vinyasa and restorative holds designed to undo a heavy training week — and a louder city.",
  },
  {
    id: "reformer",
    name: "Reformer Pilates",
    category: "pilates",
    blurb: "Precision over spectacle.",
    duration: 50,
    intensity: 3,
    image: "/images/pilates.jpg",
    description:
      "Reformer work for core control, posture, and the kind of strength that shows up in every other class.",
  },
  {
    id: "sculpt",
    name: "Sculpt",
    category: "sculpt",
    blurb: "Loaded movement, music-led.",
    duration: 45,
    intensity: 3,
    image: "/images/stretching.jpg",
    description:
      "Dumbbells, tempo, and floor series that build lean strength without beating up your joints.",
  },
];

export const trainers: Trainer[] = [
  {
    id: "marcus-hale",
    name: "Marcus Hale",
    role: "Head of Strength",
    specialties: ["Olympic lifting", "Hypertrophy", "Athlete prep"],
    clubs: ["downtown", "harbor"],
    image: "/images/trainer-marcus.jpg",
    bio: "Former collegiate thrower who built Lapo’s barbell curriculum. Marcus coaches the lift you think you already know — until you don’t.",
    certs: ["CSCS", "USA Weightlifting L2"],
  },
  {
    id: "elena-voss",
    name: "Elena Voss",
    role: "Performance Coach",
    specialties: ["HIIT", "Conditioning", "Return-to-train"],
    clubs: ["downtown", "westside"],
    image: "/images/trainer-elena.jpg",
    bio: "Elena programs the rooms that make people stay. Equal parts scientist and hype — never one without the other.",
    certs: ["NASM-CPT", "PN1"],
  },
  {
    id: "james-okonkwo",
    name: "James Okonkwo",
    role: "Boxing Director",
    specialties: ["Boxing", "Footwork", "Combat conditioning"],
    clubs: ["downtown"],
    image: "/images/trainer-james.jpg",
    bio: "Twelve years in amateur boxing, now teaching civilians how to move with intent. Calm voice. Serious rounds.",
    certs: ["USA Boxing Coach", "CPR/AED"],
  },
  {
    id: "sofia-reyes",
    name: "Sofia Reyes",
    role: "Pilates & Mobility",
    specialties: ["Reformer", "Mobility", "Posture"],
    clubs: ["westside", "harbor"],
    image: "/images/trainer-sofia.jpg",
    bio: "Sofia treats alignment as a performance skill. Members come for pilates and leave moving like athletes.",
    certs: ["Balanced Body", "FRC"],
  },
  {
    id: "diego-mora",
    name: "Diego Mora",
    role: "Personal Training Lead",
    specialties: ["Fat loss", "Strength", "Habit coaching"],
    clubs: ["harbor", "downtown"],
    image: "/images/trainer-diego.jpg",
    bio: "Diego’s 12-week blocks are famous for being honest: measured, repeatable, and slightly uncomfortable in the best way.",
    certs: ["CSCS", "Precision Nutrition L2"],
  },
  {
    id: "maya-chen",
    name: "Maya Chen",
    role: "Cycle & Sculpt",
    specialties: ["Cycle", "Sculpt", "Endurance"],
    clubs: ["westside"],
    image: "/images/trainer-maya.jpg",
    bio: "Maya built Cycle Forge’s playlists and pacing model. She coaches effort like a language you can actually learn.",
    certs: ["Schwinn Master", "ACE-CPT"],
  },
];

export const memberships: Membership[] = [
  {
    id: "studio",
    name: "Studio",
    price: 89,
    period: "month",
    tagline: "A focused start at one club.",
    features: [
      "8 group classes / month",
      "Access to 1 home club",
      "Open gym 3 days / week",
      "Lapo app + training logs",
      "Guest pass twice a year",
    ],
    cta: "Start Studio",
  },
  {
    id: "performance",
    name: "Performance",
    price: 189,
    period: "month",
    tagline: "Unlimited training, every club.",
    featured: true,
    features: [
      "Unlimited group classes",
      "All three Lapo clubs",
      "Open gym 24/7 member hours",
      "2 guest passes / month",
      "Recovery suite access",
      "Priority class booking",
    ],
    cta: "Join Performance",
  },
  {
    id: "black",
    name: "Black",
    price: 329,
    period: "month",
    tagline: "The private-club layer.",
    features: [
      "Everything in Performance",
      "4 PT sessions / month",
      "Towel, locker, and laundry",
      "Quarterly movement screen",
      "Event and retreat access",
      "Dedicated member concierge",
    ],
    cta: "Apply for Black",
  },
];

export const corporatePerks = [
  "Volume pricing from 8 employees",
  "On-site workshops and team challenges",
  "Quarterly wellness reporting",
  "Flexible home-club assignment",
  "Executive Black upgrades",
  "New-hire onboarding credits",
];

export const stories: Story[] = [
  {
    id: "aria",
    name: "Aria Bennett",
    result: "Lost 28 lbs, deadlifted 225",
    quote:
      "I joined for a tour and stayed because nobody treated me like a beginner. They treated me like an athlete in progress.",
    image: "/images/story-aria.jpg",
    club: "Westside",
    months: 9,
  },
  {
    id: "noah",
    name: "Noah & Priya Shah",
    result: "Trained together 4x a week",
    quote:
      "Lapo became our third place. Boxing on Thursdays, pilates on Sundays, and a membership that actually gets used.",
    image: "/images/story-noah.jpg",
    club: "Harbor",
    months: 14,
  },
  {
    id: "cole",
    name: "Cole Ramirez",
    result: "Finished first marathon, pain-free",
    quote:
      "Strength Foundations fixed what running broke. The coaching is specific. The floors are serious. I stopped shopping gyms.",
    image: "/images/story-couple.jpg",
    club: "Downtown",
    months: 11,
  },
  {
    id: "team",
    name: "The Friday 6am Crew",
    result: "A class that became a community",
    quote:
      "We started as strangers in Lapo HIIT. Now we have a group chat, a brunch rotation, and PRs we text each other.",
    image: "/images/story-group.jpg",
    club: "Downtown",
    months: 18,
  },
];

export const schedule: ScheduleSlot[] = [
  { id: "s1", classId: "lapo-hiit", trainerId: "elena-voss", locationId: "downtown", day: 1, time: "06:15", spots: 18, taken: 14 },
  { id: "s2", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "downtown", day: 1, time: "07:00", spots: 12, taken: 11 },
  { id: "s3", classId: "cycle-forge", trainerId: "maya-chen", locationId: "westside", day: 1, time: "07:15", spots: 28, taken: 22 },
  { id: "s4", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "harbor", day: 1, time: "12:00", spots: 16, taken: 9 },
  { id: "s5", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 1, time: "18:30", spots: 16, taken: 16 },
  { id: "s6", classId: "sculpt", trainerId: "maya-chen", locationId: "westside", day: 1, time: "18:45", spots: 20, taken: 13 },
  { id: "s7", classId: "reformer", trainerId: "sofia-reyes", locationId: "westside", day: 2, time: "06:30", spots: 10, taken: 10 },
  { id: "s8", classId: "lapo-hiit", trainerId: "diego-mora", locationId: "harbor", day: 2, time: "06:45", spots: 18, taken: 12 },
  { id: "s9", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "harbor", day: 2, time: "12:15", spots: 12, taken: 7 },
  { id: "s10", classId: "cycle-forge", trainerId: "maya-chen", locationId: "westside", day: 2, time: "18:00", spots: 28, taken: 25 },
  { id: "s11", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 2, time: "19:00", spots: 16, taken: 12 },
  { id: "s12", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "westside", day: 2, time: "19:30", spots: 16, taken: 8 },
  { id: "s13", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "downtown", day: 3, time: "06:00", spots: 12, taken: 9 },
  { id: "s14", classId: "lapo-hiit", trainerId: "elena-voss", locationId: "westside", day: 3, time: "07:00", spots: 18, taken: 15 },
  { id: "s15", classId: "reformer", trainerId: "sofia-reyes", locationId: "harbor", day: 3, time: "09:00", spots: 10, taken: 6 },
  { id: "s16", classId: "sculpt", trainerId: "elena-voss", locationId: "downtown", day: 3, time: "12:10", spots: 20, taken: 11 },
  { id: "s17", classId: "cycle-forge", trainerId: "maya-chen", locationId: "westside", day: 3, time: "18:30", spots: 28, taken: 20 },
  { id: "s18", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 3, time: "18:45", spots: 16, taken: 14 },
  { id: "s19", classId: "lapo-hiit", trainerId: "diego-mora", locationId: "harbor", day: 4, time: "06:15", spots: 18, taken: 17 },
  { id: "s20", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "westside", day: 4, time: "07:30", spots: 16, taken: 10 },
  { id: "s21", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "downtown", day: 4, time: "12:00", spots: 12, taken: 8 },
  { id: "s22", classId: "reformer", trainerId: "sofia-reyes", locationId: "westside", day: 4, time: "18:00", spots: 10, taken: 9 },
  { id: "s23", classId: "sculpt", trainerId: "maya-chen", locationId: "westside", day: 4, time: "19:00", spots: 20, taken: 16 },
  { id: "s24", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 4, time: "19:15", spots: 16, taken: 13 },
  { id: "s25", classId: "cycle-forge", trainerId: "maya-chen", locationId: "westside", day: 5, time: "06:30", spots: 28, taken: 19 },
  { id: "s26", classId: "lapo-hiit", trainerId: "elena-voss", locationId: "downtown", day: 5, time: "07:00", spots: 18, taken: 18 },
  { id: "s27", classId: "strength-foundations", trainerId: "diego-mora", locationId: "harbor", day: 5, time: "12:15", spots: 12, taken: 5 },
  { id: "s28", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "harbor", day: 5, time: "17:30", spots: 16, taken: 7 },
  { id: "s29", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 5, time: "18:00", spots: 16, taken: 15 },
  { id: "s30", classId: "sculpt", trainerId: "elena-voss", locationId: "downtown", day: 5, time: "18:45", spots: 20, taken: 12 },
  { id: "s31", classId: "lapo-hiit", trainerId: "diego-mora", locationId: "harbor", day: 6, time: "08:00", spots: 18, taken: 11 },
  { id: "s32", classId: "cycle-forge", trainerId: "maya-chen", locationId: "westside", day: 6, time: "09:00", spots: 28, taken: 21 },
  { id: "s33", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "downtown", day: 6, time: "10:00", spots: 12, taken: 9 },
  { id: "s34", classId: "reformer", trainerId: "sofia-reyes", locationId: "westside", day: 6, time: "11:00", spots: 10, taken: 8 },
  { id: "s35", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "downtown", day: 6, time: "16:00", spots: 16, taken: 6 },
  { id: "s36", classId: "yoga-restore", trainerId: "sofia-reyes", locationId: "harbor", day: 0, time: "09:00", spots: 16, taken: 12 },
  { id: "s37", classId: "sculpt", trainerId: "maya-chen", locationId: "westside", day: 0, time: "10:00", spots: 20, taken: 14 },
  { id: "s38", classId: "boxing-lab", trainerId: "james-okonkwo", locationId: "downtown", day: 0, time: "11:00", spots: 16, taken: 9 },
  { id: "s39", classId: "strength-foundations", trainerId: "marcus-hale", locationId: "harbor", day: 0, time: "12:00", spots: 12, taken: 4 },
];

export const faqs = [
  {
    q: "Can I tour a club before joining?",
    a: "Yes. Book a complimentary 30-minute facility tour at any location. You’ll walk the floor, meet a coach, and leave with a programming recommendation — no pressure close.",
  },
  {
    q: "Do memberships include all three clubs?",
    a: "Studio is home-club based. Performance and Black include unlimited access to Downtown, Westside, and Harbor.",
  },
  {
    q: "How does class booking work?",
    a: "Members book in the portal up to 7 days out. Performance and Black get a 2-hour priority window. Waitlists auto-promote 2 hours before start.",
  },
  {
    q: "Is there a contract?",
    a: "Month-to-month after a 30-day start. Freeze any time for travel or medical leave. Cancel with 14 days’ notice.",
  },
  {
    q: "Do you offer personal training packages?",
    a: "Yes — 4, 8, and 12-session blocks, plus Black membership which includes four sessions every month. All PT starts with a movement screen.",
  },
  {
    q: "What should I bring?",
    a: "Training shoes, a water bottle, and yourself. We provide towels on Performance and Black. Day lockers are free; assigned lockers are a paid add-on.",
  },
  {
    q: "Are beginners welcome?",
    a: "Completely. Strength Foundations, Sculpt, and Yoga Restore are built as on-ramps. Coaches scale every class in real time.",
  },
  {
    q: "Do you have corporate plans?",
    a: "Teams of 8+ receive volume pricing, on-site workshops, and a dedicated account lead. Start on the Corporate page.",
  },
];

export const jobs: Job[] = [
  {
    id: "coach-strength",
    title: "Strength Coach",
    team: "Coaching",
    location: "Downtown / Harbor",
    type: "Full-time",
    summary: "Lead Foundations classes and 1:1 blocks. Barbell fluency and a calm floor presence required.",
  },
  {
    id: "front-of-house",
    title: "Member Concierge",
    team: "Hospitality",
    location: "Westside",
    type: "Full-time",
    summary: "The first face of Lapo. Tours, locker issues, and the kind of memory for names that makes a club feel private.",
  },
  {
    id: "cycle-instructor",
    title: "Cycle Instructor",
    team: "Group Fitness",
    location: "Westside",
    type: "Part-time",
    summary: "Own early and evening Cycle Forge slots. Playlist taste and precise cueing over theatrics.",
  },
  {
    id: "physio",
    title: "In-house Physio",
    team: "Performance Medicine",
    location: "Harbor",
    type: "Contract",
    summary: "Screens, return-to-train plans, and a close loop with our coaching staff.",
  },
];

export const values = [
  {
    title: "Craft over noise",
    body: "Programming is written, coached, and revised. We do not launch a class because it photographs well.",
  },
  {
    title: "Hospitality is training",
    body: "A serious floor still knows your name. The front desk is part of the workout, not a turnstile.",
  },
  {
    title: "Progress you can measure",
    body: "Screens, logs, and coaches who remember last month’s numbers. Motivation is a byproduct.",
  },
  {
    title: "Rooms with a point of view",
    body: "Three clubs, one standard. Different light, same expectation: show up ready.",
  },
];

export const nav = [
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Overview" },
      { href: "/services/group-fitness", label: "Group Fitness" },
      { href: "/services/personal-training", label: "Personal Training" },
      { href: "/schedule", label: "Class Schedule" },
    ],
  },
  {
    href: "/pricing",
    label: "Pricing",
    children: [
      { href: "/pricing", label: "Memberships" },
      { href: "/pricing/corporate", label: "Corporate Plans" },
    ],
  },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Our Story" },
      { href: "/trainers", label: "Trainers" },
      { href: "/stories", label: "Success Stories" },
    ],
  },
  {
    href: "/locations",
    label: "Locations",
    children: [
      { href: "/locations", label: "Clubs" },
      { href: "/tour", label: "Book a Tour" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const stats = [
  { value: "03", label: "New York clubs" },
  { value: "12k", label: "Active members" },
  { value: "80+", label: "Classes each week" },
  { value: "2014", label: "Year we opened" },
];

export function getClass(id: string) {
  return classTypes.find((c) => c.id === id);
}

export function getTrainer(id: string) {
  return trainers.find((t) => t.id === id);
}

export function getLocation(id: string) {
  return locations.find((l) => l.id === id);
}

export function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = ((h + 11) % 12) + 1;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const demoMember = {
  name: "Alex Rivera",
  email: "member@lapogym.com",
  password: "lapo2026",
  plan: "Performance",
  planId: "performance",
  locationId: "downtown" as LocationId,
  memberSince: "March 2024",
  nextBill: "May 12, 2026",
  amount: 189,
  status: "Active",
};
