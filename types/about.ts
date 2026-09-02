export type AboutGalleryItem = {
  url: string;
  alt_text: string | null;
};

export type AboutUsSection = {
  title: string | null;
  content: string | null;
  gallery: AboutGalleryItem[];
  visions: AboutValueItem[] | null;
  features: AboutFeatureItem[];
  founder_info: AboutFounderInfo | null;
  legacy: AboutLegacyItem[] | null;
  process: AboutProcessItem[] | null;
};

export type AboutFeatureItem = {
  title: string;
  short_description?: string | null;
  description?: string | null;
  image?: string | null;
};

export type AboutFounderInfo = {
  name?: string | null;
  designation?: string | null;
  image?: string | null;
  quote?: string | null;
  content?: string | null;
};

export type AboutLegacyItem = {
  title: string;
  description?: string | null;
  short_description?: string | null;
  content?: string | null;
};

export type AboutProcessItem = {
  title: string;
  description?: string | null;
  short_description?: string | null;
  content?: string | null;
};

export type AboutValueItem = {
  title: string;
  description?: string | null;
  short_description?: string | null;
  content?: string | null;
};

export type AboutTeamItem = {
  id: number;
  name: string;
  slug: string;
  designation: string | null;
  department: string | null;
  image: string;
};

export type AboutWhyChooseItem = {
  id: number;
  title: string;
  short_description: string;
  image: string;
};

export type AboutApiResponse = {
  data: {
    about_us: AboutUsSection;
    team: AboutTeamItem[];
    whychoose: AboutWhyChooseItem[];
    faq: unknown[];
  };
  success: boolean;
  status: number;
};

export type AboutGalleryCard = {
  src: string;
  alt: string;
  className: string;
};

export type AboutStory = {
  title: string;
  description: string;
  side: "left" | "right";
  marker: "teal" | "yellow";
};

export type AboutFounder = {
  name: string;
  designation: string;
  image: string;
  quote: string | null;
  paragraphs: string[];
};

export type AboutProcessStep = {
  number: string;
  title: string;
  description: string;
  align: "left" | "right";
};

export type AboutValue = {
  title: string;
  description: string;
};

export type AboutPageData = {
  title: string;
  gallery: AboutGalleryCard[];
  storyTitle: string;
  stories: AboutStory[];
  founder: AboutFounder | null;
  processSteps: AboutProcessStep[];
  values: AboutValue[];
};
