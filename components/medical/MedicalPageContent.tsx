"use client";

import {
  MedicalHero,
  MedicalDestinations,
  MedicalWhyChoose,
  MedicalTreatments,
  MedicalHospitals,
  MedicalAccommodation,
  MedicalProcess,
  MedicalTestimonials,
  MedicalServices,
  MedicalContact,
} from "@/components/medical";
import { useServiceDetailQuery } from "@/hooks/queries/useServiceDetailQuery";

const MEDICAL_SLUG = "medical-tourism";

export function MedicalPageContent() {
  const { data, isLoading } = useServiceDetailQuery(MEDICAL_SLUG);

  if (isLoading || !data) return null;

  const thumbs = data.thumbnails.map((item) => item.src);
  const heroImages = {
    left: thumbs[0] || data.image,
    top: thumbs[1] || thumbs[0] || data.image,
    bottom: thumbs[2] || thumbs[1] || thumbs[0] || data.image,
  };

  const travel = data.travelInfo;

  return (
    <>
      <MedicalHero
        title={travel?.title || data.title}
        subtitle={travel?.subtitle || data.subtitle}
        images={heroImages}
        cards={travel?.cards ?? []}
        stats={travel?.stats ?? []}
      />
      {data.gallery.length > 0 ? (
        <MedicalDestinations images={data.gallery.map((item) => item.src)} />
      ) : null}
      {data.overview ? <MedicalWhyChoose overview={data.overview} /> : null}
      {data.specialities.items.length > 0 ? (
        <MedicalTreatments
          title={data.specialities.title}
          subtitle={data.specialities.subtitle}
          treatments={data.specialities.items}
        />
      ) : null}
      {data.networks.items.length > 0 ? (
        <MedicalHospitals
          title={data.networks.title}
          subtitle={data.networks.subtitle}
          hospitals={data.networks.items}
        />
      ) : null}
      {data.accommodations.items.length > 0 ? (
        <MedicalAccommodation
          title={data.accommodations.title}
          items={data.accommodations.items}
        />
      ) : null}
      {data.treatmentJourney.items.length > 0 ? (
        <MedicalProcess
          title={data.treatmentJourney.title}
          subtitle={data.treatmentJourney.subtitle}
          steps={data.treatmentJourney.items}
        />
      ) : null}
      {data.destinations.items.length > 0 ? (
        <MedicalTestimonials
          title={data.destinations.title}
          countries={data.destinations.items}
        />
      ) : null}
      {data.services || data.cancellationHtml ? (
        <MedicalServices
          services={
            data.services ?? { included: [], additional: [], excluded: [] }
          }
          cancellationHtml={data.cancellationHtml}
        />
      ) : null}
      <MedicalContact />
    </>
  );
}
