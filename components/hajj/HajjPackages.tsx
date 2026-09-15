import { Container } from "@/components/ui/Container";
import { HajjPackageCard } from "./HajjPackageCard";
import type { ServiceHajjPackage } from "@/types/service-detail";

export function HajjPackages({ packages }: { packages: ServiceHajjPackage[] }) {
  if (!packages.length) return null;

  return (
    <section
      className="
    relative
    z-20
    -mt-[40px]
    overflow-visible
    bg-transparent
    pb-16
    tablet:-mt-[30px]
    tablet:pb-24
    desktop:-mt-[30px]
  "
    >
      <Container>
        <div
          className="
            mx-auto
            grid
            w-full
            gap-7
            tablet:grid-cols-2
            tablet:gap-6
            desktop:gap-6
          "
        >
          {packages.map((packageData) => (
            <HajjPackageCard key={packageData.title} package={packageData} />
          ))}
        </div>
      </Container>
    </section>
  );
}
