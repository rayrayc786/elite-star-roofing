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
  address: "Bibra Lake, WA 6163",
  city: "Bibra Lake, Perth",
  state: "WA",
  country: "Australia",
  abn: "",
  license: "",
  openingHours: {
    weekdays: "7:00 AM – 5:00 PM",
    saturday: "8:00 AM – 1:00 PM",
    sunday: "Closed (Emergency leak calls available)",
  },
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
};

export interface ServiceGalleryItem {
  image: string;
  title: string;
  suburb: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  galleryImages?: string[];
  galleryItems?: ServiceGalleryItem[];
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
      "/images/web/IMG_4965.jpg",
      "/images/web/IMG_5652.jpg",
      "/images/web/IMG_5647.jpg",
      "/images/web/ba_cleaning_after.jpg",
      "/images/web/IMG_5605.jpg",
    ],
    galleryItems: [
      { image: "/images/web/IMG_4965.jpg", title: "Heavy Moss & Lichen Removal", suburb: "Bunbury" },
      { image: "/images/web/IMG_5652.jpg", title: "Tile Surface Pressure Wash", suburb: "Mandurah" },
      { image: "/images/web/IMG_5647.jpg", title: "Water Channel Unblocking", suburb: "Canning Vale" },
      { image: "/images/web/ba_cleaning_after.jpg", title: "Full Concrete Tile Clean", suburb: "Rockingham" },
      { image: "/images/web/IMG_5605.jpg", title: "Final Roof Rinse & Inspection", suburb: "Fremantle" },
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
      "/images/web/IMG_0919.jpg",
      "/images/web/leak_detection_valley_flashing.jpg",
      "/images/web/leak_detection_tile_cavity.jpg",
      "/images/web/leak_detection_damaged_valley.jpg",
      "/images/web/leak_detection_moisture_trace.jpg",
    ],
    galleryItems: [
      { image: "/images/web/IMG_0919.jpg", title: "Ceiling Dampness Source Tracing", suburb: "Mandurah" },
      { image: "/images/web/leak_detection_valley_flashing.jpg", title: "Valley Flashing Water Ingress", suburb: "Canning Vale" },
      { image: "/images/web/leak_detection_tile_cavity.jpg", title: "Roof Cavity Inspection & Repair", suburb: "Bunbury" },
      { image: "/images/web/leak_detection_damaged_valley.jpg", title: "Corroded Valley Flashing Replacement", suburb: "Rockingham" },
      { image: "/images/web/leak_detection_moisture_trace.jpg", title: "Storm Water Penetration Point Sealed", suburb: "Bibra Lake" },
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
          "Water can travel along roof structures, rafters, and sarking for metres before dripping onto plasterboard. Professional leak detection traces this path directly back to the roof surface entry point.",
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
      "/images/web/IMG_2845.jpg",
      "/images/web/IMG_2429.jpg",
      "/images/web/IMG_2442.jpg",
      "/images/web/IMG_2866.jpg",
      "/images/web/IMG_2968.jpg",
    ],
    galleryItems: [
      { image: "/images/web/IMG_2845.jpg", title: "Crumbling Mortar Bedding Removal", suburb: "Canning Vale" },
      { image: "/images/web/IMG_2429.jpg", title: "Flexible Pointing Trowel Application", suburb: "Fremantle" },
      { image: "/images/web/IMG_2442.jpg", title: "Hip & Ridge Line Alignment", suburb: "Mandurah" },
      { image: "/images/web/IMG_2866.jpg", title: "Storm-Proof Capping Seal", suburb: "Bunbury" },
      { image: "/images/web/IMG_2968.jpg", title: "Colour-Matched Ridge Restoration", suburb: "South Perth" },
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
        title: "Colour Matching & Cleanup",
        description:
          "Pointing is colour-matched to your roof tile shade, leaving a clean, seamless, storm-proof seal.",
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
      "/images/web/IMG_5293.jpg",
      "/images/web/ba_painting_after.jpg",
      "/images/web/IMG_5794.jpg",
      "/images/web/IMG_2914.jpg",
      "/images/web/IMG_5482.jpg",
    ],
    galleryItems: [
      { image: "/images/web/IMG_5293.jpg", title: "Porous Tile Primer & Sealer Coat", suburb: "Perth Metro" },
      { image: "/images/web/ba_painting_after.jpg", title: "Dual-Coat Acrylic Membrane Transformation", suburb: "Canning Vale" },
      { image: "/images/web/IMG_5794.jpg", title: "UV-Resistant Modern Charcoal Finish", suburb: "Mandurah" },
      { image: "/images/web/IMG_2914.jpg", title: "Deep Colour Saturation & Trim Detailing", suburb: "Bunbury" },
      { image: "/images/web/IMG_5482.jpg", title: "Weather-Shield Topcoat Inspection", suburb: "Rockingham" },
    ],
    problems: [
      "Faded, dull, or discoloured roof tiles",
      "Peeling or flaking existing roof paint",
      "Porous tiles absorbing rainwater",
      "Desire to modernise roof colour and curb appeal",
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
          "A high-penetration primer sealer is applied to bind the tile surface and maximise topcoat adhesion.",
      },
      {
        title: "Dual Topcoat Painting",
        description:
          "Two full coats of premium acrylic roof membrane paint are applied for deep colour and UV protection.",
      },
    ],
    faqs: [
      {
        question: "Why paint a roof instead of replacing it?",
        answer:
          "If roof tiles are structurally sound, painting provides a brand-new aesthetic look and waterproof protection at a fraction of full replacement cost.",
      },
      {
        question: "What roof paint colours are available?",
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
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutters",
    tagline: "Leaf, debris & blockage removal from all gutter types",
    description:
      "Professional gutter cleaning and downpipe flushing services to keep rainwater flowing freely away from your home. Blocked gutters cause overflow, fascia rot, and foundation damage — we clear it all safely and thoroughly.",
    icon: "Wind",
    image: "/images/web/gutter_hero.jpg",
    galleryImages: [
      "/images/web/gutter_before.jpg",
      "/images/web/gutter_after.jpg",
      "/images/web/IMG_5727.jpg",
      "/images/web/IMG_5732.jpg",
      "/images/web/IMG_5639.jpg",
    ],
    galleryItems: [
      { image: "/images/web/gutter_before.jpg", title: "Gum Leaf & Sludge Gutter Build-up", suburb: "Rockingham" },
      { image: "/images/web/gutter_after.jpg", title: "Cleared Channel & Unblocked Eaves", suburb: "Rockingham" },
      { image: "/images/web/IMG_5727.jpg", title: "High-Reach Downpipe Clearance", suburb: "Canning Vale" },
      { image: "/images/web/IMG_5732.jpg", title: "Box Gutter Pressure Flushing", suburb: "Mandurah" },
      { image: "/images/web/IMG_5639.jpg", title: "Perimeter Rinse & Waste Removal", suburb: "Bibra Lake" },
    ],
    problems: [
      "Gutters overflowing during heavy rain",
      "Leaf, twig, and debris build-up blocking water flow",
      "Stagnant water pooling and breeding mosquitoes",
      "Fascia boards and eaves showing water damage or rot",
      "Blocked downpipes preventing proper drainage",
      "Foundation or garden erosion from uncontrolled overflow",
    ],
    processSteps: [
      {
        title: "Roof & Gutter Inspection",
        description:
          "We inspect your gutters, downpipes, and fascia boards to assess the level of blockage and any existing damage.",
      },
      {
        title: "Manual Debris Removal",
        description:
          "All leaves, twigs, moss, and compacted sludge are manually cleared from the entire gutter channel length.",
      },
      {
        title: "Downpipe Flushing",
        description:
          "Every downpipe is flushed with water to clear blockages and confirm free flow from gutter to stormwater drain.",
      },
      {
        title: "Final Flow Test & Cleanup",
        description:
          "We run a final water flow test, clean up all removed debris from your property, and inspect for any gutter damage.",
      },
    ],
    faqs: [
      {
        question: "How often should gutters be cleaned in WA?",
        answer:
          "We recommend cleaning gutters at least twice a year — once in autumn after leaf fall and again in spring before the WA wet season. Homes near gum trees may need more frequent cleans.",
      },
      {
        question: "What happens if gutters are left blocked?",
        answer:
          "Blocked gutters cause rainwater to overflow onto fascia boards and eaves, leading to timber rot, ceiling leaks, and even foundation erosion. Stagnant water also becomes a breeding ground for mosquitoes.",
      },
      {
        question: "Do you also flush the downpipes?",
        answer:
          "Yes. Every gutter clean includes flushing all downpipes with water to confirm unobstructed flow from the gutter through to the stormwater drain.",
      },
    ],
    ctaText: "Request Gutter Cleaning Quote",
    metaTitle: "Gutter Cleaning & Downpipe Flushing | Elite Star Roofing WA",
    metaDescription:
      "Professional gutter cleaning in WA. We remove leaves, debris, and blockages to keep water flowing freely. Protect your fascia, eaves, and foundation. Free quote available.",
  },
  // {
  //   slug: "all-roofing-service",
  //   name: "All Roofing Services",
  //   shortName: "All Services",
  //   tagline: "Comprehensive residential roofing solutions in WA",
  //   description: "From targeted repairs and leak tracing to complete roof re-pointing and painting, our team handles all residential roofing needs across Western Australia.",
  //   icon: "Home",
  //   image: "/images/web/IMG_5760_JPG.jpg",
  //   galleryImages: [
  //     "/images/web/IMG_5760_JPG.jpg",
  //     "/images/web/IMG_5780.jpg",
  //     "/images/web/IMG_5797.jpg",
  //     "/images/web/IMG_5806.jpg",
  //   ],
  //   problems: [
  //     "General roof wear and age deterioration",
  //     "Multiple simultaneous roofing issues (leaks + broken tiles)",
  //     "Comprehensive pre-winter preventative roof maintenance",
  //     "Complete roof restoration package required",
  //   ],
  //   processSteps: [
  //     {
  //       title: "Comprehensive Roof Inspection",
  //       description: "We inspect your entire roof system, valleys, flashing, and gutter connections."
  //     },
  //     {
  //       title: "Customized Service Plan",
  //       description: "We outline exact required services with a transparent, itemized quote."
  //     },
  //     {
  //       title: "Expert Execution",
  //       description: "Our experienced team carries out repairs, cleaning, re-pointing, or painting safely."
  //     }
  //   ],
  //   faqs: [
  //     {
  //       question: "Do you service all suburbs in WA?",
  //       answer: "Yes! We service Bunbury, Mandurah, Canning Vale, Perth metropolitan areas, and surrounding regions."
  //     }
  //   ],
  //   ctaText: "Get a Comprehensive Quote",
  //   metaTitle: "All Roofing Services | Elite Star Roofing WA",
  //   metaDescription: "Comprehensive roofing services in WA. We handle everything from repairs and maintenance to full roof restorations."
  // }
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
    description: "Water entering your home needs urgent inspection and repair.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Water stains?",
    description: "Ceiling or wall stains often indicate a hidden roof leak.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Damaged tiles?",
    description: "Broken, cracked, or shifted tiles leave your roof vulnerable.",
    serviceSlug: "roof-pointing",
  },
  {
    problem: "Cracked bedding?",
    description: "Deteriorated ridge mortar allows driving rain into roof cavities.",
    serviceSlug: "roof-pointing",
  },
  {
    problem: "Loose ridge caps?",
    description: "Dislodged capping tiles vulnerable to blowing off in high winds.",
    serviceSlug: "roof-pointing",
  },
  {
    problem: "Faded roof colour?",
    description: "Sun-bleached tiles can be refreshed with UV-resistant roof paint.",
    serviceSlug: "roof-painting",
  },
  {
    problem: "Old-looking roof?",
    description: "Aging roofs benefit from complete cleaning and colour restoration.",
    serviceSlug: "roof-painting",
  },
  {
    problem: "Moss & lichen?",
    description: "Stubborn organic growth traps moisture and blocks water runoff.",
    serviceSlug: "roof-cleaning",
  },
  {
    problem: "Storm damage?",
    description: "Wind, hail, or debris damage needing prompt assessment.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Unsure where leak is?",
    description: "Water travels along rafters — our tracing pinpoints the source.",
    serviceSlug: "leak-detection",
  },
  {
    problem: "Gutters overflowing?",
    description: "Blocked gutters cause fascia rot and water overflow under eaves.",
    serviceSlug: "gutter-cleaning",
  },
  {
    problem: "Blocked downpipes?",
    description: "Downpipe clogs prevent rainwater draining safely away from home.",
    serviceSlug: "gutter-cleaning",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  state: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "David & Sarah Henderson",
    suburb: "Canning Vale",
    state: "WA",
    rating: 5,
    date: "3 weeks ago",
    service: "Ridge Pointing & Leak Repair",
    quote:
      "Had a persistent leak in our lounge ceiling every time we got heavy rain from the southwest. Two other tradies had come out and couldn't figure out where the water was getting in. The Elite Star team got up on the roof, did a proper inspection with photos, and showed us that cracked mortar bedding along the back valley was channeling rainwater straight into the cavity. They re-bedded and re-pointed the entire ridge line with flexible pointing. Not a single drop through the recent storms. Spotless cleanup afterwards too.",
    verified: true,
  },
  {
    id: "review-2",
    name: "Mark Collins",
    suburb: "Mandurah",
    state: "WA",
    rating: 5,
    date: "1 month ago",
    service: "Full Roof Restoration & Painting",
    quote:
      "Our 25-year-old concrete tile roof was badly faded and covered in black lichen. Elite Star completely transformed the look of our home in just three days. High-pressure clean, replaced 14 broken tiles, re-pointed all ridges, and applied three coats of heat-reflective charcoal membrane. The difference is night and day—our neighbours literally stopped to ask who did the job. Punctual, polite, and no hidden price jumps.",
    verified: true,
  },
  {
    id: "review-3",
    name: "Fiona Campbell",
    suburb: "Bunbury",
    state: "WA",
    rating: 5,
    date: "2 months ago",
    service: "High-Pressure Roof Cleaning & Moss Removal",
    quote:
      "Can't recommend them highly enough. Our terracotta tiled roof hadn't been touched in over a decade and was thick with moss blocking the gutters. Elite Star treated the tiles carefully without damaging any of the terracotta, cleared every downpipe, and washed down all the exterior walls and paths before leaving. Fair quote, turned up right on schedule, and fantastic communication.",
    verified: true,
  },
  {
    id: "review-4",
    name: "Peter Jenkins",
    suburb: "Rockingham",
    state: "WA",
    rating: 5,
    date: "1 month ago",
    service: "Emergency Leak Detection & Gutter Clearing",
    quote:
      "Called Elite Star on a Sunday afternoon when water started dripping through a light fitting during a coastal storm. They answered straight away, walked me through how to isolate the area safely, and were at our property first thing Monday morning. Found dislodged tiles and blocked box gutters choked with pine needles. Repaired quickly and at a very honest price. True lifesavers.",
    verified: true,
  },
  {
    id: "review-5",
    name: "Craig Mitchell",
    suburb: "Fremantle",
    state: "WA",
    rating: 5,
    date: "2 months ago",
    service: "Ridge Cap Re-Bedding & Flexible Pointing",
    quote:
      "Previous cement pointing was crumbling into the gutters and ridge caps were loose by hand. The boys removed all the old failing mortar, set new bedding, and finished with color-matched flexible pointing. You can see the pride they take in their workmanship. Very professional outfit and great to deal with from quote to completion.",
    verified: true,
  },
  {
    id: "review-6",
    name: "Emma & Bradley Davies",
    suburb: "Morley",
    state: "WA",
    rating: 5,
    date: "3 months ago",
    service: "Tile Repair & Roof Repainting",
    quote:
      "We were prepping our family home for sale and the faded terracotta roof was letting the whole property down. Elite Star repaired cracked tiles and applied a fresh, modern coat that gave the house massive street appeal. We received multiple compliments from real estate agents during open inspections. Outstanding service and great value.",
    verified: true,
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
      "/images/web/IMG_2845.jpg",
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
      "/images/web/IMG_0919.jpg",
      "/images/web/leak_detection_valley_flashing.jpg",
      "/images/web/leak_detection_damaged_valley.jpg",
    ],
    description: "Expert leak detection to trace ceiling dampness back to a hidden valley flashing failure.",
    challenge: "The visible interior ceiling stain was several metres away from the actual roof entry point where rainwater was leaking under tiles.",
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
      "/images/web/IMG_4965.jpg",
      "/images/web/IMG_5652.jpg",
      "/images/web/IMG_5647.jpg",
    ],
    description: "Deep pressure cleaning of a heavily lichen-covered tile roof in Bunbury.",
    challenge: "Years of accumulated moss had clogged rainwater channels between tiles, causing water to pool and overflow into eaves.",
    result: "Cleared all lichen, unblocked water flow channels, and thoroughly washed down gutters, leaving the roof looking clean and revitalised.",
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
      "/images/web/IMG_5293.jpg",
      "/images/web/ba_painting_after.jpg",
      "/images/web/IMG_5794.jpg",
      "/images/web/IMG_5482.jpg",
    ],
    description: "Full surface cleaning, tile repairs, priming, and double-coat acrylic roof painting for a home in Perth.",
    challenge: "Severely faded, chalky tiles had lost their protective finish and absorbed moisture during rains.",
    result: "Applied high-durability acrylic roof coating, giving the home a vibrant new look and adding a robust waterproof barrier.",
  },
  {
    slug: "gutter-cleaning-leaf-removal",
    title: "Full Gutter Clean & Downpipe Flush",
    service: "Gutter Cleaning",
    serviceSlug: "gutter-cleaning",
    location: "Rockingham, WA",
    image: "/images/web/gutter_hero.jpg",
    beforeImage: "/images/web/gutter_before.jpg",
    afterImage: "/images/web/gutter_after.jpg",
    galleryImages: [
      "/images/web/gutter_before.jpg",
      "/images/web/gutter_after.jpg",
      "/images/web/IMG_5727.jpg",
    ],
    description: "Complete gutter debris removal and downpipe flushing for a residential home surrounded by large gum trees in Rockingham.",
    challenge: "Years of accumulated gum leaves and decomposed organic sludge had completely blocked the gutters, causing overflow onto the fascia and visible water staining on the eaves.",
    result: "Manually cleared all debris, flushed all four downpipes to confirm unobstructed drainage, and left the property clean with free-flowing gutters ready for the WA wet season.",
  },
];

export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
  subheading?: string;
  image?: string;
  highlights?: string[];
  suburbs?: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "canning-vale",
    name: "Canning Vale",
    description: "Specialised roofing services for Canning Vale and Perth's southern suburbs. We specialise in concrete tile restoration, flexible ridge re-pointing, and storm leak repairs.",
    subheading: "Concrete Tile & Ridge Restorations in Canning Vale",
    image: "/images/web/IMG_2870.jpg",
    highlights: [
      "Flexible ridge pointing engineered for suburban WA homes",
      "Broken tile replacement and valley tray clearance",
      "Fast local response from our nearby Bibra Lake hub",
    ],
    suburbs: ["Canning Vale", "Thornlie", "Harrisdale", "Piara Waters", "Southern River", "Bibra Lake", "Cockburn", "Jandakot"],
  },
  {
    slug: "mandurah",
    name: "Mandurah",
    description: "Coastal roofing solutions for Mandurah and the Peel region. Protecting coastal properties against ocean salt air corrosion, driving rain, and mortar bedding failure.",
    subheading: "Coastal Weatherproofing & Leak Tracing in Mandurah",
    image: "/images/web/IMG_0918.jpg",
    highlights: [
      "Marine-grade valley flashing and tile re-bedding",
      "Precision ceiling leak tracing and water ingress repair",
      "Corrosion-resistant materials tailored for coastal WA",
    ],
    suburbs: ["Mandurah", "Halls Head", "Meadow Springs", "Falcon", "Dawesville", "Baldivis", "Rockingham", "Pinjarra"],
  },
  {
    slug: "bunbury",
    name: "Bunbury",
    description: "Trusted local roofing expertise across Bunbury and South West WA. Focused on heavy moss removal, tile pressure washing, gutter clearing, and membrane coating.",
    subheading: "High-Pressure Cleaning & Tile Rejuvenation in Bunbury",
    image: "/images/web/IMG_4970.jpg",
    highlights: [
      "Industrial moss, lichen, and algae pressure wash",
      "Gutter unblocking and downpipe pressure flushing",
      "Protective acrylic roof painting for long-term tile health",
    ],
    suburbs: ["Bunbury", "Australind", "Eaton", "Dalyellup", "Pelican Point", "Treendale", "South Bunbury", "Carey Park"],
  },
  {
    slug: "perth",
    name: "Perth",
    description: "Comprehensive residential roof painting, cleaning, and maintenance throughout Greater Perth. Operating from Bibra Lake to keep WA roofs durable and weather-tight.",
    subheading: "Complete Roof Restorations & Painting Across Perth",
    image: "/images/web/IMG_5505.jpg",
    highlights: [
      "UV-reflective heat-shield roof membrane painting",
      "Complete 5-stage tile re-pointing and restoration",
      "Transparent itemised quotes with no sales pressure",
    ],
    suburbs: ["Fremantle", "Melville", "Victoria Park", "South Perth", "Stirling", "Joondalup", "Midland", "Armadale"],
  },
  // Alias for backward compatibility
  {
    slug: "perth-canning-vale",
    name: "Canning Vale",
    description: "Specialised roofing services for Canning Vale and Perth's southern suburbs. Concrete tile restoration, flexible ridge re-pointing, and storm leak repairs.",
    subheading: "Concrete Tile & Ridge Restorations in Canning Vale",
    image: "/images/web/IMG_2870.jpg",
    highlights: [
      "Flexible ridge pointing engineered for suburban WA homes",
      "Broken tile replacement and valley tray clearance",
      "Fast local response from our nearby Bibra Lake hub",
    ],
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
      "We provide five core roofing services across Western Australia: Roof Cleaning, Leak Detection, Roof Pointing, Roof Painting, and Gutter Cleaning. Each service is tailored to protect your home from harsh WA weather.",
  },
  {
    category: "General",
    question: "How do I request a quote?",
    answer:
      "You can request a free quote by filling out our online quote form, calling us directly on +61 451 901 275, or sending an email to elitestarroofing@gmail.com. We arrange prompt, transparent on-site assessments.",
  },
  {
    category: "General",
    question: "How long does a roofing job typically take?",
    answer:
      "Most gutter cleaning and leak inspections take 2 to 4 hours. High-pressure cleaning or ridge pointing is usually completed within 1 day, while a full multi-coat roof painting project typically takes 2 to 3 days depending on weather.",
  },
  {
    category: "General",
    question: "Do you provide free quotes?",
    answer:
      "Yes. We provide free, 100% no-obligation itemised quotes for all five of our roofing services across the Perth metro, Mandurah, Bunbury, and surrounding WA regions.",
  },
  // Roof Cleaning
  {
    category: "Roof Cleaning",
    question: "Why is professional roof cleaning necessary in Perth?",
    answer:
      "Perth's winter rains and shaded coastal climates encourage thick moss, lichen, and algae growth. These organisms trap moisture against porous tiles, breaking down protective glaze and causing water backup into eaves. High-pressure cleaning removes buildup safely.",
  },
  {
    category: "Roof Cleaning",
    question: "Will pressure cleaning damage my tiles?",
    answer:
      "No. Our technicians calibrate pressure levels according to tile composition (concrete, terracotta, or metal) to lift stubborn lichen and grime without fracturing tiles or forcing water under flashings.",
  },
  {
    category: "Roof Cleaning",
    question: "How often should I have my roof cleaned?",
    answer:
      "In general WA conditions, we recommend high-pressure cleaning every 2 to 3 years. Properties shaded by large trees or situated in damp coastal pockets benefit from cleaning every 1 to 2 years.",
  },
  // Leak Detection
  {
    category: "Leak Detection",
    question: "Why can't I find where my roof leak is coming from?",
    answer:
      "Water rarely drops straight down. It travels along roof battens, trusses, and sarking membranes before staining your interior plasterboard. Professional leak detection traces the moisture trajectory back to the external tile or flashing defect.",
  },
  {
    category: "Leak Detection",
    question: "What happens during a leak detection inspection?",
    answer:
      "We inspect roof valleys, penetrations (vents, skylights, flues), lead flashing, ridge capping, and internal ceiling cavity framework to locate the precise water entry point.",
  },
  {
    category: "Leak Detection",
    question: "Should I wait until heavy rain to book an inspection?",
    answer:
      "No. Booking an inspection immediately prevents structural timber rot, damaged insulation batts, and electrical ceiling hazards. We can diagnose intrusion points even in dry weather.",
  },
  // Roof Pointing
  {
    category: "Roof Pointing",
    question: "What is flexible roof pointing?",
    answer:
      "Flexible pointing is a polymer-modified compound that replaces brittle sand-and-cement mortar. It flexes with normal house movement and thermal expansion, preventing cracks and keeping ridge caps storm-proof for 10 to 15+ years.",
  },
  {
    category: "Roof Pointing",
    question: "What are the warning signs my ridge caps need re-pointing?",
    answer:
      "Look for crumbling mortar pieces washed into gutters, visible cracks along the hip lines, dislodged ridge capping tiles, or internal ceiling stains underneath ridge junctions.",
  },
  {
    category: "Roof Pointing",
    question: "Do you re-bed ridge caps before pointing?",
    answer:
      "Yes. Where the existing cement base has failed, we remove the loose mortar and re-bed the capping tiles on fresh sand-cement mortar before applying the flexible pointing topcoat.",
  },
  // Roof Painting
  {
    category: "Roof Painting",
    question: "Why should I paint my roof instead of replacing it?",
    answer:
      "If your tiles are structurally intact, high-build acrylic roof painting restores full waterproof protection and modern street appeal at approximately one-third the cost of a full re-roof.",
  },
  {
    category: "Roof Painting",
    question: "What roof paint colours are available?",
    answer:
      "We apply premium Colorbond-matched shades including Monument, Charcoal, Slate Grey, Surfmist, Classic Cream, and Terracotta Red, formulated specifically for intense WA UV resistance.",
  },
  {
    category: "Roof Painting",
    question: "How long does roof paint take to cure?",
    answer:
      "Our coatings dry to touch in 2 to 4 hours and reach full weather-cure in 48 to 72 hours, providing immediate rain resistance.",
  },
  // Gutter Cleaning
  {
    category: "Gutter Cleaning",
    question: "How often should gutters be cleaned in Western Australia?",
    answer:
      "We advise cleaning gutters at least twice annually — once in late autumn after deciduous leaf drop, and once in spring prior to the peak thunderstorm season.",
  },
  {
    category: "Gutter Cleaning",
    question: "What happens if gutters and downpipes remain blocked?",
    answer:
      "Compacted debris causes stormwater to back up under eaves, rotting timber fascia boards, damaging ceiling linings, and causing garden or foundation soil erosion around your perimeter.",
  },
  {
    category: "Gutter Cleaning",
    question: "Do your gutter cleaning services include flushing downpipes?",
    answer:
      "Yes. Every service includes manual debris clearance followed by full downpipe water flushing to confirm free-flowing discharge to stormwater outlets.",
  },
];

export interface BlogPostSection {
  heading?: string;
  subheading?: string;
  content: string[];
  listItems?: string[];
  callout?: {
    type?: "tip" | "warning" | "info" | "quote";
    title?: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole?: string;
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  keyTakeaways?: string[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    caption: string;
  };
  sections: BlogPostSection[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { name: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-roof-painting-cost-in-perth",
    title: "How Much Does Roof Painting Cost in Perth?",
    excerpt:
      "Wondering how much roof painting costs in Perth? See what affects the price, what is included in a professional quote, and how to get an accurate estimate.",
    category: "Roof Painting",
    date: "2026-10-14",
    readTime: "6 min read",
    author: "Elite Star Roofing WA",
    authorRole: "WA Roofing Specialists",
    image: "/images/web/ba_painting_after.jpg",
    metaTitle: "Roof Painting Cost in Perth | Elite Star Roofing",
    metaDescription:
      "Wondering how much roof painting costs in Perth? See what affects the price, what is included and how to get a fair quote.",
    primaryKeyword: "roof painting cost in Perth",
    keyTakeaways: [
      "Roof painting costs in Perth depend on roof size, pitch, material type, and the current condition of tiles and mortar.",
      "A complete quote must always include high-pressure cleaning, tile repairs or re-pointing, sealer/primer, and 2 premium top coats.",
      "Skipping thorough cleaning and repairs is the number one cause of paint flaking and premature failure.",
      "Repainting protects against harsh WA sun and coastal salt while costing a fraction of a full roof replacement.",
    ],
    beforeAfter: {
      beforeImage: "/images/web/ba_painting_before.jpg",
      afterImage: "/images/web/ba_painting_after.jpg",
      beforeLabel: "Faded & Weathered Before",
      afterLabel: "Restored & Painted After",
      caption:
        "Real before and after roof restoration and painting project in Perth by Elite Star Roofing WA.",
    },
    sections: [
      {
        heading: "Understanding Roof Painting Costs in Perth",
        content: [
          "If your roof looks faded, patchy or stained, you have probably started to wonder what a repaint will cost. It is one of the most common questions Perth homeowners ask us, and the honest answer is: it depends. The good news is that the main things that drive the price are easy to understand once you know what to look for.",
          "In this guide, we explain what affects roof painting cost in Perth, what a proper job should include, and how to compare quotes fairly so you are not caught out with hidden surprises.",
        ],
      },
      {
        heading: "What Affects the Cost of Roof Painting in Perth?",
        subheading: "Key Factors That Drive Your Quote",
        content: [
          "No two roofs are the same, so no two quotes are identical. Here are the core factors our estimators evaluate during an on-site assessment:",
        ],
        listItems: [
          "Roof size and shape: The larger the roof, the more surface area there is to clean, prepare and paint. A simple single-storey home costs less than a double-storey house with multiple valleys, steep pitches, or hard-to-reach gables requiring safety staging.",
          "Roof material: Most Perth homes feature concrete tiles, terracotta tiles, or Colorbond metal sheeting. Concrete tile roofs are porous and require specialised primer/sealers to lock down chalky surfaces, whereas terracotta and metal require distinct chemical cleaning and coating profiles.",
          "Current condition of the roof: This is often the single biggest cost driver. A roof in sound condition needs a wash, prime, and coat. A roof with broken tiles, cracked ridge capping, or heavy lichen needs structural repairs and re-pointing first.",
          "Type and quality of paint: Professional roof paints and solar-reflective membranes are engineered specifically for Western Australia's extreme UV radiation and coastal salt air. High-grade elastomeric coatings cost more upfront but last twice as long.",
          "Number of coats and colour changes: A lasting job requires a dedicated primer/sealer plus at least two thick top coats. Transitioning between dramatically contrasting colours may require additional pigment coverage.",
          "Access and site safety conditions: High-set two-storey homes, tight suburban setbacks, steep land gradients, and overhead powerlines dictate the safety equipment and time required.",
        ],
        callout: {
          type: "warning",
          title: "The Danger of Skipping Preparation",
          text: "Painting over dirty tiles or deteriorated mortar pointing is the most common reason a cheap paint job fails within 12 to 24 months. Proper preparation is 70% of a quality finish.",
        },
      },
      {
        heading: "What is Usually Included in a Roof Painting Quote?",
        subheading: "The 6 Essential Steps of a Complete Job",
        content: [
          "A transparent quote should clearly itemise every step so you know exactly what work will be carried out on your home. At Elite Star Roofing, a professional roof painting project includes:",
        ],
        listItems: [
          "Comprehensive Roof Inspection: Inspecting every elevation, identifying cracked tiles, loose ridge caps, and flashing issues.",
          "Industrial High-Pressure Cleaning: Removing accumulated dirt, lichen, moss, mould, and oxidised old paint.",
          "Structural Repairs & Re-Pointing: Replacing broken tiles and bedding/re-pointing ridge caps with flexible polymer compound.",
          "Sealer or Primer Coat: Applying an appropriate penetrative sealer or primer to guarantee optimal adhesion.",
          "Two Coats of Premium Roof Membrane: Spray-applying two protective, weatherproof top coats in your chosen colour.",
          "Complete Site Cleanup: Clearing all gutters, downpipe collars, pathways, and patios around your property.",
        ],
      },
      {
        heading: "Typical Price Range for Roof Painting in Perth",
        content: [
          "Most Perth residential homes fall somewhere in a broad range, typically starting from a few thousand dollars for a compact, well-kept single-storey roof, up to higher amounts for large, steep, or heavily deteriorated roofs requiring extensive mortar re-bedding and tile replacement.",
          "Because every property is unique, we never publish misleading 'one-size-fits-all' pricing. An accurate quote requires a licensed roofer to physically inspect your roof, measure the surface area, examine pitch, and verify substrate condition.",
        ],
        table: {
          headers: ["Home Type", "Approximate Area", "Typical Scope", "Estimated Investment"],
          rows: [
            ["Compact Single Storey", "120 – 160 m²", "Pressure clean, minor tile swaps, primer + 2 coats", "$2,800 – $4,200"],
            ["Standard Family Home", "160 – 240 m²", "Wash, ridge re-pointing, tile replacement, 3-coat system", "$3,800 – $5,800"],
            ["Large or Multi-Level", "240 – 350+ m²", "Safety harness setup, multi-storey access, full restoration + paint", "$5,500 – $8,500+"],
          ],
        },
      },
      {
        heading: "How to Compare Roof Painting Quotes Fairly",
        content: [
          "When gathering quotes from Perth contractors, do not evaluate solely on the bottom-line price. Use this checklist to protect your home:",
        ],
        listItems: [
          "Is commercial high-pressure cleaning included? Painting over dirt or algae guarantees peeling.",
          "Are tile replacements and ridge re-pointing itemised? Hidden repair costs often appear halfway through an underquoted job.",
          "How many coats are guaranteed in writing? A proper job is 1 sealer/primer + 2 full coats.",
          "What brand and warranty come with the coating? Ask for the specific brand name and manufacturer warranty.",
          "Is the company licensed, fully insured, and locally based? Check genuine local Google reviews and completed project galleries.",
        ],
      },
      {
        heading: "Is Roof Painting Worth the Investment?",
        content: [
          "For the vast majority of Perth homeowners, yes. A fresh coating does far more than elevate your home's aesthetics. It seals micro-cracks in aging tiles, prevents moisture penetration during winter storms, and with lighter colours can reflect significant solar heat to reduce cooling costs.",
          "It also dramatically enhances street appeal and resale valuation. Repainting costs a small fraction of a full reroof, making it one of the highest-ROI home maintenance investments available.",
        ],
      },
      {
        heading: "How Long Does a Roof Paint Job Last?",
        content: [
          "A well-prepared roof coated with industrial-grade membrane will comfortably last 10 to 15 years in Western Australia. The eventual lifespan depends on initial preparation, paint quality, and how exposed your property is to coastal winds and summer sun.",
          "Periodic cleaning every 2 to 3 years prevents airborne dirt and organic growth from eating into the protective coating over time.",
        ],
      },
      {
        heading: "Get a Clear, No-Pressure Roof Painting Quote",
        content: [
          "If you are planning to repaint your roof in Perth, Elite Star Roofing WA can inspect your property and provide a transparent, itemised written quote with zero sales pressure.",
          "Based in Bibra Lake, we proudly service Perth Metro, Canning Vale, Cockburn, Mandurah, Bunbury, and surrounding areas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you paint a roof that has moss or algae on it?",
        answer:
          "Not until it has been thoroughly cleaned and treated. Moss and algae prevent paint from bonding directly to the tile surface. High-pressure cleaning with anti-fungal treatment is always required before applying any primers or coatings.",
      },
      {
        question: "Do I need to leave my home while the roof is being painted?",
        answer:
          "No, you can comfortably stay at home during the entire project. We just recommend parking vehicles on the street or in the garage and bringing outdoor washing or patio furniture inside for the day.",
      },
      {
        question: "How long does a roof painting job take?",
        answer:
          "Most residential homes take 2 to 3 working days, depending on roof dimensions, structural repairs required, and local weather conditions. Rain or high humidity can delay application as surfaces must be completely dry.",
      },
      {
        question: "Does the colour I choose make a difference to energy efficiency?",
        answer:
          "Yes. Lighter shades like classic off-whites, cool greys, or muted sandstone reflect significantly more solar heat, helping keep your roof cavity and living spaces cooler during scorching Perth heatwaves.",
      },
    ],
    relatedServices: [
      { name: "Roof Painting Service", href: "/services/roof-painting" },
      { name: "Roof Cleaning Service", href: "/services/roof-cleaning" },
      { name: "Roof Pointing & Repairs", href: "/services/roof-pointing" },
    ],
  },
  {
    slug: "how-often-should-you-clean-your-roof-in-perth",
    title: "How Often Should You Clean Your Roof in Perth?",
    excerpt:
      "How often should Perth homeowners clean their roof? Learn the signs it is time, what environmental factors affect the schedule, and why DIY pressure cleaning can be risky.",
    category: "Roof Cleaning",
    date: "2026-10-08",
    readTime: "5 min read",
    author: "Elite Star Roofing WA",
    authorRole: "WA Roofing Specialists",
    image: "/images/web/ba_cleaning_after.jpg",
    metaTitle: "How Often to Clean a Roof in Perth | Elite Star Roofing",
    metaDescription:
      "How often should Perth homeowners clean their roof? Learn the signs it is time, what affects the schedule and why DIY can be risky.",
    primaryKeyword: "how often to clean a roof",
    keyTakeaways: [
      "Most Perth homes should be professionally cleaned every 2 to 3 years to prevent moisture retention and tile breakdown.",
      "Homes in coastal areas like Mandurah and Bunbury or shaded properties under trees often require cleaning every 1 to 2 years.",
      "Moss and algae hold moisture against porous tiles, breaking down protective surfaces and leading to internal leaks.",
      "DIY pressure washing is risky: improper angles and excessive pressure can crack tiles and blast water under flashings.",
    ],
    beforeAfter: {
      beforeImage: "/images/web/ba_cleaning_before.jpg",
      afterImage: "/images/web/ba_cleaning_after.jpg",
      beforeLabel: "Heavy Moss & Algae Before",
      afterLabel: "Deep Cleaned & Restored After",
      caption:
        "High-pressure tile roof cleaning completed in Perth by Elite Star Roofing WA, removing years of moss and grime.",
    },
    sections: [
      {
        heading: "The Real Cost of Neglecting Your Roof",
        content: [
          "Your roof works hard all year round. It withstands intense summer sun, torrential winter downpours, coastal salt breezes, and blowing leaves and dust. Over time, that environmental exposure leaves its mark.",
          "Many Perth homeowners only think about roof maintenance when water begins dripping through a ceiling, but establishing a regular cleaning schedule prevents premature wear, preserves street appeal, and saves thousands of dollars over the lifetime of your home.",
        ],
      },
      {
        heading: "The Short Answer: How Often to Clean Your Roof",
        content: [
          "For most Perth suburban homes, a professional roof clean every 2 to 3 years is the ideal rule of thumb.",
          "Roofs shaded by large gum trees, situated within a few kilometres of the coast, or located in damp, low-lying areas often benefit from cleaning every 1 to 2 years. Conversely, homes on open, sun-drenched blocks with minimal canopy cover can frequently stretch to 3 or 4 years.",
          "The most reliable approach is to inspect your roof's physical condition rather than relying strictly on the calendar.",
        ],
      },
      {
        heading: "What Affects How Often Your Roof Needs Cleaning?",
        subheading: "Key Environmental Factors in Western Australia",
        content: [
          "Several local factors influence how quickly debris, lichen, and algae accumulate on your roof:",
        ],
        listItems: [
          "Overhanging Trees & Shade: Trees drop leaves, twigs, pollen, and sap. Constant shade keeps tiles damp for hours after morning dew or rain, creating the ideal breeding ground for moss and algae.",
          "Proximity to the Coast: Coastal communities in Mandurah, Rockingham, and Bunbury deal with airborne salt spray. Salt deposits accelerate surface degradation and make tiles more susceptible to staining.",
          "Roof Material: Concrete and terracotta tiles have porous surfaces that trap dirt and moisture. Metal roofs shed organic matter more easily but still collect sludge in valleys and gutter lines.",
          "Roof Pitch & Water Drainage: Low-pitch roofs drain water more slowly than steep pitches, allowing dirt and organic matter to settle in tile laps and valley trays.",
          "Perth Seasonal Climate: Perth experiences dry, scorching summers followed by wet, cool winters. Algae and moss proliferate during the damp months, which is why late summer and autumn cleans are so popular.",
        ],
      },
      {
        heading: "Signs Your Roof Needs Cleaning Now",
        subheading: "Don't Wait for the Next Scheduled Clean",
        content: [
          "If you observe any of the following symptoms, arrange an inspection promptly:",
        ],
        listItems: [
          "Dark green, black, or brown streaks staining your tiles (active algae colonies).",
          "Thick moss patches or crusty lichen flourishing along tile edges and ridge capping.",
          "Faded, patchy discoloration where environmental grime has hardened on the surface.",
          "Valleys, gutters, and downpipes clogged with decomposing leaf mulch.",
          "Damp, water-logged spots that fail to dry hours after rainfall stops.",
          "Flaking or chalky paint residue on previously coated tile roofs.",
        ],
        callout: {
          type: "warning",
          title: "Early Action Prevents Leaks",
          text: "When moss builds up in tile channels, it acts like a sponge, holding rainwater until it backs up under the tile edges and seeps into ceiling insulation.",
        },
      },
      {
        heading: "Why Regular Roof Cleaning Matters",
        content: [
          "Professional roof cleaning delivers substantial functional and financial benefits beyond simple cosmetic improvement:",
        ],
        listItems: [
          "1. Extends Roof Lifespan: Lichen and moss produce weak acids that eat into tile concrete and mortar. Removing them preserves the structural integrity of your roof.",
          "2. Optimises Stormwater Drainage: Clearing tile valleys and gutters allows torrential winter rain to flow cleanly away from fascias and eaves.",
          "3. Early Damage Detection: During cleaning, our roofers get a close-up look at every tile, catching cracked ridge pointing, broken tiles, and flashing gaps before leaks occur.",
          "4. Boosts Property Value: A freshly cleaned roof transforms the appearance of your home, immediately elevating kerb appeal for prospective buyers or renters.",
          "5. Essential Preparation for Painting: If you ever decide to repaint, a pristine, moss-free surface is non-negotiable for paint adhesion.",
        ],
      },
      {
        heading: "Can I Clean My Roof Myself?",
        subheading: "Why DIY Pressure Cleaning is High Risk",
        content: [
          "It is tempting to hire a pressure washer over the weekend, but we strongly advise against DIY roof cleaning for two vital reasons:",
          "1. Fall Hazards & Safety: Wet tiles coated in algae are extraordinarily slippery. Falls from residential roofs remain one of the leading causes of serious injury and fatalities across Australia.",
          "2. Tile and Water Ingress Damage: High-pressure nozzles held at the wrong angle easily fracture brittle tiles, strip protective coatings, and drive litres of pressurised water directly under flashings into your roof cavity.",
          "Professional roofers employ dedicated fall-arrest safety systems, specialised flat-surface cleaners, and controlled pressure calibration tailored to your roof type.",
        ],
      },
      {
        heading: "Recommended Roof Cleaning Schedule for Perth",
        content: [
          "Here is a straightforward timetable to help you schedule routine maintenance for your home:",
        ],
        table: {
          headers: ["Property Environment", "Cleaning Frequency", "Primary Objective"],
          rows: [
            ["Shaded / Coastal (Mandurah, Bunbury)", "Every 1 to 2 Years", "Salt removal, algae & lichen eradication"],
            ["Typical Perth Suburban Block", "Every 2 to 3 Years", "Debris clearing, surface wash, gutter flush"],
            ["Open, Sunny Roof with minimal trees", "Every 3 to 4 Years", "Preventative wash & structural inspection"],
            ["Prior to Roof Painting or Restoration", "Immediately prior (Mandatory)", "Surface de-contamination for primer adhesion"],
            ["Following Major Storm Events", "As needed inspection", "Clearing accumulated branch debris from valleys"],
          ],
        },
      },
      {
        heading: "What Does a Professional Roof Clean Involve?",
        content: [
          "At Elite Star Roofing, our multi-point cleaning process is thorough, safe, and respectful of your home:",
        ],
        listItems: [
          "Initial roof safety and tile condition inspection.",
          "Gentle manual scraping of dense moss clumps and debris.",
          "Application of targeted, eco-friendly anti-fungal treatments.",
          "Calibrated pressure washing matching your specific tile density.",
          "Downpipe flushing to ensure clear stormwater egress.",
          "Ground-level cleanup of all patios, windows, and perimeter pathways.",
        ],
      },
      {
        heading: "Book Your Roof Clean with Elite Star Roofing",
        content: [
          "Not sure whether your roof is due for maintenance? Our experienced technicians will inspect your roof and provide honest, practical advice.",
          "We operate from Bibra Lake and proudly serve Perth, Canning Vale, Cockburn, Mandurah, Bunbury, and surrounding suburbs.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best time of year to clean a roof in Perth?",
        answer:
          "Late summer and autumn (March through May) are ideal. The weather is dry, making work safe and efficient, and cleaning before winter rains prevents algae and moss from flourishing during the cold, damp months.",
      },
      {
        question: "Will pressure cleaning damage my roof tiles?",
        answer:
          "Not when carried out by trained professionals. We use regulated pressure and specialised wide-fan surface cleaners that remove grime without eroding the tile face. Damage only happens when amateurs use pinpoint high-pressure nozzles at aggressive angles.",
      },
      {
        question: "How long does a typical roof clean take?",
        answer:
          "Most single and double-storey residential homes take between half a day to one full day, depending on the roof area, pitch, and severity of moss growth.",
      },
      {
        question: "Do I need to be home while you clean the roof?",
        answer:
          "No, you do not need to be home as long as we have clear access to the exterior of the property and an outdoor garden tap. We do recommend moving vehicles out of the driveway and keeping pets indoors.",
      },
    ],
    relatedServices: [
      { name: "Roof Cleaning Service", href: "/services/roof-cleaning" },
      { name: "Roof Painting Service", href: "/services/roof-painting" },
      { name: "Roof Pointing & Re-bedding", href: "/services/roof-pointing" },
    ],
  },
  /* OLD PLACEHOLDER BLOGS COMMENTED OUT - SHOWING ONLY REAL BLOGS 1 & 2
  {
    slug: "how-to-identify-a-roof-leak",
    title: "How to Identify a Roof Leak",
    excerpt:
      "Learn the common signs of a roof leak and what to look for before calling a professional.",
    category: "Leak Detection",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Elite Star Roofing WA",
    authorRole: "Leak Tracing Technicians",
    image: "/images/web/IMG_0918.jpg",
    metaTitle: "How to Identify a Roof Leak | Elite Star Roofing WA",
    metaDescription:
      "Learn the telltale signs of roof leaks in Perth homes and what to check inside and out before calling a roof repair specialist.",
    primaryKeyword: "identify a roof leak",
    keyTakeaways: [
      "Water stains on ceilings and peeling paint are key interior indicators of an active leak.",
      "Water often travels along rafters, meaning the leak entry point on the roof may be metres away from the ceiling stain.",
      "Check valleys, flashings around skylights or chimneys, and cracked ridge pointing after heavy rains.",
    ],
    sections: [
      {
        heading: "Catching Roof Leaks Before Catastrophic Damage",
        content: [
          "A roof leak rarely begins as a dramatic deluge. In most homes, water ingress starts as a gradual drip, soaking into ceiling plaster, insulation batts, and timber trusses long before a wet spot appears inside your living areas.",
          "Catching a leak early saves thousands in timber rot repairs and ceiling replacements. Here is what to inspect both inside and outside your property.",
        ],
      },
      {
        heading: "Interior Signs of a Leak",
        content: [
          "Look closely for these subtle indications inside your rooms:",
        ],
        listItems: [
          "Brown or yellowish rings spreading on ceilings and cornice joins.",
          "Musty odors in roof spaces or rooms with closed windows.",
          "Bubbling paint, sagging plasterboard, or flaking wallpaper.",
          "Damp insulation batts directly above light fittings and downlights.",
        ],
      },
      {
        heading: "Exterior Checks on the Roof",
        content: [
          "From ground level or safe ladder access, inspect these vulnerable spots:",
        ],
        listItems: [
          "Cracked, shifted, or chipped roof tiles.",
          "Corroded or rusted valley trays packed with leaf litter.",
          "Deteriorated mortar pointing along the ridge caps.",
          "Damaged lead or metal flashings around chimneys, vent pipes, and solar mounts.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is water leaking far from where the ceiling stain is?",
        answer:
          "Water follows gravity down the pitch of the roof trusses before dripping onto plasterboard. It often enters at a high ridge or valley and only shows up on the ceiling metres lower down.",
      },
    ],
    relatedServices: [
      { name: "Leak Tracing & Repairs", href: "/services/roof-repairs" },
      { name: "Roof Pointing", href: "/services/roof-pointing" },
    ],
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
    authorRole: "WA Roofing Specialists",
    image: "/images/web/IMG_0919.jpg",
    metaTitle: "Common Causes of Roof Leaks | Elite Star Roofing WA",
    metaDescription:
      "Understand the most frequent reasons roofs develop leaks in Perth and how preventative maintenance stops water damage.",
    primaryKeyword: "causes of roof leaks",
    keyTakeaways: [
      "Broken tiles, cracked ridge pointing, and rusted valley trays account for over 80% of residential leaks.",
      "Blocked gutters force rainwater back under eaves and into internal walls.",
      "Regular preventative maintenance is far cheaper than emergency storm repairs.",
    ],
    sections: [
      {
        heading: "Why Do Roofs Leak?",
        content: [
          "Even the best-built roofs face continuous wear from UV degradation, storm winds, and thermal expansion. In Western Australia, intense temperature swings cause roof structures to expand and contract, placing stress on seals, mortar, and fasteners.",
        ],
      },
      {
        heading: "Top Causes of Roof Ingress in WA",
        content: [
          "Here are the primary culprits our repair teams diagnose across Perth, Mandurah, and Bunbury:",
        ],
        listItems: [
          "Cracked and Dislodged Tiles: Fallen branches, foot traffic, or severe hail fracture tiles, creating an open gateway for water.",
          "Deteriorated Ridge Cap Pointing: Traditional cement mortar breaks down with age, allowing driving rain to penetrate the ridge line.",
          "Rusted Valley Trays: Metal valleys collect moisture, leaves, and dirt, eventually rusting through unseen beneath the tiles.",
          "Blocked Gutters & Downpipes: Overflowing water backs up under roof sheeting and eaves, flooding wall cavities.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my leak is an emergency?",
        answer:
          "If water is actively pooling on your ceiling, bulging the plaster, or dripping near electrical fittings, it is an emergency. Relieve pressure by puncturing a small hole into a bucket and contact a roofing professional immediately.",
      },
    ],
    relatedServices: [
      { name: "Roof Repairs", href: "/services/roof-repairs" },
      { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
    ],
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
    authorRole: "Restoration Consultants",
    image: "/images/web/IMG_2870.jpg",
    metaTitle: "Roof Repair vs Restoration: How to Choose | Elite Star Roofing WA",
    metaDescription:
      "Compare targeted roof repairs with complete roof restorations in Perth to find the most cost-effective option for your home.",
    primaryKeyword: "roof repair vs restoration",
    keyTakeaways: [
      "Roof repairs target isolated faults like a few broken tiles or single flashing leak.",
      "A restoration comprehensively revitalises the entire roof with cleaning, re-pointing, and multi-coat protective membrane.",
      "Restoration extends the lifespan of an older roof by 10 to 15 years at a fraction of reroofing costs.",
    ],
    sections: [
      {
        heading: "Deciding Between a Repair and a Full Restoration",
        content: [
          "Homeowners often wonder whether patching a few problem spots is sufficient or if an extensive roof restoration is the wiser long-term investment. Understanding the difference helps you allocate your budget effectively.",
        ],
      },
      {
        heading: "When to Opt for a Roof Repair",
        content: [
          "A targeted repair is suitable when your overall roof is structurally sound and you only have localised issues:",
        ],
        listItems: [
          "A handful of cracked tiles caused by storm debris or antenna installers.",
          "A single leaking valley tray or chimney flashing.",
          "A localized gutter blockage or minor leak above a patio.",
        ],
      },
      {
        heading: "When a Roof Restoration is the Better Choice",
        content: [
          "A full restoration is recommended when your roof shows systemic signs of aging:",
        ],
        listItems: [
          "Mortar pointing is cracked or crumbling across the majority of the ridge line.",
          "Tiles are brittle, porous, and covered in dense lichen or moss.",
          "The roof looks severely faded and dated, diminishing your home's kerb appeal.",
        ],
      },
    ],
    relatedServices: [
      { name: "Roof Painting & Restoration", href: "/services/roof-painting" },
      { name: "Roof Repairs", href: "/services/roof-repairs" },
    ],
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
    authorRole: "Master Applicators",
    image: "/images/web/IMG_5505.jpg",
    metaTitle: "Roof Painting Preparation Guide | Elite Star Roofing WA",
    metaDescription:
      "Discover why proper washing, tile repairs, and priming are essential steps for a long-lasting roof paint finish in Perth.",
    primaryKeyword: "roof painting preparation",
    keyTakeaways: [
      "70% of a roof painting job's longevity comes down to meticulous surface preparation.",
      "Never paint over moss, lichen, or crumbling mortar.",
      "Applying the correct primer creates a tenacious chemical bond for top coats.",
    ],
    sections: [
      {
        heading: "Why Preparation Dictates Longevity",
        content: [
          "Applying paint to an unprepared roof is like building a house on quicksand. Western Australia's intense UV index and wild seasonal temperature swings will quickly blister, crack, and peel any coating that lacks proper adhesion.",
          "At Elite Star Roofing, our team spends the majority of project time preparing the substrate so your new roof colour looks pristine for over a decade.",
        ],
      },
    ],
    relatedServices: [
      { name: "Roof Painting", href: "/services/roof-painting" },
      { name: "Roof Cleaning", href: "/services/roof-cleaning" },
    ],
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
    authorRole: "Roof Inspectors",
    image: "/images/web/IMG_4970.jpg",
    metaTitle: "Signs Your Roof Needs Attention | Elite Star Roofing WA",
    metaDescription:
      "Recognize critical warning signs that your Perth roof requires immediate inspection and repair before leaks cause internal damage.",
    primaryKeyword: "signs roof needs repair",
    keyTakeaways: [
      "Visual checks from the street can reveal early warnings like sagging ridge caps and broken tiles.",
      "Check gutters for granules or concrete fragments which signal tile surface breakdown.",
      "Book an inspection before the rainy winter season begins.",
    ],
    sections: [
      {
        heading: "Early Warning Signs to Watch For",
        content: [
          "Most roofs silently degrade for years before catastrophic failure. Regular visual checks allow you to take action early and prevent expensive structural repairs.",
        ],
      },
    ],
    relatedServices: [
      { name: "Roof Repairs", href: "/services/roof-repairs" },
      { name: "Roof Cleaning", href: "/services/roof-cleaning" },
    ],
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
    authorRole: "Industry Advisors",
    image: "/images/web/IMG_5760_JPG.jpg",
    metaTitle: "Questions to Ask a Roofing Contractor in WA | Elite Star Roofing",
    metaDescription:
      "Essential questions to ask your Perth roofing contractor before signing a quote to ensure quality, insurance, and warranty protection.",
    primaryKeyword: "hire roofing contractor",
    keyTakeaways: [
      "Verify public liability insurance and trade qualifications before any work begins.",
      "Demand an itemised quote that breaks down preparation, repairs, and materials.",
      "Ask for recent local Perth references and verified photos of finished jobs.",
    ],
    sections: [
      {
        heading: "Protecting Your Home When Hiring a Roofer",
        content: [
          "Your roof is your home's first line of defense against the elements. Choosing the wrong contractor can lead to substandard materials, unaddressed structural leaks, and voided insurance policies.",
        ],
      },
    ],
    relatedServices: [
      { name: "About Us", href: "/about" },
      { name: "Request a Free Quote", href: "/request-quote" },
    ],
  },
  */
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "David M.",
    role: "Senior Roof Inspection Specialist",
    bio: "Over 15 years in WA residential roof restoration, precision leak tracing, and tile condition diagnosis across Perth and the Peel region.",
    image: "/images/web/IMG_5780.jpg",
  },
  {
    name: "Liam K.",
    role: "Lead Re-Pointing & Coating Technician",
    bio: "Specialising in flexible polymer ridge pointing, mortar bedding repairs, and industrial high-build acrylic roof membrane application.",
    image: "/images/web/IMG_5797.jpg",
  },
  {
    name: "WA On-Site Operations Crew",
    role: "Site Safety & Quality Assurance",
    bio: "Dedicated local roofing technicians ensuring spotless property cleanups, safe ladder staging, and strict quality control on every project.",
    image: "/images/web/IMG_5719.jpg",
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
