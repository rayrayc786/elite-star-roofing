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
    tagline: "For isolated damage and roof problems",
    description:
      "Professional roof repair services to fix damage, leaks, and wear. We identify the problem, provide a clear quote, and complete quality repairs to protect your home.",
    icon: "Wrench",
    problems: [
      "Missing or broken roof tiles",
      "Cracked or deteriorating roof materials",
      "Storm and weather damage",
      "Damaged or corroded flashing",
      "Water damage and staining",
      "Ridge cap issues",
    ],
    processSteps: [
      {
        title: "Inspection",
        description:
          "We thoroughly inspect your roof to identify all areas of damage and determine the scope of repair needed.",
      },
      {
        title: "Assessment & Quote",
        description:
          "We provide a clear, detailed quote explaining the recommended repairs and expected costs.",
      },
      {
        title: "Professional Repair",
        description:
          "Our team completes the repair work with quality materials and careful workmanship.",
      },
      {
        title: "Final Check",
        description:
          "We review the completed work with you to ensure everything meets our quality standards.",
      },
    ],
    faqs: [
      {
        question: "When does a roof need repair?",
        answer:
          "Common signs include visible damage to tiles or roofing materials, water stains on ceilings, missing ridge caps, damaged flashing, or any visible deterioration. If you notice any of these signs, it's best to have your roof inspected.",
      },
      {
        question: "Can damaged roof sections be repaired without replacing the entire roof?",
        answer:
          "In many cases, yes. Isolated damage such as broken tiles, damaged flashing, or localised wear can often be repaired without a full roof replacement. We'll assess the extent of the damage and recommend the most appropriate solution.",
      },
      {
        question: "How long does a typical roof repair take?",
        answer:
          "The duration depends on the extent of the damage. Minor repairs may be completed in a few hours, while more extensive work could take one to several days. We'll provide an estimated timeline with your quote.",
      },
    ],
    ctaText: "Request Roof Repair",
    metaTitle: "Roof Repair Services | Elite Star Roofing WA",
    metaDescription:
      "Professional roof repair services in WA. We fix damaged tiles, flashing, leaks and storm damage. Get a free quote from Elite Star Roofing WA.",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortName: "Leak Detection",
    tagline: "For finding the source of water intrusion",
    description:
      "Expert leak detection services to trace and identify the true source of roof leaks. The visible leak is not always where the water is entering — we find the actual problem.",
    icon: "Droplets",
    problems: [
      "Water stains on ceilings or walls",
      "Dripping water during rain",
      "Mould or mildew growth",
      "Musty odours in rooms",
      "Peeling paint near the ceiling",
      "Unexplained dampness",
    ],
    processSteps: [
      {
        title: "Identify Symptoms",
        description:
          "We start by understanding the signs you've noticed — water stains, drips, dampness, or mould.",
      },
      {
        title: "Roof Inspection",
        description:
          "We inspect the roof surface, flashing, penetrations, valleys, and all potential entry points.",
      },
      {
        title: "Trace & Diagnose",
        description:
          "We trace the water path from the interior symptoms to the actual point of entry on the roof.",
      },
      {
        title: "Recommend Repair",
        description:
          "Once the source is identified, we provide a clear recommendation and quote for the repair.",
      },
    ],
    faqs: [
      {
        question: "Why can't I find where the leak is coming from?",
        answer:
          "Water can travel along roof structures, beams, and membranes before appearing as a visible leak inside your home. The point where you see the water is often not where it's entering the roof. Professional leak detection traces the water path to find the actual source.",
      },
      {
        question: "What happens during a leak detection inspection?",
        answer:
          "We inspect the roof surface, check all flashing points, penetrations (such as vents and pipes), valleys, ridge lines, and any areas where water could potentially enter. We then trace the water path to identify the source of the leak.",
      },
      {
        question: "Should I wait until the next rain to get a leak inspected?",
        answer:
          "No. It's best to have the inspection done as soon as possible. Even without active rain, experienced inspectors can identify potential leak points and areas of concern. Waiting can lead to further water damage.",
      },
    ],
    ctaText: "Book Leak Detection",
    metaTitle: "Leak Detection Services | Elite Star Roofing WA",
    metaDescription:
      "Can't find where the leak is coming from? Our leak detection service traces the actual source of water intrusion. Get expert help from Elite Star Roofing WA.",
  },
  {
    slug: "roof-pointing",
    name: "Roof Pointing",
    shortName: "Pointing",
    tagline: "For improving and extending the condition of an existing roof",
    description:
      "Comprehensive roof restoration services to extend the life of your existing roof. We clean, repair, prepare, and apply protective finishes to restore your roof's condition and appearance.",
    icon: "RotateCcw",
    problems: [
      "Aging and deteriorating roof",
      "Faded or discoloured roof surface",
      "Multiple areas needing repair",
      "Roof looking worn but structurally sound",
      "Failed or peeling coatings",
      "Moss, lichen, or algae buildup",
    ],
    processSteps: [
      {
        title: "Condition Assessment",
        description:
          "We assess the overall condition of your roof to determine if restoration is appropriate.",
      },
      {
        title: "Cleaning & Preparation",
        description:
          "The roof is thoroughly cleaned to remove dirt, moss, lichen, and any loose material.",
      },
      {
        title: "Repairs",
        description:
          "All necessary repairs are completed — replacing damaged materials, fixing flashing, and addressing any structural issues.",
      },
      {
        title: "Protective Finishing",
        description:
          "A protective coating or sealant is applied to protect the roof surface and enhance its appearance.",
      },
      {
        title: "Final Inspection",
        description:
          "We conduct a thorough final inspection and review the completed restoration with you.",
      },
    ],
    faqs: [
      {
        question: "What is roof restoration?",
        answer:
          "Roof restoration is a comprehensive process of cleaning, repairing, and protecting an existing roof to extend its lifespan and improve its appearance. It's different from a full roof replacement — restoration works with the existing roof structure.",
      },
      {
        question: "When is roof restoration suitable?",
        answer:
          "Restoration is typically suitable when the roof's underlying structure is still sound but the surface is showing signs of age, wear, or deterioration. If the roof structure has significant damage, a different approach may be needed.",
      },
      {
        question: "How long does a roof restoration take?",
        answer:
          "A typical roof restoration can take several days to a week or more, depending on the size of the roof, extent of repairs needed, and weather conditions. We'll provide an estimated timeline after the initial assessment.",
      },
    ],
    ctaText: "Request a Restoration Quote",
    metaTitle: "Roof Restoration Services | Elite Star Roofing WA",
    metaDescription:
      "Professional roof restoration in WA. We clean, repair and protect your existing roof to extend its life. Get a free restoration quote from Elite Star Roofing WA.",
  },
  {
    slug: "roof-painting",
    name: "Roof Painting",
    shortName: "Painting",
    tagline: "For refreshing and protecting suitable roof surfaces",
    description:
      "Professional roof painting services to refresh the look and add a protective layer to your roof. Proper preparation is key — we clean, repair, prime, and paint for a lasting finish.",
    icon: "Paintbrush",
    problems: [
      "Faded or dull roof colour",
      "Peeling or flaking paint",
      "Roof looking tired or dated",
      "Want to change roof colour",
      "Surface needs weather protection",
      "Previous paint job failing",
    ],
    processSteps: [
      {
        title: "Surface Assessment",
        description:
          "We assess the roof surface to determine the preparation and products needed.",
      },
      {
        title: "Cleaning",
        description:
          "The roof is thoroughly pressure-cleaned to remove dirt, moss, and old loose material.",
      },
      {
        title: "Repairs",
        description:
          "Any necessary repairs are completed before painting — cracked tiles, damaged pointing, or flashing issues.",
      },
      {
        title: "Primer & Sealer",
        description:
          "Where appropriate, a primer or sealer is applied to ensure proper adhesion and coverage.",
      },
      {
        title: "Paint Application",
        description:
          "Quality roof paint is applied according to manufacturer specifications for a durable, long-lasting finish.",
      },
    ],
    faqs: [
      {
        question: "Why paint a roof?",
        answer:
          "Roof painting can refresh the appearance of your home, add a protective layer to the roof surface, and potentially improve energy efficiency with reflective coatings. It's a way to give your roof a new lease on life without a full replacement.",
      },
      {
        question: "What preparation is required before roof painting?",
        answer:
          "Proper preparation is essential for a lasting paint job. This typically includes pressure cleaning, repairing any damaged areas, replacing broken tiles, fixing pointing, and applying a primer or sealer where needed.",
      },
      {
        question: "How long does roof paint last?",
        answer:
          "The longevity of roof paint depends on the products used, the quality of preparation, and environmental conditions. A properly prepared and painted roof can last many years, though specific timeframes vary.",
      },
    ],
    ctaText: "Request Roof Painting Quote",
    metaTitle: "Roof Painting Services | Elite Star Roofing WA",
    metaDescription:
      "Professional roof painting in WA. We prepare, prime and paint your roof for a lasting finish. Get a free painting quote from Elite Star Roofing WA.",
  },
  {
    slug: "all-roofing-service",
    name: "All Roofing Services",
    shortName: "All Services",
    tagline: "Comprehensive roofing solutions for your home",
    description: "From minor repairs to major installations, our team handles all types of roofing services.",
    icon: "Home",
    problems: [
      "General roof wear and tear",
      "Need for a new roof",
      "Preventative maintenance"
    ],
    processSteps: [
      {
        title: "Assessment",
        description: "We assess your entire roofing system to recommend the right services."
      },
      {
        title: "Execution",
        description: "Our experts safely and efficiently complete the required work."
      }
    ],
    faqs: [
      {
        question: "Do you handle all types of roofs?",
        answer: "Yes, we have experience working with various roofing materials and structures common in WA."
      }
    ],
    ctaText: "Get a Comprehensive Quote",
    metaTitle: "All Roofing Services | Elite Star Roofing WA",
    metaDescription: "Comprehensive roofing services in WA. We handle everything from repairs and maintenance to new installations."
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
  description: string;
  challenge: string;
  result: string;
}

// Placeholder projects — replace with real projects when available
export const projects: Project[] = [
  {
    slug: "roof-repair-project-1",
    title: "Residential Roof Repair",
    service: "Roof Repair",
    serviceSlug: "roof-repair",
    location: "[Suburb, WA]",
    description: "[Project description placeholder — replace with real project details when available.]",
    challenge: "[Challenge description placeholder]",
    result: "[Result description placeholder]",
  },
  {
    slug: "leak-detection-project-1",
    title: "Leak Detection & Repair",
    service: "Leak Detection",
    serviceSlug: "leak-detection",
    location: "[Suburb, WA]",
    description: "[Project description placeholder — replace with real project details when available.]",
    challenge: "[Challenge description placeholder]",
    result: "[Result description placeholder]",
  },
  {
    slug: "roof-restoration-project-1",
    title: "Full Roof Restoration",
    service: "Roof Restoration",
    serviceSlug: "roof-restoration",
    location: "[Suburb, WA]",
    description: "[Project description placeholder — replace with real project details when available.]",
    challenge: "[Challenge description placeholder]",
    result: "[Result description placeholder]",
  },
  {
    slug: "roof-painting-project-1",
    title: "Roof Painting & Protection",
    service: "Roof Painting",
    serviceSlug: "roof-painting",
    location: "[Suburb, WA]",
    description: "[Project description placeholder — replace with real project details when available.]",
    challenge: "[Challenge description placeholder]",
    result: "[Result description placeholder]",
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
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// Placeholder team members — replace with real team info
export const teamMembers: TeamMember[] = [
  {
    name: "[Owner/Founder Name]",
    role: "Founder",
    bio: "[Bio placeholder — replace with real bio when available.]",
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
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
