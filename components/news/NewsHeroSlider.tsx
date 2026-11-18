"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoverImage } from "@/components/ui/CoverImage";
import type { NewsArticle } from "@/helpers/news";

import "swiper/css";
import "swiper/css/pagination";

export function NewsHeroSlider({ articles }: { articles: NewsArticle[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [active, setActive] = useState(0);

  if (!articles.length) return null;

  if (articles.length === 1) {
    const article = articles[0]!;
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group relative block h-[320px] overflow-hidden rounded-xl tablet:h-[420px] desktop:h-[520px]"
      >
        <CoverImage
          src={article.image}
          alt={article.title}
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 z-[1] max-w-3xl p-5 tablet:p-8 desktop:p-10">
          {article.category ? (
            <p className="text-xs font-semibold text-white/90 tablet:text-sm">
              {article.category}
            </p>
          ) : null}
          <h1 className="mt-2 text-2xl leading-tight font-semibold text-white tablet:text-4xl desktop:text-[42px]">
            {article.title}
          </h1>
        </div>
      </Link>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={articles.length > 1}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="news-hero-swiper"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.slug}>
            <Link
              href={`/news/${article.slug}`}
              className="group relative block h-[320px] overflow-hidden tablet:h-[420px] desktop:h-[520px]"
            >
              <CoverImage
                src={article.image}
                alt={article.title}
                priority={index === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 z-[1] max-w-3xl p-5 tablet:p-8 desktop:p-10">
                {article.category ? (
                  <p className="text-xs font-semibold text-white/90 tablet:text-sm">
                    {article.category}
                  </p>
                ) : null}
                <h2 className="mt-2 text-2xl leading-tight font-semibold text-white tablet:text-4xl desktop:text-[42px]">
                  {article.title}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 right-3 z-10 flex -translate-y-1/2 flex-col gap-2 tablet:right-5">
        {articles.map((article, index) => (
          <button
            key={article.slug}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2 w-2 rounded-full transition ${
              active === index ? "bg-white" : "bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
