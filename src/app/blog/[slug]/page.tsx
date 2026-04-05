import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel niet gevonden | BPM Taxatie Utrecht",
    };
  }

  return {
    title: `${post.title} | BPM Taxatie Utrecht`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://bpmtaxatieutrecht.nl/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["BPM Taxatie Utrecht"],
    },
    alternates: {
      canonical: `https://bpmtaxatieutrecht.nl/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "BPM Taxatie Utrecht",
      url: "https://bpmtaxatieutrecht.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "BPM Taxatie Utrecht",
      url: "https://bpmtaxatieutrecht.nl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bpmtaxatieutrecht.nl/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    url: `https://bpmtaxatieutrecht.nl/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 max-w-6xl py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-700">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Artikel */}
            <article className="lg:col-span-2">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("nl-NL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&bull;</span>
                  <span>{post.readTime} leestijd</span>
                  <span>&bull;</span>
                  <span>{"BPM Taxatie Utrecht"}</span>
                </div>
              </header>

              <div
                className="prose prose-lg prose-blue max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-li:text-gray-700
                  prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Trefwoorden
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 bg-blue-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3">
                  Hulp nodig bij uw BPM-taxatie?
                </h3>
                <p className="text-blue-100 mb-6">
                  Neem vandaag nog contact op met BPM Taxatie Utrecht voor een
                  vrijblijvende offerte. Wij helpen u graag met een professioneel
                  taxatierapport en zorgen ervoor dat u geen euro te veel betaalt.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Neem contact op
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Gerelateerde artikelen
                </h2>
                <div className="space-y-6">
                  {relatedPosts.map((related) => (
                    <article
                      key={related.slug}
                      className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                    >
                      <time
                        dateTime={related.date}
                        className="text-xs text-gray-500"
                      >
                        {new Date(related.date).toLocaleDateString("nl-NL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 leading-snug">
                        <Link
                          href={`/blog/${related.slug}`}
                          className="hover:text-blue-700 transition-colors"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </article>
                  ))}
                </div>

                {/* Sidebar CTA */}
                <div className="mt-8 bg-gray-100 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Gratis voorberekening
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Wilt u weten hoeveel BPM u kunt besparen? Vraag een
                    vrijblijvende voorberekening aan.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-full hover:bg-blue-800 transition-colors text-sm"
                  >
                    Bereken nu
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
