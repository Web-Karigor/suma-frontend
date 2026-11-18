import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { cn } from "@/lib/cn";
import type { NewsArticle } from "@/helpers/news";

type NewsCardProps = {
  article: NewsArticle;
  className?: string;
  titleClassName?: string;
  priority?: boolean;
};

export function NewsCard({
  article,
  className,
  titleClassName,
  priority,
}: NewsCardProps) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className={cn(
        "group relative block min-h-[220px] overflow-hidden rounded-lg bg-[#0a0c0c]",
        className,
      )}
    >
      <CoverImage
        src={article.image}
        alt={article.title}
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] p-4 tablet:p-5 desktop:p-6">
        {article.category ? (
          <p className="text-[11px] font-semibold tracking-[0.04em] text-white/90 tablet:text-xs">
            {article.category}
          </p>
        ) : null}
        <h2
          className={cn(
            "mt-1.5 line-clamp-3 text-base leading-snug font-semibold text-white tablet:text-lg desktop:text-xl",
            titleClassName,
          )}
        >
          {article.title}
        </h2>
      </div>
    </Link>
  );
}
