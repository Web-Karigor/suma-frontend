// Partner portal URL - used in BuildMyTrip and AppFeature components
export const partnerPortalUrl = "https://partner.flight24.co/";

// Service links - used in Header navigation dropdown
export const serviceLinks = [
  { label: "Hajj & Umrah", href: "/hajj" },
  { label: "Visa Services", href: "/visa-application" },
  { label: "Hotel", href: "/hotels" },
  { label: "Holiday Packages", href: "/packages" },
  { label: "Corporate Tour", href: "/packages/corporate-travel" },
  { label: "Medical Tourism", href: "/medical" },
] as const;

// Main navigation links - used in Header component
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/hajj", children: serviceLinks },
  { label: "Build My Trip", href: partnerPortalUrl },
  { label: "Visa", href: "/visa-application" },
  { label: "Hotel", href: "/hotels" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer about text - used in Footer component
export const footerAbout =
  "Established in 1997, Suma International Services has grown from a humble travel service provider into a leading name in the industry, thanks to the dedication, expertise, and passion of our exceptional team.";

// Footer navigation columns - used in Footer component
export const footerColumns = {
  services: [
    { label: "Hajj & Umrah Packages", href: "/hajj" },
    { label: "Visa Assistance", href: "/visa-application" },
    { label: "Hotel", href: "/hotels" },
    { label: "Holiday Packages", href: "/packages" },
    { label: "Customized Tours", href: "/packages" },
    { label: "Medical Tourism", href: "/medical" },
    { label: "Corporate Travel", href: "/corporate-tour" },
  ],
  pages: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Promotions", href: "/offer-details" },
    { label: "FAQ", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;
