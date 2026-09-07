// Server component — renders JSON-LD <script> tags for structured data.
// Pass pre-built schema objects; this component handles serialization only.

type JsonLdProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ schema }: JsonLdProps) {
  const data = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {data.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Using dangerouslySetInnerHTML is safe here: we control the input and
          // JSON.stringify escapes any user-supplied strings before they reach the DOM.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

// ── Schema builder helpers ────────────────────────────────────

export function buildWebApplicationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PlainDoc",
    url: siteUrl,
    description:
      "Free AI-powered tool that explains legal documents — rental agreements, medical bills, terms and conditions, employment contracts, and more — in plain English.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Rental agreement explainer",
      "Medical bill decoder",
      "Terms and conditions summarizer",
      "Employment contract analyzer",
      "Loan agreement explainer",
      "Insurance policy explainer",
    ],
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildHowToSchema(name: string, steps: string[], description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
