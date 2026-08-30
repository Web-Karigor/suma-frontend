import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/icons";

type OfferDetailsProps = {
  description: string;
  included: string[];
  terms: string[];
};

export function OfferDetails({ description, included, terms }: OfferDetailsProps) {
  return (
    <section className="py-12 md:py-16 bg-paper">
      <Container>
        <div className="space-y-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-hero mb-6">
              About This Offer
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-hero mb-6">
              What's Included
            </h2>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-50 flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-base text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-hero mb-6">
              Terms & Conditions
            </h2>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <ul className="space-y-3">
                {terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-base text-neutral-700 leading-relaxed flex-1">
                      {term}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
