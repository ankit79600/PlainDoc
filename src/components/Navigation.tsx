import Link from "next/link";
import { documentTypes } from "@/lib/documentTypes";
import { FileText, Menu } from "lucide-react";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-700 hover:text-indigo-800 transition-colors">
            <FileText className="w-6 h-6" aria-hidden="true" />
            <span>PlainDoc</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-700 transition-colors py-2">
                Document Types
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {documentTypes.map((dt) => (
                    <li key={dt.slug}>
                      <Link
                        href={`/explain/${dt.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-sm"
                      >
                        <span aria-hidden="true">{dt.emoji}</span>
                        <span>{dt.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/glossary" className="text-gray-600 hover:text-indigo-700 transition-colors">
              Glossary
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-indigo-700 transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-700 transition-colors">
              About
            </Link>
            <Link
              href="/#explain-tool"
              className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-colors"
            >
              Try Free
            </Link>
          </nav>

          {/* Mobile hamburger — functional via CSS disclosure */}
          <details className="md:hidden group">
            <summary className="cursor-pointer list-none p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Open navigation menu">
              <Menu className="w-5 h-5 text-gray-700" aria-hidden="true" />
            </summary>
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
              <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">Document Types</p>
                {documentTypes.map((dt) => (
                  <Link
                    key={dt.slug}
                    href={`/explain/${dt.slug}`}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    <span aria-hidden="true">{dt.emoji}</span>
                    <span className="text-sm">{dt.name}</span>
                  </Link>
                ))}
                <hr className="my-2 border-gray-100" />
                <Link href="/glossary" className="px-2 py-2 text-sm text-gray-700 hover:text-indigo-700 transition-colors">Glossary</Link>
                <Link href="/how-it-works" className="px-2 py-2 text-sm text-gray-700 hover:text-indigo-700 transition-colors">How It Works</Link>
                <Link href="/about" className="px-2 py-2 text-sm text-gray-700 hover:text-indigo-700 transition-colors">About</Link>
                <Link href="/#explain-tool" className="mt-2 bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm text-center hover:bg-indigo-800 transition-colors">
                  Try Free
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
