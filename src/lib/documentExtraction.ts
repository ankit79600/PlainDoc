// Document text extraction utilities
// PDF: uses pdf-parse (install: npm install pdf-parse)
// Images: placeholder for OCR — wire up Tesseract.js, Google Vision, or similar

export type ExtractionResult = {
  text: string;
  pageCount?: number;
  method: "text" | "pdf" | "ocr-placeholder";
  warning?: string;
};

// ── PDF EXTRACTION ────────────────────────────────────────────

export async function extractFromPdf(buffer: Buffer): Promise<ExtractionResult> {
  try {
    const { getDocumentProxy, extractText } = await import("unpdf");
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const { totalPages, text } = await extractText(pdf, { mergePages: true });
    return {
      text: text as string,
      pageCount: totalPages,
      method: "pdf",
    };
  } catch (err) {
    throw new Error(
      `Failed to parse PDF: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

// ── IMAGE OCR PLACEHOLDER ─────────────────────────────────────
// TODO: Replace with real OCR.
// Options:
//   1. Tesseract.js (local, free):
//      npm install tesseract.js
//      import { createWorker } from "tesseract.js";
//      const worker = await createWorker("eng");
//      const { data: { text } } = await worker.recognize(buffer);
//      await worker.terminate();
//
//   2. Google Cloud Vision API (cloud, accurate, costs money):
//      const vision = new ImageAnnotatorClient({ credentials: ... });
//      const [result] = await vision.textDetection(buffer);
//
//   3. OpenAI Vision (GPT-4o):
//      Send image as base64 in a vision message.

export async function extractFromImage(_buffer: Buffer): Promise<ExtractionResult> {
  return {
    text: "",
    method: "ocr-placeholder",
    warning:
      "Image OCR is not yet configured. Please paste your document text manually, or upload a PDF instead. See src/lib/documentExtraction.ts to wire up an OCR provider.",
  };
}

// ── ROUTER: choose extractor based on MIME type ───────────────

export async function extractTextFromFile(
  buffer: Buffer,
  mimeType: string
): Promise<ExtractionResult> {
  if (mimeType === "application/pdf") {
    return extractFromPdf(buffer);
  }

  if (mimeType.startsWith("image/")) {
    return extractFromImage(buffer);
  }

  // Plain text or unknown — return as-is
  return {
    text: buffer.toString("utf-8"),
    method: "text",
  };
}
