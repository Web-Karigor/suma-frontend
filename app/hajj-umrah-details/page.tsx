import {
  PackageDetailHero,
  PackageGallery,
  PackageOverview,
  PackageAccommodation,
  PackageItinerary,
  PackageServices,
  PackageCancellation,
} from "@/components/package-details";
import { HajjContact } from "@/components/hajj";

export default function HajjUmrahDetailsPage() {
  const heroData = {
    title: "Exclusive Umrah Package",
    subtitle: "14 Days Umrah Package by Suma International",
    price: 245000,
    groupSize: "Luxury Makkah",
    departureDate: "22 June – 31 July, 2026",
    duration: "Total 5 Nights",
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=85",
  ];

  const overview =
    "Suma International presents a meticulously crafted luxury package, opening the doors to an exceptional spiritual experience in the blessed city of Makkah, where serenity and tranquility embrace you in the holiest place on earth. Enjoy an elegant stay at Fairmont Hotel Makkah, with seamless and effortless access to Al-Masjid Al-Haram, allowing you to experience an atmosphere filled with devotion, peace, and spiritual closeness—right in the heart of the Sacred Mosque. Because your comfort is our priority, this package has been thoughtfully designed to spare you the hassle of planning and transportation. It includes daily breakfast, private luxury transfers from Jeddah Airport to your hotel in Makkah and return, and comfortable, personalized transportation throughout the entire program. The journey also features a special enrichment tour in a luxury vehicle to visit the most prominent religious and historical landmarks in Makkah—an experience that beautifully combines spirituality and knowledge, adding deeper meaning and unforgettable memories to your trip.";

  const hotels = [
    {
      name: "Makkah Clock Royal Tower, A Fairmont Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      location: "Hotel in Makkah",
      rating: 5,
      description:
        "Set beside the Holy Haram, Makkah Clock Royal Tower offers business and pilgrimage travelers a refined base with effortless access to Al-Masjid Al-Haram, premium dining, and seamless connectivity throughout your stay.",
      nightsStay: "8 Nights Stay",
      privateCar: "Private Car (Included)",
    },
    {
      name: "Madinah Hilton",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
      location: "Hotel in Madinah",
      rating: 5,
      description:
        "A comfortable Madinah stay close to Masjid an-Nabawi, designed for rest between prayers, ziyarah, and the return journey home.",
      nightsStay: "6 Nights Stay",
      privateCar: "Private Car (Included)",
    },
  ];

  const sightseeing = [
    {
      title: "Thawr Mountain",
      description:
        "Visit Jabal Thawr, the mountain that holds the Cave of Thawr, where the Prophet (PBUH) and Abu Bakr (RA) took refuge during the Hijrah — a moment of trust, patience, and divine protection.",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
      duration: "~1 h",
    },
    {
      title: "Jabal ArRahmah",
      description:
        "Stand at Jabal Ar-Rahmah on the plain of Arafat, a place of prayer, reflection, and immense spiritual significance in the Hajj journey and in Islamic history.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      duration: "~1 h",
    },
    {
      title: "Hira Cave",
      description:
        "Experience the Cave of Hira on Jabal an-Nour, where the first verses of the Qur’an were revealed — a quiet, powerful stop that deepens the meaning of your Umrah.",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
      duration: "~1 h",
    },
  ];

  const included = [
    "Return economy class airfare (Dhaka-Jeddah-Dhaka)",
    "All airport transfers in Saudi Arabia",
    "4 & 5 star hotel accommodation (twin/triple sharing)",
    "Daily breakfast and dinner",
    "Ziyarah in Makkah and Madinah with transportation",
    "Umrah visa processing",
    "Experienced guide throughout the journey",
    "Zamzam water (5 liters per person)",
  ];

  const additionalFees = [
    "Personal expenses and shopping",
    "Lunch during the entire trip",
    "Laundry services",
    "Travel insurance (recommended)",
    "Additional Umrah or services not mentioned",
    "Tips for guides and drivers (optional)",
  ];

  const cancellationPolicies = [
    {
      timeframe:
        "75% of the package value will be refunded in case of cancellation within (24) hours from the time of booking.",
    },
    {
      timeframe:
        "0% of the value of the package services will be refunded in case of cancellation after (24) hours, and before the last (5) Day/Days. An exception to this rule is the visa application processing fee, which is non-refundable after the 24-hour period.",
    },
    {
      timeframe: "No refund will be made in case of cancellation within the last (72) hours.",
    },
    {
      timeframe:
        "The above rules apply to flight reservations organized by the service provider, and do not apply to custom flight reservations designated by the airline system for which specific cancellation policies apply to each reservation.",
    },
    {
      timeframe:
        "3.45% processing fees & its VAT will be deducted when the amounts are withdrawn from the wallet.",
    },
    {
      timeframe:
        "Currency exchange rates may result in differences in the amounts deposited and withdrawn from digital wallets.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-gold-50">
      <PackageDetailHero {...heroData} />
      <PackageGallery images={galleryImages} />
      <PackageOverview description={overview} />
      <PackageAccommodation hotels={hotels} />
      <PackageItinerary itinerary={sightseeing} />
      <PackageServices included={included} excluded={additionalFees} />
      <PackageCancellation policies={cancellationPolicies} />
      <HajjContact />
    </main>
  );
}
