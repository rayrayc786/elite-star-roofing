import Link from "next/link";
import { ArrowRight, Wrench, Droplets, RotateCcw, Paintbrush } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Droplets,
  RotateCcw,
  Paintbrush,
};

export default function ServiceGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Professional Roofing Services
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            We specialise in four core roofing services to address your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-warm-white border border-border rounded-2xl p-6 lg:p-8 hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shrink-0">
                  <Icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                  {service.tagline}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
