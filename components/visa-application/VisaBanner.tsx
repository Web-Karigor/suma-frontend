import Image from "next/image";
import { CardIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export function VisaBanner() {
  return (
    <section className="bg-[#E8F7F8] py-3 tablet:py-5">
      <Container>
        <div className="relative flex min-h-[94px] items-center justify-between gap-5 overflow-hidden px-6 py-4 tablet:px-10">
          <Image src="/images/build-my-trip-sky.png" alt="" fill className="object-cover" sizes="(min-width: 1280px) 1740px, 100vw" />
          <div className="relative z-10 flex items-center gap-4 text-neutral-950">
            <span className="inline-flex size-9 items-center justify-center rounded-md bg-black text-white"><CardIcon className="size-5" /></span>
            <div>
              <p className="text-sm leading-none">Need assistant in</p>
              <h2 className="mt-1 text-2xl leading-none font-semibold tablet:text-4xl">VISA APPLICATION?</h2>
            </div>
          </div>
          <a href="/contact" className="relative z-10 inline-flex h-10 shrink-0 items-center rounded-md bg-black px-5 text-[10px] text-white transition-colors hover:bg-neutral-800">Contact Us Now</a>
        </div>
      </Container>
    </section>
  );
}
