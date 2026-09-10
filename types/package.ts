export type PackageType = {
  id: number;
  name: string;
  slug: string;
};

export type PackageApiItem = {
  image: string | null;
  title: string;
  slug: string;
  hajj_umrah_type: string | null;
  start_date: string | null;
  end_date: string | null;
  nights: number | string | null;
  package_type: PackageType | null;
  price: string | number | null;
  overview?: string | null;
  gallery?: string[] | null;
  itinerary?: PackageItineraryApiItem[] | null;
  accommodation?: PackageAccommodationApi | null;
  services?: PackageServicesApi | null;
  facilities?: { included?: string[] | null; add_on?: string[] | null } | null;
  cancellation_policy?: string | null;
};

export type PackageItineraryApiItem = {
  images?: { url: string; alt_text?: string | null }[] | null;
  title: string;
  short_description: string | null;
  activity_duration: string | null;
  map_url: string | null;
};

export type PackageAccommodationApi = {
  images?: string[] | null;
  title: string | null;
  short_description: string | null;
  class_type: string | null;
  customer_rating: number | null;
  location: string | null;
  services?: string[] | null;
};

export type PackageServicesApi = {
  included?: string[] | null;
  not_included?: string[] | null;
  available_on_extra_fees?: string[] | null;
};

export type PackagesApiResponse = {
  service: {
    id: number;
    title: string;
    subtitle: string | null;
    slug: string;
  };
  data: PackageApiItem[];
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
  success: boolean;
  status: number;
};

export type PackageListItem = {
  image: string;
  title: string;
  slug: string;
  hajjUmrahType: string | null;
  startDate: string | null;
  endDate: string | null;
  date: string;
  nights: string;
  packageType: PackageType | null;
  price: number;
  href: string;
};

export type PackageListData = {
  service: PackagesApiResponse["service"];
  items: PackageListItem[];
  pagination: PackagesApiResponse["pagination"];
};

export type PackageDetail = {
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  image: string;
  imageAltText: string;
  startDate: string | null;
  endDate: string | null;
  nights: string;
  hajjUmrahType: string | null;
  packageType: PackageType | null;
  overview: string;
  gallery: string[];
  itinerary: PackageItineraryApiItem[];
  accommodation: PackageAccommodationApi | null;
  services: PackageServicesApi | null;
  facilities: { included: string[]; addOn: string[] };
  cancellationPolicy: string;
};

export type PackageDetailApiResponse = {
  data: {
    package: PackageApiItem & {
      subtitle: string | null;
      description: string | null;
      features: string[] | null;
      image_alt_text: string | null;
    };
  };
  success: boolean;
  status: number;
};
