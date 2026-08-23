import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/icons";

type PackageServicesProps = {
  included: string[];
  excluded: string[];
};

export function PackageServices({
  included,
  excluded,
}: PackageServicesProps) {
  return (
    <section className="bg-[#F6F3EC] py-[72px] md:py-[90px] lg:py-[100px]">
      <Container>
        <div className="w-full">
          {/* Section Title */}
          <h2 className="mb-[32px] text-[22px] font-bold leading-tight text-hero md:text-[24px]">
            Services
          </h2>

          {/* Services Columns */}
          <div className="grid grid-cols-1 gap-[48px] md:grid-cols-2 md:gap-[90px] lg:max-w-[900px]">
            
            {/* Included */}
            <div>
              <h3 className="mb-[16px] text-[16px] font-semibold leading-tight text-hero">
                Included
              </h3>

              <ul className="space-y-[12px]">
                {included.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-[6px] text-[14px] leading-[1.4] text-neutral-600"
                  >
                    <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border border-[#4F9B83]">
                      <CheckIcon className="h-[9px] w-[9px] text-[#4F9B83]" />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available at additional fees */}
            <div>
              <h3 className="mb-[16px] text-[16px] font-semibold leading-tight text-hero">
                Available at additional fees
              </h3>

              <ul className="space-y-[12px]">
                {excluded.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-[6px] text-[14px] leading-[1.4] text-neutral-600"
                  >
                    <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border border-[#D9796B]">
                      <svg
                        className="h-[8px] w-[8px] text-[#D9796B]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M6 6l12 12M18 6L6 18"
                        />
                      </svg>
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}