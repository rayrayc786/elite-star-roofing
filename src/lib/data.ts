// ============================================================
// CENTRALIZED BUSINESS DATA
// All business information in one place for easy updates.
// Replace placeholder values with real data when available.
// ============================================================

export const businessInfo = {
  name: "Elite Star Roofing WA",
  shortName: "Elite Star",
  tagline: "Reliable Roofing Solutions Built to Protect Your Home",
  phone: "+61 451 901 275", // Replace with actual phone number
  phoneRaw: "+61451901275", // Replace with tel: link format e.g. +61400000000
  email: "elitestarroofing@gmail.com", // Replace with actual email
  address: "[BUSINESS ADDRESS]", // Replace with actual address
  city: "[CITY]",
  state: "WA",
  country: "Australia",
  abn: "[ABN NUMBER]", // Replace with actual ABN
  license: "[LICENSE NUMBER]", // Replace with actual license
  openingHours: {
    weekdays: "[OPENING HOURS]", // e.g. "7:00 AM – 5:00 PM"
    saturday: "[SATURDAY HOURS]",
    sunday: "Closed",
  },
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  galleryImages?: string[];
  problems: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortName: "Cleaning",
    tagline: "High-pressure moss, lichen & dirt removal",
    description:
      "Professional roof cleaning and pressure washing services to eliminate stubborn moss, lichen, algae, and accumulated debris. We restore your roof's original appearance and ensure unblocked water channels.",
    icon: "Wrench",
    image: "/images/web/IMG_4970.jpg",
    galleryImages: [
      "/images/web/IMG_4970.jpg",
      "/images/web/IMG_4965.jpg",
      "/images/web/IMG_5652.jpg",
      "/images/web/IMG_5647.jpg",
    ],
    problems: [
      "Heavy moss, lichen, and algae buildup",
      "Blocked roof channels and water backup",
      "Stained, dirty, or discoloured roof tiles",
      "Slippery roof surface reducing tile lifespan",
      "Debris buildup in valleys and gutters",
    ],
    processSteps: [
      {
        title: "Roof Surface Inspection",
        description:
          "We assess your roof's tile condition and identify areas requiring targeted cleaning and debris removal.",
      },
      {
        title: "Site & Gutter Protection",
        description:
          "We protect surrounding property, downpipes, and garden areas before starting high-pressure cleaning.",
      },
      {
        title: "Professional Pressure Wash",
        description:
          "Our team uses commercial-grade pressure cleaning equipment to lift moss, algae, and grime safely.",
      },
      {
        title: "Final Washdown & Inspection",
        description:
          "We rinse down gutters, clean up the perimeter, and inspect the roof surface for complete cleanliness.",
      },
    ],
    faqs: [
      {
        question: "Why is roof cleaning important?",
        answer:
          "Moss and lichen trap moisture against roof tiles, accelerating wear and blocking drainage channels. Regular roof cleaning prevents water backup and keeps your roof looking like new.",
      },
      {
        question: "Will pressure washing damage my roof tiles?",
        answer:
          "Our technicians adjust pressure levels based on tile material (concrete, terracotta, Colorbond) to ensure deep cleaning without causing surface damage.",
      },
      {
        question: "How long does a roof cleaning service take?",
        answer:
          "Most residential roof cleaning jobs are completed within a single day depending on property size and moss buildup.",
      },
    ],
    ctaText: "Request Roof Cleaning Quote",
    metaTitle: "Roof Cleaning & Pressure Washing Services | Elite Star Roofing WA",
    metaDescription:
      "Professional roof cleaning in WA. We remove moss, lichen, and dirt build-up to protect tile life. Get a free quote from Elite Star Roofing WA.",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortName: "Leak Detection",
    tagline: "For finding and sealing the true source of water intrusion",
    description:
      "Expert leak detection services to trace and identify the true source of roof leaks. The visible leak inside is not always where water enters — we trace the exact intrusion path and fix it permanently.",
    icon: "Droplets",
    image: "/images/web/IMG_0918.jpg",
    galleryImages: [
      "/images/web/IMG_0918.jpg",
      "/images/web/IMG_0919.jpg",
      "/images/web/WhatsApp_Image_2026-10-07_at_09_33_00.jpg",
      "/images/web/WhatsApp_Image_2026-10-07_at_09_33_12__2.jpg",
    ],
    problems: [
      "Water stains on ceilings or walls",
      "Dripping water during rain storms",
      "Mould or mildew growth near ceilings",
      "Musty odours in roof cavities",
      "Peeling paint or sagging plasterboard",
      "Unexplained dampness near internal walls",
    ],
    processSteps: [
      {
        title: "Identify Symptoms",
        description:
          "We start by examining interior water stains, ceiling drips, and damp spots inside your home.",
      },
      {
        title: "Roof & Cavity Inspection",
        description:
          "We inspect roof surface tiles, flashing, valleys, penetration seals, and internal ceiling cavity structures.",
      },
      {
        title: "Trace & Diagnose",
        description:
          "We trace the water path from internal symptoms back to the exact point of entry on your roof.",
      },
      {
        title: "Permanent Repair",
        description:
          "Once pinpointed, we replace damaged tiles/flashing and seal the leak to prevent future water ingress.",
      },
    ],
    faqs: [
      {
        question: "Why can't I find where the leak is coming from?",
        answer:
          "Water can travel along roof structures, rafters, and sarking for meters before dripping onto plasterboard. Professional leak detection traces this path directly back to the roof surface entry point.",
      },
      {
        question: "What happens during a leak detection inspection?",
        answer:
          "We thoroughly check flashing points, roof penetrations (vents, flues), valleys, ridge lines, and tile integrity, inspecting both roof exterior and interior cavity where accessible.",
      },
      {
        question: "Should I wait until the next rain to get a leak inspected?",
        answer:
          "No. Immediate inspection prevents secondary water damage to timber framework, insulation, and electrical wiring.",
      },
    ],
    ctaText: "Book Leak Detection Service",
    metaTitle: "Roof Leak Detection Services | Elite Star Roofing WA",
    metaDescription:
      "Can't find where the leak is coming from? Our leak detection service traces the actual source of water intrusion. Get expert help from Elite Star Roofing WA.",
  },
  {
    slug: "roof-pointing",
    name: "Roof Pointing",
    shortName: "Pointing",
    tagline: "Ridge cap re-bedding & flexible pointing restoration",
    description:
      "Comprehensive roof re-pointing and bedding services to secure loose ridge caps and seal your roof against heavy weather. We use premium flexible pointing compounds designed for long-lasting durability in Australian conditions.",
    icon: "RotateCcw",
    image: "/images/web/IMG_2870.jpg",
    galleryImages: [
      "/images/web/IMG_2870.jpg",
      "/images/web/IMG_2429.jpg",
      "/images/web/IMG_2442.jpg",
      "/images/web/IMG_2866.jpg",
      "/images/web/IMG_2968.jpg",
    ],
    problems: [
      "Cracked, crumbling, or missing ridge cap mortar",
      "Loose or dislodged ridge capping tiles",
      "Water ingress around roof ridges and hips",
      "Aging roof needing structural bedding repair",
      "Deteriorating cement pointing from weather exposure",
    ],
    processSteps: [
      {
        title: "Ridge Condition Assessment",
        description:
          "We inspect all ridge capping, hip lines, and existing mortar bedding across your roof.",
      },
      {
        title: "Old Mortar Removal & Bedding Prep",
        description:
          "Damaged cement mortar is cleared away and loose ridge caps are reset on a fresh sand-cement bed.",
      },
      {
        title: "Flexible Pointing Application",
        description:
          "High-adhesion flexible pointing compound is trowelled over all caps to lock them securely in place.",
      },
      {
        title: "Color Matching & Cleanup",
        description:
          "Pointing is color-matched to your roof tile shade, leaving a clean, seamless, storm-proof seal.",
      },
    ],
    faqs: [
      {
        question: "What is flexible roof pointing?",
        answer:
          "Unlike traditional rigid cement, flexible pointing expands and contracts with home settlement and temperature fluctuations, preventing cracking and dislodging.",
      },
      {
        question: "How do I know if my roof needs re-pointing?",
        answer:
          "Look for cracked mortar under ridge caps, loose capping tiles, or loose cement pieces falling into your gutters.",
      },
      {
        question: "How long does new roof pointing last?",
        answer:
          "Quality flexible pointing can last 10 to 15+ years under typical Australian weather conditions when applied professionally.",
      },
    ],
    ctaText: "Request Pointing Quote",
    metaTitle: "Roof Re-Pointing & Bedding Services | Elite Star Roofing WA",
    metaDescription:
      "Professional roof pointing and ridge cap re-bedding in WA. Secure loose tiles and prevent leaks with high-adhesion flexible pointing from Elite Star Roofing WA.",
  },
  {
    slug: "roof-painting",
    name: "Roof Painting",
    shortName: "Painting",
    tagline: "Protective coating & aesthetic roof transformations",
    description:
      "Professional roof painting and protective coating services to refresh tile appearance, seal porous surfaces, and shield your home from intense UV rays and harsh WA weather.",
    icon: "Paintbrush",
    image: "/images/web/IMG_5505.jpg",
    galleryImages: [
      "/images/web/IMG_5505.jpg",
      "/images/web/IMG_5293.jpg",
      "/images/web/IMG_1544.jpg",
      "/images/web/IMG_2914.jpg",
      "/images/web/IMG_5794.jpg",
    ],
    problems: [
      "Faded, dull, or discoloured roof tiles",
      "Peeling or flaking existing roof paint",
      "Porous tiles absorbing rainwater",
      "Desire to modernise roof color and curb appeal",
      "Roof surface needing UV and weather barrier protection",
    ],
    processSteps: [
      {
        title: "Thorough Surface Cleaning",
        description:
          "We high-pressure clean all tile surfaces to eliminate grime, chalking, moss, and loose paint.",
      },
      {
        title: "Repairs & Re-pointing",
        description:
          "Broken tiles are replaced and ridge caps re-pointed before paint primer application.",
      },
      {
        title: "Primer & Sealer Application",
        description:
          "A high-penetration primer sealer is applied to bind the tile surface and maximize topcoat adhesion.",
      },
      {
        title: "Dual Topcoat Painting",
        description:
          "Two full coats of premium acrylic roof membrane paint are applied for deep color and UV protection.",
      },
    ],
    faqs: [
      {
        question: "Why paint a roof instead of replacing it?",
        answer:
          "If roof tiles are structurally sound, painting provides a brand-new aesthetic look and waterproof protection at a fraction of full replacement cost.",
      },
      {
        question: "What roof paint colors are available?",
        answer:
          "We offer a wide range of standard and modern Colorbond-matched roof paint shades including Charcoal, Slate Grey, Monument, Terracotta Red, and Classic Cream.",
      },
      {
        question: "How long does roof paint take to cure?",
        answer:
          "Topcoats dry within hours and fully cure in 48-72 hours, providing immediate weather resistance.",
      },
    ],
    ctaText: "Request Roof Painting Quote",
    metaTitle: "Roof Painting & Membrane Coating | Elite Star Roofing WA",
    metaDescription:
      "Transform your roof with professional roof painting in WA. We prime, repair, and apply high-durability acrylic coatings. Get a free quote from Elite Star Roofing WA.",
  },
  {
    slug: "all-roofing-service",
    name: "All Roofing Services",
    shortName: "All Services",
    tagline: "Comprehensive residential roofing solutions in WA",
    description: "From targeted repairs and leak tracing to complete roof re-pointing and painting, our team handles all residential roofing needs across Western Australia.",
    icon: "Home",
    image: "/images/web/IMG_5760_JPG.jpg",
    galleryImages: [
      "/images/web/IMG_5760_JPG.jpg",
      "/images/web/IMG_5780.jpg",
      "/images/web/IMG_5797.jpg",
      "/images/web/IMG_5806.jpg",
    ],
    problems: [
      "General roof wear and age deterioration",
      "Multiple simultaneous roofing issues (leaks + broken tiles)",
      "Comprehensive pre-winter preventative roof maintenance",
      "Complete roof restoration package required",
    ],
    processSteps: [
      {
        title: "Comprehensive Roof Inspection",
        description: "We inspect your entire roof system, valleys, flashing, and gutter connections."
      },
      {
        title: "Customized Service Plan",
        description: "We outline exact required services with a transparent, itemized quote."
      },
      {
        title: "Expert Execution",
        description: "Our experienced team carries out repairs, cleaning, re-pointing, or painting safely."
      }
    ],
    faqs: [
      {
        question: "Do you service all suburbs in WA?",
        answer: "Yes! We service Bunbury, Mandurah, Canning Vale, Perth metropolitan areas, and surrounding regions."
      }
    ],
    ctaText: "Get a Comprehensive Quote",
    metaTitle: "All Roofing Services | Elite Star Roofing WA",
    metaDescription: "Comprehensive roofing services in WA. We handle everything from repairs and maintenance to full roof restorations."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Tell us about your roof problem or what you need done.",
  },
  {
    number: "02",
    title: "Roof Assessment",
    description: "We assess the condition or problem with your roof.",
  },
  {
    number: "03",
    title: "Clear Quote",
    description: "We explain the recommended work and provide a clear quote.",
  },
  {
    number: "04",
    title: "Professional Work",
    description: "Our team completes the agreed roofing service.",
  },
  {
    number: "05",
    title: "Final Check",
    description: "We review the completed work together with you.",
  },
];

export const trustPoints = [
  { icon: "Shield", title: "Professional Roofing Services" },
  { icon: "FileText", title: "Free Quotes" },
  { icon: "MapPin", title: "Local WA Service" },
  { icon: "Award", title: "Quality Workmanship" },
];

export const whyUsPoints = [
  {
    icon: "MessageSquare",
    title: "Professional Approach",
    description:
      "Clear communication from your first contact through to project completion.",
  },
  {
    icon: "Search",
    title: "Problem-Focused Solutions",
    description:
      "We identify the actual roofing problem before recommending any work.",
  },
  {
    icon: "ClipboardCheck",
    title: "Detailed Service",
    description:
      "Careful preparation and attention to detail on every job we complete.",
  },
  {
    icon: "Calculator",
    title: "Transparent Quotes",
    description:
      "We clearly explain the recommended work so you know what to expect.",
  },
  {
    icon: "MapPinned",
    title: "Local Roofing Focus",
    description:
      "Focused on serving homeowners across our WA service area.",
  },
  {
    icon: "Clock",
    title: "Responsive Service",
    description:
      "We aim to respond to enquiries promptly and schedule work efficiently.",
  },
];

export const problemCards = [
  {
    problem: "Roof leaking?",
    description: "Water entering your home needs urgent attention.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Water stains?",
    description: "Stains on ceilings or walls could indicate a roof leak.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Damaged tiles?",
    description: "Broken, cracked, or missing tiles leave your roof vulnerable.",
    serviceSlug: "roof-repair",
  },
  {
    problem: "Cracked surfaces?",
    description: "Cracked roofing materials can lead to leaks and further damage.",
    serviceSlug: "roof-repair",
  },
  {
    problem: "Old-looking roof?",
    description: "An aging roof may benefit from restoration or repainting.",
    serviceSlug: "roof-restoration",
  },
  {
    problem: "Faded roof?",
    description: "A faded or discoloured roof can be refreshed with roof painting.",
    serviceSlug: "roof-painting",
  },
  {
    problem: "Storm damage?",
    description: "Storms can cause significant roof damage that needs prompt repair.",
    serviceSlug: "roof-repair",
  },
  {
    problem: "Unsure where the leak is?",
    description: "The source of a leak is often not where the water appears.",
    serviceSlug: "leak-detection",
  },
];

export interface Project {
  slug: string;
  title: string;
  service: string;
  serviceSlug: string;
  location: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  galleryImages?: string[];
  description: string;
  challenge: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "ridge-pointing-restoration",
    title: "Ridge Pointing & Tile Bedding Restoration",
    service: "Roof Pointing",
    serviceSlug: "roof-pointing",
    location: "Canning Vale, WA",
    image: "/images/web/IMG_2870.jpg",
    beforeImage: "/images/web/IMG_2845.jpg",
    afterImage: "/images/web/IMG_2870.jpg",
    galleryImages: [
      "/images/web/IMG_2870.jpg",
      "/images/web/IMG_2429.jpg",
      "/images/web/IMG_2442.jpg",
      "/images/web/IMG_2866.jpg",
    ],
    description: "Complete ridge capping re-bedding and flexible pointing on a classic tiled roof in Canning Vale.",
    challenge: "Cracked cement mortar had caused ridge capping tiles to loosen, posing a high risk of water ingress during severe WA winter storms.",
    result: "Reset all ridge caps on fresh mortar bedding and sealed with weather-resistant flexible pointing for a long-lasting, storm-proof finish.",
  },
  {
    slug: "ceiling-leak-detection-repair",
    title: "Ceiling Water Ingress Trace & Repair",
    service: "Leak Detection",
    serviceSlug: "leak-detection",
    location: "Mandurah, WA",
    image: "/images/web/IMG_0918.jpg",
    beforeImage: "/images/web/IMG_0919.jpg",
    afterImage: "/images/web/IMG_0918.jpg",
    galleryImages: [
      "/images/web/IMG_0918.jpg",
      "/images/web/IMG_0919.jpg",
      "/images/web/WhatsApp_Image_2026-10-07_at_09_33_00.jpg",
    ],
    description: "Expert leak detection to trace ceiling dampness back to a hidden valley flashing failure.",
    challenge: "The visible interior ceiling stain was several meters away from the actual roof entry point where rainwater was leaking under tiles.",
    result: "Traced the water trajectory, replaced corroded valley flashing and damaged tiles, and fully restored interior ceiling protection.",
  },
  {
    slug: "pressure-cleaning-moss-removal",
    title: "High-Pressure Roof Cleaning & Moss Removal",
    service: "Roof Cleaning",
    serviceSlug: "roof-cleaning",
    location: "Bunbury, WA",
    image: "/images/web/IMG_4970.jpg",
    beforeImage: "/images/web/IMG_4965.jpg",
    afterImage: "/images/web/IMG_4970.jpg",
    galleryImages: [
      "/images/web/IMG_4970.jpg",
      "/images/web/IMG_4965.jpg",
      "/images/web/IMG_5652.jpg",
    ],
    description: "Deep pressure cleaning of a heavily lichen-covered tile roof in Bunbury.",
    challenge: "Years of accumulated moss had clogged rainwater channels between tiles, causing water to pool and overflow into eaves.",
    result: "Cleared all lichen, unblocked water flow channels, and thoroughly washed down gutters, leaving the roof looking clean and revitalized.",
  },
  {
    slug: "terracotta-roof-painting-coating",
    title: "Tile Roof Painting & Membrane Coating",
    service: "Roof Painting",
    serviceSlug: "roof-painting",
    location: "Perth, WA",
    image: "/images/web/IMG_5505.jpg",
    beforeImage: "/images/web/IMG_5293.jpg",
    afterImage: "/images/web/IMG_5505.jpg",
    galleryImages: [
      "/images/web/IMG_5505.jpg",
      "/images/web/IMG_5293.jpg",
      "/images/web/IMG_1544.jpg",
      "/images/web/IMG_5794.jpg",
    ],
    description: "Full surface cleaning, tile repairs, priming, and double-coat acrylic roof painting for a home in Perth.",
    challenge: "Severely faded, chalky tiles had lost their protective finish and absorbed moisture during rains.",
    result: "Applied high-durability acrylic roof coating, giving the home a vibrant new look and adding a robust waterproof barrier.",
  },
];

export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
}

// Placeholder service areas — replace with actual service areas
export const serviceAreas: ServiceArea[] = [
  {
    slug: "bunbury",
    name: "Bunbury",
    description: "Professional roofing services in Bunbury. Roof cleaning, pointing, painting, leak detection, and all roofing services.",
  },
  {
    slug: "mandurah",
    name: "Mandurah",
    description: "Professional roofing services in Mandurah. Roof cleaning, pointing, painting, leak detection, and all roofing services.",
  },
  {
    slug: "perth-canning-vale",
    name: "Perth Canning Vale",
    description: "Professional roofing services in Perth Canning Vale. Roof cleaning, pointing, painting, leak detection, and all roofing services.",
  },
];

export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "What roofing services do you provide?",
    answer:
      "We provide four core roofing services: Roof Repair, Leak Detection, Roof Restoration, and Roof Painting. Each service is designed to address specific roofing problems and needs.",
  },
  {
    category: "General",
    question: "How do I request a quote?",
    answer:
      "You can request a free quote by filling out our online quote form, calling us directly, or sending us an email. We'll get back to you to discuss your roofing needs and arrange an assessment if required.",
  },
  {
    category: "General",
    question: "How long does a roofing job typically take?",
    answer:
      "The duration varies depending on the type of service and scope of work. Minor repairs may take a few hours, while a full roof restoration could take several days. We provide estimated timelines with every quote.",
  },
  {
    category: "General",
    question: "Do you provide free quotes?",
    answer:
      "Yes. We provide free, no-obligation quotes for all our roofing services. Contact us to discuss your needs and we'll arrange an assessment.",
  },
  // Roof Repair
  {
    category: "Roof Repair",
    question: "When does a roof need repair?",
    answer:
      "Signs that your roof may need repair include visible damage to tiles or materials, water stains on ceilings, missing ridge caps, damaged flashing, or any visible wear. If you notice any of these, we recommend getting a professional inspection.",
  },
  {
    category: "Roof Repair",
    question: "Can damaged roof sections be repaired?",
    answer:
      "In many cases, isolated damage can be repaired without replacing the entire roof. We assess the extent of the damage and recommend the most cost-effective solution, whether that's a targeted repair or a broader approach.",
  },
  // Leak Detection
  {
    category: "Leak Detection",
    question: "Why can't I find where the leak is coming from?",
    answer:
      "Water often travels along roof structures, beams, and waterproof membranes before appearing inside your home. The point where you see the water is frequently not where it's entering the roof. Professional leak detection traces the water path to find the actual source.",
  },
  {
    category: "Leak Detection",
    question: "What happens during leak detection?",
    answer:
      "We conduct a thorough inspection of the roof surface, checking all flashing points, penetrations (vents, pipes), valleys, ridge lines, and any areas where water could potentially enter. We then trace the water path to identify the actual leak source.",
  },
  // Roof Restoration
  {
    category: "Roof Restoration",
    question: "What is roof restoration?",
    answer:
      "Roof restoration is a comprehensive process of cleaning, repairing, and protecting an existing roof to extend its lifespan and improve its appearance. It's different from a full replacement — it works with your existing roof structure when it's still structurally sound.",
  },
  {
    category: "Roof Restoration",
    question: "When is restoration suitable?",
    answer:
      "Restoration is typically suitable when the roof structure is sound but the surface shows signs of age, wear, or deterioration. If the underlying structure has significant damage, we'll advise on the best approach for your situation.",
  },
  // Roof Painting
  {
    category: "Roof Painting",
    question: "Why paint a roof?",
    answer:
      "Roof painting refreshes the appearance of your home, adds a protective layer to the roof surface, and can help with weatherproofing. It's a cost-effective way to improve your roof without a full replacement.",
  },
  {
    category: "Roof Painting",
    question: "What preparation is required before painting?",
    answer:
      "Proper preparation is essential for a lasting result. This typically includes pressure cleaning, repairing damaged areas, replacing broken tiles, fixing pointing, and applying primer or sealer where needed.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-identify-a-roof-leak",
    title: "How to Identify a Roof Leak",
    excerpt:
      "Learn the common signs of a roof leak and what to look for before calling a professional.",
    category: "Leak Detection",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_0918.jpg",
  },
  {
    slug: "common-causes-of-roof-leaks",
    title: "Common Causes of Roof Leaks",
    excerpt:
      "Understand the most frequent reasons roofs develop leaks and how to prevent them.",
    category: "Roof Repair",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_0919.jpg",
  },
  {
    slug: "roof-repair-vs-restoration",
    title: "Roof Repair vs Restoration: What's the Difference?",
    excerpt:
      "Not sure whether you need a repair or a full restoration? Here's how to decide.",
    category: "Roof Restoration",
    date: "2024-01-05",
    readTime: "4 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_2870.jpg",
  },
  {
    slug: "roof-painting-preparation-guide",
    title: "Roof Painting Preparation Guide",
    excerpt:
      "Why proper preparation is the key to a long-lasting roof paint job.",
    category: "Roof Painting",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_5505.jpg",
  },
  {
    slug: "signs-your-roof-needs-attention",
    title: "Signs Your Roof Needs Attention",
    excerpt:
      "Don't ignore these warning signs that your roof may need professional attention.",
    category: "General",
    date: "2023-12-15",
    readTime: "4 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_4970.jpg",
  },
  {
    slug: "questions-to-ask-a-roofing-contractor",
    title: "Questions to Ask a Roofing Contractor",
    excerpt:
      "What to ask before hiring a roofing contractor to work on your home.",
    category: "General",
    date: "2023-12-10",
    readTime: "5 min read",
    author: "Elite Star Roofing WA",
    image: "/images/web/IMG_5760_JPG.jpg",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Elite Star Roofing Specialists",
    role: "WA Roofing Team",
    bio: "Dedicated local roofing professionals serving Bunbury, Mandurah, Canning Vale, and Greater WA with top-tier workmanship and reliable customer service.",
    image: "/images/web/IMG_5780.jpg",
  },
];

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  // { label: "Resources", href: "/resources" },
  // { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
