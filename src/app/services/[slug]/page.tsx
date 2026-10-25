import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import BeforeAfterCompare from "@/components/ui/BeforeAfterCompare";
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
          <h1 className="text-4xl lg:text-5xl font-bold text-cream mb-4 font-glint italic uppercase">{service.name}</h1>
          <p className="text-lg text-white/70 max-w-2xl mb-8">{service.description}</p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/25"
          >
            {service.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problems This Service Addresses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
                Common Problems
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-md">
              <Image
                src={service.image}
                alt={`${service.name} Work`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">
              How Our {service.name} Works
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {service.processSteps.map((step, idx) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-lg font-bold text-accent font-glint italic">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  {idx < service.processSteps.length - 1 && <div className="w-[2px] flex-1 bg-border my-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-primary mb-1 font-glint italic">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Cleaning Interactive Before & After Feature */}
      {service.slug === "gutter-cleaning" && (
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 font-subheading">
                Real Results
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-glint italic uppercase">
                Gutter Clearing Before &amp; After
              </h2>
              <p className="text-sm text-text-muted mt-2">
                Slide back and forth to see the difference after our deep clearing and downpipe flushing.
              </p>
            </div>
            <BeforeAfterCompare
              beforeImage="/images/web/gutter_before.jpg"
              afterImage="/images/web/gutter_after.jpg"
              beforeLabel="Clogged Gutters"
              afterLabel="Cleared &amp; Flushed"
              caption="Before &amp; After: Complete organic debris removal and downpipe blockage flush in Western Australia."
            />
          </div>
        </section>
      )}

      {/* Real Project Gallery */}
      {((service.galleryItems && service.galleryItems.length > 0) || (service.galleryImages && service.galleryImages.length > 0)) && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
                Recent Projects
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">
                {service.name} Work Gallery
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.galleryItems && service.galleryItems.length > 0
                ? service.galleryItems.map((item, i) => (
                    <div key={i} className="bg-warm-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.suburb}, WA`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-primary font-glint italic">{item.title}</h3>
                        <p className="text-xs text-text-muted">{item.suburb}, Western Australia</p>
                      </div>
                    </div>
                  ))
                : service.galleryImages?.map((imgUrl, i) => (
                    <div key={i} className="bg-warm-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={imgUrl}
                          alt={`${service.name} project photo ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-primary font-glint italic">{service.name} Project #{i + 1}</h3>
                        <p className="text-xs text-text-muted">Western Australia Job Site</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-light-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">
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
          <h2 className="text-2xl font-bold text-primary mb-8 font-glint italic uppercase">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-warm-white border border-border hover:border-accent/40 rounded-xl p-5 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-1 font-glint italic">
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
