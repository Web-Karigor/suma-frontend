import { Container } from "@/components/ui/Container";
import { CheckIcon, CloseIcon } from "@/components/icons";

type PackageServicesProps = {
  included: string[];
  excluded: string[];
  additional: string[];
};

export function PackageServices({
  included,
  excluded,
  additional,
}: PackageServicesProps) {
  const includedItems = included.filter((item) => item.trim());
  const excludedItems = excluded.filter((item) => item.trim());
  const additionalItems = additional.filter((item) => item.trim());

  if (!includedItems.length && !excludedItems.length && !additionalItems.length) {
    return null;
  }

  return (
    <section
      id="services"
      className="scroll-mt-28 bg-neutral-50 py-12 tablet:py-16 desktop-xl:py-[72px]"
    >
      <Container className="desktop-xl:!px-0">
        <h2 className="mb-8 text-[22px] leading-tight font-semibold text-hero tablet:text-[24px]">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 tablet:gap-16 desktop-xl:gap-[90px]">
          {includedItems.length > 0 ? (
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-hero">Included</h3>
            <ul className="flex flex-col gap-3">
              {includedItems.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex min-w-0 items-start gap-2 text-sm leading-[1.4] text-neutral-600"
                >
                  <span className="flex size-4.5 shrink-0 justify-center">
                    <CheckIcon className="size-6 text-success-600" />
                  </span>
                  <span className="min-w-0 break-words text-base font-regular">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          ) : null}
          {excludedItems.length > 0 ? (
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-hero">
              Not Included
            </h3>
            <ul className="flex flex-col gap-3">
              {excludedItems.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex min-w-0 items-start gap-2 text-sm leading-[1.4] text-neutral-600"
                >
                  <span className="flex size-3.5 shrink-0 justify-center mt-1 items-center rounded-full border border-error-400">
                    <CloseIcon className="size-2.5 text-error-600" />
                  </span>
                  <span className="min-w-0 break-words text-base font-regular">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          ) : null}
          {additionalItems.length > 0 ? (
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-hero">
              Additional on Extra Fees
            </h3>
            <ul className="flex flex-col gap-3">
              {additionalItems.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-2 text-sm leading-[1.4] text-neutral-600"
                >
                  <span className="flex size-4.5 shrink-0 justify-center">
                    <CheckIcon className="size-6 text-error-600" />
                  </span>
                  <span className="min-w-0 break-words text-base font-regular">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
