import { apiFetch } from "@/lib/apiFetch";
import { resolveServiceImage } from "@/helpers/service-detail";
import type { BlogApiItem, BlogDetailResponse, BlogListResponse } from "@/types/news";

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
};

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function normalize(item: BlogApiItem): NewsArticle {
  const category =
    typeof item.category === "string" ? item.category : item.category?.name;
  const date = item.published_at ?? item.created_at;
  const htmlBody = item.content ?? item.description ?? "";
  const excerpt =
    item.short_description?.trim() ||
    stripHtml(htmlBody).slice(0, 180);
  return {
    slug: item.slug,
    title: item.title,
    category: category ?? "",
    date: date
      ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(date))
      : "",
    readTime: item.read_time ? `${item.read_time} min read` : "",
    image: resolveServiceImage(item.image ?? item.banner),
    excerpt,
    content: htmlBody,
  };
}

export async function fetchNews(page = 1): Promise<{ articles: NewsArticle[]; currentPage: number; lastPage: number; total: number }> {
  try {
    const response = await apiFetch<BlogListResponse>(`/blogs?page=${page}`, { cache: "no-store" });
    return { articles: response.data.map(normalize), currentPage: response.meta.current_page, lastPage: response.meta.last_page, total: response.meta.total };
  } catch {
    return { articles: [], currentPage: 1, lastPage: 1, total: 0 };
  }
}

export async function fetchNewsArticle(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await apiFetch<BlogDetailResponse>(`/blog/${encodeURIComponent(slug)}`, { cache: "no-store" });
    const item = Array.isArray(response.data) ? response.data[0] : response.data;
    return item ? normalize(item) : null;
  } catch {
    return null;
  }
}
