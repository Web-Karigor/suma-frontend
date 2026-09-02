export type DestinationItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
};

export type DestinationsApiResponse = {
  data: DestinationItem[];
  success: boolean;
  status: number;
};

export type DestinationCard = {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  href: string;
};
