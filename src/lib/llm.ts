// ============================================================
// LLM Integration — wire up your API key in .env.local:
//   LLM_API_KEY=your_key_here
//   LLM_MODEL=claude-opus-4-8   (optional override)
// ============================================================

import Anthropic from "@anthropic-ai/sdk";

export type ExplainedClause = {
  title: string;
  original: string;
  plainEnglish: string;
  severity: "normal" | "warning" | "caution";
  tip?: string;
};

export type ExplanationResult = {
  documentType: string;
  summary: string;
  clauses: ExplainedClause[];
  redFlags: string[];
  processingNote: string;
};

async function callLLM(prompt: string): Promise<string> {
  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey || apiKey === "your_llm_api_key_here") {
    return JSON.stringify(MOCK_RESPONSE);
  }

  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: process.env.LLM_MODEL ?? "claude-opus-4-8",
    max_tokens: 4096,
    system:
      "You are a plain-language legal document explainer. Respond with valid JSON only — no markdown, no code fences, no prose outside the JSON object.",
    messages: [{ role: "user", content: prompt }],
  });

  const block = message.content[0];
  return block.type === "text" ? block.text : "";
}

// ── MAIN EXPORT ──────────────────────────────────────────────

export async function explainDocument(
  text: string,
  documentType: string
): Promise<ExplanationResult> {
  if (!text || text.trim().length < 50) {
    throw new Error("Document text is too short to analyze. Please paste the full document.");
  }

  const prompt = buildPrompt(text, documentType);
  const raw = await callLLM(prompt);

  try {
    const parsed = JSON.parse(raw) as ExplanationResult;
    return { ...parsed, documentType };
  } catch {
    // If the LLM returns prose instead of JSON, wrap it gracefully
    return {
      documentType,
      summary: raw.slice(0, 500),
      clauses: [],
      redFlags: [],
      processingNote: "Response was returned in plain text. Configure LLM to return JSON.",
    };
  }
}

// ── PROMPT BUILDER ───────────────────────────────────────────

function buildPrompt(text: string, documentType: string): string {
  return `You are a plain-language legal document explainer. Analyze the following ${documentType} and return a JSON object matching this exact TypeScript type:

{
  "summary": string,           // 2-3 sentence plain-English overview
  "clauses": [
    {
      "title": string,         // Short name for this clause
      "original": string,      // Quote the relevant original text (max 200 chars)
      "plainEnglish": string,  // Plain-language explanation (1-3 sentences)
      "severity": "normal" | "warning" | "caution",
      "tip": string | undefined  // Optional practical tip for the reader
    }
  ],
  "redFlags": string[],        // Array of concerning clauses (plain English, one sentence each)
  "processingNote": string     // Always: "Document processed in memory. No data retained."
}

Severity guide:
- "normal": Standard clause, nothing unusual
- "caution": Worth understanding but not alarming
- "warning": Potentially unfavorable — reader should pay close attention or seek advice

Document type: ${documentType}

Document text:
"""
${text.slice(0, 12000)}
"""

Return ONLY valid JSON. No markdown, no code fences, no explanation outside the JSON.`;
}

// ── MOCK RESPONSE (used when LLM is not yet wired up) ────────

const MOCK_RESPONSE: ExplanationResult = {
  documentType: "document",
  summary:
    "This is a stub response — your LLM is not yet connected. Add your LLM_API_KEY to .env.local and wire up the callLLM() function in src/lib/llm.ts to get real explanations.",
  clauses: [
    {
      title: "LLM Not Connected",
      original: "[Your document text will appear here]",
      plainEnglish:
        "PlainDoc received your document, but the AI explanation engine is not yet wired up. See src/lib/llm.ts for instructions on connecting your LLM API key.",
      severity: "caution",
      tip: "Add LLM_API_KEY=your_key to .env.local, then update the callLLM() function in src/lib/llm.ts.",
    },
    {
      title: "Example Clause — Security Deposit",
      original:
        "Tenant shall pay a security deposit equal to two months' rent upon execution of this lease.",
      plainEnglish:
        "You need to pay two months' rent as a deposit upfront when you sign. This is held by the landlord and returned (minus any valid deductions) after you move out.",
      severity: "normal",
      tip: "Request a receipt for your security deposit and document the apartment's condition with photos on move-in day.",
    },
    {
      title: "Example Clause — Arbitration",
      original:
        "Any dispute arising under this agreement shall be resolved by binding arbitration. The parties waive any right to a jury trial.",
      plainEnglish:
        "If you have a legal dispute with the other party, you can't take them to court or have a jury decide. Instead, a private arbitrator will hear the case and their decision is final.",
      severity: "warning",
      tip: "Mandatory arbitration clauses typically favor the party that uses them regularly. Consider negotiating this clause if possible.",
    },
  ],
  redFlags: [
    "Mandatory arbitration clause eliminates your right to a jury trial.",
    "This is a mock response — real red flags will appear once the LLM is connected.",
  ],
  processingNote: "Document processed in memory. No data retained.",
};
