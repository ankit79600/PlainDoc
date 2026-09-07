import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";
import { glossaryTerms, getTermsByCategory, CATEGORY_LABELS, GlossaryCategory } from "@/lib/glossaryTerms";
import { ChevronRight, BookOpen } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";
const PAGE_URL = `${SITE_URL}/glossary`;

export const metadata: Metadata = {
  title: "Legal Terms Glossary — Plain English Definitions for Everyday Documents",
  description:
    "Plain-English definitions for legal, financial, medical, and rental terms you encounter in rental agreements, medical bills, employment contracts, insurance policies, and more. Free glossary.",
  keywords: [
    "legal terms explained",
    "what does arbitration clause mean",
    "what is a deductible",
    "legal glossary plain english",
    "contract terms explained",
    "financial terms plain language",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: { url: PAGE_URL },
};

const CATEGORIES: GlossaryCategory[] = ["legal", "financial", "medical", "rental"];

export default function GlossaryIndexPage() {
  const totalTerms = glossaryTerms.length;

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Legal Glossary", url: PAGE_URL },
        ])}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">Legal Glossary</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-10 h-10 text-indigo-600 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Legal Terms in Plain English
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Legal documents are full of terminology most people have never been taught. Our
            glossary translates {totalTerms} of the most common terms — grouped by category —
            into plain language with real examples.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {CATEGORIES.map((cat) => {
              const { label, emoji } = CATEGORY_LABELS[cat];
              return (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                >
                  <span aria-hidden="true">{emoji}</span>
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms by category */}
      <div className="py-12 sm:py-16 px-4 bg-white space-y-16">
        {CATEGORIES.map((cat) => {
          const { label, description, emoji } = CATEGORY_LABELS[cat];
          const terms = getTermsByCategory(cat);
          if (terms.length === 0) return null;

          return (
            <section key={cat} id={cat} aria-labelledby={`cat-${cat}-heading`} className="max-w-5xl mx-auto scroll-mt-20">
              <div className="flex items-start gap-3 mb-6">
                <span className="text-3xl" aria-hidden="true">{emoji}</span>
                <div>
                  <h2 id={`cat-${cat}-heading`} className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {label}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                {terms.map((term) => (
                  <li key={term.slug}>
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2 text-base">
                        {term.term}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {term.shortDefinition}
                      </p>
                      <span className="text-indigo-600 text-sm font-medium mt-3 group-hover:text-indigo-800 transition-colors">
                        Read plain-English definition →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {/* A–Z quick index */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-200" aria-labelledby="az-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="az-heading" className="text-lg font-bold text-gray-900 mb-4">All Terms A–Z</h2>
          <ul className="flex flex-wrap gap-2" role="list">
            {[...glossaryTerms]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                  >
                    {term.term}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Found a Term in Your Document?
          </h2>
          <p className="text-indigo-200 mb-6">
            Use PlainDoc to get a clause-by-clause plain-language explanation of your entire document — free, instantly, no account needed.
          </p>
          <Link
            href="/#explain-tool"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Explain My Document — Free
          </Link>
        </div>
      </section>
    </>
  );
}
