import { MessageSquare, Search, ClipboardCheck, Calculator, MapPinned, Clock } from "lucide-react";
import { whyUsPoints } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Search, ClipboardCheck, Calculator, MapPinned, Clock,
};

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-white" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Elite Star Roofing WA
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We focus on doing roofing work properly — from the initial assessment to the final check.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPoints.map((point) => {
            const Icon = iconMap[point.icon] || MessageSquare;
            return (
              <div
                key={point.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
