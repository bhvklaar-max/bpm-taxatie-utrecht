import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const cardImages = [
  "/images/blog-bpm-uitleg.jpeg",
  "/images/blog-import-proces.jpeg",
  "/images/blog-besparen.jpeg",
  "/images/car-inspection.jpeg",
  "/images/german-imports.jpeg",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero sectie */}
      <section className="relative text-white py-24 overflow-hidden">
        <Image
          src="/images/office-utrecht.jpeg"
          alt="Kantoor BPM Taxatie Utrecht"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,58,95,0.92) 0%, rgba(30,58,95,0.75) 50%, rgba(249,115,22,0.6) 100%)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog &mdash; BPM Taxatie Utrecht
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Deskundige artikelen over BPM, auto-import en taxatie. Blijf op de
            hoogte van de laatste ontwikkelingen en bespaar op uw BPM-aangifte.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cardImages[index % cardImages.length]}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(30,58,95,0.15) 100%)",
                  }}
                />
              </div>
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
                    className="transition-colors"
                    style={{ color: "#1e3a5f" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#f97316")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#1e3a5f")
                    }
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(30,58,95,0.08)",
                        color: "#1e3a5f",
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-semibold transition-colors mt-auto"
                  style={{ color: "#f97316" }}
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
      <section className="relative text-white py-16 overflow-hidden">
        <Image
          src="/images/cta-background.jpeg"
          alt="Neem contact op met BPM Taxatie Utrecht"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,58,95,0.93) 0%, rgba(30,58,95,0.85) 60%, rgba(249,115,22,0.7) 100%)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Heeft u een BPM-taxatierapport nodig?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Wij
            helpen u graag met een professioneel taxatierapport.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold py-3 px-8 rounded-full transition-colors"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
            }}
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
