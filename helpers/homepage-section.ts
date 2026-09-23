import type {
  HomepageSectionContentApiResponse,
  HomepageSectionContentMap,
} from "@/types/homepage-section";

export function normalizeHomepageSectionContent(
  response: HomepageSectionContentApiResponse,
): HomepageSectionContentMap {
  const entries = Object.entries(response.data ?? {});

  return Object.fromEntries(
    entries.map(([key, item]) => [
      key.toLowerCase(),
      {
        id: item.id,
        pageId: item.page_id,
        sectionId: item.section_id,
        title: item.content?.title?.trim() ?? "",
        subtitle: item.content?.subtitle?.trim() ?? "",
      },
    ]),
  );
}
