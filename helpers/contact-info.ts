import type {
  ContactInfoApiResponse,
  ContactOfficeCard,
  ContactOfficeItem,
} from "@/types/contact-info";

function extractMapHref(mapEmbedHtml: string, address: string): string {
  const src = mapEmbedHtml.match(/src=["']([^"']+)["']/i)?.[1];
  if (src) {
    try {
      const url = new URL(src);
      if (url.pathname.includes("/maps/embed")) {
        url.pathname = url.pathname.replace("/maps/embed", "/maps");
      }
      return url.toString();
    } catch {
      return src;
    }
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getDirectionUrl(office: ContactOfficeItem): string {
  const mapHtml = office.address_map_url?.trim();
  if (mapHtml) {
    return extractMapHref(mapHtml, office.address);
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
}

function normalizeOffice(office: ContactOfficeItem): ContactOfficeCard {
  const mapEmbedHtml = office.address_map_url?.trim() || null;

  return {
    name: office.name,
    phone: office.phone,
    address: office.address,
    directionUrl: getDirectionUrl(office),
    mapEmbedHtml,
    workingHours: office.working_hours,
  };
}

export function normalizeContactInfoResponse(
  response: ContactInfoApiResponse,
): ContactOfficeCard[] {
  const offices = Array.isArray(response.data)
    ? response.data
    : [response.data];

  return offices.map(normalizeOffice);
}
