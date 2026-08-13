import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PinIcon, StarIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotels } from "@/lib/home-data";

export function BestHotels() {
  return (
    <section className="bg-white py-16 tablet:py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionHeading
            title="Best Hotels for Your Next Trip"
            subtitle="Stay closer to the moments that matter — from beachfront resorts to city landmarks."
            align="left"
          />
          <Link
            href="/hotels"
            className="hidden shrink-0 text-sm font-semibold text-primary hover:text-primary-700 tablet:inline-flex"
          >
            See All
          </Link>
        </div>

        <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgb(10_12_12/8%)]"
            >
              <div className="relative h-[220px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 400px, 100vw"
                />
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 text-gold-500" aria-label={`${hotel.rating} star rating`}>
                  {Array.from({ length: hotel.rating }).map((_, index) => (
                    <StarIcon key={index} className="size-4" />
                  ))}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{hotel.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                  <PinIcon className="size-4" />
                  {hotel.location}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                  {hotel.description}
                </p>
                <Link
                  href={hotel.href}
                  className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary-700"
                >
                  Explore
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
