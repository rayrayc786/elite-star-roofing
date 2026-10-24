"use client";

import { useState } from "react";
import {
  CheckCircle2,
  MapPin,
  Quote,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { testimonials } from "@/lib/data";

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const avatarColors = [
  "bg-blue-600 text-white",
  "bg-emerald-600 text-white",
  "bg-amber-600 text-white",
  "bg-indigo-600 text-white",
  "bg-rose-600 text-white",
  "bg-teal-600 text-white",
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Customer Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 mb-4 font-subheading">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-glint italic uppercase tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Real feedback from homeowners across Perth, Canning Vale, Mandurah, Bunbury, and surrounding Western Australia suburbs.
          </p>

          {/* Social Proof Trust Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 bg-warm-white border border-border/80 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2">
              <GoogleLogo className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold text-primary">Google Reviews</span>
            </div>
            <div className="h-4 w-[1px] bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <StarRating count={5} />
              <span className="text-sm font-extrabold text-primary">5.0 / 5.0</span>
            </div>
            <div className="h-4 w-[1px] bg-border hidden sm:block" />
            <span className="text-xs font-semibold text-text-muted">
              50+ Verified WA Homeowner Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((item, index) => {
            const initials = item.name
              .split(" ")
              .filter(Boolean)
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            const avatarBg = avatarColors[index % avatarColors.length];

            return (
              <div
                key={item.id}
                className="group bg-warm-white border border-border/90 hover:border-accent/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Quote watermark icon */}
                <Quote className="w-10 h-10 text-accent/10 absolute top-5 right-5 pointer-events-none group-hover:text-accent/20 transition-colors" />

                <div>
                  {/* Rating + Verified badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <StarRating count={item.rating} />
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified WA Review
                    </span>
                  </div>

                  {/* Service tag */}
                  <div className="mb-3">
                    <span className="text-xs font-bold text-accent tracking-wide uppercase">
                      {item.service}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm text-text-muted leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer Profile */}
                <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center shrink-0 shadow-sm ${avatarBg}`}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-primary group-hover:text-accent transition-colors"
                        style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-xs text-text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-accent shrink-0" />
                        <span>
                          {item.suburb}, {item.state}
                        </span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-text-muted/70 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Collapse Button */}
        {testimonials.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-warm-white border border-border text-primary font-bold text-sm hover:border-accent hover:text-accent hover:shadow-md transition-all duration-200"
            >
              <span>{showAll ? "Show Featured Reviews" : `View All Reviews (${testimonials.length})`}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Bottom Trust Badges */}
        <div className="mt-16 pt-10 border-t border-border/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4
              className="text-sm font-bold text-primary uppercase tracking-tight mb-1"
              style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
            >
              10-Year Warranty
            </h4>
            <p className="text-xs text-text-muted">On full roof restorations & pointing</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4
              className="text-sm font-bold text-primary uppercase tracking-tight mb-1"
              style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
            >
              Licensed & Insured
            </h4>
            <p className="text-xs text-text-muted">Full public liability coverage</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4
              className="text-sm font-bold text-primary uppercase tracking-tight mb-1"
              style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
            >
              Clean Site Guarantee
            </h4>
            <p className="text-xs text-text-muted">No broken tiles or debris left behind</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4
              className="text-sm font-bold text-primary uppercase tracking-tight mb-1"
              style={{ fontFamily: "var(--font-montserrat)", fontStyle: "normal" }}
            >
              100% Free Quotes
            </h4>
            <p className="text-xs text-text-muted">Honest on-roof inspections with photos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
