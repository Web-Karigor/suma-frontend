export type ContactOfficeItem = {
  name: string;
  phone: string;
  address: string;
  address_map_url: string | null;
  working_hours: string | null;
};

export type ContactInfoApiResponse = {
  data: ContactOfficeItem | ContactOfficeItem[];
  success: boolean;
  status: number;
};

export type ContactOfficeCard = {
  name: string;
  phone: string;
  address: string;
  directionUrl: string;
  mapEmbedHtml: string | null;
  workingHours: string | null;
};
