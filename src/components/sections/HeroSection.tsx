"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Shield, FileText, MapPin, Award } from "lucide-react";
import { businessInfo } from "@/lib/data";

const trustIcons = [
  { icon: Shield, label: "Professional Roofing Services" },
  { icon: FileText, label: "Free Quotes" },
  { icon: MapPin, label: "Local WA Service" },
  { icon: Award, label: "Quality Workmanship" },
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you! We will be in touch shortly.");
  };

  return (
    <section className="relative bg-primary overflow-hidden" aria-label="Hero">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0">
        {/* Fallback background if video fails */}
        <div className="absolute inset-0 bg-primary" />
        
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          {/* Replace this src with your actual roofing video in the public folder */}
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Placeholder external video for demonstration */}
          <source src="https://player.vimeo.com/external/403362140.sd.mp4?s=f5e4bb507ec7941fb5d2b70ba5e917ad023199f3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
        
        {/* Decorative accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Copy */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Professional Roofing Services in WA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
              Reliable Roofing Solutions{" "}
              <span className="text-accent">Built to Protect</span>{" "}
              Your Home
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Roof repairs, leak detection, roof restoration, and roof painting.
              Professional service from a local WA roofing team you can trust.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-white/80">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl text-base"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              {businessInfo.phoneRaw && (
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              )}
            </div>
          </div>

          {/* Hero Lead Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl" id="hero-quote-form">
            <h2 className="text-xl font-bold text-primary mb-1">Request a Free Quote</h2>
            <p className="text-sm text-text-muted mb-6">
              Tell us about your roofing needs and we&apos;ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="hero-name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="hero-email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="hero-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="hero-suburb" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  Suburb / Address
                </label>
                <input
                  type="text"
                  id="hero-suburb"
                  value={formData.suburb}
                  onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                  className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Property address or suburb"
                />
              </div>
              <div>
                <label htmlFor="hero-service" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  Service Required *
                </label>
                <select
                  id="hero-service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="roof-repair">Roof Repair</option>
                  <option value="leak-detection">Leak Detection</option>
                  <option value="roof-restoration">Roof Restoration</option>
                  <option value="roof-painting">Roof Painting</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="hero-message" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="hero-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-light-gray border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Describe your roofing problem..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all shadow-md hover:shadow-lg text-base"
              >
                Request a Free Quote
              </button>
              <p className="text-xs text-text-muted text-center">
                No obligation. We&apos;ll respond as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
