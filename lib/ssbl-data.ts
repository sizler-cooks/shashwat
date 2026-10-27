export type ProjectScope = string[]

export type PrestigiousProject = {
  number: string
  name: string
  slug: string
  image: string
  location?: string
  description: string
  scope: ProjectScope
}

export type AdditionalProject = {
  name: string
  image: string
  imageAlt?: string
  imageFit?: "contain" | "cover"
  location: string
  natureOfWork: string
  status: "Completed" | "Presently working"
  description?: string
}

export const company = {
  legalName: "Shashwat Samya Buildcon Private Limited",
  shortName: "SSBPL",
  established: "2021",
  heroVision: "Empowering Smart, Scalable, and Sustainable Technology",
  heroSubline:
    "Committed to driving growth through seamless infrastructure integration, enhancing efficiency, reliability, and sustainability for a smarter future",
  shortStatement: "We enable Smart, Scalable, Sustainable technology.",
  strapline:
    "Quality. Safety. Innovation. A dependable partner committed to excellence, lasting relationships, and long-term value.",
  aboutParagraphs: [
    "Established in 2021, Shashwat Samya Buildcon Private Limited was founded with a vision to deliver reliable, high-quality engineering and infrastructure solutions across India. The company has evolved into a multidisciplinary engineering and construction organization specializing in Electrical, Civil, and Mechanical works.",
    "With expertise spanning HT/LT electrical systems, substation projects, industrial infrastructure, commercial construction, turnkey EPC execution, and maintenance services, Shashwat Samya Buildcon provides end-to-end project solutions for industrial, commercial, and government sectors. Backed by a skilled workforce, robust project management capabilities, and an unwavering commitment to quality, safety, and innovation, the company continues to build lasting partnerships while contributing to India's rapidly expanding infrastructure landscape.",
  ],
  vision:
    "To be a dependable engineering and infrastructure partner, delivering smart, scalable, and sustainable solutions that drive India's growth.",
} as const

export const strengths = [
  {
    title: "End-to-End Services",
    description:
      "A wide range of services tailored to meet the diverse needs of our clients.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Bringing innovative and cost-effective solutions to address complex infrastructure challenges.",
  },
  {
    title: "Delivering Excellence",
    description:
      "Ensuring that every project is completed to the highest standards of quality and efficiency.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Promoting green and sustainable infrastructure to contribute to a healthier planet.",
  },
  {
    title: "Timely Delivery",
    description:
      "Meeting project deadlines and ensuring timely delivery without compromising on quality.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Providing exceptional customer service and support throughout the project lifecycle.",
  },
]

export const missionPoints = [
  {
    title: "Quality",
    description:
      "Deliver reliable, high-quality engineering and infrastructure solutions across India.",
  },
  {
    title: "End-to-End Execution",
    description:
      "From design and engineering to installation, commissioning, and maintenance.",
  },
  {
    title: "Safety",
    description:
      "Uphold the highest standards of quality, safety, and operational excellence on every project.",
  },
  {
    title: "Innovation",
    description:
      "Bring innovative and cost-effective solutions to complex infrastructure challenges.",
  },
  {
    title: "Sustainability",
    description:
      "Promote green and sustainable infrastructure for a healthier planet.",
  },
  {
    title: "Partnership",
    description: "Meet deadlines, delight customers, and build lasting partnerships.",
  },
]

export const glanceItems = [
  { value: "2021", label: "Established" },
  { value: "3", label: "Core disciplines: Electrical, Civil & Mechanical" },
  { value: "7", label: "Prestigious projects" },
  { value: "25", label: "Esteemed clients" },
  { value: "12", label: "Technology partners" },
]

export const glanceStatement =
  "End-to-end solutions for industrial, commercial, and government sectors."

export const capabilityTags = [
  "HT/LT Electrical Systems",
  "Substation Projects",
  "Industrial Infrastructure",
  "Commercial Construction",
  "Turnkey EPC Execution",
  "Maintenance Services",
]

export const serviceGroups = [
  {
    title: "Non-IT Solutions",
    services: [
      {
        name: "Interiors Fit-Outs",
        description:
          "Tailored interior design that transforms spaces into warm, welcoming, and efficient environments.",
      },
      {
        name: "Security & Low Voltage (LV) Systems",
        description:
          "Access control, surveillance, physical security, EMI/RFI detection, and fire suppression.",
      },
      {
        name: "Virtual Reality Training Centers",
        description:
          "Immersive, interactive VR training experiences for institutions, industries, and organizations.",
      },
      {
        name: "Audio-Visual Solutions",
        description:
          "Tailored AV ecosystems spanning video conferencing, AI-powered sound, and immersive displays.",
      },
      {
        name: "Civil Infrastructure",
        description:
          "Complex infrastructure solutions supported by engineering methodologies and project management.",
      },
      {
        name: "Renewable Energy and EV",
        description:
          "Solar power, EV charging, water heating, and storage solutions, from design through support.",
      },
      {
        name: "Critical Power",
        description:
          "Designed, implemented, and maintained power systems for mission-critical applications.",
      },
      {
        name: "Facility Management System",
        description:
          "Space optimization, critical-system reliability, and ongoing support for facility performance.",
      },
    ],
  },
  {
    title: "Emerging Technologies",
    services: [
      {
        name: "High Performance & Quantum Computing",
        description:
          "High-performance clusters and quantum simulators for fast processing and complex simulations.",
      },
      {
        name: "AI-Based Intelligent Surveillance Systems",
        description:
          "AI-enabled facial recognition, anomaly detection, and predictive threat assessment.",
      },
      {
        name: "Smart City Infrastructure",
        description:
          "IoT sensors, connected transport, public utilities, and intelligent governance platforms.",
      },
      {
        name: "Integrated Command Control Centres",
        description:
          "C4i infrastructure integrating monitoring, communication, data analytics, and emergency response.",
      },
      {
        name: "Cloud Solutions & Virtualization",
        description:
          "Private, public, and hybrid cloud infrastructure and virtualization services.",
      },
      {
        name: "IoT Integration for Agriculture",
        description:
          "Connected sensors to monitor soil, weather, crop growth, and irrigation systems.",
      },
      {
        name: "Drones (UAVs) & Anti Drone Technologies",
        description:
          "Drone solutions for imaging and inspections, alongside anti-drone detection and tracking systems.",
      },
      {
        name: "Communication Interception Solutions",
        description:
          "Platforms for real-time capture and analysis of voice, text, and data across secured networks.",
      },
    ],
  },
] as const

export const prestigiousProjects: PrestigiousProject[] = [
  {
    number: "01",
    name: "Solar Project Ranchi",
    slug: "solar-project-ranchi",
    image: "/assets/prestigious_01_solar_project_ranchi.jpg",
    location: "Ranchi",
    description:
      "We successfully executed critical Electrical and Civil infrastructure for the Ranchi Floating Solar Power Project, covering HT/LT electrical systems, substation civil works, cable trenching, earthing, and structural foundations. Our commitment to quality, safety, and timely execution ensured reliable project delivery and long-term operational performance.",
    scope: [
      "HT/LT electrical systems",
      "Substation civil works",
      "Cable trenching",
      "Earthing",
      "Structural foundations",
    ],
  },
  {
    number: "02",
    name: "THDC",
    slug: "thdc",
    image: "/assets/prestigious_02_thdc.jpg",
    location: "Khurja",
    description:
      "Our expertise played a key role in the successful execution of Electrical and Civil works for the Khurja THDC Power Plant. The project included HT/LT electrical installations, cable laying, substation infrastructure, equipment foundations, earthing systems, and associated civil works, ensuring reliable power infrastructure, operational efficiency, and adherence to the highest quality and safety standards.",
    scope: [
      "HT/LT electrical installations",
      "Cable laying",
      "Substation infrastructure",
      "Equipment foundations",
      "Earthing systems",
      "Associated civil works",
    ],
  },
  {
    number: "03",
    name: "IGI Airport",
    slug: "igi-airport",
    image: "/assets/prestigious_03_igi_airport.jpg",
    location: "Indira Gandhi International Airport (IGI)",
    description:
      "Our team successfully executed Electrical and Civil works at Indira Gandhi International Airport (IGI), delivering critical infrastructure to support seamless airport operations. The scope included HT/LT electrical installations, cable laying, substation works, civil construction, and associated infrastructure, executed with the highest standards of quality, safety, and operational excellence.",
    scope: [
      "HT/LT electrical installations",
      "Cable laying",
      "Substation works",
      "Civil construction",
      "Associated infrastructure",
    ],
  },
  {
    number: "04",
    name: "IKEA",
    slug: "ikea",
    image: "/assets/prestigious_04_ikea.jpg",
    location: "Gurugram",
    description:
      "We successfully delivered integrated Electrical and Civil infrastructure for the IKEA Gurugram Project, encompassing HT/LT electrical systems, cable laying, substation works, and civil construction. Executed with precision and engineering excellence, the project reflects our commitment to quality, safety, and timely delivery.",
    scope: [
      "HT/LT electrical systems",
      "Cable laying",
      "Substation works",
      "Civil construction",
    ],
  },
  {
    number: "05",
    name: "GIS",
    slug: "gis",
    image: "/assets/prestigious_05_gis.jpg",
    description:
      "We successfully executed Electrical and Civil works for the GIS Substation Project, delivering comprehensive solutions including GIS equipment installation, HT cable laying, control panel integration, earthing systems, and structural foundations. Our commitment to quality, safety, and timely execution ensured dependable power distribution and long-term operational reliability.",
    scope: [
      "GIS equipment installation",
      "HT cable laying",
      "Control panel integration",
      "Earthing systems",
      "Structural foundations",
    ],
  },
  {
    number: "06",
    name: "Jharkhand Road Construction Department",
    slug: "jharkhand-road-construction-department",
    image: "/assets/prestigious_06_jharkhand_road_construction_department.jpg",
    location: "Jharkhand",
    description:
      "We successfully executed highway and road development works for the Jharkhand Road Construction Department, including earthwork, pavement construction, drainage infrastructure, and allied civil works. Through meticulous planning, quality-driven execution, and strict safety compliance, we delivered reliable infrastructure that supports efficient mobility and long-term regional development.",
    scope: [
      "Earthwork",
      "Pavement construction",
      "Drainage infrastructure",
      "Allied civil works",
    ],
  },
  {
    number: "07",
    name: "Executive Enclave",
    slug: "executive-enclave",
    image: "/assets/prestigious_07_executive_enclave.jpg",
    description:
      "Our team successfully delivered integrated Electrical and Civil infrastructure for the Executive Enclave Project, including HT/LT electrical systems, cable laying, internal utility networks, lighting solutions, and civil construction. Through precision engineering, quality workmanship, and strict safety compliance, we created reliable infrastructure that supports modern residential and commercial development.",
    scope: [
      "HT/LT electrical systems",
      "Cable laying",
      "Internal utility networks",
      "Lighting solutions",
      "Civil construction",
    ],
  },
]

export const additionalProjects: AdditionalProject[] = [
  {
    name: "Arihant Sparsh",
    image: "/assets/additional_01_arihant_sparsh.jpg",
    location: "Vashi, Navi Mumbai",
    natureOfWork: "Complete Tiling with Italian Marble",
    status: "Completed",
  },
  {
    name: "Arihant Ansh",
    image: "/assets/additional_02_arihant_ansh.jpg",
    location: "Vashi, Navi Mumbai",
    natureOfWork: "Complete Tiling",
    status: "Completed",
  },
  {
    name: "Siddharth Apartment",
    image: "/assets/additional_03_siddharth_apartment.jpg",
    location: "Vakola, Mumbai",
    natureOfWork: "Complete Lock & Key",
    status: "Completed",
  },
  {
    name: "Welfare Chambers",
    image: "/assets/additional_04_welfare_chambers.jpg",
    location: "Vashi, Navi Mumbai",
    natureOfWork: "Complete Tiling & Repairing Work",
    status: "Completed",
  },
  {
    name: "72 Corp",
    image: "/assets/additional_05_72_corp.jpg",
    location: "Sakinaka, Mumbai",
    natureOfWork: "Complete Tiling, Tri Mix & Painting Work",
    status: "Completed",
  },
  {
    name: "Ashtvinayak Sarvam",
    image: "/assets/additional_06_ashtvinayak_sarvam.jpg",
    location: "Taloja, Navi Mumbai",
    natureOfWork: "Complete Tiling",
    status: "Completed",
  },
  {
    name: "Adviat Eternal Bliss",
    image: "/assets/additional_07_adviat_eternal_bliss.jpg",
    location: "Nehru Nagar, Kurla",
    natureOfWork: "Tiling, Painting Work",
    status: "Presently working",
  },
  {
    name: "Golf Walk",
    image: "/assets/additional_08_golf_walk.jpg",
    location: "Golf Club, Chembur",
    natureOfWork: "Civil Work, Infrastructure & Painting",
    status: "Presently working",
  },
  {
    name: "Rajshree 43",
    image: "/assets/additional_09_rajshree_43.jpg",
    location: "Pantnagar, Ghatkopar (E)",
    natureOfWork:
      "Complete Tiling, Complete Painting, Door & Frame, Sliding Window, All Electrical Work, Waterproofing",
    status: "Presently working",
  },
  {
    name: "Rajshree 55",
    image: "/assets/additional_10_rajshree_55.jpg",
    location: "Pantnagar, Ghatkopar (E)",
    natureOfWork: "Sliding Window, All Electrical Work, Waterproofing",
    status: "Presently working",
  },
  {
    name: "A.P. State Housing Corp.",
    image: "/assets/additional_11_ap_state_housing_corp.jpg",
    imageAlt: "Type design and elevation drawing for A.P. State Housing Corp.",
    imageFit: "contain",
    location: "Visakhapatnam District",
    natureOfWork: "Lock & Key",
    status: "Presently working",
    description:
      "Type design for YSR-Jagananna Colonies. Plinth area 340 sft (main building 272 sft + verandah 68 sft); site area 48.33 sq yd. Total: 1000 Tenements.",
  },
]

export const clients = [
  "IndianOil",
  "National Security Guard",
  "National Association of Free & Charitable Clinics",
  "International College of Management Sydney",
  "Mahanagar Telephone Nigam Limited",
  "Indian Institute of Tropical Meteorology",
  "Airports Authority of India",
  "Indian Institute of Technology Delhi",
  "National Thermal Power Corporation",
  "Reserve Bank of India",
  "Punjab National Bank",
  "HDFC Bank",
  "RailTel Corporation of India",
  "Delhi Development Authority",
  "Bharat Broadband Network Limited",
  "Larsen & Toubro",
  "National Intelligence Grid",
  "Central Public Works Department",
  "Ministry of Home Affairs",
  "National Buildings Construction Corporation",
  "Income Tax Department",
  "Public Works Department",
  "Centre for Railway Information Systems",
  "National Informatics Centre",
  "TATA Projects",
]

export const technologyPartners = [
  { name: "Microsoft", image: "/assets/partner_01_microsoft.png" },
  { name: "Cisco", image: "/assets/partner_02_cisco.png" },
  { name: "CommScope", image: "/assets/partner_03_commscope.png" },
  { name: "Atos", image: "/assets/partner_04_atos.png" },
  { name: "Siemens", image: "/assets/partner_05_siemens.png" },
  { name: "dormakaba", image: "/assets/partner_06_dormakaba.png" },
  { name: "Rittal", image: "/assets/partner_07_rittal.png" },
  { name: "ERAM Holdings", image: "/assets/partner_08_eram_holdings.png" },
  { name: "Delta", image: "/assets/partner_09_delta.png" },
  { name: "Vertiv", image: "/assets/partner_10_vertiv.png" },
  { name: "XVR Simulation", image: "/assets/partner_11_xvr_simulation.png" },
  { name: "Schneider Electric", image: "/assets/partner_12_schneider_electric.png" },
]

export const contact = {
  address: "T1, Unit 508 Office Space NXone, Techzone 4, Plot No. 17, Greater Noida West, near Gaur City Mall 201306",
  phone: "+91 9204756617",
  phoneHref: "tel:+919204756617",
  email: "shashwatsamya@gmail.com",
  emailHref: "mailto:shashwatsamya@gmail.com",
}

export const footerStatement =
  "Committed to driving growth through seamless infrastructure integration, enhancing efficiency, reliability, and sustainability for a smarter future"
