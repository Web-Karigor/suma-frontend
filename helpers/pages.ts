import type { PagesApiResponse, PageItem, FooterPage } from "@/types/pages";

function normalizePage(page: PageItem): FooterPage {
  return {
    label: page.title,
    href: `/${page.slug}`,
  };
}

export function normalizeFooterPagesResponse(
  response: PagesApiResponse,
): FooterPage[] {
  // Return all pages without filtering
  return response.data.map(normalizePage);
}
