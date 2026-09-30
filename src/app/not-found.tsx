import Link from "next/link";
import { FileText, BookOpen, Home } from "lucide-react";
import { documentTypes } from "@/lib/documentTypes";

export default function NotFound() {
  const featuredDocs = documentTypes.slice(0, 6);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* 404 message */}
      <div className="mb-10">
        <p className="text-8xl font-extrabold text-indigo-100 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Try one of the links below.
        </p>
      </div>

      {/* Primary navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-800 transition-colors"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>
        <Link
          href="/explain"
          className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-100 transition-colors"
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          Document Types
        </Link>
        <Link
          href="/glossary"
          className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          Legal Glossary
        </Link>
      </div>

      {/* Quick doc type links */}
      <div className="max-w-2xl w-full">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Popular document guides
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="list">
          {featuredDocs.map((dt) => (
            <li key={dt.slug}>
              <Link
                href={`/explain/${dt.slug}`}
                className="flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-xl px-3 py-2.5 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
              >
                <span aria-hidden="true">{dt.emoji}</span>
                <span>{dt.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
