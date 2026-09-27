import Link from "next/link";
import {
  Droplets, Sticker, Hammer, AlertTriangle, Clock, Paintbrush, CloudRain, Search,
} from "lucide-react";
import { problemCards } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "Roof leaking?": Droplets,
  "Water stains?": Sticker,
  "Damaged tiles?": Hammer,
  "Cracked surfaces?": AlertTriangle,
  "Old-looking roof?": Clock,
  "Faded roof?": Paintbrush,
  "Storm damage?": CloudRain,
  "Unsure where the leak is?": Search,
};

export default function ProblemCards() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="Roof problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Identify Your Problem
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Not Sure What&apos;s Wrong With Your Roof?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Select the problem that matches your situation and we&apos;ll point you to the right service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemCards.map((card) => {
            const Icon = iconMap[card.problem] || AlertTriangle;
            return (
              <Link
                key={card.problem}
                href={`/services/${card.serviceSlug}`}
                className="group bg-warm-white border border-border rounded-xl p-5 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <Icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                      {card.problem}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
