export type SettingsApiResponse = {
  site_name: string;
  timezone: string;
  logo_light: string;
  logo_dark: string;
  favicon: string;
  login_page_image: string;
  contact_page_image: string;
  phone: string;
  whatsapp?: string;
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
  footer_text: string;
  certificate_of_registration: string | FooterCertificateApiItem[];
  footer_certificates?: FooterCertificateApiItem[];
  certificates?: FooterCertificateApiItem[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: string;
  success: boolean;
};

export type FooterCertificateApiItem = {
  title?: string;
  name?: string;
  label?: string;
  image?: string;
  logo?: string;
  image_url?: string;
};

export type FooterCertificate = {
  title: string;
  image: string;
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
  whatsapp: string;
  email: string;
  address: string;
  addressMapUrl: string | null;
  hotline: string;
  footerText: string;
  certificateOfRegistration: string;
  footerCertificates: FooterCertificate[];
  supportTitle: string;
  socials: SettingsSocialLink[];
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  metaImage: string | null;
};
