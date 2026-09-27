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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Find answers to common questions about our roofing services, pricing, and process.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter((f) => f.category === category);
              if (categoryFaqs.length === 0) return null;
              return (
                <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                  <h2 className="text-2xl font-bold text-primary mb-6">{category} Questions</h2>
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
