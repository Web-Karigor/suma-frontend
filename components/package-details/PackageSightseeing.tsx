import { Container } from "@/components/ui/Container";
import { BanIcon, CheckIcon } from "@/components/icons";
import type { PackageSightSeeingGroup } from "@/types/package";

type PackageSightseeingProps = {
  groups: PackageSightSeeingGroup[];
};

type SightStatus = "included" | "additional" | "excluded";

const STATUS_ICON_CLASS: Record<SightStatus, string> = {
  included: "size-5 shrink-0 text-success-600",
  additional: "size-5 shrink-0 text-error-400",
  excluded: "size-5 shrink-0 text-neutral-400",
};

function StatusIcon({ status }: { status: SightStatus }) {
  if (status === "excluded") {
    return <BanIcon className={STATUS_ICON_CLASS.excluded} />;
  }

  return (
    <CheckIcon
      className={
        status === "included"
          ? STATUS_ICON_CLASS.included
          : STATUS_ICON_CLASS.additional
      }
    />
  );
}

function SightItem({ label, status }: { label: string; status: SightStatus }) {
  return (
    <li
      className={`flex items-start gap-2.5 text-base leading-[1.4] ${
        status === "excluded" ? "text-[#B7B7B7]" : "text-hero"
      }`}
    >
      <StatusIcon status={status} />
      <span>{label}</span>
    </li>
  );
}

function SightseeingBox({ group }: { group: PackageSightSeeingGroup }) {
  const title = /sightseeing/i.test(group.title)
    ? group.title
    : `${group.title} Sightseeing`;

  const items: { label: string; status: SightStatus }[] = [
    ...group.included.map((label) => ({ label, status: "included" as const })),
    ...group.additionalFees.map((label) => ({
      label,
      status: "additional" as const,
    })),
    ...group.notIncluded.map((label) => ({
      label,
      status: "excluded" as const,
    })),
  ];

  if (!items.length) return null;

  return (
    <div className="min-w-0 rounded-2xl bg-gold-100 p-5 tablet:p-6 desktop:p-8">
      <h3 className="mb-5 text-lg font-semibold text-hero">{title}</h3>
      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <SightItem key={`${item.status}-${item.label}`} {...item} />
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
        <h2 className="mb-4 text-[22px] leading-[1.2] font-semibold text-hero tablet:text-[24px]">
          Sightseeings
        </h2>

        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 tablet:mb-8">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <StatusIcon status="included" />
            <span>Included</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <StatusIcon status="additional" />
            <span>Available at additional fees</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#B7B7B7]">
            <StatusIcon status="excluded" />
            <span>Not included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6 desktop:gap-8">
          {groups.map((group) => (
            <SightseeingBox key={group.id} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
