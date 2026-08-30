export type HotelListing = {
  id: string;
  name: string;
  image: string;
  rating: number;
  score: string;
  roomType: string;
  location: string;
  amenities: string[];
  extraCount: number;
  breakfast: boolean;
  service247: boolean;
  price: number;
  originalPrice: number;
  href: string;
  tags: string[];
  refundable: boolean;
};

export const PRICE_MIN = 0;
export const PRICE_MAX = 50000;

export const popularFilters = [
  { id: "balcony", label: "Balcony", count: 102 },
  { id: "breakfast", label: "Breakfast", count: 98 },
  { id: "pool", label: "Swimming Pool", count: 76 },
  { id: "ac", label: "Air Conditioning", count: 120 },
] as const;

export const priceBands = [
  { id: "0-10000", label: "৳ 0 - 10,000", min: 0, max: 10000 },
  { id: "10000-20000", label: "৳ 10,000 - 20,000", min: 10000, max: 20000 },
  { id: "20000-35000", label: "৳ 20,000 - 35,000", min: 20000, max: 35000 },
  { id: "35000+", label: "৳ 35,000+", min: 35000, max: PRICE_MAX },
] as const;

export const amenityFilters = [
  { id: "ac", label: "Air Conditioning" },
  { id: "balcony", label: "Balcony" },
  { id: "wifi", label: "Free Wi-Fi" },
  { id: "pool", label: "Swimming Pool" },
  { id: "parking", label: "Parking" },
  { id: "gym", label: "Gym" },
] as const;

export const hotelListings: HotelListing[] = [
  {
    id: "dera-resort",
    name: "Dera Resort & Spa Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    score: "5.0",
    roomType: "Suite",
    location: "Cox's Bazar, Bangladesh",
    amenities: ["Swimming pool", "Infinity pool", "Welcome Drinks", "Free Wi-Fi", "Interconnecting rooms"],
    extraCount: 3,
    breakfast: true,
    service247: true,
    price: 6221,
    originalPrice: 20000,
    href: "/hotels/dera-resort",
    tags: ["balcony", "breakfast", "pool", "ac", "wifi"],
    refundable: true,
  },
  {
    id: "long-beach",
    name: "Long Beach Hotel Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    score: "4.8",
    roomType: "Deluxe",
    location: "Cox's Bazar, Bangladesh",
    amenities: ["Swimming pool", "Sea view", "Restaurant", "Free Wi-Fi", "Spa"],
    extraCount: 4,
    breakfast: true,
    service247: true,
    price: 8450,
    originalPrice: 18000,
    href: "/hotels/long-beach",
    tags: ["breakfast", "pool", "ac", "wifi", "gym"],
    refundable: true,
  },
  {
    id: "sea-pearl",
    name: "Sea Pearl Beach Resort",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    score: "4.7",
    roomType: "Ocean View",
    location: "Cox's Bazar, Bangladesh",
    amenities: ["Private beach", "Infinity pool", "SPA", "Free Wi-Fi", "Restaurant"],
    extraCount: 4,
    breakfast: true,
    service247: true,
    price: 15600,
    originalPrice: 25000,
    href: "/hotels/sea-pearl",
    tags: ["balcony", "breakfast", "pool", "ac", "wifi"],
    refundable: true,
  },
  {
    id: "sayeman",
    name: "Sayeman Beach Resort",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    rating: 4,
    score: "4.6",
    roomType: "Ocean View",
    location: "Cox's Bazar, Bangladesh",
    amenities: ["Private beach", "Infinity pool", "Kids club", "Free Wi-Fi", "Parking"],
    extraCount: 2,
    breakfast: true,
    service247: false,
    price: 12800,
    originalPrice: 22000,
    href: "/hotels/sayeman",
    tags: ["balcony", "breakfast", "pool", "wifi", "parking"],
    refundable: false,
  },
  {
    id: "westin-dhaka",
    name: "The Westin Dhaka",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    score: "4.9",
    roomType: "Executive",
    location: "Dhaka, Bangladesh",
    amenities: ["Infinity pool", "Gym", "Club lounge", "Free Wi-Fi", "Parking"],
    extraCount: 5,
    breakfast: true,
    service247: true,
    price: 18500,
    originalPrice: 28000,
    href: "/hotels/westin-dhaka",
    tags: ["breakfast", "pool", "ac", "wifi", "gym", "parking"],
    refundable: true,
  },
  {
    id: "intercontinental",
    name: "InterContinental Dhaka",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    score: "4.7",
    roomType: "Suite",
    location: "Dhaka, Bangladesh",
    amenities: ["Swimming pool", "Fine dining", "Spa", "Free Wi-Fi", "Parking"],
    extraCount: 3,
    breakfast: false,
    service247: true,
    price: 21000,
    originalPrice: 32000,
    href: "/hotels/intercontinental-dhaka",
    tags: ["balcony", "pool", "ac", "wifi", "parking"],
    refundable: false,
  },
  {
    id: "sun-oasis",
    name: "Sun Oasis Resort",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    rating: 3,
    score: "3.9",
    roomType: "Standard",
    location: "Cox's Bazar, Bangladesh",
    amenities: ["Garden view", "Restaurant", "Free Wi-Fi", "Parking", "Room service"],
    extraCount: 2,
    breakfast: true,
    service247: false,
    price: 4800,
    originalPrice: 9000,
    href: "/hotels/sun-oasis-resort",
    tags: ["breakfast", "ac", "wifi", "parking"],
    refundable: true,
  },
  {
    id: "regenta-central-imperial",
    name: "Regenta Central Imperial Candolim",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
    score: "5.6",
    roomType: "Club Room",
    location: "Cox's Bazar - Bangladesh",
    amenities: ["Swimming pool", "Welcome Drinks", "Free Wi-Fi", "SPA", "Restaurants (Halal)"],
    extraCount: 8,
    breakfast: true,
    service247: true,
    price: 6221,
    originalPrice: 20000,
    href: "/hotels/regenta-central-imperial",
    tags: ["balcony", "breakfast", "pool", "ac", "wifi"],
    refundable: true,
  },
];

export const hotelGallery = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
] as const;

export const hotelHighlights = [
  { label: "Welcome Drinks", icon: "drink" },
  { label: "Swimming pool", icon: "pool" },
  { label: "Restaurants (Halal)", icon: "dine" },
  { label: "SPA", icon: "spa" },
  { label: "Free Wi-Fi", icon: "wifi" },
] as const;

export const hotelPolicies = [
  "Club Room with Balcony - Fits 2 Adult",
  "15% off on All Food & Beverage Service",
  "Complimentary Welcome Drinks on Arrival",
  "Free Cancelation Available - 24 hours priors notice",
  "Early Check-In - Up to 2 hours (Subject to Availability)",
] as const;

export const nearbyAttractions = [
  "Enjoy scenic sunsets along Cox’s Bazar sea beach, just minutes from the hotel.",
  "Visit Himchari National Park for waterfalls, viewpoints, and coastal trails.",
  "Explore Inani Beach and Laboni Beach for swimming, walking, and local food.",
] as const;

export const howToReach = [
  "Cox’s Bazar Airport is about 12 km away from the hotel.",
  "Cox’s Bazar Railway Station is around 8 km away.",
  "More than 50 travellers have liked this property because of its good location.",
] as const;

export const hotelAmenities = [
  "ATM",
  "CCTV",
  "Indian Chef",
  "Air Conditioning",
  "Swimming Pool",
  "Free Wi-Fi",
  "SPA",
  "Parking",
  "Room Service",
  "Halal Restaurant",
  "Gym",
  "Airport Shuttle",
] as const;

export const hotelDescription = [
  "Get the celebrity treatment with world-class service at this 5-star property. Relax by the rooftop pool, dine on coastal flavours, and settle into spacious rooms designed for a calm Cox’s Bazar stay.",
  "Guests can enjoy complimentary welcome drinks on arrival, daily housekeeping, and attentive concierge support for beach transfers, tours, and dining reservations. Families and couples alike will find quiet corners, ocean-facing decks, and an easy walk to the shoreline.",
];

export function getHotelDetail(id: string) {
  return hotelListings.find((hotel) => hotel.id === id || hotel.href.endsWith(`/${id}`)) ?? null;
}
