import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Simple Process
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            From your first call to the final check — here&apos;s what to expect when you work with us.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-[2px] bg-border" />
            <div className="grid grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative text-center">
                  <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg">
                    <span className="text-2xl font-bold text-accent">{step.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, idx) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-lg font-bold text-accent">{step.number}</span>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-border my-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-base font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
