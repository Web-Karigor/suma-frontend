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
  const packageData = {
    title: "Exclusive Umrah Package",
    subtitle: "Experience the spiritual journey of a lifetime",
    price: 245000,
    duration: "15 Days / 14 Nights",
    groupSize: "Max 40 People",
    departureDate: "Departure: 25 March 2025",
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1488085061387-422e58ed05d0?auto=format&fit=crop&w=800&q=85",
  ];

  const overview = `Travel Gate proudly presents a meticulously crafted luxury package, opening the doors to an exceptional spiritual experience in the blessed city of Makkah, where serenity and tranquility embrace you in the holiest place on earth. Enjoy an elegant stay at Fairmont hotel Makkah, with seamless and effortless access to Al-Masjid Al-Haram, allowing you to experience the blessed of an atmosphere filled with devotion, peace, and spiritual closeness—right in the heart of the Sacred Mosque. Because your comfort is our priority, this package has been thoughtfully designed to spare you the hassle of planning and transportation. It includes: Daily breakfast meal Private luxury transfers from Jeddah Airport to your hotel in Makkah and return Comfortable, personalized transportation throughout the entire program The journey also features a special enrichment tour in a luxury vehicle to visit the most prominent religious and historical landmarks in Makkah—an experience that beautifully combines spirituality and knowledge, adding deeper meaning and unforgettable memories to your trip. With Travel Gate, we promise you more than just a journey—we offer a refined spiritual experience that leaves a lasting imprint on your heart and memory. If you’d like, I can also create a shorter promotional version suitable for social media or a more formal version for contracts and official brochures.`;

  const hotels = [
    {
      name: "Swissotel Makkah",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      location: "Makkah, Saudi Arabia",
      rating: 5.0,
      distance: "200m from Masjid al-Haram",
    },
    {
      name: "Madinah Hilton",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
      location: "Madinah, Saudi Arabia",
      rating: 4.8,
      distance: "150m from Masjid an-Nabawi",
    },
  ];

  const itinerary = [
    {
      day: "Day 01-05",
      title: "Arrival at Jeddah & Makkah",
      description:
        "Arrive at King Abdulaziz International Airport. Transfer to hotel in Makkah. Check-in and rest. Perform Umrah with guided assistance.",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80",
    },
    {
      day: "Day 06-08",
      title: "Ziyarah in Makkah",
      description:
        "Visit important Islamic historical sites in and around Makkah including Jabal Rahmah, Cave of Hira, and other significant locations.",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80",
    },
    {
      day: "Day 09-14",
      title: "Madinah & Return",
      description:
        "Travel to Madinah. Visit Masjid an-Nabawi and perform prayers. Explore historical sites. Prepare for departure and return home.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
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

  const excluded = [
    "Personal expenses and shopping",
    "Lunch during the entire trip",
    "Laundry services",
    "Travel insurance (recommended)",
    "Additional Umrah or services not mentioned",
    "Tips for guides and drivers (optional)",
  ];

  const cancellationPolicies = [
    {
      timeframe: "Cancellation 30+ days before departure",
      charge: "10% of total amount",
    },
    {
      timeframe: "Cancellation 15-29 days before departure",
      charge: "30% of total amount",
    },
    {
      timeframe: "Cancellation 7-14 days before departure",
      charge: "50% of total amount",
    },
    {
      timeframe: "Cancellation less than 7 days before departure",
      charge: "100% of total amount",
    },
  ];

  return (
    <main>
      <PackageDetailHero {...packageData} />
      <PackageGallery images={galleryImages} />
      <PackageOverview description={overview} />
      <PackageAccommodation hotels={hotels} />
      <PackageItinerary itinerary={itinerary} />
      <PackageServices included={included} excluded={excluded} />
      <PackageCancellation policies={cancellationPolicies} />
      <HajjContact />
    </main>
  );
}
