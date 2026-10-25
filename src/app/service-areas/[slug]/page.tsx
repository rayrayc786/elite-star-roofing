import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Shield, Award, CheckCircle } from "lucide-react";
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
    title: `Roofing Services in ${area.name} | Elite Star Roofing`,
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
            <h1 className="text-4xl lg:text-5xl font-bold text-cream font-glint italic uppercase">Roofing in {area.name}</h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mb-8">{area.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-md shadow-accent/20"
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
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">Our Services</span>
            <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">What We Do in {area.name}</h2>
            <p className="text-text-muted max-w-2xl mx-auto">We provide our full range of 5 professional roofing services to residential and commercial properties in {area.name} and surrounding areas.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="bg-white border border-border hover:border-accent/40 rounded-xl p-5 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-primary mb-2 font-glint italic">{service.name}</h3>
                  <p className="text-xs text-text-muted mb-4">{service.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">Learn More <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust & Coverage Highlights */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
                Local Expertise
              </span>
              <h2 className="text-3xl font-bold text-primary mb-6 font-glint italic uppercase">Your Local {area.name} Roofers</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                As a local Western Australian roofing specialist, we understand the specific environmental challenges that {area.name} roofs endure — from intense summer heat and coastal winds to winter downpours.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Shield, text: "Fully qualified & insured roofing specialists with public liability coverage" },
                  { icon: Award, text: "Premium Australian-tested materials built for WA conditions" },
                  { icon: MapPin, text: "Fast local response times and reliable mobile dispatch" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text text-sm font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              {area.suburbs && area.suburbs.length > 0 && (
                <div className="p-5 bg-white rounded-xl border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Suburbs Serviced Across {area.name}:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.suburbs.map((suburb) => (
                      <span key={suburb} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-warm-white text-text-muted rounded-md border border-border">
                        <CheckCircle className="w-3 h-3 text-accent" /> {suburb}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
              <Image
                src={area.image || "/images/web/IMG_2870.jpg"}
                alt={`Elite Star Roofing work in ${area.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Need roofing work in ${area.name}?`} />
    </>
  );
}
