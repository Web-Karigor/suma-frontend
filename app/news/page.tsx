import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsBentoGrid } from "@/components/news/NewsBentoGrid";
import { NewsHeroSlider } from "@/components/news/NewsHeroSlider";
import { fetchNews } from "@/helpers/news";

export const metadata: Metadata = { title: "News & Travel Stories" };

type Props = { searchParams: Promise<{ page?: string }> };

const HERO_COUNT = 5;

export default async function NewsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = Math.max(1, Number(page) || 1);
  const news = await fetchNews(pageNumber);
  const showHero = pageNumber === 1 && news.articles.length > 0;
  const heroArticles = !showHero
    ? []
    : news.articles.length > HERO_COUNT
      ? news.articles.slice(0, HERO_COUNT)
      : news.articles.slice(0, 1);
  const gridArticles = showHero
    ? news.articles.slice(heroArticles.length)
    : news.articles;

  return (
    <main className="min-h-screen bg-white pb-16 text-[#222]">
      <Container className="pt-6 tablet:pt-8">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-6 tablet:mb-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Stories, tips & inspiration
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-[#1a1a1a] tablet:text-[32px]">
              Latest News
            </h1>
          </div>

          {news.articles.length === 0 ? (
            <p className="py-20 text-center text-sm text-[#777]">
              No news available.
            </p>
          ) : (
            <div className="space-y-5 tablet:space-y-6">
              {showHero ? <NewsHeroSlider articles={heroArticles} /> : null}
              <NewsBentoGrid articles={gridArticles} />
            </div>
          )}
        </div>

        {news.lastPage > 1 ? (
          <nav
            aria-label="News pages"
            className="mx-auto mt-10 flex max-w-[1180px] items-center justify-center gap-3"
          >
            {news.currentPage > 1 ? (
              <Link
                href={`/news?page=${news.currentPage - 1}`}
                className="inline-flex items-center gap-1 rounded-lg border border-[#ddd] px-4 py-2.5 text-sm font-medium text-[#333] transition hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-4" />
                Previous
              </Link>
            ) : null}

            <span className="text-sm text-[#777]">
              {news.currentPage} / {news.lastPage}
            </span>

            {news.currentPage < news.lastPage ? (
              <Link
                href={`/news?page=${news.currentPage + 1}`}
                className="inline-flex items-center gap-1 rounded-lg border border-[#ddd] px-4 py-2.5 text-sm font-medium text-[#333] transition hover:border-primary hover:text-primary"
              >
                Next
                <ChevronRight className="size-4" />
              </Link>
            ) : null}
          </nav>
        ) : null}
      </Container>
    </main>
  );
}
