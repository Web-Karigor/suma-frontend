import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPinIcon } from "@/components/icons";

type Hospital = {
  name: string;
  image: string;
  location: string;
  rating: number;
  specialties: string[];
};

type MedicalHospitalsProps = {
  hospitals: Hospital[];
};

export function MedicalHospitals({
  hospitals,
}: MedicalHospitalsProps) {
  return (
    <section className="w-full bg-[#f2f5f5] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        <div className="w-full">
          {/* ================= HEADER ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-16">
            
            {/* LEFT SIDE */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-4 bg-[#176d73]" />

                <span className="text-[11px] font-medium text-[#176d73] sm:text-[12px]">
                  Network
                </span>
              </div>

              <h2 className="text-[24px] font-bold leading-[1.2] text-[#202d33] sm:text-[28px] md:text-[30px] lg:text-[32px]">
                Our partner{" "}
                <span className="text-[#176d73]">
                  hospitals
                </span>
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="border-l-[3px] border-[#1d7a7e] pl-4 sm:pl-5">
              <p className="max-w-[760px] text-[15px] font-medium leading-[1.35] text-[#176d73] sm:text-[16px] md:text-[17px]">
                We work with accredited hospitals recognized for international
                patient care.
              </p>
            </div>
          </div>

          {/* ================= HOSPITAL CARDS ================= */}
          <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hospitals.slice(0, 3).map((hospital, index) => (
              <article
                key={`${hospital.name}-${index}`}
                className="
                  flex
                  h-auto
                  min-h-[570px]
                  w-full
                  flex-col
                  rounded-[24px]
                  border
                  border-[#d7dfe1]
                  bg-[#f2f5f5]
                  p-5
                  shadow-[0_3px_12px_rgba(0,0,0,0.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  md:h-[570px]
                "
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-[12px]">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 564px"
                    className="object-cover"
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-1 flex-col pt-4">
                  
                  {/* Accreditation */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-[13px] w-[13px] shrink-0 text-[#176d73]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.8L12 14l-4.3 2.4.8-4.8L5 8.2l4.8-.7L12 3z"
                      />
                    </svg>

                    <span className="text-[11px] font-medium text-[#4c777a]">
                      {index === 0
                        ? "JCI Accredited"
                        : index === 1
                          ? "JCI & NABH Accredited"
                          : "Internationally Accredited"}
                    </span>
                  </div>

                  {/* Hospital Name */}
                  <h3 className="mt-3 min-h-[42px] text-[17px] font-bold leading-[1.3] text-[#273137]">
                    {hospital.name}
                  </h3>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-2 text-[#6b7478]">
                    <MapPinIcon className="h-[14px] w-[14px] shrink-0" />

                    <span className="text-[12px]">
                      {hospital.location}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px w-full bg-[#d7dfe1]" />

                  {/* Specialties */}
                  <p className="min-h-[44px] text-[12px] leading-[1.6] text-[#3e494d]">
                    {hospital.specialties.join(", ")}
                  </p>

                  {/* Button - Always Bottom */}
                  <a
                    href="/contact"
                    className="
                      mt-auto
                      flex
                      h-[44px]
                      w-full
                      items-center
                      justify-center
                      rounded-[5px]
                      bg-[#176d73]
                      px-4
                      text-[12px]
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#115b60]
                    "
                  >
                    View on Map
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}