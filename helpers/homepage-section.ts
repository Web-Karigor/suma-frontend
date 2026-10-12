import type {
  HomepageSectionContentApiResponse,
  HomepageSectionContentMap,
} from "@/types/homepage-section";

function resolveImage(image: string | null | undefined): string {
  if (!image?.trim()) return "";
  if (
    image.startsWith("https://admin.sumabd.com") ||
    image.includes("digitaloceanspaces.com") ||
    image.startsWith("/")
  ) {
    return image;
  }
  return "";
}

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
        mediaType: item.content?.media_type?.trim() ?? "",
        image: resolveImage(item.content?.image),
        link: item.content?.link?.trim() ?? "",
        video: item.content?.video?.trim() ?? "",
      },
    ]),
  );
}
