import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";

const SITE_URL = "https://onlinehealth.us";
const SITE_NAME = "OnliHealth";
const AUTHOR_NAME = "Online Health";
const AUTHOR_URL = `${SITE_URL}/#blog`;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function parseDate(articleDate: string): string {
  const parsed = new Date(articleDate);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  return new Date().toISOString();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Artículo no encontrado",
      description:
        "El artículo que buscás no existe o fue movido. Explorá otros contenidos en el blog de OnliHealth.",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/blog/${article.slug}`;
  const ogImage = article.heroImage?.startsWith("http")
    ? article.heroImage
    : `${SITE_URL}${article.heroImage}`;
  const description = article.excerpt.slice(0, 200);

  return {
    title: article.title,
    description,
    keywords: [
      article.tag,
      "OnliHealth",
      "Online Health",
      "blog salud Puerto Rico",
      "tecnología en salud",
      "telemedicina",
      "salud digital",
    ],
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    publisher: SITE_NAME,
    category: article.tag,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "es_PR",
      url,
      siteName: SITE_NAME,
      title: article.title,
      description,
      publishedTime: parseDate(article.date),
      authors: [AUTHOR_NAME],
      tags: [article.tag],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@onlinehealth",
      creator: "@onlinehealth",
      title: article.title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const { Icon } = article;
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const ogImage = article.heroImage?.startsWith("http")
    ? article.heroImage
    : `${SITE_URL}${article.heroImage}`;
  const publishedTime = parseDate(article.date);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Organization",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    inLanguage: "es-PR",
    keywords: article.tag,
    articleSection: article.tag,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/#blog`,
      name: `Blog de ${SITE_NAME}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/#blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link
            href="/#blog"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-400 truncate">
            {article.title}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-6 ${article.tagColor}`}
        >
          <Icon className="w-3 h-3" />
          {article.tag}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 mb-10 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={publishedTime}>{article.date}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {article.readTime} read
          </span>
          <span className="ml-auto font-medium text-gray-500">
            {AUTHOR_NAME}
          </span>
        </div>

        <div
          className="
            prose prose-gray max-w-none
            prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base
            prose-strong:text-gray-800 prose-strong:font-semibold
            prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-green-400
            prose-blockquote:bg-green-50 prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-6
            prose-blockquote:text-gray-700 prose-cite:text-sm prose-cite:text-gray-400 prose-cite:not-italic
            prose-ul:text-gray-600 prose-li:my-1.5
            prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="flex gap-3">
            {articles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 1)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Next article →
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}