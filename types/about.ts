export type AboutContent = {
  mission?: string | null;
  vision?: string | null;
  our_values?: string | null;
  images?: string[] | null;
  banner?: string | null;
  banner_alt_text?: string | null;
};

export type AboutItem = {
  title: string;
  short_description?: string | null;
  description?: string | null;
  content?: string | null;
};

export type AboutContentSection = {
  title?: string | null;
  items?: AboutItem[] | null;
};

export type AboutFounderInfo = {
  name?: string | null;
  designation?: string | null;
  image?: string | null;
  title?: string | null;
  short_description?: string | null;
  quote?: string | null;
  content?: string | null;
};

export type AboutUsSection = {
  title: string | null;
  content: AboutContent;
  founder_info: AboutFounderInfo | null;
  legacy: AboutContentSection | null;
  process: AboutContentSection | null;
};

export type AboutApiResponse = {
  data: { about_us: AboutUsSection };
  success: boolean;
  status: number;
};

export type AboutGalleryCard = { src: string; alt: string; className: string };
export type AboutStory = { title: string; description: string; side: "left" | "right"; marker: "teal" | "yellow" };
export type AboutFounder = { name: string; designation: string; image: string; quote: string | null; paragraphs: string[] };
export type AboutProcessStep = { number: string; title: string; description: string; align: "left" | "right" };
export type AboutValue = { title: string; description: string };

export type AboutPageData = {
  title: string;
  banner: string;
  bannerAlt: string;
  gallery: AboutGalleryCard[];
  storyTitle: string;
  stories: AboutStory[];
  founder: AboutFounder | null;
  processTitle: string;
  processSteps: AboutProcessStep[];
  values: AboutValue[];
};
