"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="border border-border rounded-xl overflow-hidden bg-white hover:border-accent/30 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <span className="text-base font-semibold text-primary pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180 text-accent" : ""
              }`}
            />
          </button>
          <div
            id={`faq-answer-${idx}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            role="region"
            aria-labelledby={`faq-question-${idx}`}
          >
            <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
