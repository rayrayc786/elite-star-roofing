"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { businessInfo } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch shortly.");
  };

  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Get in touch with Elite Star Roofing WA for inquiries, advice, or to schedule a service.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-text-muted mb-8">
                  Whether you have a question about our services or need immediate assistance, our team is ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">Phone</h3>
                    <p className="text-sm text-text-muted mb-2">Call us for immediate assistance.</p>
                    <a href={`tel:${businessInfo.phoneRaw}`} className="text-base font-semibold text-accent hover:text-accent-hover transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">Email</h3>
                    <p className="text-sm text-text-muted mb-2">Send us an email anytime.</p>
                    <a href={`mailto:${businessInfo.email}`} className="text-base font-semibold text-accent hover:text-accent-hover transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">Service Area</h3>
                    <p className="text-sm text-text-muted">Serving {businessInfo.city} and surrounding areas across {businessInfo.state}.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">Hours</h3>
                    <p className="text-sm text-text-muted">Mon - Fri: {businessInfo.openingHours.weekdays}</p>
                    <p className="text-sm text-text-muted">Sat: {businessInfo.openingHours.saturday}</p>
                    <p className="text-sm text-text-muted">Sun: {businessInfo.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-2">Send a Message</h2>
                <p className="text-text-muted mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all"
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
