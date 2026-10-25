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
          <h1 className="text-4xl lg:text-5xl font-bold text-cream mb-4 font-glint italic uppercase">Our Service Areas</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            We provide professional roofing services across Western Australia. Find your local area below.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.filter((a) => a.slug !== "perth-canning-vale").map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <MapPin className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors font-glint italic">
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

          {/* Interactive Service Area Map */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 font-subheading">
                Western Australia Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-glint italic uppercase">
                Service Area Map &amp; Coverage Zones
              </h2>
              <p className="text-sm text-text-muted mt-2 max-w-xl mx-auto">
                Operating from Bibra Lake across the entire Perth Metropolitan area, Mandurah &amp; Peel region, down to Bunbury and the South West.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white">
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full">
                <iframe
                  title="Elite Star Roofing Service Areas WA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848722.9515915783!2d115.300000!3d-32.600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df5100!2sWestern%20Australia!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-warm-white border-t border-border text-center text-xs">
                <div>
                  <p className="font-bold text-primary">Bibra Lake Base</p>
                  <p className="text-text-muted mt-0.5">HQ &amp; Rapid Mobile Dispatch</p>
                </div>
                <div>
                  <p className="font-bold text-primary">Perth Metropolitan</p>
                  <p className="text-text-muted mt-0.5">North &amp; South of the River</p>
                </div>
                <div>
                  <p className="font-bold text-primary">Mandurah &amp; Peel</p>
                  <p className="text-text-muted mt-0.5">Coastal Salt-Zone Roofing</p>
                </div>
                <div>
                  <p className="font-bold text-primary">Bunbury &amp; South West</p>
                  <p className="text-text-muted mt-0.5">Regional &amp; Coastal WA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
