import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";
import { glossaryTerms } from "@/lib/glossaryTerms";
import { ChevronRight, BookOpen } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";
const PAGE_URL = `${SITE_URL}/glossary`;

export const metadata: Metadata = {
  title: "Legal Terms Glossary — Plain English Definitions",
  description:
    "Plain-English definitions for the legal terms you encounter most often in rental agreements, medical bills, employment contracts, insurance policies, and more. Free glossary.",
  alternates: { canonical: PAGE_URL },
  openGraph: { url: PAGE_URL },
};

export default function GlossaryIndexPage() {
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
        <div className="max-w-4xl mx-auto px-4 py-3">
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
            Legal Terms Explained in Plain English
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Legal documents are full of confusing terminology. Our glossary translates the most
            common legal terms into plain language so you know exactly what you&apos;re agreeing to.
          </p>
        </div>
      </section>

      {/* Term grid */}
      <section className="py-12 sm:py-16 px-4 bg-white" aria-labelledby="terms-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="terms-heading" className="sr-only">All Glossary Terms</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {glossaryTerms.map((term) => (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <h2 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2">
                    {term.term}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {term.shortDefinition}
                  </p>
                  <span className="text-sm text-indigo-600 font-medium mt-3 group-hover:text-indigo-800 transition-colors">
                    Read full definition →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA back to tool */}
      <section className="py-12 px-4 bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Explain Your Document?
          </h2>
          <p className="text-indigo-200 mb-6">
            Use PlainDoc to get a clause-by-clause plain-language explanation of any legal document — free, instantly, no account needed.
          </p>
          <Link
            href="/#explain-tool"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Try the Free Explainer →
          </Link>
        </div>
      </section>
    </>
  );
}
