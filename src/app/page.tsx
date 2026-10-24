import HeroSection from "@/components/sections/HeroSection";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ServiceComparison from "@/components/sections/ServiceComparison";
import ProblemCards from "@/components/sections/ProblemCards";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyUs from "@/components/sections/WhyUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Link from "next/link";
import Image from "next/image";
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

      <TestimonialsSection />

      {/* Resources Preview */}
      <section className="py-20 lg:py-28 bg-light-gray" aria-label="Resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
                Resources
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-glint italic uppercase">
                Roofing Tips & Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors mt-4 sm:mt-0"
            >
              View All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            {blogPosts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-primary/5 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-3 uppercase tracking-wider">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2 font-glint italic">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="mt-auto pt-3 border-t border-border/40">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover inline-flex items-center gap-1">
                      Read Guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
              Service Areas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-glint italic uppercase">
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
                <MapPin className="w-3.5 h-3.5 text-accent" />
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
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-glint italic uppercase">
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
