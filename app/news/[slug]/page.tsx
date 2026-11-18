import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { NewsRelated } from "@/components/news/NewsRelated";
import { fetchNews, fetchNewsArticle } from "@/helpers/news";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchNewsArticle(slug);
  return article
    ? { title: article.title, description: article.excerpt || undefined }
    : { title: "News" };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchNewsArticle(slug);
  if (!article) notFound();

  const related = (await fetchNews(1)).articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-white pb-16 text-[#292929]">
      <section className="relative h-[420px] overflow-hidden tablet:h-[520px] desktop:h-[600px]">
        <CoverImage
          src={article.image}
          alt={article.title}
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10" />
        <Container className="absolute inset-x-0 bottom-0 z-[1] pb-8 tablet:pb-10 desktop:pb-12">
          {article.category ? (
            <p className="text-xs font-semibold text-white/90 tablet:text-sm">
              {article.category}
            </p>
          ) : null}
          <h1 className="mt-2 max-w-4xl text-2xl leading-tight font-semibold text-white tablet:text-4xl desktop:text-[44px]">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/80 tablet:text-sm">
            {article.date ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" />
                {article.date}
              </span>
            ) : null}
            {article.readTime ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5" />
                {article.readTime}
              </span>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="bg-white pt-8 tablet:pt-10">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#888] tablet:text-[15px]"
        >
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-primary">
            News
          </Link>
          <span>/</span>
          <span className="line-clamp-1 text-[#555]">{article.title}</span>
        </nav>

        <article className="mx-auto max-w-[960px]">
          {article.excerpt ? (
            <p className="text-lg leading-8 font-medium text-[#344946] tablet:text-xl tablet:leading-9">
              {article.excerpt}
            </p>
          ) : null}

          {article.content ? (
            <div
              className="news-content mt-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : null}
        </article>

        <NewsRelated articles={related} />
      </Container>
    </main>
  );
}
