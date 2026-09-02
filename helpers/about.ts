import type {
  AboutApiResponse,
  AboutFounder,
  AboutFounderInfo,
  AboutGalleryCard,
  AboutGalleryItem,
  AboutLegacyItem,
  AboutPageData,
  AboutProcessItem,
  AboutProcessStep,
  AboutStory,
  AboutTeamItem,
  AboutUsSection,
  AboutValue,
  AboutValueItem,
} from "@/types/about";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80";

const GALLERY_LAYOUT = [
  "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
  "h-[220px] tablet:h-[280px] desktop:h-[360px] desktop-xl:h-[386px]",
  "h-[160px] tablet:h-[200px] desktop:h-[226px] desktop-xl:h-[226px]",
] as const;

const FALLBACK_GALLERY: AboutGalleryCard[] = [
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    alt: "Traveler overlooking the ocean",
    className: GALLERY_LAYOUT[0],
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    alt: "Beach relaxation",
    className: GALLERY_LAYOUT[1],
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80",
    alt: "Destination travel",
    className: GALLERY_LAYOUT[2],
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    alt: "Mountain lake",
    className: GALLERY_LAYOUT[3],
  },
];

export function resolveAboutImage(image: string): string {
  if (!image.trim()) return FALLBACK_IMAGE;
  if (
    image.startsWith("https://suma.webkarigor.com") ||
    image.includes("digitaloceanspaces.com")
  ) {
    return image;
  }
  return FALLBACK_IMAGE;
}

function getText(item: {
  description?: string | null;
  short_description?: string | null;
  content?: string | null;
}): string {
  return item.description ?? item.short_description ?? item.content ?? "";
}

function normalizeGalleryItem(
  item: AboutGalleryItem | string,
  index: number,
): AboutGalleryCard {
  if (typeof item === "string") {
    return {
      src: resolveAboutImage(item),
      alt: "About gallery",
      className: GALLERY_LAYOUT[index % GALLERY_LAYOUT.length],
    };
  }

  return {
    src: resolveAboutImage(item.url),
    alt: item.alt_text ?? "About gallery",
    className: GALLERY_LAYOUT[index % GALLERY_LAYOUT.length],
  };
}

function normalizeGallery(aboutUs: AboutUsSection): AboutGalleryCard[] {
  const gallery = aboutUs.gallery as Array<AboutGalleryItem | string>;
  if (!gallery.length) return FALLBACK_GALLERY;

  return gallery.slice(0, 4).map(normalizeGalleryItem);
}

function normalizeStories(aboutUs: AboutUsSection): AboutStory[] {
  if (!aboutUs.legacy?.length) return [];

  return aboutUs.legacy.map((item, index) => ({
    title: item.title,
    description: getText(item),
    side: index % 2 === 0 ? "left" : "right",
    marker: index % 2 === 0 ? "teal" : "yellow",
  }));
}

function normalizeFounder(
  founderInfo: AboutFounderInfo | null,
  team: AboutTeamItem[],
): AboutFounder | null {
  const member = team[0];
  const source = founderInfo ?? (member
    ? {
        name: member.name,
        designation: member.designation,
        image: member.image,
        quote: null,
        content: null,
      }
    : null);

  if (!source?.name) return null;

  const paragraphs = source.content
    ? source.content
        .split(/\n{2,}/)
        .map((part) => part.trim())
        .filter(Boolean)
    : [];

  return {
    name: source.name,
    designation: source.designation ?? "Team Member",
    image: resolveAboutImage(source.image ?? ""),
    quote: source.quote ?? null,
    paragraphs,
  };
}

function normalizeProcessSteps(aboutUs: AboutUsSection): AboutProcessStep[] {
  if (!aboutUs.process?.length) return [];

  return aboutUs.process.map((item, index) => ({
    number: String(index + 1),
    title: item.title,
    description: getText(item),
    align: index % 2 === 0 ? "left" : "right",
  }));
}

function normalizeValues(aboutUs: AboutUsSection): AboutValue[] {
  if (aboutUs.visions?.length) {
    return aboutUs.visions.map((item) => ({
      title: item.title,
      description: getText(item),
    }));
  }

  if (aboutUs.features?.length) {
    return aboutUs.features.map((item) => ({
      title: item.title,
      description: item.short_description ?? item.description ?? "",
    }));
  }

  return [];
}

export function normalizeAboutUsResponse(response: AboutApiResponse): AboutPageData {
  const { about_us, team } = response.data;

  return {
    title: about_us.title ?? "About Us",
    gallery: normalizeGallery(about_us),
    storyTitle: "Built on Legacy, Growing with Purpose",
    stories: normalizeStories(about_us),
    founder: normalizeFounder(about_us.founder_info, team),
    processSteps: normalizeProcessSteps(about_us),
    values: normalizeValues(about_us),
  };
}
