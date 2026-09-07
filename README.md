# PlainDoc

**Free plain-language explainer for legal documents.** Paste any rental agreement, medical bill, terms and conditions, employment contract, loan agreement, or insurance policy and get a clause-by-clause explanation in plain English.

## Quick Start

```bash
npm install
# .env.local is already scaffolded — see Configuration below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Configuration

### 1. Add your LLM API key

Edit `.env.local`:

```env
LLM_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com   # used for sitemap + canonical URLs
```

### 2. Wire up the LLM call

Open `src/lib/llm.ts` and replace the `callLLM()` stub with a real API call. The file contains ready-to-use code snippets for both Anthropic (Claude) and OpenAI (GPT). The function signature and JSON return format must remain unchanged.

**Anthropic example (recommended):**
```bash
npm install @anthropic-ai/sdk
```
Then in `callLLM()` inside `src/lib/llm.ts`:
```ts
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic({ apiKey: process.env.LLM_API_KEY });
const message = await client.messages.create({
  model: process.env.LLM_MODEL ?? "claude-sonnet-4-6",
  max_tokens: 4096,
  messages: [{ role: "user", content: prompt }],
});
return message.content[0].type === "text" ? message.content[0].text : "";
```

**OpenAI example:**
```bash
npm install openai
```
Then in `callLLM()`:
```ts
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.LLM_API_KEY });
const completion = await openai.chat.completions.create({
  model: process.env.LLM_MODEL ?? "gpt-4o",
  messages: [{ role: "user", content: prompt }],
});
return completion.choices[0].message.content ?? "";
```

### 3. (Optional) Enable image OCR

Open `src/lib/documentExtraction.ts` and follow the comments in `extractFromImage()` to wire up Tesseract.js (free, local) or Google Cloud Vision (cloud, accurate).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (SSG)
│   ├── layout.tsx                  # Root layout — Navigation + Footer + global metadata
│   ├── explain/[type]/page.tsx     # Document-type landing pages (SSG, 7 pages)
│   ├── glossary/
│   │   ├── page.tsx                # Glossary index (SSG)
│   │   └── [term]/page.tsx         # Individual term pages (SSG, 10 pages)
│   ├── how-it-works/page.tsx       # How-it-works page (SSG)
│   ├── about/page.tsx              # About page (SSG)
│   ├── privacy/page.tsx            # Privacy policy (SSG)
│   ├── api/explain/route.ts        # POST /api/explain — document extraction + LLM call
│   ├── sitemap.ts                  # Auto-generated sitemap.xml
│   └── robots.ts                   # Auto-generated robots.txt
├── components/
│   ├── ExplainTool.tsx             # Client component: file upload / paste + results
│   ├── Navigation.tsx              # Sticky header + desktop dropdown + mobile menu
│   ├── Footer.tsx                  # Footer with all internal links (good for SEO)
│   └── JsonLd.tsx                  # JSON-LD structured data helpers (FAQPage, HowTo, etc.)
└── lib/
    ├── documentTypes.ts            # All document-type data + 600-word SEO content per type
    ├── glossaryTerms.ts            # All glossary term data + full definitions
    ├── llm.ts                      # LLM stub — wire up your API key here
    └── documentExtraction.ts       # PDF extraction (pdf-parse) + OCR placeholder
```

---

## SEO Features

| Feature | Implementation |
|---|---|
| Unique title + meta description per page | `generateMetadata` in every page file |
| Canonical URLs | Set via `NEXT_PUBLIC_SITE_URL` in each page's metadata |
| Open Graph + Twitter Card | Root layout defaults + per-page overrides |
| JSON-LD structured data | `FAQPage`, `HowTo`, `WebApplication`, `BreadcrumbList` schemas |
| `sitemap.xml` (auto) | `src/app/sitemap.ts` — includes all 28 routes |
| `robots.txt` (auto) | `src/app/robots.ts` |
| Static generation for all content pages | `generateStaticParams` on both dynamic routes |
| Semantic HTML (proper h1→h2→h3 hierarchy) | Enforced in every page component |
| Programmatic landing pages | 7 document types at `/explain/[type]` |
| Long-tail keyword glossary pages | 10 terms at `/glossary/[term]` |
| Internal linking | Footer, related-terms sections, glossary ↔ document types |
| Security headers | `next.config.ts` |
| Font display swap | `display: "swap"` on Google Fonts |

---

## Adding More Document Types (Scale SEO)

1. Open `src/lib/documentTypes.ts`
2. Add a new object to the `documentTypes` array following the existing pattern
3. Deploy — the page, sitemap entry, nav link, and homepage card all appear automatically

**Minimum fields required:**
- `slug` — URL-safe identifier (e.g., `"non-disclosure-agreement"`)
- `name`, `emoji`, `h1`, `title`, `metaDescription`
- `intro` — 2–3 sentence hook
- `sections` — array of `{ heading, body }` — aim for 6+ sections (600+ words total)
- `faqs` — 3–4 Q&A pairs for FAQPage schema
- `howToSteps` — 5–7 steps for HowTo schema
- `relatedGlossaryTerms`, `relatedDocTypes` — slugs for internal linking

## Adding More Glossary Terms (Scale SEO)

1. Open `src/lib/glossaryTerms.ts`
2. Add a new object to the `glossaryTerms` array
3. Deploy — the page, sitemap entry, and footer link appear automatically

**Minimum fields required:**
- `slug`, `term`, `shortDefinition`
- `title`, `metaDescription`
- `definition` — formal/legal explanation
- `plainEnglish` — simple explanation
- `example` — real-world scenario
- `relatedTerms`, `relatedDocTypes` — slugs for internal linking

---

## Deployment

### Vercel (recommended — zero config)
```bash
npm install -g vercel
vercel
```
Set `LLM_API_KEY` and `NEXT_PUBLIC_SITE_URL` in the Vercel dashboard under **Project → Settings → Environment Variables**.

### Self-hosted (Node.js)
```bash
npm run build
npm start
```
Set all environment variables before running.

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS** (utility-first, mobile-first)
- **pdf-parse** (server-side PDF text extraction)
- **lucide-react** (icons)
- LLM: bring your own key (Anthropic Claude, OpenAI GPT, or any provider)

## License

MIT
