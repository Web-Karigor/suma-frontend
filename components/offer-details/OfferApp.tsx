import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function OfferApp() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-white">
      <Container>
        <div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-hero mb-4">
                  Book All Your Travel on Our App
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Download our mobile app for exclusive deals, easy booking, and 24/7 customer support. Get instant notifications about flash sales and special offers!
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-neutral-700">
                    Exclusive mobile-only deals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-neutral-700">
                    Easy and secure payment options
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-neutral-700">
                    Real-time booking confirmation
                  </span>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-base font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-base font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/app-preview.png"
                  alt="Mobile app preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
