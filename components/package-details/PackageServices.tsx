import { Container } from "@/components/ui/Container";
import { CheckIcon, CloseIcon } from "@/components/icons";

type PackageServicesProps = {
  included: string[];
  excluded: string[];
};

export function PackageServices({ included, excluded }: PackageServicesProps) {
  return (
    <section id="services" className="scroll-mt-28 bg-neutral-50 py-12 tablet:py-16 desktop-xl:py-[72px]">
      <Container className="desktop-xl:!px-0">
        <h2 className="mb-8 text-[22px] leading-tight font-semibold text-hero tablet:text-[24px]">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-16 desktop-xl:gap-[90px]">
          <div>
            <h3 className="mb-4 text-base font-semibold text-hero">Included</h3>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm leading-[1.4] text-neutral-600">
                  <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-success-500">
                    <CheckIcon className="size-2.5 text-success-600" />
                  </span>
                  <span className="text-base font-regular">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="2xl:-ml-60 xl:-ml-40">
            <h3 className="mb-4 text-base font-semibold text-hero">Available at additional fees</h3>
            <ul className="flex flex-col gap-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm leading-[1.4] text-neutral-600">
                  <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-error-400">
                    <CloseIcon className="size-2.5 text-error-600" />
                  </span>
                  <span className="text-base font-regular">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
