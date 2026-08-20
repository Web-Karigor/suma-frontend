import { Container } from "@/components/ui/Container";
import { hajjPackages } from "@/lib/hajj-data";
import { HajjPackageCard } from "./HajjPackageCard";

export function HajjPackages() {
  return (
    <section className="relative z-10 -mt-10 overflow-x-hidden bg-[#FEFBF5] pb-16 tablet:-mt-12 tablet:pb-24">
      <Container>
        <div className="mx-auto grid w-full gap-7 tablet:grid-cols-2 tablet:gap-6 desktop:gap-6">
          {hajjPackages.map((packageData) => (
            <HajjPackageCard key={packageData.title} package={packageData} />
          ))}
        </div>
      </Container>
    </section>
  );
}
