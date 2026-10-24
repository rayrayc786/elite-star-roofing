import Link from "next/link";
import {
  Droplets,
  CloudRain,
  Hammer,
  ShieldAlert,
  Clock,
  Sun,
  Wind,
  Search,
  Waves,
  Filter,
  Sparkles,
  Layers,
  ArrowUpRight,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { problemCards, businessInfo } from "@/lib/data";

const serviceLabels: Record<string, string> = {
  "leak-detection": "Leak Detection",
  "roof-pointing": "Roof Pointing",
  "roof-repair": "Roof Repair",
  "roof-painting": "Roof Painting",
  "roof-restoration": "Roof Restoration",
  "roof-cleaning": "Roof Cleaning",
  "gutter-cleaning": "Gutter Cleaning",
};

const getProblemIcon = (problem: string): React.ElementType => {
  const p = problem.toLowerCase();
  if (p.includes("leak") && !p.includes("unsure")) return Droplets;
  if (p.includes("water") || p.includes("stain")) return CloudRain;
  if (p.includes("tile") || p.includes("broken")) return Hammer;
  if (p.includes("bedding") || p.includes("crack") || p.includes("surface")) return ShieldAlert;
  if (p.includes("ridge") || p.includes("cap")) return Layers;
  if (p.includes("fade") || p.includes("color") || p.includes("sun")) return Sun;
  if (p.includes("old") || p.includes("aging")) return Clock;
  if (p.includes("moss") || p.includes("lichen") || p.includes("clean") || p.includes("dirt")) return Sparkles;
  if (p.includes("storm") || p.includes("wind") || p.includes("hail")) return Wind;
  if (p.includes("unsure") || p.includes("where") || p.includes("find")) return Search;
  if (p.includes("gutter") || p.includes("overflow")) return Waves;
  if (p.includes("downpipe") || p.includes("block")) return Filter;
  return ShieldAlert;
};

export default function ProblemCards() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white relative overflow-hidden" aria-label="Roof problems diagnostic guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 mb-4">
            Diagnostic Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-glint italic uppercase tracking-tight">
            Not Sure What&apos;s Wrong With Your Roof?
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Select your symptom below to discover the exact recommended repair, cleaning, or restoration service.
          </p>
        </div>

        {/* 12-Card Symmetrical Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {problemCards.map((card) => {
            const Icon = getProblemIcon(card.problem);
            const serviceName = serviceLabels[card.serviceSlug] || "Roofing Service";

            return (
              <Link
                key={card.problem}
                href={`/services/${card.serviceSlug}`}
                className="group relative bg-white border border-border/80 rounded-2xl p-5 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Icon + Arrow indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent text-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-warm-white border border-border/60 flex items-center justify-center text-text-muted/50 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Problem Title & Description */}
                  <h3
                    className="text-sm sm:text-base font-bold text-primary mb-1.5 group-hover:text-accent transition-colors tracking-tight uppercase"
                    style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
                  >
                    {card.problem}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Bottom: Solution pill */}
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-text-muted group-hover:text-accent transition-colors">
                  <span className="text-text-muted group-hover:text-primary transition-colors">
                    Service: <span className="text-accent font-bold">{serviceName}</span>
                  </span>
                  <span className="flex items-center gap-0.5 font-bold text-accent">
                    View
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-border/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-primary font-montserrat mb-1">
              Can&apos;t pinpoint the exact issue or dealing with an urgent leak?
            </h4>
            <p className="text-sm text-text-muted">
              Our licensed Perth roof technicians conduct thorough on-roof diagnostics with honest, upfront quotes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            {businessInfo.phone && (
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-warm-white border border-border text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-all"
              >
                <PhoneCall className="w-4 h-4 text-accent" />
                <span>{businessInfo.phone}</span>
              </a>
            )}
            <Link
              href="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover shadow-md hover:shadow-lg transition-all"
            >
              <span>Book Roof Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
