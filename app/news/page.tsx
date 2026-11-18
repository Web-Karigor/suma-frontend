import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fetchNews } from "@/helpers/news";

export const metadata: Metadata = { title: "News & Travel Stories" };
type Props = { searchParams: Promise<{ page?: string }> };

export default async function NewsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = Math.max(1, Number(page) || 1);
  const news = await fetchNews(pageNumber);
  return <main className="min-h-screen bg-white pb-16 text-[#222]"><Container className="pt-8">
    <div className="mb-6 border-b border-[#ececec] pb-4"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#00817c]">Stories, tips & inspiration</p><h1 className="mt-1 text-2xl font-semibold tablet:text-[28px]">Latest News</h1><p className="mt-1 text-sm text-[#777]">{news.total} stories</p></div>
    {news.articles.length ? <div className="divide-y divide-[#ededed]">{news.articles.map((article) => <Link key={article.slug} href={`/news/${article.slug}`} className="group grid gap-4 py-5 sm:grid-cols-[220px_minmax(0,1fr)]">
      {article.image && <div className="h-[150px] overflow-hidden rounded-md bg-[#e6efeb] sm:h-[145px]"><img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>}
      <div className="flex flex-col justify-center"><span className="text-xs font-semibold text-[#00817c]">{article.category}</span><h2 className="mt-2 text-lg leading-snug font-semibold text-[#242424] group-hover:text-[#007b7a] tablet:text-xl">{article.title}</h2>{article.excerpt && <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6e6e6e]">{article.excerpt}</p>}<span className="mt-3 inline-flex items-center gap-2 text-xs text-[#888]">{article.date && <><CalendarDays className="size-3.5" />{article.date}</>}{article.readTime && <>{article.date && <span>·</span>}{article.readTime}</>}</span></div>
    </Link>)}</div> : <p className="py-16 text-center text-sm text-[#777]">No news available.</p>}
    {news.lastPage > 1 && <nav aria-label="News pages" className="mt-8 flex justify-center gap-3">{news.currentPage > 1 && <Link className="inline-flex items-center gap-1 rounded border px-4 py-2 text-sm" href={`/news?page=${news.currentPage - 1}`}><ChevronLeft className="size-4" />Previous</Link>}{news.currentPage < news.lastPage && <Link className="inline-flex items-center gap-1 rounded border px-4 py-2 text-sm" href={`/news?page=${news.currentPage + 1}`}>Next<ChevronRight className="size-4" /></Link>}</nav>}
  </Container></main>;
}
