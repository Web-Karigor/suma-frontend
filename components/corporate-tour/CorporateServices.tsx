import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/icons";

type CorporateServicesProps = {
  services: string[];
};

export function CorporateServices({
  services,
}: CorporateServicesProps) {
  // প্রথম 6টি Included
  const includedServices = services.slice(0, 6);

  // পরের 6টি Additional Fees
  const additionalServices = services.slice(6, 12);

  // বাকি সব Not Included
  const notIncludedServices = services.slice(12);

  return (
    <section className="bg-[#082d2b] py-14 text-white md:py-16">
      <Container>
        <div className="mx-auto w-full max-w-[1740px]">
          {/* Section Title */}
          <h2 className="mb-7 text-[22px] font-bold text-white md:text-[24px]">
            Services
          </h2>

          {/* Services Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ================= INCLUDED ================= */}
            <div className="rounded-[16px] border border-[#315152] bg-[#071d1f] px-5 py-5 md:px-6 md:py-6">
              <h3 className="mb-6 text-[15px] font-medium text-white/70">
                Included
              </h3>

              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {includedServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[12px] text-white/70"
                  >
                    <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#4b8587]">
                      <CheckIcon className="h-[8px] w-[8px] text-white" />
                    </div>

                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= ADDITIONAL FEES ================= */}
            <div className="rounded-[16px] border border-[#315152] bg-[#071d1f] px-5 py-5 md:px-6 md:py-6">
              <h3 className="mb-6 text-[15px] font-medium text-[#e8bf4b]">
                Available at Additional Fees
              </h3>

              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[12px] text-white/70"
                  >
                    <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#f0c33b] text-[11px] font-bold text-[#193033]">
                      +
                    </div>

                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= NOT INCLUDED ================= */}
            <div className="rounded-[16px] border border-[#315152] bg-[#071d1f] px-5 py-5 md:px-6 md:py-6">
              <h3 className="mb-6 text-[15px] font-medium text-white/60">
                Not Included
              </h3>

              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {notIncludedServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[12px] text-white/50"
                  >
                    <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-white/30 text-[9px] font-bold text-white/70">
                      ×
                    </div>

                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}