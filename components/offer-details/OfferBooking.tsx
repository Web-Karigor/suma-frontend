import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type OfferBookingProps = {
  originalPrice: number;
  discountedPrice: number;
  discount: string;
};

export function OfferBooking({
  originalPrice,
  discountedPrice,
  discount,
}: OfferBookingProps) {
  return (
    <section className="py-12 md:py-16 bg-hero text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Ready to Book This Amazing Offer?
            </h2>
            <p className="text-base md:text-lg text-teal-100 max-w-2xl mx-auto">
              Don't miss out on this exclusive deal. Limited seats available!
            </p>

            {/* Pricing */}
            <div className="inline-flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <div className="flex items-center gap-4">
                <span className="text-2xl text-teal-200 line-through">
                  ৳ {originalPrice.toLocaleString()}
                </span>
                <span className="text-4xl md:text-5xl font-bold">
                  ৳ {discountedPrice.toLocaleString()}
                </span>
              </div>
              <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Save {discount}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button href="/contact" className="text-lg px-8">
                Book Now
              </Button>
              <Link
                href="/contact"
                className="inline-flex h-[49px] items-center px-8 rounded-button border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-teal-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
