import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Shield, Award } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { serviceAreas, businessInfo, services } from "@/lib/data";

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Roofing Services in ${area.name}`,
    description: area.description,
  };
}

export default async function ServiceAreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: area.name }]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Roofing in {area.name}</h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mb-8">{area.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            {businessInfo.phoneRaw && (
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Our Services</span>
            <h2 className="text-3xl font-bold text-primary mb-4">What We Do in {area.name}</h2>
            <p className="text-text-muted max-w-2xl mx-auto">We provide our full range of professional roofing services to residential properties in {area.name} and surrounding areas.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="bg-warm-white border border-border rounded-xl p-5 hover:border-accent hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-primary mb-2">{service.name}</h3>
                <p className="text-sm text-text-muted mb-4">{service.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn More <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Your Local {area.name} Roofers</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                As a local WA roofing company, we understand the specific challenges that {area.name} roofs face from our local climate and weather conditions.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Fully licensed and insured professionals" },
                  { icon: Award, text: "High-quality materials suited for WA weather" },
                  { icon: MapPin, text: "Prompt response times for local residents" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
              <span className="text-sm text-text-muted">[Local project/area image placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Need roofing work in ${area.name}?`} />
    </>
  );
}
