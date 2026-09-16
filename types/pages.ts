export type PageItem = {
  id: number;
  title: string;
  slug: string;
  list_to_footer: boolean;
};

export type PagesApiResponse = {
  data: PageItem[];
  success: boolean;
  status: number;
};

export type FooterPage = {
  label: string;
  href: string;
};
