import { Container } from "@/components/ui/Container";

type HajjIntroProps = {
  title: string;
  subtitle: string;
};

export function HajjIntro({ title, subtitle }: HajjIntroProps) {
  const [firstLine, secondLine] = title.includes(",")
    ? title.split(/,\s*/)
    : [title, ""];

  return (
    <section className="hajj-intro relative -mt-[7.8rem] bg-gold-100 pt-[9.5rem] text-center py-10 tablet:pt-[calc(5.5rem+4rem)] desktop:h-[calc(435px+5.5rem)] desktop:pt-[calc(5.5rem+3.5rem)]">
      <Container>
        <h1 className="mx-auto max-w-3xl text-[2.15rem] leading-[1.08] mt-7 font-semibold tracking-[-0.04em] text-neutral-950 lg:text-5xl 2xl:text-[56px]">
          {secondLine ? (
            <>
              {firstLine},
              <br />
              {secondLine}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 mb-10 lg:mb-0 max-w-2xl text-[12px] leading-[1.7] text-neutral-700 lg:text-sm 2xl:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
