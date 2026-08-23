import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type ItineraryItem = {
  title: string;
  description: string;
  image: string;
};

type CorporateItineraryProps = {
  itinerary: ItineraryItem[];
};

export function CorporateItinerary({ itinerary }: CorporateItineraryProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-teal-900 to-hero text-white">
      <Container>
        <div className="max-w-[1740px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Your Itinerary
          </h2>

          <div className="space-y-12 md:space-y-16">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-base text-teal-100 leading-relaxed">
                    {item.description}
                  </p>
                  <Button href="#" className="mt-4">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
