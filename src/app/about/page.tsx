import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";
import { FileText } from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";
const PAGE_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: { absolute: "About PlainDoc — Our Mission to Make Legal Documents Understandable" },
  description:
    "PlainDoc was built to give everyone access to plain-language explanations of legal documents — rental agreements, medical bills, employment contracts, and more. Free, private, instant.",
  alternates: { canonical: PAGE_URL },
  openGraph: { url: PAGE_URL },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "About", url: PAGE_URL },
        ])}
      />

      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <FileText className="w-10 h-10 text-indigo-600 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            About PlainDoc
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe everyone deserves to understand the documents they sign — not just people who can afford a lawyer.
          </p>
        </header>

        {/* Mission */}
        <section className="mb-10" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most legal documents are written by lawyers for lawyers. The average rental agreement is 6,000 words. A typical terms of service document runs 10,000 words or more. Employment contracts, insurance policies, and loan agreements are packed with defined terms, cross-references, and exception-upon-exception language that obscures rather than clarifies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The result? Most people sign documents they don&apos;t fully understand. They discover the arbitration clause when they try to sue. They find out about the non-compete when they want to change jobs. They learn about the automatic renewal when they see the charge on their credit card.
          </p>
          <p className="text-gray-700 leading-relaxed">
            PlainDoc exists to fix that. We use AI to translate legal documents into plain, simple English — clause by clause — so you can understand what you&apos;re agreeing to before you sign, not after.
          </p>
        </section>

        {/* How */}
        <section className="mb-10" aria-labelledby="how-heading">
          <h2 id="how-heading" className="text-2xl font-bold text-gray-900 mb-4">How We Do It</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PlainDoc is powered by large language models — the same technology behind tools like ChatGPT and Claude — fine-tuned for legal document comprehension. When you paste or upload a document, our AI reads each clause, identifies its legal function, and translates it into plain English with a severity assessment: standard, worth noting, or pay attention.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our explanations are designed to be accurate and accessible — not legal advice. We flag potentially concerning clauses (like mandatory arbitration or broad IP assignment) so you know where to focus your attention. We recommend consulting a licensed attorney before making any decision with significant legal or financial consequences.
          </p>
        </section>

        {/* Privacy */}
        <section className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6" aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="text-2xl font-bold text-emerald-900 mb-4">Our Privacy Commitment</h2>
          <p className="text-emerald-800 leading-relaxed">
            Legal documents are sensitive. Your rental agreement contains your home address. Your employment contract has your salary. Your medical bills contain protected health information. We take this seriously. PlainDoc processes your documents in server memory and deletes them immediately after returning your explanation. We do not store, log, or share document content — ever. No account is required. We don&apos;t know who you are.
          </p>
        </section>

        {/* Not legal advice */}
        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6" aria-labelledby="disclaimer-heading">
          <h2 id="disclaimer-heading" className="text-2xl font-bold text-amber-900 mb-4">Important Disclaimer</h2>
          <p className="text-amber-800 leading-relaxed">
            PlainDoc explains documents in plain language. We are not a law firm and do not provide legal advice. Our explanations are for informational purposes only and do not constitute legal advice or create an attorney-client relationship. For decisions with significant legal or financial consequences, always consult a licensed attorney in your jurisdiction.
          </p>
        </section>

        {/* Links */}
        <nav aria-label="Related pages" className="flex flex-wrap gap-3">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-medium px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors text-sm">
            How It Works
          </Link>
          <Link href="/privacy" className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
            Privacy Policy
          </Link>
          <Link href="/#explain-tool" className="inline-flex items-center gap-2 bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-800 transition-colors text-sm">
            Try PlainDoc Free
          </Link>
        </nav>
      </article>
    </>
  );
}
