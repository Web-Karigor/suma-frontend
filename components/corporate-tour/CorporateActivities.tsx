import { Container } from "@/components/ui/Container";
import {
  WifiIcon,
  PresentationIcon,
  RestaurantIcon,
  GymIcon,
  BedIcon,
  HeadsetIcon,
} from "@/components/icons";

type Activity = {
  icon:
    | "wifi"
    | "presentation"
    | "restaurant"
    | "gym"
    | "bed"
    | "headset";
  label: string;
};

type CorporateActivitiesProps = {
  activities: Activity[];
};

const ActivityIcon = ({
  type,
}: {
  type:
    | "wifi"
    | "presentation"
    | "restaurant"
    | "gym"
    | "bed"
    | "headset";
}) => {
  const className = "h-3.5 w-3.5";

  switch (type) {
    case "wifi":
      return <WifiIcon className={className} />;

    case "presentation":
      return <PresentationIcon className={className} />;

    case "restaurant":
      return <RestaurantIcon className={className} />;

    case "gym":
      return <GymIcon className={className} />;

    case "bed":
      return <BedIcon className={className} />;

    case "headset":
      return <HeadsetIcon className={className} />;
  }
};

export function CorporateActivities({
  activities,
}: CorporateActivitiesProps) {
  return (
    <section className="bg-[#082d2b] py-10 text-white md:py-12">
      <Container>
        <div className="mx-auto w-full max-w-[1740px]">
          {/* ================= TITLE ================= */}
          <h2 className="text-[22px] font-bold tracking-tight text-white md:text-[24px]">
            Facility Access
          </h2>

          {/* ================= LEGEND ================= */}
          <div className="mt-3 flex items-center gap-3 text-[10px] text-white/65">
            {/* Included */}
            <div className="flex items-center gap-1">
              <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#f3c33d]">
                <span className="text-[7px] font-bold text-[#173033]">
                  ✓
                </span>
              </div>

              <span>Included</span>
            </div>

            {/* Add-on */}
            <div className="flex items-center gap-1">
              <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#e24b4b]">
                <span className="text-[8px] font-bold text-white">
                  +
                </span>
              </div>

              <span>Add-on</span>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="mt-4 h-px w-full bg-white/20" />

          {/* ================= FACILITY CARDS ================= */}
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => {
              // Screenshot অনুযায়ী প্রথম 3টা Included
              // পরেরগুলো Add-on
              const isIncluded = index < 3;

              // Right side value
              const accessValue =
                index === 0
                  ? "Unlimited"
                  : index === 1
                    ? "Full Stay"
                    : index === 2
                      ? "4 Hours"
                      : "Pay per use";

              return (
                <div
                  key={index}
                  className="flex h-[47px] w-full max-w-[225px] items-center justify-between rounded-[9px] border border-[#244b4b] bg-[#082425] px-3.5"
                >
                  {/* Left */}
                  <div className="flex items-center gap-2">
                    {/* Status Icon */}
                    <div
                      className={`flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full ${
                        isIncluded
                          ? "bg-[#f3c33d] text-[#173033]"
                          : "bg-[#e24b4b] text-white"
                      }`}
                    >
                      {isIncluded ? (
                        <span className="text-[8px] font-bold">✓</span>
                      ) : (
                        <span className="text-[9px] font-bold">+</span>
                      )}
                    </div>

                    {/* Facility Icon */}
                    <div
                      className={
                        isIncluded
                          ? "text-white/75"
                          : "text-white/55"
                      }
                    >
                      <ActivityIcon type={activity.icon} />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-[11px] font-medium ${
                        isIncluded
                          ? "text-white/80"
                          : "text-white/70"
                      }`}
                    >
                      {activity.label}
                    </span>
                  </div>

                  {/* Right Value */}
                  <span className="ml-2 whitespace-nowrap text-[10px] text-white/45">
                    {accessValue}
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