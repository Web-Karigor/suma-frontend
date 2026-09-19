export type AmenityItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_alt_text: string | null;
  is_highlighted: boolean;
};

export type AmenitiesApiResponse = {
  data: AmenityItem[];
  success: boolean;
  status: number;
};

export type Amenity = {
  id: number;
  name: string;
  slug: string;
  isHighlighted: boolean;
};
