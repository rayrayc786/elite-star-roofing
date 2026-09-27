import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { services } from "@/lib/data";

export default function ServiceComparison() {
  return (
    <section className="py-20 lg:py-28 bg-light-gray" aria-label="Service comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Find the Right Service
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Does Your Roof Need?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Not sure which service you need? Compare our core services to find the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{service.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                {service.tagline}
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Common Signs:
                </p>
                <ul className="space-y-1.5 mb-4">
                  {service.problems.slice(0, 3).map((problem) => (
                    <li key={problem} className="text-sm text-text-muted flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure CTA */}
        <div className="bg-primary rounded-2xl p-8 lg:p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-accent" />
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
            Not sure which service you need?
          </h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            No problem. Get in touch and we&apos;ll help you figure out what your roof needs.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all"
          >
            Talk to Elite Star Roofing WA
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
