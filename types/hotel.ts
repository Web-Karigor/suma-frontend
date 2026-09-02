export type HotelItem = {
  id: number;
  title: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
  short_description: string;
  rating: number;
  price: number;
  is_refundable: boolean;
};

export type HotelsPageHeader = {
  banner: string | null;
  title: string | null;
  subtitle: string | null;
  short_description: string | null;
};

export type HotelsApiResponse = {
  page: {
    id: number;
    title: string;
    slug: string;
    header: HotelsPageHeader;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    meta_image: string;
    list_to_footer: boolean;
  };
  data: HotelItem[];
  success: boolean;
  status: number;
};

export type HotelsPageMeta = {
  title: string;
  headerTitle: string;
  headerSubtitle: string | null;
  headerDescription: string | null;
  banner: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
};

export type HotelCard = {
  id: number;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  description: string;
  rating: number;
  price: number;
  isRefundable: boolean;
  href: string;
};

export type HotelsPageData = {
  page: HotelsPageMeta;
  hotels: HotelCard[];
};

export type HotelDetailItem = {
  id: number;
  title: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
  short_description: string;
  description: string;
  address: string;
  address_map_url: string;
  rating: number;
  price: number;
  discount_price: number | null;
  discount_type: string | null;
  discount_start_date: string | null;
  discount_end_date: string | null;
  gallery?: Array<{
    images: Array<{ url: string; alt_text: string | null }>;
    videos: unknown[];
  }>;
  amenities?: Array<{
    id: number;
    name: string;
    slug: string;
    image: string;
    image_alt_text: string | null;
    is_highlighted: boolean;
  }>;
  features?: string[];
  nearby_attractions?: string[];
  how_to_reach?: string[];
  link_url: string | null;
  is_refundable: boolean;
};

export type HotelDetailApiResponse = {
  data: HotelDetailItem[];
  success: boolean;
  status: number;
};

export type HotelGalleryImage = {
  url: string;
  alt: string;
};

export type HotelDetail = {
  id: number;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  descriptionHtml: string;
  address: string;
  mapEmbedHtml: string;
  rating: number;
  price: number;
  finalPrice: number;
  discountAmount: number | null;
  isRefundable: boolean;
  linkUrl: string;
  gallery: HotelGalleryImage[];
  amenities: string[];
  highlights: string[];
  features: string[];
  nearbyAttractions: string[];
  howToReach: string[];
  href: string;
};
