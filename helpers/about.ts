import type { AboutApiResponse, AboutFounder, AboutGalleryCard, AboutPageData, AboutStory, AboutUsSection, AboutValue } from "@/types/about";

const GALLERY_LAYOUT = [
  "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
  "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
] as const;

export function resolveAboutImage(image: string): string {
  return image.startsWith("https://suma.webkarigor.com") || image.includes("digitaloceanspaces.com") ? image : "/images/about/hero-bg.png";
}

function getText(item: { description?: string | null; short_description?: string | null; content?: string | null }) {
  return item.short_description ?? item.description ?? item.content ?? "";
}

function normalizeGallery(aboutUs: AboutUsSection): AboutGalleryCard[] {
  return (aboutUs.content.images ?? []).slice(0, 4).map((src, index) => ({
    src: resolveAboutImage(src), alt: "About gallery", className: GALLERY_LAYOUT[index % GALLERY_LAYOUT.length],
  }));
}

function normalizeStories(aboutUs: AboutUsSection): AboutStory[] {
  return (aboutUs.legacy?.items ?? []).map((item, index) => ({
    title: item.title, description: getText(item), side: index % 2 === 0 ? "left" : "right", marker: index % 2 === 0 ? "teal" : "yellow",
  }));
}

function normalizeFounder(aboutUs: AboutUsSection): AboutFounder | null {
  const founder = aboutUs.founder_info;
  if (!founder?.name) return null;
  const description = founder.short_description ?? founder.content ?? "";
  return {
    name: founder.name, designation: founder.designation ?? "", image: resolveAboutImage(founder.image ?? ""),
    quote: founder.title ?? founder.quote ?? null, paragraphs: description ? [description] : [],
  };
}

function normalizeValues(aboutUs: AboutUsSection): AboutValue[] {
  const { mission, vision, our_values } = aboutUs.content;
  return [
    { title: "Our Mission", description: mission ?? "" },
    { title: "Our Vision", description: vision ?? "" },
    { title: "Our Values", description: our_values ?? "" },
  ].filter(({ description }) => description.trim());
}

export function normalizeAboutUsResponse(response: AboutApiResponse): AboutPageData {
  const aboutUs = response.data.about_us;
  return {
    title: aboutUs.title ?? "About Us",
    banner: resolveAboutImage(aboutUs.content.banner ?? ""),
    bannerAlt: aboutUs.content.banner_alt_text ?? aboutUs.title ?? "About us",
    gallery: normalizeGallery(aboutUs), storyTitle: aboutUs.legacy?.title ?? "Our Legacy", stories: normalizeStories(aboutUs),
    founder: normalizeFounder(aboutUs), processTitle: aboutUs.process?.title ?? "Our Process",
    processSteps: (aboutUs.process?.items ?? []).map((item, index) => ({
      number: String(index + 1), title: item.title, description: getText(item), align: index % 2 === 0 ? "left" : "right",
    })),
    values: normalizeValues(aboutUs),
  };
}
