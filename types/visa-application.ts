export type VisaApplicationsApiResponse = {
  data: Array<{
    status: boolean;
    country_info: {
      city?: string | null;
      local_time?: string | null;
      telephone_code?: string | null;
      bank_time?: string | null;
      exchange_rate?: string | null;
      embassy_address?: string | null;
      map_image?: string | null;
    } | null;
  }>;
  success: boolean;
  status: number;
};

export type VisaCountryInfo = NonNullable<VisaApplicationsApiResponse["data"][number]["country_info"]>;
