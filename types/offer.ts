export type OfferItem = {
  id: number;
  title: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
};

export type OffersApiResponse = {
  data: OfferItem[];
  success: boolean;
  status: number;
};

export type OfferCard = {
  id: number;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type OfferDetailItem = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  image: string;
  image_alt_text: string | null;
  banner: string;
  banner_alt_text: string | null;
  meta: {
    title: string | null;
    description: string | null;
    keywords: string | null;
    image: string | null;
  };
};

export type OfferDetailApiResponse = {
  data: OfferDetailItem[];
  success: boolean;
  status: number;
};

export type OfferDetail = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  descriptionHtml: string;
  image: string;
  imageAlt: string;
  banner: string;
  bannerAlt: string;
  metaTitle: string | null;
  metaDescription: string | null;
  href: string;
};
