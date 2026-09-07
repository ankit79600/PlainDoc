import Link from "next/link";
import { FileText } from "lucide-react";
import { documentTypes } from "@/lib/documentTypes";
import { glossaryTerms } from "@/lib/glossaryTerms";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <FileText className="w-5 h-5" aria-hidden="true" />
              PlainDoc
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Free plain-language explanations for any legal document. Understand what you sign.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Not legal advice. For information only.
            </p>
          </div>

          {/* Document types */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Document Types</h3>
            <ul className="space-y-2">
              {documentTypes.map((dt) => (
                <li key={dt.slug}>
                  <Link
                    href={`/explain/${dt.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {dt.emoji} {dt.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Glossary */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Glossary</h3>
            <ul className="space-y-2">
              {glossaryTerms.slice(0, 7).map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {term.term}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/glossary" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  View all terms →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PlainDoc. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 text-center sm:text-right">
            PlainDoc explains documents in plain language. This is not legal advice.
            Always consult a licensed attorney for legal questions.
          </p>
        </div>
      </div>
    </footer>
  );
}
