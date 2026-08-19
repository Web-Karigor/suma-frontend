export const serviceLinks = [
  { label: "Hajj & Umrah", href: "/hajj-umrah" },
  { label: "Visa Services", href: "/visa" },
  { label: "Hotel Booking", href: "/hotels" },
  { label: "Holiday Packages", href: "/packages" },
  { label: "Corporate Tour", href: "/corporate" },
  { label: "Air Tickets", href: "/flights" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/services", children: serviceLinks },
  { label: "Flights", href: "/flights" },
  { label: "Build My Trip", href: "/build-my-trip" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroContent = {
  title: "Hajj & Umrah",
  description:
    "Begin your sacred journey with trusted guidance, carefully planned packages, and support at every step — from visa to your stay in the Holy Cities.",
  cta: { label: "Book Now", href: "/hajj-umrah" },
  image:
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&h=900&q=80",
};

export const heroCards = [
  {
    title: "Hajj & Umrah",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80",
    href: "/hajj-umrah",
  },
  {
    title: "Visa Assistance",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    href: "/visa",
  },
  {
    title: "Hotel Accommodation",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    href: "/hotels",
  },
  {
    title: "Holiday Packages",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    href: "/packages",
  },
  {
    title: "Corporate Travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    href: "/corporate",
  },
  {
    title: "Air Tickets",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    href: "/flights",
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
  {
    id: "europe",
    title: "Europe city breaks",
    subtitle: "Flights and stays for weekend getaways",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "group",
    title: "Group adventures",
    subtitle: "Travel together with friends and family",
    badge: "Group Deal",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "tourism-day",
    title: "World Tourism Day",
    subtitle: "Celebrate with exclusive worldwide fares",
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e58ed05d0?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const topPackages = [
  {
    id: "visa",
    title: "Visa Assistance",
    description: "Fast, reliable processing for leisure and work travel worldwide.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    area: "visa",
  },
  {
    id: "medical",
    title: "Medical Tourism",
    description: "Trusted care journeys with hospital coordination and stays.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    area: "medical",
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    description: "End-to-end planning for business trips and groups.",
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
    title: "Hotel Accommodation",
    description: "Curated stays from city hotels to beach resorts.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    area: "hotels",
  },
  {
    id: "holiday",
    title: "Holiday Packages",
    description: "Handpicked getaways shaped around your dates and budget.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    area: "holiday",
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
  {
    name: "Sajek Valley",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sundarbans",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rangamati",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const hotels = [
  {
    name: "Regenta Central Imperial",
    location: "Marine Drive Road, Kutupalong, Inani, Ukhia, Cox's Bazar 4750",
    rating: 5,
    description: "Dive into the mesmerizing beauty of Cox's Bazar with sea-view rooms and warm hospitality.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/regenta-central-imperial",
  },
  {
    name: "Sun Oasis Resort",
    location: "Marine Drive Road, Kutupalong, Inani, Ukhia, Cox's Bazar 4750",
    rating: 5,
    description: "Dive into the mesmerizing beauty of a beachfront stay with pools, dining, and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/sun-oasis-resort",
  },
  {
    name: "Sea Pearl Beach Resort",
    location: "Jaliapalong, Inani, Ukhia, Cox's Bazar 4750",
    rating: 5,
    description: "Oceanfront suites, private beach access, and a calm spa retreat for a complete seaside escape.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/sea-pearl",
  },
  {
    name: "The Westin Dhaka",
    location: "Gulshan Avenue, Gulshan 2, Dhaka 1212",
    rating: 5,
    description: "Contemporary luxury in the heart of the city — rooftop dining, wellness, and business-ready rooms.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/westin-dhaka",
  },
  {
    name: "Sayeman Beach Resort",
    location: "Kolatoli Road, Cox's Bazar 4700",
    rating: 5,
    description: "Iconic beachfront stays with panoramic sea views, family pools, and warm Bangladeshi hospitality.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/sayeman",
  },
  {
    name: "InterContinental Dhaka",
    location: "1 Minto Road, Ramna, Dhaka 1000",
    rating: 5,
    description: "Landmark city hotel with refined rooms, dining, and easy access to Dhaka's business district.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    href: "/hotels/intercontinental-dhaka",
  },
] as const;

export const appFeatures = [
  {
    title: "Airline Integration",
    description:
      "Book Domestic And Regional Flights Like Biman, Novoair, US-Bangla, Air Astra, And More — All From One Platform.",
    icon: "plane",
  },
  {
    title: "Seamless Payment",
    description:
      "Accept Payments Or Wallet Top-Ups Instantly Using Popular Mobile Wallets Like bKash, Nagad, And Rocket.",
    icon: "card",
  },
  {
    title: "Agent Wallet System",
    description:
      "Manage Your Wallet Easily With Top-Up Options Via Mobile Payments Or Bank Deposits. Real-Time Balance Tracking Included.",
    icon: "wallet",
  },
  {
    title: "Easy Refund & Reissue",
    description:
      "Easy Cancellation, Refund Tracking, And Ticket Reissuance Process Directly From The User Dashboard.",
    icon: "refund",
  },
  {
    title: "Personal Dashboard",
    description: "View Sales, Commissions, Top Routes, Agent Performance, And More In One Place.",
    icon: "gauge",
  },
  {
    title: "Push Notifications & Alerts",
    description: "Get Instant Alerts For Booking Confirmations, Failed Payments, And Flight Changes.",
    icon: "bell",
  },
] as const;

export const footerAbout =
  "Established in 1997, Suma International Services has grown from a humble travel service provider into a leading name in the industry, thanks to the dedication, expertise, and passion of our exceptional team.";

export const footerColumns = {
  services: [
    { label: "Hajj & Umrah Packages", href: "/hajj-umrah" },
    { label: "Visa Assistance", href: "/visa" },
    { label: "Hotel", href: "/hotels" },
    { label: "Holiday Packages", href: "/packages" },
    { label: "Customized Tours", href: "/tours" },
    { label: "Medical Tourism", href: "/medical" },
    { label: "Corporate Travel", href: "/corporate" },
  ],
  pages: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Promotions", href: "/promotions" },
    { label: "FAQ", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export const footerOffices = {
  left: [
    {
      name: "Dhaka Office",
      address: "Rupayan Taj (2nd & 6th Floor), 1,1/L Box Culvert Road, Nayapaltan, Dhaka",
    },
    {
      name: "Sylhet Office",
      address: "Rupayan Taj (2nd & 6th Floor), 1,1/L Box Culvert Road, Nayapaltan, Dhaka",
    },
    {
      name: "Moulvibazar Office",
      address: "Valley Tower (1st Floor), Shamshernagar Road, Moulvibazar",
    },
  ],
  right: [
    {
      name: "Habiganj Office",
      address: "Ahmed Trading Centre (2nd Floor), Old Hospital Road, Shobujbag, Habigonj",
    },
    {
      name: "Sunamganj Office",
      address: "Tufayel Super Market (2nd Floor), Mollikpur, Sunamganj",
    },
  ],
} as const;

export const company = {
  name: "Suma International Services Ltd.",
  tagline: "Travel Management Company",
  address: "House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh",
  phones: ["+880 1711-000000", "+880 2-55000000"],
  email: "sumaintlsvc@sumabd.com",
  hotline: "16703",
  support: {
    title: "Customer Care",
    phone: "16703",
    hours: "24/7 customer support",
  },
};
