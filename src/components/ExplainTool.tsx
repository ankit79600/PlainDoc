"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, FileText, AlertTriangle, CheckCircle, Info, Loader2, X, Shield } from "lucide-react";
import type { ExplanationResult, ExplainedClause } from "@/lib/llm";
import { documentTypes } from "@/lib/documentTypes";

type ToolState = "idle" | "loading" | "result" | "error";

const severityConfig = {
  normal: {
    icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    label: "Standard",
  },
  caution: {
    icon: Info,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    label: "Worth Noting",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    label: "Pay Attention",
  },
} as const;

function ClauseCard({ clause }: { clause: ExplainedClause }) {
  const cfg = severityConfig[clause.severity];
  const Icon = cfg.icon;
  return (
    <article className={`rounded-xl border p-4 sm:p-5 ${cfg.bg}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${cfg.color}`} aria-hidden="true" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{clause.title}</h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.color} bg-white/60 border border-current/20`}>
              {cfg.label}
            </span>
          </div>
          {clause.original && (
            <blockquote className="text-xs text-gray-500 italic border-l-2 border-gray-300 pl-3 my-2 line-clamp-3">
              &ldquo;{clause.original}&rdquo;
            </blockquote>
          )}
          <p className="text-sm text-gray-700 leading-relaxed">{clause.plainEnglish}</p>
          {clause.tip && (
            <p className="mt-2 text-xs text-gray-600 bg-white/70 rounded-lg p-2 border border-white">
              <strong>Tip:</strong> {clause.tip}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ExplainTool({ defaultDocType = "" }: { defaultDocType?: string }) {
  const [state, setState] = useState<ToolState>("idle");
  const [text, setText] = useState("");
  const [docType, setDocType] = useState(defaultDocType);
  const [fileName, setFileName] = useState<string | null>(null);
  const [result, setResult] = useState<ExplanationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      setError("File must be under 10 MB.");
      return;
    }
    setFileName(file.name);
    setText(""); // will be extracted server-side
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !fileName) return;

    setState("loading");
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("documentType", docType || "document");

      if (fileName && fileInputRef.current?.files?.[0]) {
        formData.append("file", fileInputRef.current.files[0]);
      } else {
        formData.append("text", text);
      }

      const res = await fetch("/api/explain", { method: "POST", body: formData });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error ?? `Server error ${res.status}`);
      }

      const data = (await res.json()) as ExplanationResult;
      setResult(data);
      setState("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  };

  const reset = () => {
    setState("idle");
    setText("");
    setFileName(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const canSubmit = (text.trim().length > 50 || !!fileName) && state !== "loading";

  return (
    <section id="explain-tool" aria-labelledby="tool-heading" className="w-full max-w-3xl mx-auto">
      {/* Privacy notice */}
      <div className="flex items-center gap-2 justify-center mb-5 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
        <Shield className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Your document is processed in memory and <strong>never saved</strong>. Deleted immediately after explanation.</span>
      </div>

      {state !== "result" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Document type selector */}
          <div>
            <label htmlFor="doc-type" className="block text-sm font-medium text-gray-700 mb-1.5">
              Document type <span className="text-gray-400 font-normal">(optional — helps accuracy)</span>
            </label>
            <select
              id="doc-type"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Auto-detect</option>
              {documentTypes.map((dt) => (
                <option key={dt.slug} value={dt.slug}>
                  {dt.emoji} {dt.name}
                </option>
              ))}
            </select>
          </div>

          {/* File upload zone */}
          {!text.trim() && (
            <div
              role="button"
              tabIndex={0}
              aria-label="Upload document file"
              className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                isDragging
                  ? "border-indigo-400 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/*"
                className="sr-only"
                aria-hidden="true"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              {fileName ? (
                <div className="flex items-center justify-center gap-2 text-indigo-700">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium text-sm truncate max-w-xs">{fileName}</span>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setFileName(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                    className="ml-1 p-0.5 rounded-full hover:bg-indigo-100 transition-colors"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-700">Drop your PDF or image here</p>
                  <p className="text-xs text-gray-400 mt-1">or click to browse — PDF, JPG, PNG up to 10 MB</p>
                </>
              )}
            </div>
          )}

          {/* Divider */}
          {!fileName && (
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">OR PASTE TEXT</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          )}

          {/* Text area */}
          {!fileName && (
            <div>
              <label htmlFor="doc-text" className="sr-only">Paste document text</label>
              <textarea
                id="doc-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your rental agreement, medical bill, terms and conditions, or any other document here..."
                className="w-full h-48 sm:h-64 rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent leading-relaxed"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">{text.length.toLocaleString()} characters</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {state === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                Analyzing your document…
              </>
            ) : (
              <>
                <FileText className="w-5 h-5" aria-hidden="true" />
                Explain My Document — Free
              </>
            )}
          </button>
        </form>
      )}

      {/* Error state */}
      {state === "error" && error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-red-700">Something went wrong</p>
            <p className="text-sm text-red-600 mt-0.5">{error}</p>
            <button onClick={reset} className="mt-2 text-sm text-red-700 underline hover:no-underline">Try again</button>
          </div>
        </div>
      )}

      {/* Result */}
      {state === "result" && result && (
        <div className="space-y-6" aria-live="polite">
          {/* Summary */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <h2 className="font-bold text-indigo-900 text-lg mb-2">Document Summary</h2>
            <p className="text-indigo-800 text-sm leading-relaxed">{result.summary}</p>
            <p className="text-xs text-indigo-500 mt-3 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              {result.processingNote}
            </p>
          </div>

          {/* Red flags */}
          {result.redFlags.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h2 className="font-bold text-red-800 text-base mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                {result.redFlags.length} Red Flag{result.redFlags.length !== 1 ? "s" : ""} Found
              </h2>
              <ul className="space-y-2">
                {result.redFlags.map((flag, i) => (
                  <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" aria-hidden="true" />
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Clause-by-clause */}
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-3">
              Clause-by-Clause Explanation ({result.clauses.length})
            </h2>
            <div className="space-y-3">
              {result.clauses.map((clause, i) => (
                <ClauseCard key={i} clause={clause} />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={reset}
              className="flex-1 border border-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Explain Another Document
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-colors text-sm"
            >
              Print / Save as PDF
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            PlainDoc explains documents in plain language. This is not legal advice.
            For important decisions, consult a licensed attorney.
          </p>
        </div>
      )}
    </section>
  );
}
