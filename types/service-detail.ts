export type ServiceMeta = {
  title: string | null;
  description: string | null;
  keywords: string | null;
  image: string;
};

export type ServiceMediaItem = {
  url: string;
  alt_text?: string | null;
  text?: string | null;
};

export type ServiceTravelInfo = {
  title?: string | null;
  subtitle?: string | null;
  treatment?: string | null;
  countries?: string | null;
  support?: string | null;
  travellers_serve?: string | number | null;
  steps_full_managed?: string | number | null;
  customer_support?: string | number | null;
  transparent_pricing?: string | number | null;
};

export type ServiceOverview = {
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
};

export type ServiceSectionBlock<T> = {
  title?: string | null;
  subtitle?: string | null;
  sections?: T[] | null;
};

export type ServiceSpecialitySection = {
  image?: string | null;
  alt_text?: string | null;
  title: string;
};

export type ServiceNetworkSection = {
  image?: string | null;
  alt_text?: string | null;
  certificate_name?: string | null;
  hospital_name?: string | null;
  location?: string | null;
  specialities_in?: string | null;
  map_url?: string | null;
};

export type ServiceAccommodationSection = {
  image?: string | null;
  alt_text?: string | null;
  title: string;
  short_description?: string | null;
};

export type ServiceJourneySection = {
  title: string;
  short_description?: string | null;
};

export type ServiceDestinationSection = {
  image?: string | null;
  alt_text?: string | null;
  country_name?: string | null;
  known_for?: string | null;
};

export type ServiceServicesBlock = {
  included?: string[] | null;
  available_at_extra_fees?: string[] | null;
  not_included?: string[] | null;
};

export type ServiceWhyChooseItem = {
  icon?: string | null;
  title: string;
  subtitle?: string | null;
  description?: string | null;
};

export type ServiceWhyChoose = {
  title?: string | null;
  subtitle?: string | null;
  images?: string[] | null;
  items?: ServiceWhyChooseItem[] | null;
};

export type ServicePackageSide = {
  short_description?: string | null;
  starting_from?: string | null;
  highlights?: string[] | null;
  image?: string | null;
};

export type ServicePackageSummary = {
  title?: string | null;
  subtitle?: string | null;
  hajj?: ServicePackageSide | null;
  umrah?: ServicePackageSide | null;
};

export type ServiceDetailItem = {
  id: number;
  title: string;
  subtitle: string | null;
  slug: string;
  description: string | null;
  image: string;
  image_alt_text: string | null;
  video: string;
  banner: string | null;
  banner_alt_text: string | null;
  thumbnails: ServiceMediaItem[] | null;
  gallery: ServiceMediaItem[] | null;
  travel_info: ServiceTravelInfo | null;
  tour_info?: ServiceTravelInfo | null;
  overview: ServiceOverview | null;
  specialities: ServiceSectionBlock<ServiceSpecialitySection> | null;
  networks: ServiceSectionBlock<ServiceNetworkSection> | null;
  accomodations: ServiceSectionBlock<ServiceAccommodationSection> | null;
  treatment_journey: ServiceSectionBlock<ServiceJourneySection> | null;
  destinations: ServiceSectionBlock<ServiceDestinationSection> | null;
  services: ServiceServicesBlock | null;
  cancellation_policy: string | null;
  why_webkarigor: ServiceWhyChoose | null;
  package_summery: ServicePackageSummary | null;
  meta: ServiceMeta;
};

export type ServiceDetailApiResponse = {
  data: {
    service: ServiceDetailItem;
  };
  success: boolean;
  status: number;
};

export type ServiceHeroCard = {
  icon: string;
  label: string;
  value: string;
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceGalleryItem = {
  src: string;
  alt: string;
  text: string;
};

export type ServiceTreatment = {
  title: string;
  image: string;
};

export type ServiceHospital = {
  name: string;
  location: string;
  accreditation: string;
  specialties: string[];
  image: string;
  mapUrl: string;
};

export type ServiceStay = {
  title: string;
  description: string;
  image: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceCountry = {
  name: string;
  image: string;
  knownFor: string;
};

export type ServiceWhyItem = {
  icon: string;
  title: string;
  subtitle: string;
};

export type ServiceHajjPackage = {
  type: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  price: string;
  href: string;
};

export type ServiceSectionHeader = {
  title: string;
  subtitle: string;
};

export type ServiceDetailPageData = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  descriptionHtml: string | null;
  image: string;
  banner: string | null;
  thumbnails: ServiceGalleryItem[];
  gallery: ServiceGalleryItem[];
  travelInfo: {
    title: string;
    subtitle: string;
    cards: ServiceHeroCard[];
    stats: ServiceStat[];
  } | null;
  overview: {
    title: string;
    subtitle: string;
    description: string;
  } | null;
  specialities: ServiceSectionHeader & { items: ServiceTreatment[] };
  networks: ServiceSectionHeader & { items: ServiceHospital[] };
  accommodations: ServiceSectionHeader & { items: ServiceStay[] };
  treatmentJourney: ServiceSectionHeader & { items: ServiceProcessStep[] };
  destinations: ServiceSectionHeader & { items: ServiceCountry[] };
  services: {
    included: string[];
    additional: string[];
    excluded: string[];
  } | null;
  cancellationHtml: string | null;
  whyChoose: {
    title: string;
    subtitle: string;
    images: string[];
    items: ServiceWhyItem[];
  } | null;
  packageSummary: {
    title: string;
    subtitle: string;
    packages: ServiceHajjPackage[];
  } | null;
  metaTitle: string | null;
  metaDescription: string | null;
};
