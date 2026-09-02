export type HeroItem = {
  title: string;
  subtitle: string | null;
  short_description: string | null;
  image: string;
  image_alt_text: string | null;
  bg_image: string;
  bg_image_alt_text: string | null;
  rating: string;
  link_url: string | null;
  status: boolean;
};

export type HeroApiResponse = {
  data: HeroItem | HeroItem[];
  success: boolean;
  status: number;
};

export type HeroCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgImage: string;
  bgImageAlt: string;
  rating: number;
  href: string;
};
