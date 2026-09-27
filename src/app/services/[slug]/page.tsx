import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{service.name}</h1>
          <p className="text-lg text-white/70 max-w-2xl mb-8">{service.description}</p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all"
          >
            {service.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problems This Service Addresses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                Common Problems
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4">
                When You May Need {service.name}
              </h2>
              <p className="text-text-muted mb-6">
                If you&apos;re experiencing any of these issues, our {service.name.toLowerCase()} service can help.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.problems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3 p-3 bg-warm-white rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl aspect-[4/3] flex items-center justify-center border border-border">
              <p className="text-sm text-text-muted">[Service image placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">
              How Our {service.name} Works
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {service.processSteps.map((step, idx) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-lg font-bold text-accent">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  {idx < service.processSteps.length - 1 && <div className="w-[2px] flex-1 bg-border my-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Results
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {service.name} Examples
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-warm-white border border-border rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-sm text-text-muted">[Project photo placeholder]</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-primary">[Project Title]</h3>
                  <p className="text-sm text-text-muted">[Suburb, WA] • {service.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-light-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4">
                {service.name} Questions
              </h2>
            </div>
            <FAQAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-warm-white border border-border rounded-xl p-5 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-1">
                  {s.name}
                </h3>
                <p className="text-sm text-text-muted mb-3">{s.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${service.name}?`} description={`Get a free, no-obligation quote for our ${service.name.toLowerCase()} service.`} />
    </>
  );
}
