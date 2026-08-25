import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="bg-teal-100 py-16 tablet:py-20 desktop:py-[96px]">
      <Container className="desktop-xl:!px-0">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h2 className="text-[32px] leading-tight font-bold text-hero tablet:text-[42px] desktop:text-[48px]">
            Let&apos;s Plan Your Next Journey
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 tablet:text-[17px] desktop:mt-5 desktop:text-[18px]">
            Whether it&apos;s Hajj, Umrah, or your next trip abroad — our team is ready
            to help you plan it, start to finish.
          </p>
          <div className="pt-8">
            <Button
              href="/contact"
              className="h-[49px] gap-8 rounded-full !bg-black text-base !text-white hover:!bg-[#0A0C0C] [&>span]:size-[25px] [&>span]:!bg-white [&>span]:!text-black"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
