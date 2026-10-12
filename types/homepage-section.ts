export type HomepageSectionApiItem = {
  id: number;
  page_id: number;
  section_id: number;
  content?: {
    title?: string | null;
    subtitle?: string | null;
    media_type?: string | null;
    image?: string | null;
    link?: string | null;
    video?: string | null;
  } | null;
};

export type HomepageSectionContentApiResponse = {
  data: Record<string, HomepageSectionApiItem>;
};

export type HomepageSectionContent = {
  id: number;
  pageId: number;
  sectionId: number;
  title: string;
  subtitle: string;
  mediaType: string;
  image: string;
  link: string;
  video: string;
};

export type HomepageSectionContentMap = Record<string, HomepageSectionContent>;
