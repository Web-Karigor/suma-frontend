export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hajj & Umrah", href: "/hajj-umrah" },
  { label: "Packages", href: "/packages" },
  { label: "Visa", href: "/visa" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroContent = {
  title: "Hajj & Umrah",
  description:
    "Begin your sacred journey with trusted guidance, carefully planned packages, and support at every step — from visa to your stay in the Holy Cities.",
  cta: { label: "Book Now", href: "/hajj-umrah" },
  image:
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&q=80",
};

export const heroCards = [
  {
    title: "Hajj Packages",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80",
    href: "/hajj-umrah",
  },
  {
    title: "Visa Services",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    href: "/visa",
  },
  {
    title: "Hotel Accommodations",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    href: "/hotels",
  },
] as const;

export const exclusiveOffers = [
  {
    id: "emi",
    title: "Travel now, pay later",
    subtitle: "Flexible 0% EMI on selected packages",
    badge: "0% EMI",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "umrah",
    title: "Umrah early bird",
    subtitle: "Save on upcoming Holy Journey departures",
    badge: "Save 15%",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "asia",
    title: "Asia getaways",
    subtitle: "Handpicked city & nature escapes",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const topPackages = [
  {
    id: "tourist-visa",
    title: "Tourist Visa",
    description: "Fast, reliable processing for leisure travel worldwide.",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",
    area: "tourist",
  },
  {
    id: "student-visa",
    title: "Student Visa",
    description: "Guided support for study destinations.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    area: "student",
  },
  {
    id: "corporate-tour",
    title: "Corporate Tour",
    description: "End-to-end planning for business travel.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    area: "corporate",
  },
  {
    id: "hajj-umrah",
    title: "Hajj & Umrah",
    description: "Sacred journeys with premium stays and dedicated group leaders.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    area: "hajj",
  },
  {
    id: "hotels",
    title: "Hotel Accommodations",
    description: "Curated stays from city hotels to beach resorts.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    area: "hotels",
  },
  {
    id: "custom",
    title: "Customized Tour",
    description: "Itineraries shaped around your dates, budget, and style.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
    area: "custom",
  },
] as const;

export const airlines = [
  { name: "Emirates", code: "EK" },
  { name: "Qatar Airways", code: "QR" },
  { name: "Biman Bangladesh", code: "BG" },
  { name: "Saudia", code: "SV" },
  { name: "Singapore Airlines", code: "SQ" },
  { name: "Turkish Airlines", code: "TK" },
  { name: "Etihad", code: "EY" },
  { name: "Malaysia Airlines", code: "MH" },
  { name: "Thai Airways", code: "TG" },
  { name: "Air Arabia", code: "G9" },
  { name: "Flydubai", code: "FZ" },
  { name: "Oman Air", code: "WY" },
  { name: "Gulf Air", code: "GF" },
  { name: "Kuwait Airways", code: "KU" },
  { name: "Cathay Pacific", code: "CX" },
  { name: "British Airways", code: "BA" },
  { name: "Lufthansa", code: "LH" },
  { name: "IndiGo", code: "6E" },
  { name: "US-Bangla", code: "BS" },
  { name: "Novoair", code: "VQ" },
  { name: "Air Astra", code: "2A" },
  { name: "SriLankan", code: "UL" },
  { name: "EgyptAir", code: "MS" },
  { name: "China Southern", code: "CZ" },
] as const;

export const destinations = [
  {
    name: "Sylhet",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dhaka",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bandarban",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Saint Martin's",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const hotels = [
  {
    name: "Sea Pearl Beach Resort",
    location: "Cox's Bazar, Bangladesh",
    rating: 5,
    description:
      "Oceanfront suites, private beach access, and a calm spa retreat for a complete seaside escape.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/sea-pearl",
  },
  {
    name: "The Westin Dhaka",
    location: "Gulshan, Dhaka",
    rating: 5,
    description:
      "Contemporary luxury in the heart of the city — rooftop dining, wellness, and business-ready rooms.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/westin-dhaka",
  },
  {
    name: "Sayeman Beach Resort",
    location: "Kolatoli, Cox's Bazar",
    rating: 5,
    description:
      "Iconic beachfront stays with panoramic sea views, family pools, and warm Bangladeshi hospitality.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/sayeman",
  },
] as const;

export const appFeatures = [
  { title: "AI Info Integration", description: "Smarter answers for routes, visas, and packages." },
  { title: "Real-time Population", description: "Live availability across flights, hotels, and groups." },
  { title: "CRM system", description: "Your bookings, documents, and preferences in one place." },
  { title: "24/7 internal support", description: "A dedicated team whenever you need assistance." },
  { title: "Personalized Reward", description: "Earn on every journey and redeem on the next." },
  { title: "Flexible payment plans", description: "EMI and staged payments on selected trips." },
] as const;

export const footerColumns = {
  services: [
    { label: "Hajj & Umrah", href: "/hajj-umrah" },
    { label: "Visa Services", href: "/visa" },
    { label: "Hotel Booking", href: "/hotels" },
    { label: "Holiday Packages", href: "/packages" },
    { label: "Corporate Tour", href: "/corporate" },
    { label: "Air Tickets", href: "/flights" },
  ],
  pages: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "News", href: "/news" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const company = {
  name: "Suma BD",
  address: "House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh",
  phones: ["+880 1711-000000", "+880 2-55000000"],
  email: "hello@sumabd.com",
  support: {
    title: "Need help?",
    phone: "+880 9611-000088",
    hours: "24/7 customer support",
  },
};
