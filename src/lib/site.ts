/**
 * Central site content & contact details.
 *
 * Anything marked `PLACEHOLDER` is sample content — replace it with real
 * information before launch (see README.md for the full checklist).
 */

export const site = {
  name: "Gold Stitch It",
  legalName: "Gold Stitch It Services",
  tagline: "Custom cloth making, bulk production & tailoring training in Lagos.",
  description:
    "Gold Stitch It is a CAC-registered fashion design and tailoring studio in Yaba, Lagos. We make custom streetwear, two-pieces, jorts and bulk brand orders — and we train the next generation of tailors.",
  phoneDisplay: "+234 906 682 4196",
  whatsappNumber: "2349066824196",
  // PLACEHOLDER — replace with the real business email
  email: "hello@goldstitchit.com",
  address: {
    line1: "S-354, Second Floor, Yaba Complex",
    line2: "Yaba, Lagos State, Nigeria",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Yaba+Complex+Yaba+Lagos",
  // PLACEHOLDER — confirm opening hours
  hours: [
    { days: "Mon – Fri", time: "9:00am – 6:00pm" },
    { days: "Saturday", time: "10:00am – 4:00pm" },
  ],
  cac: {
    regNo: "9843910",
    label: "CAC Registered Business",
  },
  socials: [
    { name: "TikTok", handle: "@goldstitchit", href: "https://www.tiktok.com/@goldstitchit" },
    // PLACEHOLDER — confirm Instagram handle
    { name: "Instagram", handle: "@goldstitchit", href: "https://www.instagram.com/goldstitchit" },
    { name: "WhatsApp", handle: "+234 906 682 4196", href: "https://wa.me/2349066824196" },
  ],
  year: 2026,
} as const;

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Works", href: "#works" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  title: string;
  blurb: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Custom Streetwear",
    blurb: "Joggers, jorts, hoodies and jackets cut to your exact measurements.",
    image: "/images/navy-print-jorts.webp",
  },
  {
    title: "Tracksuits & Two-Pieces",
    blurb: "Matching sets with piping, panels and contrast details.",
    image: "/images/inspiration-to-outfit-poster.jpg",
  },
  {
    title: "Bulk & Brand Production",
    blurb: "Production runs for clothing brands, teams, events and uniforms.",
    image: "/images/brand-story-poster.jpg",
  },
  {
    title: "Recreate Any Style",
    blurb: "Send us a picture — we'll source the fabric and stitch it for you.",
    image: "/images/camo-jorts.webp",
  },
  {
    title: "Prints & Embroidery",
    blurb: "Logos, lettering and graphics finished to a premium standard.",
    image: "/images/burgundy-jorts.webp",
  },
  {
    title: "Tailoring Training",
    blurb: "Hands-on classes from basic sewing to full garment production.",
    image: "/images/workshop-poster.jpg",
  },
];

export const steps = [
  {
    title: "Consultation",
    text: "Send us your idea, a picture or your brand brief on WhatsApp. We'll advise on fabric, finish, quantity and budget.",
    image: "/images/fabrics-poster.jpg",
  },
  {
    title: "Measurement & Fabric",
    text: "We take your measurements (in-studio or remotely) and source quality fabric from Lagos' best markets.",
    image: "/images/workshop-poster.jpg",
  },
  {
    title: "Cutting & Stitching",
    text: "Our tailors pattern, cut and stitch every piece with clean seams and careful finishing.",
    image: "/images/black-yellow-stripe-shorts.webp",
  },
  {
    title: "Delivery",
    text: "Your order is quality-checked, packed and delivered anywhere in Lagos, Nigeria — or shipped abroad.",
    image: "/images/navy-print-jorts-mirror.webp",
  },
] as const;

// PLACEHOLDER — replace with real figures
export const stats = [
  { value: 1500, suffix: "+", label: "Pieces Stitched", text: "Custom outfits and production pieces delivered to happy clients." },
  { value: 300, suffix: "+", label: "Happy Clients", text: "Individuals and brands who trust us with their wardrobe." },
  { value: 50, suffix: "+", label: "Students Trained", text: "Tailors who learnt the craft in our Yaba workshop." },
  { value: 100, suffix: "%", label: "Made to Measure", text: "Every piece is cut for the person who'll wear it." },
  { value: 20, suffix: "+", label: "Brands Served", text: "Clothing brands we've produced bulk orders for." },
] as const;

export type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

export const gallery: GalleryItem[] = [
  { type: "image", src: "/images/navy-print-jorts.webp", alt: "Navy jorts with yellow print" },
  { type: "video", src: "/videos/yellow-stripe-shorts.mp4", poster: "/images/yellow-stripe-shorts-poster.jpg", alt: "Yellow shorts with black side stripes" },
  { type: "image", src: "/images/beige-stripe-shorts.webp", alt: "Beige shorts with black stripes" },
  { type: "image", src: "/images/camo-jorts.webp", alt: "Camouflage jorts" },
  { type: "video", src: "/videos/lightblue-shorts.mp4", poster: "/images/lightblue-shorts-poster.jpg", alt: "Light blue shorts with navy stripes" },
  { type: "image", src: "/images/burgundy-jorts.webp", alt: "Burgundy jorts with embroidered logo" },
  { type: "image", src: "/images/blue-stripe-shorts.webp", alt: "Royal blue shorts with white stripes" },
  { type: "video", src: "/videos/yellow-print-shorts.mp4", poster: "/images/yellow-print-shorts-poster.jpg", alt: "Yellow shorts with black graphic print" },
  { type: "image", src: "/images/black-print-jorts.webp", alt: "Black jorts with white print" },
  { type: "image", src: "/images/black-yellow-stripe-shorts.webp", alt: "Black shorts with yellow stripes" },
  { type: "image", src: "/images/camo-jorts-side.webp", alt: "Camouflage jorts, side view" },
  { type: "image", src: "/images/navy-print-jorts-mirror.webp", alt: "Navy jorts mirror shot" },
];

// PLACEHOLDER — replace with real course details & fees
export const courses = [
  {
    level: "Beginner",
    title: "Foundation Sewing",
    duration: "4 weeks",
    price: "₦XX,XXX",
    points: ["Machine handling & maintenance", "Taking body measurements", "Basic stitches & seams", "Your first wearable piece"],
  },
  {
    level: "Intermediate",
    title: "Pattern & Garment Making",
    duration: "8 weeks",
    price: "₦XX,XXX",
    points: ["Pattern drafting", "Joggers, shorts & tops", "Zips, pockets & waistbands", "Fitting & adjustments"],
    featured: true,
  },
  {
    level: "Advanced",
    title: "Streetwear Production",
    duration: "12 weeks",
    price: "₦XX,XXX",
    points: ["Tracksuits & jackets", "Bulk cutting & production flow", "Finishing & quality control", "Starting your own brand"],
  },
] as const;

// PLACEHOLDER — replace with real customer reviews
export const testimonials = [
  { title: "Exactly like the picture", quote: "I sent a screenshot of a tracksuit and what I got was even better. The fit is perfect.", name: "Customer Name", location: "Lekki, Lagos" },
  { title: "Reliable for bulk orders", quote: "They produced our brand's first run of joggers on time, with clean finishing on every piece.", name: "Brand Owner", location: "Ikeja, Lagos" },
  { title: "Best jorts I own", quote: "Fabric quality is premium and the stitching is solid. I've already placed my second order.", name: "Customer Name", location: "Abuja" },
  { title: "Learnt so much", quote: "The training was practical from day one. I can now cut and sew my own joggers.", name: "Former Student", location: "Yaba, Lagos" },
  { title: "Great communication", quote: "They kept me updated on WhatsApp through every stage, from fabric to delivery.", name: "Customer Name", location: "Port Harcourt" },
] as const;

export const serviceOptions = [
  "Custom outfit",
  "Tracksuit / two-piece",
  "Bulk / brand production",
  "Recreate a style from a picture",
  "Prints & embroidery",
  "Tailoring training",
  "Something else",
] as const;
