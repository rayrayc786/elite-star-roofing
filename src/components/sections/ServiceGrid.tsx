import Link from "next/link";
import { ArrowRight, Wrench, Droplets, RotateCcw, Paintbrush, Wind } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Droplets,
  RotateCcw,
  Paintbrush,
  Wind,
};

export default function ServiceGrid() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-glint italic uppercase">
            Professional Roofing Services
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            We specialise in five core roofing services to address your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white border border-border hover:border-accent/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-accent/80 font-subheading">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors font-glint italic">
                  {service.name}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {service.tagline}
                </p>

                {/* Common signs */}
                <div className="pt-3 border-t border-border/60 mb-4 flex-1">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-subheading">
                    Common Signs:
                  </p>
                  <ul className="space-y-1.5">
                    {service.problems.slice(0, 2).map((problem) => (
                      <li key={problem} className="text-xs text-text-muted flex items-start gap-1.5 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors mt-auto">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
