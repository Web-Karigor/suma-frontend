export type BlogApiItem = {
  id: number;
  title: string;
  slug: string;
  category?: string | { name?: string } | null;
  image?: string | null;
  banner?: string | null;
  short_description?: string | null;
  description?: string | null;
  content?: string | null;
  published_at?: string | null;
  created_at?: string | null;
  read_time?: string | number | null;
};

export type BlogListResponse = {
  data: BlogApiItem[];
  links: { first: string | null; last: string | null; prev: string | null; next: string | null };
  meta: { current_page: number; last_page: number; total: number };
  success: boolean;
  status: number;
};

export type BlogDetailResponse = { data: BlogApiItem | BlogApiItem[]; success: boolean; status: number };
