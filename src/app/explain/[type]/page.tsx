import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ExplainTool from "@/components/ExplainTool";
import JsonLd, { buildFaqSchema, buildHowToSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import { getDocumentType, getAllDocumentTypeSlugs, documentTypes } from "@/lib/documentTypes";
import { glossaryTerms } from "@/lib/glossaryTerms";
import { ChevronRight, BookOpen } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";

// ── Static path generation ────────────────────────────────────
export function generateStaticParams() {
  return getAllDocumentTypeSlugs().map((slug) => ({ type: slug }));
}

// ── Metadata ──────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const doc = getDocumentType(type);
  if (!doc) return {};

  const url = `${SITE_URL}/explain/${doc.slug}`;
  return {
    title: { absolute: doc.title },
    description: doc.metaDescription,
    keywords: [
      `explain ${doc.name.toLowerCase()}`,
      `${doc.name.toLowerCase()} plain english`,
      `understand ${doc.name.toLowerCase()}`,
      `${doc.name.toLowerCase()} explained`,
      `what does my ${doc.name.toLowerCase()} mean`,
    ],
    alternates: { canonical: url },
    openGraph: {
      url,
      title: doc.title,
      description: doc.metaDescription,
    },
    twitter: {
      title: doc.title,
      description: doc.metaDescription,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────
export default async function DocumentTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const doc = getDocumentType(type);
  if (!doc) notFound();

  const pageUrl = `${SITE_URL}/explain/${doc.slug}`;

  // Related glossary terms for this document type
  const relatedTerms = glossaryTerms.filter((t) =>
    doc.relatedGlossaryTerms.includes(t.slug)
  );

  // Other document types for internal linking
  const otherDocs = documentTypes.filter((d) => doc.relatedDocTypes.includes(d.slug));

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Document Types", url: `${SITE_URL}/explain` },
            { name: doc.name, url: pageUrl },
          ]),
          buildFaqSchema(doc.faqs),
          buildHowToSchema(doc.h1, doc.howToSteps, doc.metaDescription),
        ]}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li><span className="text-gray-400">Document Types</span></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            <li className="text-gray-900 font-medium" aria-current="page">{doc.name}</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Tool section ── */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block" aria-hidden="true">{doc.emoji}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {doc.h1}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {doc.intro}
            </p>
          </div>
          <ExplainTool defaultDocType={doc.slug} />
        </div>
      </section>

      {/* ── Content sections ── */}
      <article className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {doc.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{section.body}</p>
            </section>
          ))}
        </div>
      </article>

      {/* ── Common confusing clauses ── */}
      {doc.confusingClauses && doc.confusingClauses.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-indigo-50 border-y border-indigo-100" aria-labelledby="clauses-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="clauses-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Common Confusing Clauses in a {doc.name} — Explained
            </h2>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              These are the clauses people most often misunderstand or overlook. PlainDoc flags all of them automatically when you explain your document.
            </p>
            <dl className="space-y-4">
              {doc.confusingClauses.map((c, i) => (
                <div key={i} className="bg-white rounded-xl border border-indigo-200 p-4 sm:p-5">
                  <dt className="font-bold text-gray-900 mb-1.5 flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mt-0.5" aria-hidden="true">
                      {i + 1}
                    </span>
                    {c.clause}
                  </dt>
                  <dd className="text-gray-600 text-sm leading-relaxed pl-7">{c.meaning}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 text-center">
              <a
                href="#explain-tool"
                className="inline-flex items-center gap-2 bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-800 transition-colors"
              >
                Explain My {doc.name} — Free
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── How to use ── */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50" aria-labelledby="how-to-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="how-to-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            How to Explain Your {doc.name} with PlainDoc
          </h2>
          <ol className="space-y-4" role="list">
            {doc.howToSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-700 text-white text-sm font-bold flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <a
              href="#explain-tool"
              className="inline-flex items-center gap-2 bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-800 transition-colors"
            >
              Try the Explainer Now — Free
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 sm:py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Common Questions About {doc.name}s
          </h2>
          <dl className="space-y-5">
            {doc.faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <dt className="font-bold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Related glossary terms ── */}
      {relatedTerms.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-gray-50" aria-labelledby="glossary-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="glossary-heading" className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" aria-hidden="true" />
              Key Terms in {doc.name}s
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              These legal terms frequently appear in {doc.name.toLowerCase()}s. Click any term to read a plain-English explanation.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {relatedTerms.map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="group flex flex-col bg-white rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors text-sm mb-1">
                      {term.term}
                    </span>
                    <span className="text-xs text-gray-500">{term.shortDefinition}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/glossary" className="inline-block mt-4 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
              View full legal glossary →
            </Link>
          </div>
        </section>
      )}

      {/* ── Related document types ── */}
      {otherDocs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-white" aria-labelledby="related-docs-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="related-docs-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Explain Other Document Types
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
              {otherDocs.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/explain/${d.slug}`}
                    className="group flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                  >
                    <span className="text-2xl" aria-hidden="true">{d.emoji}</span>
                    <span className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors text-sm">
                      {d.name} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Disclaimer ── */}
      <div className="bg-amber-50 border-t border-amber-200 py-4 px-4">
        <p className="max-w-3xl mx-auto text-xs text-amber-800 text-center">
          <strong>Disclaimer:</strong> PlainDoc provides plain-language explanations for informational purposes only. This is not legal advice. For important legal decisions, consult a licensed attorney in your jurisdiction.
        </p>
      </div>
    </>
  );
}
