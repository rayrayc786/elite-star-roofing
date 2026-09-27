import HeroSection from "@/components/sections/HeroSection";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ServiceComparison from "@/components/sections/ServiceComparison";
import ProblemCards from "@/components/sections/ProblemCards";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyUs from "@/components/sections/WhyUs";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { faqs, blogPosts, serviceAreas } from "@/lib/data";

export default function HomePage() {
  const homeFaqs = faqs.filter((f) => f.category === "General").slice(0, 4);

  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <ServiceComparison />
      <ProblemCards />
      <BeforeAfterSection />
      <ProcessTimeline />
      <WhyUs />

      {/* Testimonials Placeholder */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-warm-white border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4 italic">
                  &quot;[Customer testimonial placeholder — replace with real reviews when available.]&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary">[Customer Name]</p>
                  <p className="text-xs text-text-muted">[Suburb, WA]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-20 lg:py-28 bg-light-gray" aria-label="Resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                Resources
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Roofing Tips & Guides
              </h2>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors mt-4 sm:mt-0"
            >
              View All Resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-sm text-text-muted">[Featured image placeholder]</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Service areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Service Areas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Serving Western Australia
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We provide professional roofing services across our WA service area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-warm-white border border-border rounded-lg text-sm text-text hover:border-accent hover:text-accent transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-light-gray" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Common Questions
            </h2>
          </div>
          <FAQAccordion items={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
