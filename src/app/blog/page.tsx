import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Blog | BPM Taxatie Utrecht - Alles over BPM en auto-import",
  description:
    "Lees onze artikelen over BPM-taxatie, auto-import, en belastingbesparingen. Deskundig advies van BPM Taxatie Utrecht.",
  keywords: [
    "BPM blog",
    "auto import tips",
    "BPM taxatie artikelen",
    "BPM besparen",
    "auto import Nederland",
  ],
  openGraph: {
    title: "Blog | BPM Taxatie Utrecht",
    description:
      "Lees onze artikelen over BPM-taxatie, auto-import, en belastingbesparingen.",
    url: "https://bpmtaxatieutrecht.nl/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero sectie */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog &mdash; BPM Taxatie Utrecht
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Deskundige artikelen over BPM, auto-import en taxatie. Blijf op de
            hoogte van de laatste ontwikkelingen en bespaar op uw BPM-aangifte.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("nl-NL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&bull;</span>
                  <span>{post.readTime} leestijd</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors mt-auto"
                >
                  Lees meer
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA sectie */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Heeft u een BPM-taxatierapport nodig?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Wij
            helpen u graag met een professioneel taxatierapport.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
