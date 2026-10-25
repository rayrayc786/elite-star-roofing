import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about our roofing services, quotes, and processes.",
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-cream mb-4 font-glint italic uppercase">Frequently Asked Questions</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Find answers to common questions about our roofing services, pricing, and process across Western Australia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Jump Pills */}
          <div className="flex flex-wrap gap-2.5 mb-12 justify-center">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white hover:bg-accent hover:text-white text-text text-xs sm:text-sm font-semibold rounded-xl border border-border shadow-2xs transition-colors"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="space-y-14">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter((f) => f.category === category);
              if (categoryFaqs.length === 0) return null;
              return (
                <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-primary mb-6 font-glint italic uppercase">{category} Questions</h2>
                  <FAQAccordion items={categoryFaqs} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Still have questions?" description="We're here to help. Contact us directly and we'll answer any other questions you may have." />
    </>
  );
}
