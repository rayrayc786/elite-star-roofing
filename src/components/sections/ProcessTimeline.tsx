import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-glint italic uppercase">
            Our Simple Process
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            From your first call to the final check — here&apos;s what to expect when you work with us.
          </p>
        </div>

        {/* Single Responsive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-border/80 rounded-2xl p-6 shadow-xs hover:border-accent/40 hover:shadow-md transition-all flex flex-col text-left lg:text-center relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary border border-white/10 flex items-center justify-center mb-4 lg:mx-auto shadow-md">
                <span className="text-xl font-bold text-accent font-glint italic">{step.number}</span>
              </div>
              <h3 className="text-base font-bold text-primary mb-2 font-glint italic">{step.title}</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
