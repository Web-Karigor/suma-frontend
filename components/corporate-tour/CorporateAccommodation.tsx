import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  StarIcon,
  WifiIcon,
  RestaurantIcon,
  GymIcon,
} from "@/components/icons";

type Amenity = {
  icon: "wifi" | "restaurant" | "gym";
  label: string;
};

type CorporateAccommodationProps = {
  hotelName: string;
  hotelImage: string;
  rating: number;
  location: string;
  description: string;
  amenities: Amenity[];
  highlights: string[];
};

const AmenityIcon = ({
  type,
}: {
  type: "wifi" | "restaurant" | "gym";
}) => {
  const className = "h-4 w-4 text-white/80";

  switch (type) {
    case "wifi":
      return <WifiIcon className={className} />;

    case "restaurant":
      return <RestaurantIcon className={className} />;

    case "gym":
      return <GymIcon className={className} />;
  }
};

export function CorporateAccommodation({
  hotelName,
  hotelImage,
  rating,
  location,
  description,
  amenities,
  highlights,
}: CorporateAccommodationProps) {
  return (
    <section className="bg-[#082d2b] py-14 text-white md:py-20">
      <Container>
        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1740px]">
          
          {/* Section Title */}
          <h2 className="mb-10 text-center text-[28px] font-bold leading-tight tracking-tight md:text-[32px]">
            Accommodation
          </h2>

          {/* ================= MAIN 3 COLUMN LAYOUT ================= */}
          <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[564px_564px_564px] xl:gap-6">

            {/* ================= LEFT SECTION ================= */}
            <div className="flex min-h-[500px] w-full flex-col justify-between">
              <div>
                {/* Hotel Class Badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/[0.03] px-3 py-1.5">
                  <StarIcon className="h-3 w-3 text-white/80" />

                  <span className="text-[11px] font-medium text-white/80">
                    5-Star | Business Class
                  </span>
                </div>

                {/* Hotel Name */}
                <h3 className="max-w-[420px] text-[20px] font-bold leading-[1.3] text-white md:text-[22px]">
                  {hotelName}
                </h3>

                {/* Location */}
                {location && (
                  <p className="mt-2 text-[12px] text-white/50">
                    {location}
                  </p>
                )}

                {/* Description */}
                <p className="mt-3 max-w-[500px] text-[12px] leading-[1.75] text-white/65 md:text-[13px]">
                  {description}
                </p>

                {/* Book Button */}
                <Button
                  href="#booking"
                  className="mt-6 inline-flex min-w-[138px] items-center justify-center rounded-full bg-[#f5c33b] px-5 text-[11px] font-semibold text-[#162b2d] hover:bg-[#ffd35b]"
                >
                  <span>Book Package Now</span>

                  <span className="ml-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#183134] text-[10px] text-white">
                    ↗
                  </span>
                </Button>
              </div>

              {/* Amenity Pills */}
              <div className="mt-10 flex max-w-[564px] flex-wrap gap-3">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 rounded-full bg-[#23494a] px-3 py-2 text-[11px] text-white/75"
                  >
                    <AmenityIcon type={amenity.icon} />

                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= CENTER IMAGE SECTION ================= */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-[18px]">
              <Image
                src={hotelImage}
                alt={hotelName}
                fill
                className="object-cover"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/[0.03]" />
            </div>

            {/* ================= RIGHT SECTION ================= */}
<div className="flex min-h-[440px] w-full flex-col justify-between overflow-hidden">
  {/* Highlights Container */}
  <div className="w-full max-w-[564px] overflow-hidden">
    {highlights.slice(0, 2).map((highlight, index) => {
      const parts = highlight.split(":");

      const title =
        parts.length > 1
          ? parts[0].trim()
          : index === 0
            ? "24/7 Business Center"
            : "Prime Business District Location";

      const content =
        parts.length > 1
          ? parts.slice(1).join(":").trim()
          : highlight;

      return (
        <div
          key={index}
          className={`w-full pb-5 ${
            index !== 1
              ? "mb-4 border-b border-white/15"
              : ""
          }`}
        >
          <h4 className="text-[16px] font-bold text-white md:text-[17px]">
            {title}
          </h4>

          <p className="mt-2 max-w-[500px] text-[11px] leading-[1.55] text-white/55 md:text-[12px]">
            {content}
          </p>
        </div>
      );
    })}
  </div>

  {/* ================= CUSTOMER RATINGS ================= */}
  <div className="mt-10 w-full max-w-[564px]">
    {/* Rating Header */}
    <div className="flex items-center gap-2">
      {/* Avatar Stack */}
      <div className="flex -space-x-2">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-6 w-6 overflow-hidden rounded-full border-2 border-[#082d2b] bg-white/30"
          >
            <Image
              src={hotelImage}
              alt="Customer"
              width={24}
              height={24}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#082d2b] bg-white/20 text-[8px] font-bold text-white">
          9+
        </div>
      </div>

      <span className="text-[14px] font-medium text-white/85">
        Customer Ratings:
      </span>
    </div>

    {/* Stars */}
    <div className="mt-2 flex items-center gap-1.5">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className="h-3.5 w-3.5 fill-white text-white"
          />
        ))}
      </div>

      <span className="ml-3 text-[10px] text-white/60">
        (45+ Reviews)
      </span>
    </div>
  </div>
</div>
          </div>
        </div>
      </Container>
    </section>
  );
}