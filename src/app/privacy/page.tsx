import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";
const PAGE_URL = `${SITE_URL}/privacy`;

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — PlainDoc" },
  description:
    "PlainDoc's privacy policy. We process documents in memory and never store your data. Read exactly how we handle the documents you submit.",
  alternates: { canonical: PAGE_URL },
  openGraph: { url: PAGE_URL },
};

export default function PrivacyPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Privacy Policy", url: PAGE_URL },
        ])}
      />

      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-20 prose prose-gray max-w-none">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

        <section aria-labelledby="overview-heading" className="mb-8">
          <h2 id="overview-heading" className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            PlainDoc (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;PlainDoc&rdquo;) provides a free tool for explaining legal documents in plain language. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. <strong>The short version: we don&apos;t store your documents. Ever.</strong>
          </p>
        </section>

        <section aria-labelledby="documents-heading" className="mb-8">
          <h2 id="documents-heading" className="text-xl font-bold text-gray-900 mb-3">Documents You Submit</h2>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li><strong>Not stored:</strong> Documents submitted to PlainDoc (via text paste or file upload) are processed in server memory only. They are never written to a database, file system, or any persistent storage.</li>
            <li><strong>Not logged:</strong> We do not log the content of submitted documents.</li>
            <li><strong>Not retained:</strong> Once your explanation is returned to your browser, the document text is discarded from server memory.</li>
            <li><strong>Not shared:</strong> We do not share document content with any third party, except as necessary to generate your explanation (the AI inference provider we use processes the text but does not retain it per our data processing agreement).</li>
            <li><strong>Not used for training:</strong> We do not use submitted documents to train or fine-tune AI models.</li>
          </ul>
        </section>

        <section aria-labelledby="usage-data-heading" className="mb-8">
          <h2 id="usage-data-heading" className="text-xl font-bold text-gray-900 mb-3">Usage Data We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Like most websites, we collect standard server logs and analytics data. This includes:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li><strong>Server logs:</strong> IP address, browser type, operating system, referring URL, pages visited, and timestamps. These logs do not include document content.</li>
            <li><strong>Analytics:</strong> Aggregated usage metrics (page views, session durations, document types selected) to understand how PlainDoc is used. We use privacy-respecting analytics tools that do not track you across other websites.</li>
            <li><strong>Cookies:</strong> We use only functional cookies necessary to operate the site (e.g., session cookies). We do not use tracking or advertising cookies.</li>
          </ul>
        </section>

        <section aria-labelledby="no-account-heading" className="mb-8">
          <h2 id="no-account-heading" className="text-xl font-bold text-gray-900 mb-3">No Account Required</h2>
          <p className="text-gray-700 leading-relaxed">
            PlainDoc does not require you to create an account or provide any personal information. We do not collect your name, email address, or any identifying information to use the document explanation tool.
          </p>
        </section>

        <section aria-labelledby="third-parties-heading" className="mb-8">
          <h2 id="third-parties-heading" className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            To provide our service, we work with certain third-party providers:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li><strong>AI inference provider:</strong> Document text is sent to an AI API (such as Anthropic or OpenAI) to generate explanations. These providers are bound by data processing agreements that prohibit them from retaining or using your data for model training.</li>
            <li><strong>Hosting:</strong> PlainDoc is hosted on Vercel (or similar platform). Standard server logs are generated per their infrastructure.</li>
            <li><strong>Analytics:</strong> We may use an analytics provider to collect aggregate usage statistics. No personal data or document content is shared with analytics providers.</li>
          </ul>
        </section>

        <section aria-labelledby="security-heading" className="mb-8">
          <h2 id="security-heading" className="text-xl font-bold text-gray-900 mb-3">Security</h2>
          <p className="text-gray-700 leading-relaxed">
            All data transmitted between your browser and PlainDoc is encrypted using HTTPS (TLS). We follow security best practices for web applications. Because we do not store your documents, the risk of a data breach exposing your document content is minimal.
          </p>
        </section>

        <section aria-labelledby="rights-heading" className="mb-8">
          <h2 id="rights-heading" className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Because we do not collect or store personal data beyond standard server logs, there is no personal data profile associated with you for us to provide, correct, or delete. If you believe we hold personal data about you and wish to exercise any data rights under GDPR, CCPA, or similar laws, please contact us at the address below.
          </p>
        </section>

        <section aria-labelledby="changes-heading" className="mb-8">
          <h2 id="changes-heading" className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Material changes will be noted with an updated &ldquo;Last updated&rdquo; date at the top. Continued use of PlainDoc after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section aria-labelledby="contact-heading" className="mb-8">
          <h2 id="contact-heading" className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Questions about this Privacy Policy? Contact us at{" "}
            <a href="mailto:privacy@plaindoc.app" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              privacy@plaindoc.app
            </a>.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors text-sm font-medium">
            ← Back to PlainDoc
          </Link>
        </div>
      </article>
    </>
  );
}
