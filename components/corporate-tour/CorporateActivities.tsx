import { Container } from "@/components/ui/Container";

type Activity = {
  icon?: "wifi" | "presentation" | "restaurant" | "gym" | "bed" | "headset";
  label: string;
  value?: string;
  included?: boolean;
};

type CorporateActivitiesProps = {
  activities: Activity[];
};

const DEFAULT_VALUES = ["Unlimited", "Full Stay", "4 Hours", "Pay per use", "Pay per use"];

export function CorporateActivities({ activities }: CorporateActivitiesProps) {
  return (
    <section className="bg-teal-950 pt-12 tablet:pt-16 desktop-xl:pt-[120px]">
      <Container className="desktop-xl:!px-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.28] text-white tablet:text-[28px]">Facility Access</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="relative size-[13px] shrink-0 overflow-clip">
                  <img
                    src="/images/corporate-tour/icons/facility-legend-included.svg"
                    alt=""
                    width={13}
                    height={13}
                    className="size-full"
                  />
                </span>
                <span className="text-[14px] leading-[1.5] font-medium text-white">Included</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="relative size-[13px] shrink-0 overflow-clip">
                  <img
                    src="/images/corporate-tour/icons/facility-legend-addon.svg"
                    alt=""
                    width={13}
                    height={13}
                    className="size-full"
                  />
                </span>
                <span className="text-[14px] leading-[1.5] font-medium text-white">Add-on</span>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-overlay-white-16" />

          <div className="flex flex-wrap gap-6 desktop-xl:gap-x-9 desktop-xl:gap-y-10">
            {activities.map((activity, index) => {
              const included = activity.included ?? index < 3;
              const value = activity.value ?? DEFAULT_VALUES[index] ?? "Pay per use";
              return (
                <div
                  key={activity.label}
                  className="flex h-[74px] w-full items-center justify-between rounded-lg border-[0.5px] border-gray-800 bg-overlay-black-32 px-5 py-6 tablet:w-[calc(50%-12px)] desktop:w-[360px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative size-5 shrink-0 overflow-clip">
                      <img
                        src={
                          included
                            ? "/images/corporate-tour/icons/facility-included.svg"
                            : "/images/corporate-tour/icons/facility-addon.svg"
                        }
                        alt=""
                        width={20}
                        height={20}
                        className="size-full"
                      />
                    </span>
                    <span className="text-base leading-[1.59] font-medium text-white">{activity.label}</span>
                  </div>
                  <span className="text-[15px] leading-[1.39] font-medium tracking-[0.15px] text-gray-600">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
