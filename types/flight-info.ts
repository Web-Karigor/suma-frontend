export type FlightInfoFeatureItem = {
  icon: string;
  title: string;
  short_description: string;
};

export type FlightInfoItem = {
  logo: string;
  logo_alt_text: string | null;
  image: string;
  image_alt_text: string | null;
  short_description: string;
  features: FlightInfoFeatureItem[];
};

export type FlightInfoApiResponse = {
  data: FlightInfoItem;
  success: boolean;
  status: number;
};

export type FlightInfoFeature = {
  icon: string;
  title: string;
  description: string;
};

export type FlightInfo = {
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
  description: string;
  features: FlightInfoFeature[];
};
