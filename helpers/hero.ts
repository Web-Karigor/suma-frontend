import type { HeroApiResponse, HeroCard } from "@/types/hero";

export function normalizeHeroResponse(response: HeroApiResponse): HeroCard[] {
  const items = Array.isArray(response.data) ? response.data : [response.data];

  return items
    .filter((item) => item.status)
    .map((item) => ({
      title: item.title,
      description: item.subtitle ?? item.short_description ?? "",
      image: item.image,
      imageAlt: item.image_alt_text ?? item.title,
      bgImage: item.bg_image,
      bgImageAlt: item.bg_image_alt_text ?? "",
      rating: Number(item.rating) || 0,
      href: item.link_url ?? "#",
    }));
}
