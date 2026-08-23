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
} from "@/components/medical";

import { HajjContact } from "@/components/hajj";

import {
  CorporateCancellation,
} from "@/components/corporate-tour";

export default function MedicalPage() {
  const heroData = {
    title: "Trusted Medical Tour handled with care",
    subtitle:
      "Access world-class healthcare at affordable prices. We connect you with top-rated hospitals and specialists across the globe for comprehensive medical treatments.",
    stats: [
      { value: "1500+", label: "Happy Patients" },
      { value: "24/7", label: "Support" },
      { value: "50+", label: "Hospitals" },
      { value: "100%", label: "Success Rate" },
    ],
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
  };

  const destinations = [
    {
      name: "Thailand",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      specialties: ["Cosmetic", "Dental"],
    },
    {
      name: "India",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
      specialties: ["Cardiac", "Orthopedic"],
    },
    {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1488085061387-422e58ed05d0?auto=format&fit=crop&w=900&q=80",
      specialties: ["Cancer", "Neurology"],
    },
    {
      name: "Malaysia",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      specialties: ["IVF", "Wellness"],
    },
    {
      name: "Turkey",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80",
      specialties: ["Hair", "Eye Care"],
    },
  ];

  const reasons = [
    {
      icon: "check" as const,
      title: "Quality Care",
      description:
        "JCI-accredited hospitals with internationally trained specialists",
    },
    {
      icon: "star" as const,
      title: "Cost Savings",
      description:
        "Save up to 70% on medical procedures without compromising quality",
    },
    {
      icon: "headset" as const,
      title: "Full Support",
      description:
        "Dedicated medical coordinator throughout your entire journey",
    },
    {
      icon: "shield" as const,
      title: "Safety First",
      description: "Comprehensive insurance and emergency support 24/7",
    },
  ];

 const treatments = [
  {
    icon: "heart" as const,
    title: "Cardiac Care",
    procedures: [],
  },
  {
    icon: "stethoscope" as const,
    title: "Orthopedics",
    procedures: [],
  },
  {
    icon: "heart" as const,
    title: "Cosmetic",
    procedures: [],
  },
  {
    icon: "stethoscope" as const,
    title: "Dental Care",
    procedures: [],
  },
  {
    icon: "heart" as const,
    title: "Fertility & IVF",
    procedures: [],
  },
  {
    icon: "stethoscope" as const,
    title: "Neurology & Spine",
    procedures: [],
  },
  {
    icon: "heart" as const,
    title: "Oncology",
    procedures: [],
  },
  {
    icon: "stethoscope" as const,
    title: "General Health Checkups",
    procedures: [],
  },
];

  const hospitals = [
    {
      name: "Bangkok International Hospital",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
      location: "Bangkok, Thailand",
      rating: 4.9,
      specialties: ["Cardiology", "Oncology", "Orthopedics"],
    },
    {
      name: "Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
      location: "Chennai, India",
      rating: 4.8,
      specialties: ["Cardiac", "Neurology", "Transplants"],
    },
    {
      name: "Mount Elizabeth Hospital",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      location: "Singapore",
      rating: 5.0,
      specialties: ["Cancer Care", "Surgery", "Diagnostics"],
    },
  ];

  const accommodations = [
    {
      title: "Hospital Guest House",
      description:
        "Comfortable rooms within hospital premises for easy access to medical facilities and care.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "4-Star Hotel",
      description:
        "Premium hotel accommodation near hospital with all modern amenities and services.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Recovery Villa",
      description:
        "Private villa with nursing care for post-surgery recovery in peaceful environment.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const processSteps = [
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
];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      treatment: "Knee Replacement",
      rating: 5,
      feedback:
        "Excellent care and support throughout my treatment. The hospital staff were professional and caring. Highly recommend!",
    },
    {
      name: "Ahmed Hassan",
      country: "Saudi Arabia",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
      treatment: "Cardiac Surgery",
      rating: 5,
      feedback:
        "Life-changing experience. The medical team was outstanding and the facilities were world-class. Thank you!",
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
      treatment: "Cosmetic Surgery",
      rating: 5,
      feedback:
        "Amazing results! The surgeon was highly skilled and the entire process was smooth. Very satisfied with my decision.",
    },
    {
      name: "John Smith",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      treatment: "Dental Implants",
      rating: 5,
      feedback:
        "Professional service from start to finish. Saved thousands compared to back home. Definitely worth it!",
    },
    {
      name: "Li Wei",
      country: "China",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
      treatment: "Eye Surgery",
      rating: 5,
      feedback:
        "Perfect vision now! The doctor was excellent and the recovery was quick. Grateful for the wonderful care.",
    },
  ];

  const cancellationPolicies = [
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
    timeframe:
      "Force majeure events will be evaluated on a case-by-case basis.",
  },
];

  const services = [
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
  ];

  return (
    <main>
      <MedicalHero {...heroData} />
      <MedicalDestinations destinations={destinations} />
      <MedicalWhyChoose reasons={reasons} />
      <MedicalTreatments treatments={treatments} />
      <MedicalHospitals hospitals={hospitals} />
      <MedicalAccommodation accommodations={accommodations} />
      <MedicalProcess steps={processSteps} />
      <MedicalTestimonials testimonials={testimonials} />
      <MedicalServices services={services} />
      <CorporateCancellation policies={cancellationPolicies} />
      <HajjContact />
    </main>
  );
}
