import {
  CorporateHero,
  CorporateOverview,
  CorporateAccommodation,
  CorporateItinerary,
  CorporateServices,
  CorporateActivities,
  CorporateCancellation,
  CorporateBooking,
} from "@/components/corporate-tour";

export default function CorporateTourPage() {
  const heroData = {
    title: "Corporate Business Tour Package",
    subtitle:
      "Elevate your team's productivity with our tailored corporate travel solutions",
    price: 60221,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    ],
  };

  const overviewData = {
    description: `Transform your business travel with our comprehensive Corporate Tour Package. Designed for companies seeking seamless, efficient, and productive travel experiences, our package combines premium accommodations, state-of-the-art meeting facilities, and exceptional service.

Whether you're planning a team-building retreat, attending conferences, or conducting business meetings abroad, we handle every detail. Our dedicated corporate travel specialists ensure your team stays focused on what matters most - achieving your business objectives.

With years of experience in corporate travel management, we understand the unique needs of business travelers and provide customized solutions that align with your company's goals and budget.`,
    cards: [
      {
        icon: "users" as const,
        label: "Group Size",
        value: "10-50 Participants",
      },
      {
        icon: "calendar" as const,
        label: "Duration",
        value: "Flexible (3-14 Days)",
      },
      {
        icon: "location" as const,
        label: "Destination",
        value: "Customizable",
      },
    ],
  };

  const accommodationData = {
    hotelName: "Grand Business Hotel & Conference Center",
    hotelImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    location: "Central Business District",
    description:
      "Experience luxury and functionality at our partner hotel, featuring world-class amenities designed for corporate travelers. Located in the heart of the business district, the hotel offers easy access to major corporate centers and attractions.",
    amenities: [
      { icon: "wifi" as const, label: "High-Speed WiFi" },
      { icon: "restaurant" as const, label: "Fine Dining" },
      { icon: "gym" as const, label: "Fitness Center" },
    ],
    highlights: [
      "Executive rooms with work desks and ergonomic chairs",
      "24-hour business center and meeting rooms",
      "Complimentary breakfast buffet",
      "Airport shuttle service included",
      "On-site restaurant and bar",
    ],
  };

  const itineraryData = [
    {
      title: "Corporate Site Visit - Day 1",
      description:
        "Begin with guided tours of key business locations, networking sessions with local professionals, and an orientation meeting. Evening reception dinner to set the tone for productive days ahead.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Conference & Meetings - Day 2-3",
      description:
        "Full access to state-of-the-art conference facilities with audio-visual equipment. Catered meals, coffee breaks, and dedicated support staff. Evening team-building activities to strengthen bonds.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const servicesData = [
    "Round-trip economy/business class flights",
    "Airport transfers and local transportation",
    "4-5 star hotel accommodation (single/double occupancy)",
    "Daily breakfast and select meals",
    "Conference room booking and setup",
    "Audio-visual equipment and technical support",
    "Professional translator services (if needed)",
    "Team building activities and entertainment",
    "Travel insurance for all participants",
    "Dedicated tour manager throughout the trip",
    "24/7 emergency assistance hotline",
    "Pre-trip consultation and itinerary planning",
  ];

  const activitiesData = [
    { icon: "wifi" as const, label: "High-Speed Internet" },
    { icon: "presentation" as const, label: "Meeting Rooms" },
    { icon: "restaurant" as const, label: "Dining Services" },
    { icon: "gym" as const, label: "Fitness Center" },
    { icon: "bed" as const, label: "Spa & Wellness" },
    { icon: "headset" as const, label: "Concierge Service" },
  ];

const cancellationPolicies = [
  {
    timeframe:
      "For cancellations made 45+ days before departure: Full refund minus 10% administrative fee.",
  },
  {
    timeframe:
      "For cancellations made 30-44 days before departure: 70% refund of total package cost.",
  },
  {
    timeframe:
      "For cancellations made 15-29 days before departure: 50% refund of total package cost.",
  },
  {
    timeframe:
      "For cancellations made less than 15 days before departure: No refund, but credits may be applied to future bookings.",
  },
  {
    timeframe:
      "Group bookings may have different cancellation terms - please consult with our corporate team.",
  },
  {
    timeframe:
      "Force majeure events will be evaluated on a case-by-case basis.",
  },
];

  return (
    <main className="bg-[#002525]">
      <CorporateHero {...heroData} />
      <CorporateOverview {...overviewData} />
      <CorporateAccommodation {...accommodationData} />
      <CorporateItinerary itinerary={itineraryData} />
      <CorporateServices services={servicesData} />
      <CorporateActivities activities={activitiesData} />
      <CorporateCancellation policies={cancellationPolicies} />
      <CorporateBooking />
    </main>
  );
}
