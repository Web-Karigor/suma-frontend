export type ContactOfficeItem = {
  name: string;
  phone: string;
  address: string;
  address_map_url: string | null;
  working_hours: string;
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
  workingHours: string;
};
