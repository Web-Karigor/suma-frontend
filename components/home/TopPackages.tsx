import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { topPackages } from "@/lib/home-data";
import { cn } from "@/lib/cn";

const areaClass: Record<string, string> = {
  tourist: "tablet:col-start-1 tablet:col-end-3 tablet:row-start-1",
  student: "tablet:col-start-1 tablet:row-start-2",
  corporate: "tablet:col-start-2 tablet:row-start-2",
  hajj: "tablet:col-start-3 tablet:row-span-2 tablet:min-h-full",
  hotels: "tablet:col-start-4 tablet:row-start-1",
  custom: "tablet:col-start-4 tablet:row-start-2",
};

export function TopPackages() {
  return (
    <section className="bg-white py-4 pb-16 tablet:py-8 tablet:pb-20">
      <Container>
        <SectionHeading title="Our Top Packages" className="mb-10" />

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-4 tablet:grid-rows-2 tablet:h-[460px]">
          {topPackages.map((item) => (
            <Link
              key={item.id}
              href="/packages"
              className={cn(
                "group relative min-h-[200px] overflow-hidden rounded-2xl",
                areaClass[item.area],
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1280px) 420px, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 tablet:p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/80">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
