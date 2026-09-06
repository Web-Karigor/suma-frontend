import { apiFetch } from "@/lib/apiFetch";
import type {
  CmsPageData,
  CmsPageDetailApiResponse,
  CmsPagesApiResponse,
} from "@/types/cms-page";

/** Existing app routes — not served by the CMS `[slug]` page. */
const EXCLUDED_PAGE_SLUGS = new Set([
  "hotels",
  "hajj-and-umrah",
  "packages",
  "contact-us",
]);

const ALLOWED_CMS_SLUGS = new Set([
  "faq",
  "privacy-policy",
  "terms-and-conditions",
]);

export function isCmsPageSlug(slug: string): boolean {
  return ALLOWED_CMS_SLUGS.has(slug);
}

function resolveBanner(banner: string | null): string | null {
  if (!banner?.trim()) return null;
  if (
    banner.startsWith("https://suma.webkarigor.com") ||
    banner.includes("digitaloceanspaces.com")
  ) {
    return banner;
  }
  return null;
}

export function normalizeCmsPageDetail(
  response: CmsPageDetailApiResponse,
): CmsPageData {
  const item = response.data;

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    contentHtml: item.content,
    headerTitle: item.header?.title?.trim() || item.title,
    headerSubtitle: item.header?.subtitle?.trim() || null,
    headerDescription: item.header?.short_description?.trim() || null,
    banner: resolveBanner(item.header?.banner ?? null),
    metaTitle: item.meta?.title ?? null,
    metaDescription: item.meta?.description ?? null,
    listToFooter: item.list_to_footer,
  };
}

export async function fetchCmsPageSlugs(): Promise<string[]> {
  const response = await apiFetch<CmsPagesApiResponse>("/pages");
  return response.data
    .map((item) => item.slug)
    .filter((slug) => isCmsPageSlug(slug) && !EXCLUDED_PAGE_SLUGS.has(slug));
}

export async function fetchCmsPageBySlug(
  slug: string,
): Promise<CmsPageData | null> {
  if (!isCmsPageSlug(slug)) return null;

  try {
    const response = await apiFetch<CmsPageDetailApiResponse>(`/page/${slug}`);
    return normalizeCmsPageDetail(response);
  } catch {
    return null;
  }
}

export async function fetchFooterCmsPages(): Promise<
  Array<{ label: string; href: string }>
> {
  try {
    const response = await apiFetch<CmsPagesApiResponse>("/pages");
    return response.data
      .filter(
        (item) =>
          item.list_to_footer &&
          isCmsPageSlug(item.slug) &&
          !EXCLUDED_PAGE_SLUGS.has(item.slug),
      )
      .map((item) => ({
        label: item.title,
        href: `/${item.slug}`,
      }));
  } catch {
    return [];
  }
}
