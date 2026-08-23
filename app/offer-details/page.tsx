import {
  OfferHero,
  OfferHighlights,
  OfferDetails,
  OfferBooking,
  OfferRelated,
  OfferApp,
} from "@/components/offer-details";

export default function OfferDetailsPage() {
  const heroData = {
    title: "Best Rate on the Base Fare of Domestic Flights",
    subtitle: "Limited time exclusive offer for domestic flight bookings",
    discount: "30%",
    validUntil: "December 31, 2024",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
    offerBadge: "30% OFF",
  };

  const highlights = [
    {
      icon: "plane" as const,
      label: "Flight Type",
      value: "All Domestic Routes",
    },
    {
      icon: "calendar" as const,
      label: "Booking Period",
      value: "Valid Till Dec 31",
    },
    {
      icon: "card" as const,
      label: "Payment",
      value: "All Cards Accepted",
    },
    {
      icon: "bed" as const,
      label: "Travel Class",
      value: "Economy & Business",
    },
  ];

  const detailsData = {
    description: `Get the best rates on domestic flights across Bangladesh! Book your flights now and enjoy up to 30% discount on base fare. Whether you're traveling for business or leisure, this exclusive offer makes your journey more affordable.

This limited-time promotion is valid for all major domestic routes including Dhaka-Chattogram, Dhaka-Cox's Bazar, Dhaka-Sylhet, and more. Don't miss this opportunity to fly at unbeatable prices.

Our seamless booking process ensures you get confirmed tickets instantly. With multiple payment options and 24/7 customer support, your travel planning has never been easier.`,
    included: [
      "30% discount on base fare for all domestic flights",
      "Applicable on all major airlines",
      "Valid for economy and business class bookings",
      "Flexible date change options available",
      "Instant booking confirmation",
      "24/7 customer support",
      "Free cancellation up to 24 hours before departure",
      "Complimentary travel insurance included",
    ],
    terms: [
      "This offer is valid for bookings made between now and December 31, 2024.",
      "Discount applies only to the base fare. Airport taxes, fees, and surcharges are not included.",
      "Offer is valid for all domestic routes within Bangladesh.",
      "Minimum one-way fare of BDT 1,500 required to avail this discount.",
      "Discount cannot be combined with other promotional offers or vouchers.",
      "Cancellation and date change charges as per airline policy will apply.",
      "Seats are subject to availability at the time of booking.",
      "Flight 24 reserves the right to modify or cancel this offer without prior notice.",
      "Full payment must be made at the time of booking to confirm the reservation.",
      "Valid passport or National ID is required for domestic travel.",
    ],
  };

  const bookingData = {
    originalPrice: 8500,
    discountedPrice: 5950,
    discount: "30% (৳2,550)",
  };

  const relatedOffers = [
    {
      id: "international-flights",
      title: "International Flight Offer with Bkash",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      discount: "15% OFF",
      price: 45000,
      validUntil: "Jan 15, 2025",
    },
    {
      id: "hotel-packages",
      title: "Exclusive Hotel Packages - Cox's Bazar",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      discount: "25% OFF",
      price: 12000,
      validUntil: "Dec 31, 2024",
    },
    {
      id: "umrah-package",
      title: "Special Umrah Package for Ramadan",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
      discount: "20% OFF",
      price: 185000,
      validUntil: "Mar 01, 2025",
    },
  ];

  return (
    <main>
      <OfferHero {...heroData} />
      <OfferHighlights highlights={highlights} />
      <OfferDetails {...detailsData} />
      <OfferBooking {...bookingData} />
      <OfferRelated offers={relatedOffers} />
      <OfferApp />
    </main>
  );
}
