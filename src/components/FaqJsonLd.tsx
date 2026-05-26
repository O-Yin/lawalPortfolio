import { FAQS, type FAQ } from "@/app/constants";

interface FaqJsonLdProps {
  items?: FAQ[];
}

export default function FaqJsonLd({ items = FAQS }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as raw text in an ld+json script tag.
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
