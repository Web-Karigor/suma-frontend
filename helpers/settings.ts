import { cache } from "react";
import { footerAbout } from "@/lib/home-data";
import type {
  SettingsApiResponse,
  FooterCertificate,
  SettingsSocialLink,
  SiteSettings,
} from "@/types/settings";

export const FALLBACK_SETTINGS: SiteSettings = {
  siteName: "",
  logoLight: "",
  logoDark: "",
  favicon: null,
  contactPageImage: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  addressMapUrl: null,
  hotline: "",
  footerText: footerAbout,
  certificateOfRegistration: "/exralogofooter.jpeg",
  footerCertificates: [
    {
      title: "Certificate of Registration",
      image: "/exralogofooter.jpeg",
    },
  ],
  supportTitle: "Customer Care",
  socials: [],
  metaTitle: null,
  metaDescription: null,
  metaKeywords: null,
  metaImage: null,
};

function resolveMedia(url: string | null | undefined): string {
  const value = url?.trim();
  if (!value) return "";
  if (
    value.startsWith("https://admin.sumabd.com") ||
    value.startsWith("https://suma.webkarigor.com") ||
    value.includes("digitaloceanspaces.com") ||
    value.startsWith("/")
  ) {
    return value;
  }
  return "";
}

function resolveFavicon(url: string | null | undefined): string | null {
  const value = url?.trim();
  if (!value) return null;
  if (value.startsWith("https://") || value.startsWith("/")) return value;
  return null;
}

function asText(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

export function whatsappHref(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  let digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) digits = `88${digits}`;
  return `https://wa.me/${digits}`;
}

export function normalizeSettingsResponse(
  response: SettingsApiResponse,
): SiteSettings {
  const socialEntries: Array<[SettingsSocialLink["key"], string]> = [
    ["facebook", response.facebook],
    ["instagram", response.instagram],
    ["youtube", response.youtube],
    ["tiktok", response.tiktok],
    ["twitter", response.twitter],
    ["linkedin", response.linkedin],
    ["pinterest", response.pinterest],
  ];

  const socialLabels: Record<SettingsSocialLink["key"], string> = {
    facebook: "Facebook",
    instagram: "Instagram",
    youtube: "YouTube",
    tiktok: "TikTok",
    twitter: "X",
    linkedin: "LinkedIn",
    pinterest: "Pinterest",
  };

  const socials: SettingsSocialLink[] = socialEntries
    .filter(([, href]) => Boolean(asText(href)))
    .map(([key, href]) => ({
      key,
      name: socialLabels[key],
      href: asText(href),
    }));

  const hotline = asText(response.hotline);
  const phone = asText(response.phone) || hotline;
  const whatsapp = asText(response.whatsapp) || asText(response.phone);
  const certificateItems =
    response.footer_certificates ??
    response.certificates ??
    (Array.isArray(response.certificate_of_registration)
      ? response.certificate_of_registration
      : []);
  const footerCertificates: FooterCertificate[] = certificateItems
    .map((item) => ({
      title: asText(item.title || item.name || item.label),
      image: resolveMedia(item.image || item.logo || item.image_url),
    }))
    .filter((item) => item.image);
  const legacyCertificate = Array.isArray(response.certificate_of_registration)
    ? ""
    : resolveMedia(response.certificate_of_registration);
  if (!footerCertificates.length && legacyCertificate) {
    footerCertificates.push({
      title: "Certificate of Registration",
      image: legacyCertificate,
    });
  }

  return {
    siteName: asText(response.site_name),
    logoLight: resolveMedia(response.logo_light),
    logoDark: resolveMedia(response.logo_dark),
    favicon: resolveFavicon(response.favicon),
    contactPageImage: resolveMedia(response.contact_page_image),
    phone,
    whatsapp,
    email: asText(response.email),
    address: asText(response.address),
    addressMapUrl: asText(response.address_map_url) || null,
    hotline,
    footerText: asText(response.footer_text) || footerAbout,
    certificateOfRegistration: legacyCertificate || "/exralogofooter.jpeg",
    footerCertificates,
    supportTitle: "Customer Care",
    socials,
    metaTitle: asText(response.meta_title) || null,
    metaDescription: asText(response.meta_description) || null,
    metaKeywords: asText(response.meta_keywords) || null,
    metaImage: resolveMedia(response.meta_image) || null,
  };
}

export const fetchSettings = cache(async (): Promise<SiteSettings> => {
  try {
    const { apiFetch } = await import("@/lib/apiFetch");
    const response = await apiFetch<SettingsApiResponse>("/settings", {
      cache: "no-store",
    });
    return normalizeSettingsResponse(response);
  } catch {
    return FALLBACK_SETTINGS;
  }
});
