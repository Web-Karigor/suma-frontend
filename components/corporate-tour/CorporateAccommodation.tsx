import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Amenity = {
  icon?: "wifi" | "restaurant" | "gym" | "star";
  label: string;
};

type Highlight = {
  title: string;
  description: string;
};

type CorporateAccommodationProps = {
  hotelName: string;
  hotelImage: string;
  rating?: number;
  location?: string;
  description: string;
  amenities: Amenity[];
  highlights: Array<string | Highlight>;
};

function toHighlight(item: string | Highlight, index: number): Highlight {
  if (typeof item !== "string") return item;
  const [title, ...rest] = item.split(":");
  if (rest.length) {
    return { title: title.trim(), description: rest.join(":").trim() };
  }
  return {
    title: index === 0 ? "24/7 Business Center" : "Prime Business District Location",
    description: item,
  };
}

export function CorporateAccommodation({
  hotelName,
  hotelImage,
  description,
  amenities,
  highlights,
}: CorporateAccommodationProps) {
  const highlightItems = highlights.slice(0, 2).map(toHighlight);
  const avatars = [
    "/images/corporate-tour/avatar-1.png",
    "/images/corporate-tour/avatar-2.png",
    "/images/corporate-tour/avatar-3.png",
    "/images/corporate-tour/avatar-4.png",
  ];

  return (
    <section className="bg-teal-950 pt-12 tablet:pt-16 desktop-xl:pt-[160px]">
      <Container className="desktop-xl:!px-0">
        <div className="flex flex-col gap-8 tablet:gap-10 desktop-xl:gap-[60px]">
          <h2 className="text-center text-[28px] font-semibold leading-[1.18] text-white tablet:text-[40px]">
            Accommodation
          </h2>

          <div className="grid w-full grid-cols-1 gap-8 desktop:grid-cols-3 desktop:gap-6">
            <div className="flex min-w-0 flex-col justify-between gap-8 py-0 desktop:h-auto desktop-xl:h-[700px] desktop-xl:py-6">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-center gap-2.5 rounded-md border-[0.5px] border-gray-100 px-3 py-2">
                  <span className="relative size-4 shrink-0 overflow-clip">
                    <img
                      src="/images/corporate-tour/icons/star-badge.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-full"
                    />
                  </span>
                  <span className="text-[15px] leading-[1.39] font-medium tracking-[0.15px] text-gray-100">
                    5-Star | Business Class
                  </span>
                </div>

                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">
                      {hotelName}
                    </h3>
                    <p className="text-base leading-[1.6] font-normal text-gray-200">{description}</p>
                  </div>

                  <Link
                    href="#booking"
                    className="inline-flex h-[49px] w-fit items-center gap-3 rounded-full bg-gold-500 py-3 pr-3 pl-4 text-base font-medium text-black transition-opacity hover:opacity-90"
                  >
                    Book Package Now
                    <span className="relative flex size-6 shrink-0 items-center justify-center overflow-clip rounded-full bg-black">
                      <img
                        src="/images/corporate-tour/icons/arrow-up.svg"
                        alt=""
                        width={17}
                        height={17}
                        className="size-[17px] rotate-[42deg]"
                      />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                {amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center justify-center gap-2 rounded-full bg-overlay-white-16 py-3 pr-5 pl-4"
                  >
                    <span className="relative size-4 shrink-0 overflow-clip">
                      <img
                        src="/images/corporate-tour/icons/star-pill.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="size-full"
                      />
                    </span>
                    <span className="text-base leading-[1.6] font-normal text-white">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px] min-w-0 w-full overflow-hidden rounded-2xl tablet:h-[560px] desktop-xl:h-[700px]">
              <Image src={hotelImage} alt={hotelName} fill className="object-cover" sizes="564px" />
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-10 py-0 desktop-xl:h-[700px] desktop-xl:py-6">
              <div className="flex flex-col gap-4">
                {highlightItems.map((item, index) => (
                  <div key={item.title} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[22px] font-semibold leading-[1.5] text-white">{item.title}</h4>
                      <p className="text-[15px] leading-[1.4] tracking-[0.15px] text-gray-400">{item.description}</p>
                    </div>
                    {index < highlightItems.length && (
                      <div className="h-px w-full bg-overlay-white-16" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex w-full flex-col gap-5 desktop-xl:w-[280px]">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="flex items-center">
                    {avatars.map((src) => (
                      <span key={src} className="relative mr-[-14px] size-7 shrink-0 overflow-hidden rounded-full">
                        <Image src={src} alt="" fill className="object-cover" sizes="28px" />
                      </span>
                    ))}
                    <span className="flex size-[27px] items-center justify-center rounded-full border-[0.5px] border-white bg-black px-[5px] py-1 text-[12px] leading-[1.5] tracking-[0.12px] text-white">
                      9+
                    </span>
                  </div>
                  <p className="text-[20px] leading-[1.5] font-medium text-white">Customer Ratings:</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="relative size-[18px] shrink-0 overflow-clip">
                        <img
                          src="/images/corporate-tour/icons/star-rating.svg"
                          alt=""
                          width={18}
                          height={18}
                          className="size-full"
                        />
                      </span>
                    ))}
                  </div>
                  <span className="h-[17px] w-px bg-overlay-white-16" />
                  <p className="text-[14px] leading-[1.5] font-normal text-white">(45+ Reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
