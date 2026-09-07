import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildFaqSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import { getGlossaryTerm, getAllGlossaryTermSlugs, glossaryTerms } from "@/lib/glossaryTerms";
import { documentTypes } from "@/lib/documentTypes";
import { ChevronRight } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";

// ── Static params ─────────────────────────────────────────────
export function generateStaticParams() {
  return getAllGlossaryTermSlugs().map((slug) => ({ term: slug }));
}

// ── Metadata ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const t = getGlossaryTerm(term);
  if (!t) return {};

  const url = `${SITE_URL}/glossary/${t.slug}`;
  return {
    title: { absolute: t.title },
    description: t.metaDescription,
    keywords: [
      `what is ${t.term.toLowerCase()}`,
      `${t.term.toLowerCase()} definition`,
      `${t.term.toLowerCase()} meaning`,
      `${t.term.toLowerCase()} explained`,
      `${t.term.toLowerCase()} plain english`,
    ],
    alternates: { canonical: url },
    openGraph: {
      url,
      title: t.title,
      description: t.metaDescription,
    },
    twitter: {
      title: t.title,
      description: t.metaDescription,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────
export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const t = getGlossaryTerm(term);
  if (!t) notFound();

  const pageUrl = `${SITE_URL}/glossary/${t.slug}`;

  // Related glossary terms (excluding self)
  const relatedTerms = glossaryTerms.filter(
    (gt) => t.relatedTerms.includes(gt.slug) && gt.slug !== t.slug
  );

  // Related document types
  const relatedDocs = documentTypes.filter((d) => t.relatedDocTypes.includes(d.slug));

  const termFaq = [
    {
      question: `What does "${t.term}" mean in plain English?`,
      answer: t.plainEnglish,
    },
    {
      question: `Can you give me an example of a "${t.term}"?`,
      answer: t.example,
    },
  ];

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Legal Glossary", url: `${SITE_URL}/glossary` },
            { name: t.term, url: pageUrl },
          ]),
          buildFaqSchema(termFaq),
        ]}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li><Link href="/glossary" className="hover:text-indigo-600 transition-colors">Legal Glossary</Link></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">{t.term}</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        {/* Term header */}
        <header className="mb-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Legal Glossary
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {t.term}
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            {t.shortDefinition}
          </p>
        </header>

        {/* Formal definition */}
        <section className="mb-8" aria-labelledby="definition-heading">
          <h2 id="definition-heading" className="text-xl font-bold text-gray-900 mb-3">
            Legal Definition
          </h2>
          <p className="text-gray-700 leading-relaxed">{t.definition}</p>
        </section>

        {/* Plain English */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 sm:p-6" aria-labelledby="plain-english-heading">
          <h2 id="plain-english-heading" className="text-xl font-bold text-indigo-900 mb-3">
            In Plain English
          </h2>
          <p className="text-indigo-800 leading-relaxed">{t.plainEnglish}</p>
        </section>

        {/* Example */}
        <section className="mb-8" aria-labelledby="example-heading">
          <h2 id="example-heading" className="text-xl font-bold text-gray-900 mb-3">
            Real-World Example
          </h2>
          <blockquote className="border-l-4 border-indigo-300 pl-4 py-1 text-gray-700 leading-relaxed italic">
            {t.example}
          </blockquote>
        </section>

        {/* Where you'll see this term */}
        {relatedDocs.length > 0 && (
          <section className="mb-8" aria-labelledby="where-heading">
            <h2 id="where-heading" className="text-xl font-bold text-gray-900 mb-4">
              Where You&apos;ll See &ldquo;{t.term}&rdquo;
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {relatedDocs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/explain/${doc.slug}`}
                    className="group flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                  >
                    <span className="text-2xl shrink-0" aria-hidden="true">{doc.emoji}</span>
                    <div>
                      <span className="font-semibold text-sm text-gray-900 group-hover:text-indigo-700 transition-colors block">
                        {doc.name}
                      </span>
                      <span className="text-xs text-gray-500">Explain this document →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related terms */}
        {relatedTerms.length > 0 && (
          <section className="mb-8" aria-labelledby="related-terms-heading">
            <h2 id="related-terms-heading" className="text-xl font-bold text-gray-900 mb-4">
              Related Legal Terms
            </h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {relatedTerms.map((rt) => (
                <li key={rt.slug}>
                  <Link
                    href={`/glossary/${rt.slug}`}
                    className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                  >
                    {rt.term}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
          <strong>Disclaimer:</strong> This glossary definition is for informational purposes only and does not constitute legal advice. Legal meanings can vary by jurisdiction and context. Consult a licensed attorney for advice specific to your situation.
        </div>
      </article>

      {/* CTA */}
      <section className="bg-indigo-700 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Found a &ldquo;{t.term}&rdquo; clause in your document?
          </h2>
          <p className="text-indigo-200 mb-6 text-sm sm:text-base">
            Paste your full document into PlainDoc and get a plain-English explanation of every clause — including this one.
          </p>
          <Link
            href="/#explain-tool"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Explain My Document — Free
          </Link>
        </div>
      </section>

      {/* All glossary terms footer */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-4">All Glossary Terms</h2>
          <ul className="flex flex-wrap gap-2" role="list">
            {glossaryTerms.map((gt) => (
              <li key={gt.slug}>
                <Link
                  href={`/glossary/${gt.slug}`}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-colors ${
                    gt.slug === t.slug
                      ? "bg-indigo-700 text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
                  }`}
                  aria-current={gt.slug === t.slug ? "page" : undefined}
                >
                  {gt.term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
