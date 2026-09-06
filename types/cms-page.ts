export type CmsPageListItem = {
  id: number;
  title: string;
  slug: string;
  list_to_footer: boolean;
};

export type CmsPagesApiResponse = {
  data: CmsPageListItem[];
  success: boolean;
  status: number;
};

export type CmsPageHeader = {
  banner: string | null;
  title: string | null;
  subtitle: string | null;
  short_description: string | null;
};

export type CmsPageMeta = {
  title: string | null;
  description: string | null;
  keywords: string | null;
  image: string;
};

export type CmsPageDetailItem = {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  header: CmsPageHeader;
  meta: CmsPageMeta;
  list_to_footer: boolean;
};

export type CmsPageDetailApiResponse = {
  data: CmsPageDetailItem;
  success: boolean;
  status: number;
};

export type CmsPageData = {
  id: number;
  title: string;
  slug: string;
  contentHtml: string | null;
  headerTitle: string;
  headerSubtitle: string | null;
  headerDescription: string | null;
  banner: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  listToFooter: boolean;
};
