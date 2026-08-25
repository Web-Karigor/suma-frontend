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
    subtitle: "A Tailored Travel Solution for Business Teams by Suma International",
    price: 60221,
    images: [
      "/images/corporate-tour/collage-1.png",
      "/images/corporate-tour/collage-2.png",
      "/images/corporate-tour/collage-3.png",
      "/images/corporate-tour/collage-4.png",
      "/images/corporate-tour/collage-5.png",
    ],
  };

  const overviewData = {
    description:
      "Suma International's Corporate Business Tour Package is designed for teams and executives who need travel handled with precision. From flight bookings and visa processing to premium accommodations and ground transport, every detail is managed to keep your team focused on business — not logistics. Whether it's a single-city conference trip or a multi-stop corporate itinerary, our team coordinates each leg in advance, so your travelers arrive prepared, on time, and without friction. With Suma International, corporate travel isn't just arranged — it's managed end-to-end, with the same reliability your business runs on.",
    cards: [
      { icon: "star" as const, label: "Package Type", value: "Business Tour" },
      { icon: "calendar" as const, label: "Date", value: "22 June - 31 July, 2026" },
      { icon: "moon" as const, label: "Nights", value: "Total 5 Nights" },
    ],
  };

  const accommodationData = {
    hotelName: "Shangri-La Luxury Business Hotel in Singapore",
    hotelImage: "/images/corporate-tour/hotel.png",
    rating: 5.0,
    location: "Orchard Road, Singapore",
    description:
      "Set in Singapore's prestigious Orchard Road district, Shangri-La Singapore offers business travelers a refined base for meetings, conferences, and extended corporate stays. With state-of-the-art business facilities, seamless connectivity, and easy access to Singapore's financial district, every stay is designed around efficiency, without compromising on comfort.",
    amenities: [
      { label: "Executive Lounge" },
      { label: "In-House Fine Dining" },
      { label: "High-Speed Wi-Fi" },
    ],
    highlights: [
      {
        title: "24/7 Business Center",
        description:
          "Fully equipped with meeting rooms, high-speed Wi-Fi, and admin support — available around the clock for last-minute prep or off-hours calls.",
      },
      {
        title: "Prime Business District Location",
        description:
          "Minutes from Singapore's Central Business District and Changi International Airport, minimizing transit time between meetings and flights.",
      },
    ],
  };

  const itineraryData = [
    {
      title: "Central Business District Tour",
      description:
        "A guided overview of the city's key commercial hubs, including major office towers, financial institutions, and business landmarks — useful context for teams meeting local partners or exploring expansion opportunities in the region.",
      image: "/images/corporate-tour/itinerary-1.png",
      duration: "~2 h",
    },
    {
      title: "Client Meeting & Conference Facility",
      description:
        "A dedicated meeting space equipped for presentations, negotiations, and team discussions. Fully furnished with AV support and high-speed connectivity, ideal for scheduled client meetings or internal strategy sessions during your stay.",
      image: "/images/corporate-tour/itinerary-2.png",
      duration: "~3 h",
    },
  ];

  const servicesData = {
    included: ["Visa", "Flight", "Transfers", "Meeting Room", "24/7 Support", "Hotel"],
    additional: ["Chauffeur", "AV", "Extended Stay", "Dinner", "Interpreter", "Custom Itinerary"],
    excluded: ["Chauffeur", "AV", "Extended Stay", "Dinner", "Interpreter", "Custom Itinerary"],
  };

  const activitiesData = [
    { label: "High-Speed Wi-Fi", value: "Unlimited", included: true },
    { label: "Executive Lounge", value: "Full Stay", included: true },
    { label: "Private Boardroom", value: "4 Hours", included: true },
    { label: "Printing/Copying", value: "Pay per use", included: false },
    { label: "Coffee/Snacks", value: "Pay per use", included: false },
  ];

  const cancellationPolicies = [
    {
      timeframe:
        "75% of the package value will be refunded in case of cancellation within (24) hours from the time of booking.",
    },
    {
      timeframe:
        "0% of the value of the package services will be refunded in case of cancellation after (24) hours, and before the last (5) Day/Days .An exception to this rule is the visa application processing fee, which is non-refundable after the 24-hour period.",
    },
    {
      timeframe: "No refunds will be made in case of cancellation within the last (72) hours.",
    },
    {
      timeframe:
        "The above rules apply to flight reservations organized by the service provider, and do not apply to custom flight reservations designated by the airline system for which specific cancellation policies apply to each reservation.",
    },
    {
      timeframe: "3.45% processing fees & its VAT will be deducted when the amounts are withdrawn from the wallet.",
    },
    {
      timeframe:
        "Currency exchange rates may result in differences in the amounts deposited and withdrawn from digital wallets.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-teal-950">
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
