export type AirlineItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
};

export type AirlinesApiResponse = {
  data: AirlineItem[];
  success: boolean;
  status: number;
};

export type AirlineCard = {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
};
