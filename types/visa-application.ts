export type VisaApplicationsApiResponse = {
  data: VisaApplication[];
  success: boolean;
  status: number;
};

export type VisaCountryInfo = {
  city?: string | null;
  local_time?: string | null;
  telephone_code?: string | null;
  bank_time?: string | null;
  exchange_rate?: string | null;
  embassy_address?: string | null;
  map_image?: string | null;
};

export type VisaCountry = {
  id: number;
  name: string;
  slug: string;
};

export type VisaApplication = {
  id: number;
  country: VisaCountry;
  service: {
    id: number;
    title: string;
    slug: string;
  };
  country_info: VisaCountryInfo | null;
  visa_requirements: string | null;
  status: boolean;
};

export type Countries = {
  data: VisaCountry[];
  success: boolean;
  status: number;
};

