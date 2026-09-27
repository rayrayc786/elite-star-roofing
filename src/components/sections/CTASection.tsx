import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { businessInfo } from "@/lib/data";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "light";
}

export default function CTASection({
  title = "Ready to Fix Your Roof?",
  description = "Get in touch for a free, no-obligation quote. We'll assess your roof and provide clear recommendations.",
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "default";

  return (
    <section
      className={`py-20 lg:py-24 ${isDark ? "bg-primary" : "bg-light-gray"}`}
      aria-label="Call to action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl lg:text-4xl font-bold mb-4 ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-white/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl text-base"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          {businessInfo.phoneRaw && (
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all text-base ${
                isDark
                  ? "border-2 border-white/30 text-white hover:bg-white/10"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
