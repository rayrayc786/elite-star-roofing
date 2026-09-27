import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Elite Star Roofing WA provides professional roofing services across Western Australia.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Service Areas</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            We provide professional roofing services across Western Australia. Find your local area below.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-warm-white border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <MapPin className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-sm text-text-muted mb-4">{area.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      View Location <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Service Area Map</h2>
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
              <span className="text-sm text-text-muted">[Google Maps / Service Area Map Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
