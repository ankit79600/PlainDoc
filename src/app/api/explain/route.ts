import { NextRequest, NextResponse } from "next/server";
import { explainDocument } from "@/lib/llm";
import { extractTextFromFile } from "@/lib/documentExtraction";

export const runtime = "nodejs"; // required for pdf-parse (uses Node.js Buffer)
export const maxDuration = 60;   // allow up to 60s for LLM calls

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const documentType = String(formData.get("documentType") ?? "document");
    const textField = formData.get("text");
    const fileField = formData.get("file");

    let documentText = "";
    let warning: string | undefined;

    if (fileField && fileField instanceof Blob) {
      // File upload path
      const arrayBuffer = await fileField.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const mimeType = fileField.type || "application/octet-stream";

      if (buffer.byteLength > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File must be under 10 MB." },
          { status: 400 }
        );
      }

      const extraction = await extractTextFromFile(buffer, mimeType);
      documentText = extraction.text;
      warning = extraction.warning;

      // If OCR returned nothing, ask the user to paste text instead
      if (!documentText.trim()) {
        return NextResponse.json(
          {
            error:
              warning ??
              "Could not extract text from this file. Please paste the document text manually.",
          },
          { status: 422 }
        );
      }
    } else if (typeof textField === "string" && textField.trim()) {
      // Plain text path
      documentText = textField;
    } else {
      return NextResponse.json(
        { error: "Please provide document text or upload a file." },
        { status: 400 }
      );
    }

    // Character limit guard — most LLMs handle ~12 k tokens comfortably
    if (documentText.length > 50_000) {
      documentText = documentText.slice(0, 50_000);
      warning = (warning ? warning + " " : "") + "Document was truncated to the first 50,000 characters.";
    }

    const result = await explainDocument(documentText, documentType);

    if (warning) {
      result.processingNote += ` Note: ${warning}`;
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("[/api/explain]", err);
    const message =
      err instanceof Error ? err.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
