import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden py-20 md:min-h-[700px] md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-overlay-black-32" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h1 className="mb-10 text-center text-4xl font-bold text-white md:mb-16 md:text-5xl lg:mb-20 lg:text-6xl">
            About Us
          </h1>

          {/* Image Layout */}
          <div className="grid w-full max-w-[1100px] grid-cols-2 items-center gap-4 md:grid-cols-[1.1fr_1.1fr_1.1fr_1.1fr] md:gap-5 lg:gap-6">
            {/* Image 1 - Vertical */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:translate-y-8 md:aspect-[1/1.1]">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
                alt="Solo traveler"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 - Horizontal */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl md:-translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
                alt="Beach relaxation"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 - Main Large Vertical */}
            <div className="relative col-span-2 mx-auto aspect-[3/4] w-[75%] overflow-hidden rounded-2xl shadow-xl md:col-span-1 md:w-full md:translate-y-10 md:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80"
                alt="Travel planning"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 4 - Horizontal */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl md:-translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80"
                alt="Lake destination"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
