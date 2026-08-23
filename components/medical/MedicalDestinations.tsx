import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Destination = {
  name: string;
  image: string;
  specialties: string[];
};

type MedicalDestinationsProps = {
  destinations: Destination[];
};

export function MedicalDestinations({
  destinations,
}: MedicalDestinationsProps) {
  return (
    <section className="overflow-hidden bg-[#f2f5f5] py-10 md:py-12 lg:py-14">
      <Container>
        {/* All cards stay inside Container */}
        <div className="mx-auto w-full">
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-3 xl:gap-4">
            {destinations.slice(0, 5).map((destination, index) => {
              const cardPosition =
                index === 1 || index === 3
                  ? "lg:translate-y-[24px]"
                  : "lg:translate-y-0";

              return (
                <div
                  key={index}
                  className={`group relative w-full overflow-hidden rounded-[14px] ${cardPosition}`}
                >
                  {/* Fixed ratio similar to screenshot */}
                  <div className="relative aspect-[332/419] w-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Bottom teal gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#087579]/95 via-[#087579]/25 to-transparent" />

                    {/* Destination Name */}
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-4 text-center">
                      <h3 className="text-[10px] font-medium text-white md:text-[11px]">
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}