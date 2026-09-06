export type SettingsApiResponse = {
  site_name: string;
  timezone: string;
  logo_light: string;
  logo_dark: string;
  favicon: string;
  login_page_image: string;
  contact_page_image: string;
  phone: string;
  email: string;
  address: string;
  address_map_url: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  pinterest: string;
  hotline: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: string;
  success: boolean;
};

export type SettingsSocialLink = {
  name: string;
  href: string;
  key: "facebook" | "instagram" | "youtube" | "tiktok" | "twitter" | "linkedin" | "pinterest";
};

export type SiteSettings = {
  siteName: string;
  logoLight: string;
  logoDark: string;
  favicon: string | null;
  contactPageImage: string;
  phone: string;
  email: string;
  address: string;
  addressMapUrl: string | null;
  hotline: string;
  supportTitle: string;
  socials: SettingsSocialLink[];
  metaTitle: string | null;
  metaDescription: string | null;
};
