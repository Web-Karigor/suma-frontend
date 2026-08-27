import { Container } from "@/components/ui/Container";

export function AdPlacement() {
  return (
    <Container className="mb-8">
      <div className="flex h-[120px] w-full max-w-[1740px] items-center justify-center rounded-[20px] bg-gray-100 px-4 tablet:h-[272px] tablet:rounded-[48px] tablet:px-6 mx-auto">
        <div className="flex h-[70px] w-full max-w-[1446px] items-center justify-center rounded-xl bg-teal-200 tablet:h-[148px] tablet:rounded-2xl">
          <p className="px-3 text-center text-[28px] font-semibold leading-[108%] tracking-[-0.5%] text-black tablet:px-0 tablet:text-[56px]">
            Ad Placement
          </p>
        </div>
      </div>
    </Container>
  );
}
