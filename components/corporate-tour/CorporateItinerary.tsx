import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type ItineraryItem = {
  title: string;
  description: string;
  image: string;
  duration?: string;
};

type CorporateItineraryProps = {
  itinerary: ItineraryItem[];
};

function ItineraryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full shrink-0 rounded-full bg-[rgba(235,183,50,0.32)] p-3 tablet:p-4 desktop:w-[48%] desktop-xl:w-[820px]">
      <div className="relative aspect-[1.75/1] w-full overflow-hidden rounded-full tablet:aspect-[1.9/1] desktop-xl:h-[463px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 820px"
        />
      </div>
    </div>
  );
}

function ItineraryCopy({ item }: { item: ItineraryItem }) {
  return (
    <div className="flex w-full flex-col gap-8 desktop:w-[48%] desktop-xl:w-[700px] desktop-xl:gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-[22px] font-semibold leading-[1.5]">
            {item.title}
          </h3>

          <p className="text-base leading-[1.6] font-normal">
            {item.description}
          </p>
        </div>

        {item.duration && (
          <div className="flex items-center gap-1.5">
            <span className="relative size-5 shrink-0 overflow-clip">
              <img
                src="/images/corporate-tour/icons/tick.svg"
                alt=""
                width={20}
                height={20}
                className="size-full"
              />
            </span>

            <p className="text-base leading-[1.6] font-normal text-gray-50">
              Average activity duration: {item.duration}
            </p>
          </div>
        )}
      </div>

      <Link
        href="#booking"
        className="inline-flex h-[49px] w-fit items-center gap-8 rounded-button bg-gold-500 py-3 pr-3 pl-4 text-base font-medium text-white transition-opacity hover:opacity-90"
      >
        View on Map
        <span className="relative size-6 shrink-0 overflow-clip">
          <img
            src="/images/corporate-tour/icons/location.svg"
            alt=""
            width={18}
            height={18}
            className="absolute top-[3.5px] left-[3px] size-[18px]"
          />
        </span>
      </Link>
    </div>
  );
}

export function CorporateItinerary({ itinerary }: CorporateItineraryProps) {
  return (
    <section className="bg-teal-950 pt-12 tablet:pt-16 desktop-xl:pt-[160px]">
      <Container className="desktop-xl:!px-0">
        <div className="rounded-[32px] bg-teal-900 px-4 py-8 tablet:rounded-[40px] tablet:px-[30px] tablet:pt-[41px] tablet:pb-10">
          <div className="flex flex-col items-center gap-10 tablet:gap-16 desktop-xl:gap-20">
            <h2 className="w-full text-center text-[28px] font-semibold leading-[1.18] text-white tablet:text-[40px]">
              Your itinerary
            </h2>

            <div className="flex w-full flex-col gap-10 desktop-xl:gap-[60px]">
              {itinerary.map((item, index) => {
                const imageFirst = index % 2 === 0;

                return (
                  <div
                    key={item.title}
                    className={`
                      flex flex-col items-center gap-8
                      desktop:flex-row
                      desktop:gap-10
                      desktop-xl:min-h-[511px]
                      ${imageFirst ? "" : "desktop:flex-row-reverse"}
                    `}
                  >
                    <ItineraryImage src={item.image} alt={item.title} />

                    <ItineraryCopy item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
