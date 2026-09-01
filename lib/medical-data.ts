export const medicalHero = {
  title: "Trusted medical Tour handled with care.",
  subtitle:
    "From your first consultation to recovery and follow-up — every step planned, coordinated, and supported by a dedicated team.",
  images: {
    left: "/images/medical/hero-main.png",
    top: "/images/medical/hero-top.png",
    bottom: "/images/medical/hero-bottom.png",
  },
  cards: [
    {
      icon: "/images/corporate-tour/icons/star.svg",
      label: "TREATMENT",
      value: "Consultation-based",
    },
    {
      icon: "/images/corporate-tour/icons/calendar.svg",
      label: "COUNTRIES",
      value: "Multiple destinations",
    },
    {
      icon: "/images/corporate-tour/icons/moon.svg",
      label: "SUPPORT",
      value: "24/7 coordinators",
    },
  ],
} as const;

export const medicalStats = [
  { value: "1500+", label: "Travelers we served" },
  { value: "24/7", label: "Customer Support" },
  { value: "6", label: "Steps, Fully Managed" },
  { value: "100%", label: "Transparent Pricing" },
] as const;

export const medicalImageStrip = [
  "/images/medical/strip-01.png",
  "/images/medical/strip-02.png",
  "/images/medical/strip-03.png",
  "/images/medical/strip-04.png",
  "/images/medical/strip-05.png",
] as const;

export const medicalOverview = {
  label: "Overview",
  title: "Medical travel, handled like a trusted healthcare partner.",
  intro:
    "Medical travel is handled with the same care and transparency you would expect from a trusted healthcare partner.",
  paragraphs: [
    "Suma International's Medical Tourism Package is designed for patients seeking quality medical care abroad, without the stress of managing logistics alone. From your first consultation to hospital coordination, accommodation, and recovery, every step is planned and supported by our team.",
    "We work with accredited hospitals and qualified medical professionals to connect you with the right treatment option for your needs. Our coordinators handle visa assistance, travel arrangements, and appointment scheduling, so you can focus on your health rather than paperwork.",
    "For patients traveling with family or companions, we also arrange accommodation nearby, so your support system can stay close throughout treatment and recovery. Support continues after your procedure with follow-up coordination once you return home.",
  ],
} as const;

export const medicalReasons = [
  {
    icon: "check" as const,
    title: "Quality Care",
    description: "JCI-accredited hospitals with internationally trained specialists",
  },
  {
    icon: "star" as const,
    title: "Cost Savings",
    description: "Save up to 70% on medical procedures without compromising quality",
  },
  {
    icon: "headset" as const,
    title: "Full Support",
    description: "Dedicated medical coordinator throughout your entire journey",
  },
  {
    icon: "shield" as const,
    title: "Safety First",
    description: "Comprehensive insurance and emergency support 24/7",
  },
] as const;

export const medicalTreatments = [
  { title: "Cardiology", image: "/images/medical/specialty-cardiology.png" },
  { title: "Orthopedics & Joint Replacement", image: "/images/medical/specialty-orthopedics.png" },
  { title: "Oncology", image: "/images/medical/specialty-oncology.png" },
  { title: "Cosmetic & Plastic Surgery", image: "/images/medical/specialty-cosmetic.png" },
  { title: "Dental Care", image: "/images/medical/specialty-dental.png" },
  { title: "Fertility & IVF", image: "/images/medical/specialty-fertility.png" },
  { title: "Neurology & Spine", image: "/images/medical/specialty-neurology.png" },
  { title: "General Health Checkups", image: "/images/medical/specialty-checkup.png" },
] as const;

export const medicalHospitals = [
  {
    name: "Bumrungrad International Hospital",
    location: "Bangkok, Thailand",
    accreditation: "JCI Accredited",
    specialties: ["Cardiology", "Oncology", "Orthopedics"],
    image: "/images/medical/hospital-bumrungrad.png",
  },
  {
    name: "Apollo Gleneagles Hospital",
    location: "Kolkata, India",
    accreditation: "JCI & NABH Accredited",
    specialties: ["Cardiac", "Neurology", "Transplants"],
    image: "/images/medical/hospital-apollo.png",
  },
  {
    name: "Gleneagles Hospital",
    location: "Singapore",
    accreditation: "Internationally Accredited",
    specialties: ["Cancer Care", "Surgery", "Diagnostics"],
    image: "/images/medical/hospital-gleneagles.png",
  },
] as const;

export const medicalAccommodations = [
  {
    title: "For Patients Requiring Hospital Stay",
    description:
      "Comfortable rooms within hospital premises for easy access to medical facilities and care.",
    image: "/images/medical/stay-hospital.png",
  },
  {
    title: "For Outpatient or Day-Procedure Patients",
    description:
      "Premium hotel accommodation near hospital with all modern amenities and services.",
    image: "/images/medical/stay-outpatient.jpg",
  },
  {
    title: "For Companions and Family",
    description:
      "Private villa with nursing care for post-surgery recovery in a peaceful environment.",
    image: "/images/medical/stay-companions.png",
  },
] as const;

export const medicalProcessSteps = [
  {
    number: "01",
    title: "Pre-Arrival Consultation",
    description:
      "A remote consultation with your doctor to review your case and confirm your treatment plan before you travel.",
  },
  {
    number: "02",
    title: "Visa and Travel Arrangement",
    description:
      "We assist with medical visa documentation, flight coordination, and airport transfer planning.",
  },
  {
    number: "03",
    title: "Arrival and Hospital Admission",
    description:
      "Our coordinator meets you on arrival and accompanies you through hospital check-in and initial assessment.",
  },
  {
    number: "04",
    title: "Treatment and Recovery",
    description:
      "Your procedure is carried out by your assigned specialist, followed by a recovery period at the hospital or your accommodation.",
  },
  {
    number: "05",
    title: "Discharge and Departure",
    description:
      "We coordinate your discharge, final check-ups, and travel arrangements for your return home.",
  },
  {
    number: "06",
    title: "Follow-Up and Aftercare",
    description:
      "After you return home, our team coordinates follow-up consultations with your doctor to support your ongoing recovery.",
  },
] as const;

export const medicalCountries = [
  {
    name: "Thailand",
    image: "/images/medical/country-thailand.png",
    knownFor: "Cosmetic, Dental",
  },
  {
    name: "India",
    image: "/images/medical/country-india.png",
    knownFor: "Cardiac, Orthopedic",
  },
  {
    name: "Singapore",
    image: "/images/medical/country-singapore.png",
    knownFor: "Cancer, Neurology",
  },
  {
    name: "Turkey",
    image: "/images/medical/country-turkey.png",
    knownFor: "Hair, Eye Care",
  },
  {
    name: "Malaysia",
    image: "/images/medical/country-malaysia.png",
    knownFor: "IVF, Wellness",
  },
] as const;

export const medicalTestimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    image: "/images/medical/hero-doctor.svg",
    treatment: "Knee Replacement",
    rating: 5,
    feedback:
      "Excellent care and support throughout my treatment. The hospital staff were professional and caring. Highly recommend!",
  },
  {
    name: "Ahmed Hassan",
    country: "Saudi Arabia",
    image: "/images/medical/patient.svg",
    treatment: "Cardiac Surgery",
    rating: 5,
    feedback:
      "Life-changing experience. The medical team was outstanding and the facilities were world-class. Thank you!",
  },
  {
    name: "Maria Garcia",
    country: "Spain",
    image: "/images/medical/hero-hospital.svg",
    treatment: "Cosmetic Surgery",
    rating: 5,
    feedback:
      "Amazing results! The surgeon was highly skilled and the entire process was smooth. Very satisfied with my decision.",
  },
  {
    name: "John Smith",
    country: "Australia",
    image: "/images/medical/hospital.svg",
    treatment: "Dental Implants",
    rating: 5,
    feedback:
      "Professional service from start to finish. Saved thousands compared to back home. Definitely worth it!",
  },
  {
    name: "Li Wei",
    country: "China",
    image: "/images/medical/destination.svg",
    treatment: "Eye Surgery",
    rating: 5,
    feedback:
      "Perfect vision now! The doctor was excellent and the recovery was quick. Grateful for the wonderful care.",
  },
] as const;

export const medicalIncludedServices = [
  "Doctor and Hospital Coordination",
  "Visa Assistance",
  "Airport and Hospital Transfers",
  "Patient Coordinator Support",
  "Follow-Up Consultation Coordination",
  "24/7 Support During Your Stay",
] as const;

export const medicalAdditionalServices = [
  "Extended Accommodation",
  "Private Nursing Care",
  "Physiotherapy or Rehabilitation Services",
  "Interpreter Services Beyond Standard Hours",
  "Companion Flight Booking",
  "Custom Itinerary",
] as const;

export const medicalExcludedServices = [
  "Chauffeur",
  "Extended Stay",
  "Interpreter",
  "AV",
  "Dinner",
  "Custom Itinerary",
] as const;

export const medicalCoordinatorServices = [
  "Medical visa assistance and documentation",
  "Second medical opinion from specialists",
  "Complete treatment cost estimation",
  "Flight bookings and travel arrangements",
  "Airport pickup and drop-off services",
  "Accommodation booking for patient and family",
  "Hospital appointment scheduling",
  "Medical translator services",
  "24/7 medical coordinator support",
  "Post-treatment follow-up consultations",
  "Medical records management",
  "Travel insurance coordination",
  "Local transportation arrangements",
  "Emergency medical assistance",
  "Prescription medication support",
] as const;

export const medicalCancellationPolicies = [
  {
    timeframe:
      "75% of the package value will be refunded in case of cancellation within (24) hours from the time of booking.",
  },
  {
    timeframe:
      "0% of the value of the package services will be refunded in case of cancellation after (24) hours, and before the last (5) Day/Days .An exception to this rule is the visa application processing fee, which is non-refundable after the 24-hour period.",
  },
  {
    timeframe: "No refunds will be made in case of cancellation within the last (72) hours.",
  },
  {
    timeframe:
      "The above rules apply to flight reservations organized by the service provider, and do not apply to custom flight reservations designated by the airline system for which specific cancellation policies apply to each reservation.",
  },
  {
    timeframe: "3.45% processing fees & its VAT will be deducted when the amounts are withdrawn from the wallet.",
  },
  {
    timeframe:
      "Currency exchange rates may result in differences in the amounts deposited and withdrawn from digital wallets.",
  },
] as const;

export const medicalExtendedCancellationPolicies = [
  {
    timeframe:
      "For cancellations made 45+ days before departure: Full refund minus 10% administrative fee.",
  },
  {
    timeframe:
      "For cancellations made 30-44 days before departure: 70% refund of total package cost.",
  },
  {
    timeframe:
      "For cancellations made 15-29 days before departure: 50% refund of total package cost.",
  },
  {
    timeframe:
      "For cancellations made less than 15 days before departure: No refund, but credits may be applied to future bookings.",
  },
  {
    timeframe:
      "Group bookings may have different cancellation terms - please consult with our corporate team.",
  },
  {
    timeframe: "Force majeure events will be evaluated on a case-by-case basis.",
  },
] as const;
