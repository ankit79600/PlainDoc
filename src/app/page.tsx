import type { Metadata } from "next";
import Link from "next/link";
import ExplainTool from "@/components/ExplainTool";
import JsonLd, { buildWebApplicationSchema, buildFaqSchema, buildHowToSchema } from "@/components/JsonLd";
import { documentTypes } from "@/lib/documentTypes";
import { glossaryTerms } from "@/lib/glossaryTerms";
import { Shield, Zap, Lock, CheckCircle } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";

export const metadata: Metadata = {
  title: "PlainDoc — Explain Any Legal Document in Plain English",
  description:
    "Paste any legal document — rental agreement, medical bill, terms and conditions, employment contract — and get a free plain-English, clause-by-clause explanation in seconds.",
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL },
};

const homeFaqs = [
  {
    question: "Is PlainDoc free to use?",
    answer:
      "Yes, PlainDoc is completely free. Paste your document or upload a PDF and get a plain-language explanation immediately, no account required.",
  },
  {
    question: "Does PlainDoc store my documents?",
    answer:
      "No. Your document is processed in server memory and discarded immediately after your explanation is generated. We do not save, log, or share document content.",
  },
  {
    question: "What types of documents can PlainDoc explain?",
    answer:
      "PlainDoc explains rental and lease agreements, medical bills, terms and conditions, privacy policies, employment contracts, loan agreements, and insurance policies. More document types are being added regularly.",
  },
  {
    question: "Is the explanation legal advice?",
    answer:
      "No. PlainDoc provides plain-language summaries for informational purposes. It is not a substitute for advice from a licensed attorney. For decisions with significant legal or financial consequences, always consult a qualified professional.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "You can paste plain text directly or upload PDF documents. Image uploads (JPG, PNG) are accepted but OCR must be configured by the site operator; see the README for setup instructions.",
  },
];

const howToSteps = [
  "Paste your document text into the text box, or upload a PDF file.",
  "Select the document type to improve explanation accuracy (optional).",
  "Click 'Explain My Document — Free'.",
  "Review the plain-English summary and clause-by-clause breakdown.",
  "Note any red flags or warnings highlighted by the analysis.",
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildWebApplicationSchema(SITE_URL),
          buildFaqSchema(homeFaqs),
          buildHowToSchema(
            "How to explain a legal document with PlainDoc",
            howToSteps,
            "Use PlainDoc to get a plain-English explanation of any legal document in 5 easy steps."
          ),
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            Free — No account required
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Explain Any Legal Document{" "}
            <span className="text-indigo-700">in Plain English</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Paste your rental agreement, medical bill, terms and conditions, employment
            contract, or any other document — and get a free, clause-by-clause
            plain-language explanation in seconds.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 mb-12">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              Document never saved
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              Clause-by-clause breakdown
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              Red flags flagged automatically
            </span>
          </div>

          {/* Tool */}
          <ExplainTool />
        </div>
      </section>

      {/* ── Document type cards ── */}
      <section className="py-16 sm:py-20 px-4 bg-white" aria-labelledby="doc-types-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="doc-types-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What Can PlainDoc Explain?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            We support the most common document types that people struggle to understand. Each type has a dedicated guide with plain-language explanations of common clauses.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {documentTypes.map((dt) => (
              <li key={dt.slug}>
                <Link
                  href={`/explain/${dt.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <span className="text-3xl mb-3" aria-hidden="true">{dt.emoji}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-1">
                    {dt.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 flex-1">{dt.intro.slice(0, 120)}…</p>
                  <span className="text-indigo-600 text-sm font-medium mt-3 group-hover:text-indigo-800 transition-colors">
                    Guide + Explainer →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50" aria-labelledby="how-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            How PlainDoc Works
          </h2>
          <ol className="space-y-6" role="list">
            {howToSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-700 text-white text-sm font-bold flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-800 transition-colors"
            >
              Learn more about how PlainDoc works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Glossary teaser ── */}
      <section className="py-16 sm:py-20 px-4 bg-white" aria-labelledby="glossary-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="glossary-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Legal Term Glossary
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Not sure what a term means? Our plain-English glossary explains the most confusing legal concepts you&apos;ll encounter in everyday documents.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" role="list">
            {glossaryTerms.map((term) => (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors text-sm mb-1">
                    {term.term}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{term.shortDefinition}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-100 transition-colors"
            >
              View full legal glossary →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {homeFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                <dt className="font-bold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 px-4 bg-indigo-700" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop Signing What You Don&apos;t Understand
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Paste your document now and get a plain-English explanation in seconds — completely free, no account needed.
          </p>
          <Link
            href="/#explain-tool"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors text-lg"
          >
            Explain My Document — Free
          </Link>
        </div>
      </section>
    </>
  );
}
