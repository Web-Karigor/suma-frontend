import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import type { NewsArticle } from "@/helpers/news";

export function NewsRelated({ articles }: { articles: NewsArticle[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-14 border-t border-[#ececec] pt-10 tablet:mt-16 tablet:pt-12">
      <h2 className="text-[22px] font-semibold tracking-tight text-[#1b2430] tablet:text-[28px]">
        You Might Like
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 desktop:grid-cols-3 desktop:gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group relative block aspect-[16/10] overflow-hidden rounded-lg bg-[#0a0c0c]"
          >
            <CoverImage
              src={article.image}
              alt={article.title}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-[1] p-4 tablet:p-5">
              {article.category ? (
                <p className="text-[12px] font-medium text-white/90">
                  {article.category}
                </p>
              ) : null}
              <h3 className="mt-1 line-clamp-3 text-[15px] leading-snug font-semibold text-white tablet:text-base">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
