import { Container } from "@/components/ui/Container";
import { CheckIcon, CloseIcon } from "@/components/icons";
import type { PackageSightSeeingGroup } from "@/types/package";

type PackageSightseeingProps = {
  groups: PackageSightSeeingGroup[];
};

function SightList({
  title,
  items,
  included,
}: {
  title: string;
  items: string[];
  included: boolean;
}) {
  if (!items.length) return null;

  return (
    <div>
      <h4 className="mb-4 text-base font-semibold text-hero">{title}</h4>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm leading-[1.4] text-neutral-600">
            <span
              className={`flex size-3.5 shrink-0 items-center justify-center rounded-full border ${
                included ? "border-success-500" : "border-error-400"
              }`}
            >
              {included ? (
                <CheckIcon className="size-2.5 text-success-600" />
              ) : (
                <CloseIcon className="size-2.5 text-error-600" />
              )}
            </span>
            <span className="text-base font-regular">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PackageSightseeing({ groups }: PackageSightseeingProps) {
  if (!groups.length) return null;

  return (
    <section className="bg-gold-50 py-10 tablet:py-12 desktop-xl:py-14">
      <Container className="desktop-xl:!px-0">
        <h2 className="mb-6 text-[22px] leading-[1.2] font-semibold text-hero tablet:mb-8 tablet:text-[24px]">
          Sightseeing
        </h2>

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 text-lg font-semibold text-hero">{group.title}</h3>
              <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-16 desktop-xl:gap-[90px]">
                <SightList title="Included" items={group.included} included />
                <SightList
                  title="Available at additional fees"
                  items={group.additionalFees}
                  included={false}
                />
                <SightList title="Not included" items={group.notIncluded} included={false} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
