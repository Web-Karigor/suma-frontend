export type ServiceItem = {
  id: number;
  title: string;
  slug: string;
  subtitle: string | null;
  image: string;
};

export type ServicesApiResponse = {
  data: ServiceItem[];
  success: boolean;
  status: number;
};

export type ServiceArea =
  | "visa"
  | "medical"
  | "corporate"
  | "hajj"
  | "hotels"
  | "holiday";

export type ServiceCard = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  area: ServiceArea;
  href: string;
};
