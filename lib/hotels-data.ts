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
];
