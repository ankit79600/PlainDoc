import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";
import { documentTypes } from "@/lib/documentTypes";
import { ChevronRight, FileText } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const PAGE_URL = `${SITE_URL}/explain`;

export const metadata: Metadata = {
  title: "Document Types — Legal Agreements Explained in Plain English",
  description:
    "Free plain-English guides for rental agreements, employment contracts, medical bills, terms and conditions, loan agreements, insurance policies, and more. Understand what you sign.",
  alternates: { canonical: PAGE_URL },
  openGraph: { url: PAGE_URL },
};

export default function ExplainIndexPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Document Types", url: PAGE_URL },
        ])}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">Document Types</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FileText className="w-10 h-10 text-indigo-600 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Legal Documents Explained in Plain English
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose a document type below for a free plain-English guide — including common clauses,
            what to watch out for, important terminology, and how to use PlainDoc to explain your
            own document in seconds.
          </p>
        </div>
      </section>

      {/* Document type grid */}
      <section className="py-12 sm:py-16 px-4 bg-white" aria-labelledby="doc-types-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="doc-types-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            All Supported Document Types
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {documentTypes.map((dt) => (
              <li key={dt.slug}>
                <Link
                  href={`/explain/${dt.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <span className="text-3xl mb-3" aria-hidden="true">{dt.emoji}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2">
                    {dt.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                    {dt.intro.slice(0, 140)}…
                  </p>
                  <span className="text-indigo-600 text-sm font-medium mt-3 group-hover:text-indigo-800 transition-colors">
                    Plain-English Guide →
                  </span>
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
            Have a Document Ready to Explain?
          </h2>
          <p className="text-indigo-200 mb-6">
            Paste any legal document — any type — into PlainDoc and get a clause-by-clause
            plain-English explanation in seconds. Free, no account required.
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
