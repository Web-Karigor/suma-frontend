import { NewsCard } from "@/components/news/NewsCard";
import type { NewsArticle } from "@/helpers/news";

function chunkArticles(articles: NewsArticle[], size = 5) {
  const chunks: NewsArticle[][] = [];
  for (let i = 0; i < articles.length; i += size) {
    chunks.push(articles.slice(i, i + size));
  }
  return chunks;
}

export function NewsBentoGrid({ articles }: { articles: NewsArticle[] }) {
  if (!articles.length) return null;

  const groups = chunkArticles(articles);

  return (
    <div className="space-y-4 tablet:space-y-5">
      {groups.map((group, groupIndex) => {
        const [a, b, c, d, e] = group;

        return (
          <div key={`news-group-${groupIndex}`} className="space-y-4 tablet:space-y-5">
            {/* Row 1: large left + 2 stacked right */}
            <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-5">
              {a ? (
                <NewsCard
                  article={a}
                  className="min-h-[260px] rounded-lg tablet:col-span-2 tablet:min-h-[460px]"
                  titleClassName="tablet:text-2xl desktop:text-[28px] desktop:leading-snug"
                  priority={groupIndex === 0}
                />
              ) : null}

              {(b || c) && (
                <div className="grid grid-cols-1 gap-4 tablet:gap-5">
                  {b ? (
                    <NewsCard
                      article={b}
                      className="min-h-[220px] rounded-lg tablet:min-h-[220px]"
                    />
                  ) : null}
                  {c ? (
                    <NewsCard
                      article={c}
                      className="min-h-[220px] rounded-lg tablet:min-h-[220px]"
                    />
                  ) : null}
                </div>
              )}
            </div>

            {/* Row 2: small left + large right */}
            {(d || e) && (
              <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-5">
                {d ? (
                  <NewsCard
                    article={d}
                    className="min-h-[220px] rounded-lg tablet:min-h-[240px]"
                  />
                ) : null}
                {e ? (
                  <NewsCard
                    article={e}
                    className="min-h-[220px] rounded-lg tablet:col-span-2 tablet:min-h-[240px]"
                    titleClassName="tablet:text-xl desktop:text-2xl"
                  />
                ) : null}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
