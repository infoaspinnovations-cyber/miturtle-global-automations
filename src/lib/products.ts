import boom120 from "@/assets/boom-mt-dcmt-120.png";
import boom150 from "@/assets/boom-mt-dcgl-150.png";
import boom200 from "@/assets/boom-mt-dcmt-200.png";
import boom240 from "@/assets/boom-mt-dcmths-240.png";
import sliding from "@/assets/sliding-gate-motor.png";
import access from "@/assets/access-control.jpg";
import bollard from "@/assets/automatic-bollard.png";

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: "boom" | "gate" | "access" | "bollard";
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "mt-dcmt-120",
    model: "MT-DCMT/120",
    name: "Compact DC Boom Barrier",
    category: "boom",
    tagline: "Precision-engineered for commercial lanes",
    description:
      "A compact DC-motor boom barrier purpose-built for residential complexes, office parks, and retail entrances. Smooth, silent operation with intelligent obstacle detection.",
    image: boom120,
    specs: [
      { label: "Opening Time", value: "1.8 sec" },
      { label: "Boom Length", value: "Up to 3 m" },
      { label: "Motor", value: "24V DC Brushless" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
    features: [
      "Brushless DC motor",
      "Silent magnetic limit sensing",
      "Auto-reverse on obstacle",
      "LED status strip",
      "Manual release",
    ],
    applications: ["Residential complexes", "Office parks", "Retail parking", "Hotels"],
  },
  {
    slug: "mt-dcgl-150",
    model: "MT-DCGL/150",
    name: "Integrated Gate-Lane Barrier",
    category: "boom",
    tagline: "Boom barrier with articulated gate fence",
    description:
      "Heavy-duty integrated solution combining a precision boom with an articulated gate-fence. Ideal for high-security perimeters that demand both vehicle and pedestrian control.",
    image: boom150,
    specs: [
      { label: "Opening Time", value: "2.5 sec" },
      { label: "Boom Length", value: "Up to 4.5 m" },
      { label: "Motor", value: "24V DC High-Torque" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Articulated fence boom",
      "Anti-climb construction",
      "Reinforced steel chassis",
      "RFID & app integration ready",
      "Battery backup compatible",
    ],
    applications: ["Industrial gates", "Defense premises", "Logistics yards", "Data centers"],
  },
  {
    slug: "mt-dcmt-200",
    model: "MT-DCMT/200",
    name: "High-Speed DC Boom Barrier",
    category: "boom",
    tagline: "Engineered for rapid throughput lanes",
    description:
      "Tower-style high-speed boom barrier built for premium corporate entrances and toll lanes that demand sub-2-second cycles with continuous duty.",
    image: boom200,
    specs: [
      { label: "Opening Time", value: "1.2 sec" },
      { label: "Boom Length", value: "Up to 3.5 m" },
      { label: "Motor", value: "Brushless DC Servo" },
      { label: "MCBF", value: "8M cycles" },
    ],
    features: [
      "Sub-second opening",
      "Servo precision motor",
      "Edge-detection safety",
      "Smart slow-down profile",
      "OLED diagnostics panel",
    ],
    applications: ["Corporate HQ", "Hotels & resorts", "Airports", "Smart cities"],
  },
  {
    slug: "mt-dcmths-240",
    model: "MT-DCMTHS/240",
    name: "Heavy-Duty High-Speed Barrier",
    category: "boom",
    tagline: "Toll-plaza grade ultra-fast barrier",
    description:
      "Our flagship industrial-grade boom barrier. Armored cabinet, ultra high-speed servo drive, and integrated traffic intelligence — designed for highway tolls and critical infrastructure.",
    image: boom240,
    specs: [
      { label: "Opening Time", value: "0.9 sec" },
      { label: "Boom Length", value: "Up to 6 m" },
      { label: "Motor", value: "Industrial Servo Drive" },
      { label: "MCBF", value: "10M+ cycles" },
    ],
    features: [
      "Armored IP65 cabinet",
      "Vehicle-loop & ANPR ready",
      "Real-time telemetry",
      "Redundant power input",
      "Lightning protection",
    ],
    applications: ["Highway toll plazas", "Border checkpoints", "Critical infrastructure", "Ports"],
  },
  {
    slug: "sliding-gate-motor",
    model: "MT-SGM",
    name: "Sliding Gate Motor",
    category: "gate",
    tagline: "Silent automation for sliding gates",
    description:
      "Compact, weather-sealed sliding gate motor delivering smooth, quiet automation for gates up to 1800 kg with intelligent soft-start / soft-stop control.",
    image: sliding,
    specs: [
      { label: "Max Gate Weight", value: "1800 kg" },
      { label: "Speed", value: "12 m/min" },
      { label: "Motor", value: "DC Geared" },
      { label: "IP Rating", value: "IP54" },
    ],
    features: [
      "Soft-start / soft-stop",
      "Encoder feedback",
      "Battery backup option",
      "Mobile app control",
      "Self-learning end stops",
    ],
    applications: ["Villas", "Industrial yards", "Warehouses", "Corporate campuses"],
  },
  {
    slug: "automatic-bollard",
    model: "MT-BLD",
    name: "Automatic Rising Bollard",
    category: "bollard",
    tagline: "Hostile-vehicle mitigation, elegantly engineered",
    description:
      "A premium stainless-steel automatic rising bollard for high-security perimeters. Hydraulic actuation with sub-3-second deployment and crash-rated construction for critical entries.",
    image: bollard,
    specs: [
      { label: "Rise Time", value: "2.8 sec" },
      { label: "Height", value: "600 mm" },
      { label: "Diameter", value: "Ø 220 mm" },
      { label: "Build", value: "SS-304 Crash-Rated" },
    ],
    features: [
      "Hydraulic precision actuation",
      "LED amber rim lighting",
      "Crash-rated stainless construction",
      "Sub-3-second deployment",
      "Loop & RFID integration",
    ],
    applications: ["Embassies", "VIP entrances", "Government", "Corporate HQ"],
  },
  {
    slug: "access-control-systems",
    model: "MT-AC",
    name: "Access Control Systems",
    category: "access",
    tagline: "Biometric, RFID & mobile-credential ready",
    description:
      "A unified access platform combining biometric, RFID, and mobile credentials with cloud dashboards, audit trails, and seamless integration with boom barriers and gates.",
    image: access,
    specs: [
      { label: "Auth Methods", value: "Bio · RFID · App" },
      { label: "Users", value: "Up to 50,000" },
      { label: "Logs", value: "Unlimited Cloud" },
      { label: "Integration", value: "REST · MQTT" },
    ],
    features: [
      "Multi-factor authentication",
      "Cloud dashboard",
      "Real-time alerts",
      "API & webhook ready",
      "Visitor management",
    ],
    applications: ["Enterprises", "Co-working spaces", "Educational campuses", "Healthcare"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
