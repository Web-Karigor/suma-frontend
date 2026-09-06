import type {
  SettingsApiResponse,
  SettingsSocialLink,
  SiteSettings,
} from "@/types/settings";

const FALLBACK_LOGO = "/logo.png";
const FALLBACK_CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";

export const FALLBACK_SETTINGS: SiteSettings = {
  siteName: "Suma International Services Ltd.",
  logoLight: FALLBACK_LOGO,
  logoDark: FALLBACK_LOGO,
  favicon: null,
  contactPageImage: FALLBACK_CONTACT_IMAGE,
  phone: "16703",
  email: "sumaintlsvc@sumabd.com",
  address: "House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh",
  addressMapUrl: null,
  hotline: "16703",
  supportTitle: "Customer Care",
  socials: [],
  metaTitle: null,
  metaDescription: null,
};

function resolveMedia(url: string | null | undefined, fallback: string): string {
  if (!url?.trim()) return fallback;
  if (
    url.startsWith("https://suma.webkarigor.com") ||
    url.includes("digitaloceanspaces.com")
  ) {
    return url;
  }
  return fallback;
}

function resolveOptionalMedia(url: string | null | undefined): string | null {
  if (!url?.trim()) return null;
  if (
    url.startsWith("https://suma.webkarigor.com") ||
    url.includes("digitaloceanspaces.com")
  ) {
    return url;
  }
  return null;
}

function asText(value: string | null | undefined): string {
  return value?.trim() ?? "";
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

  const hotline = asText(response.hotline) || FALLBACK_SETTINGS.hotline;
  const phone = asText(response.phone) || hotline;

  return {
    siteName: asText(response.site_name) || FALLBACK_SETTINGS.siteName,
    logoLight: resolveMedia(response.logo_light, FALLBACK_LOGO),
    logoDark: resolveMedia(response.logo_dark, FALLBACK_LOGO),
    favicon: resolveOptionalMedia(response.favicon),
    contactPageImage: resolveMedia(
      response.contact_page_image,
      FALLBACK_CONTACT_IMAGE,
    ),
    phone,
    email: asText(response.email) || FALLBACK_SETTINGS.email,
    address: asText(response.address) || FALLBACK_SETTINGS.address,
    addressMapUrl: asText(response.address_map_url) || null,
    hotline,
    supportTitle: "Customer Care",
    socials,
    metaTitle: asText(response.meta_title) || null,
    metaDescription: asText(response.meta_description) || null,
  };
}

export async function fetchSettings(): Promise<SiteSettings> {
  try {
    const { apiFetch } = await import("@/lib/apiFetch");
    const response = await apiFetch<SettingsApiResponse>("/settings");
    return normalizeSettingsResponse(response);
  } catch {
    return FALLBACK_SETTINGS;
  }
}
