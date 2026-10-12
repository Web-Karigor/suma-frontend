import type {
  SettingsApiResponse,
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
  email: "",
  address: "",
  addressMapUrl: null,
  hotline: "",
  supportTitle: "Customer Care",
  socials: [],
  metaTitle: null,
  metaDescription: null,
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

  return {
    siteName: asText(response.site_name),
    logoLight: resolveMedia(response.logo_light),
    logoDark: resolveMedia(response.logo_dark),
    favicon: resolveFavicon(response.favicon),
    contactPageImage: resolveMedia(response.contact_page_image),
    phone,
    email: asText(response.email),
    address: asText(response.address),
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
    const response = await apiFetch<SettingsApiResponse>("/settings", {
      cache: "no-store",
    });
    return normalizeSettingsResponse(response);
  } catch {
    return FALLBACK_SETTINGS;
  }
}
