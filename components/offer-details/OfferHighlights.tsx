import { Container } from "@/components/ui/Container";
import {
  PlaneIcon,
  BedIcon,
  CardIcon,
  CalendarIcon,
} from "@/components/icons";

type Highlight = {
  icon: "plane" | "bed" | "card" | "calendar";
  label: string;
  value: string;
};

type OfferHighlightsProps = {
  highlights: Highlight[];
};

const HighlightIcon = ({ type }: { type: "plane" | "bed" | "card" | "calendar" }) => {
  const className = "w-6 h-6 text-primary";

  switch (type) {
    case "plane":
      return <PlaneIcon className={className} />;
    case "bed":
      return <BedIcon className={className} />;
    case "card":
      return <CardIcon className={className} />;
    case "calendar":
      return <CalendarIcon className={className} />;
  }
};

export function OfferHighlights({ highlights }: OfferHighlightsProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-hero mb-8 text-center">
            Offer Highlights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-paper rounded-xl p-6 border border-neutral-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-4">
                  <HighlightIcon type={highlight.icon} />
                </div>
                <p className="text-sm text-neutral-600 mb-1">{highlight.label}</p>
                <p className="text-lg font-semibold text-hero">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
