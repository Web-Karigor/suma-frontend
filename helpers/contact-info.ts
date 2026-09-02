import type {
  ContactInfoApiResponse,
  ContactOfficeCard,
  ContactOfficeItem,
} from "@/types/contact-info";

function getDirectionUrl(office: ContactOfficeItem): string {
  if (office.address_map_url?.trim()) {
    return office.address_map_url;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
}

function normalizeOffice(office: ContactOfficeItem): ContactOfficeCard {
  return {
    name: office.name,
    phone: office.phone,
    address: office.address,
    directionUrl: getDirectionUrl(office),
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
