import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fetchNewsArticle } from "@/helpers/news";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchNewsArticle(slug);
  return article ? { title: article.title, description: article.excerpt || undefined } : { title: "News" };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchNewsArticle(slug);
  if (!article) notFound();
  return <main className="min-h-screen bg-white pb-16 text-[#292929]"><Container className="pt-6">
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#888]"><Link href="/" className="hover:text-[#007b7a]">Home</Link><ChevronRight className="size-3" /><Link href="/news" className="hover:text-[#007b7a]">News</Link><ChevronRight className="size-3" /><span className="text-[#555]">{article.category}</span></nav>
    <header className="mt-7 max-w-4xl"><p className="text-sm font-semibold text-[#00817c]">{article.category}</p><h1 className="mt-2 text-3xl leading-tight font-semibold tablet:text-4xl">{article.title}</h1><div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#888]">{article.date && <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" />{article.date}</span>}{article.readTime && <span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" />{article.readTime}</span>}</div></header>
    <article className="mt-7 max-w-4xl">{article.image && <img src={article.image} alt="" className="mb-7 max-h-[460px] w-full rounded-lg object-cover" />}{article.excerpt && <p className="border-l-4 border-[#007b7a] pl-5 text-lg leading-8 font-medium text-[#344946] tablet:text-xl">{article.excerpt}</p>}{article.content && <div className="news-content mt-8 text-base leading-8 text-[#52615e]" dangerouslySetInnerHTML={{ __html: article.content }} />}</article>
  </Container></main>;
}
