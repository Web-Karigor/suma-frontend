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

export default function MedicalPage() {
  return (
    <main className="overflow-x-hidden bg-teal-50">
      <MedicalHero />
      <MedicalDestinations />
      <MedicalWhyChoose />
      <MedicalTreatments />
      <MedicalHospitals />
      <MedicalAccommodation />
      <MedicalProcess />
      <MedicalTestimonials />
      <MedicalServices />
      <MedicalContact />
    </main>
  );
}
