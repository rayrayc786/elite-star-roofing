import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Droplets, RotateCcw, Paintbrush } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { services } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Roofing Services",
  description:
    "Professional roofing services: Roof Repair, Leak Detection, Roof Restoration, and Roof Painting. Get a free quote from Elite Star Roofing WA.",
};

const iconMap: Record<string, React.ElementType> = {
  Wrench, Droplets, RotateCcw, Paintbrush,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Roofing Services</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            We specialise in four core roofing services designed to address your specific needs. From repairs to full restorations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-warm-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {service.name}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Common signs:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {service.problems.slice(0, 4).map((p) => (
                            <li key={p} className="text-xs text-text-muted flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent mt-2">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection variant="light" title="Need Help Choosing?" description="Not sure which service you need? Contact us and we'll help you find the right solution for your roof." />
    </>
  );
}
