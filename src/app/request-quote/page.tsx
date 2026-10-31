"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, AlertTriangle, ShieldCheck, Paintbrush, Wind, Loader2, AlertCircle } from "lucide-react";
import { businessInfo } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    serviceType: "",
    urgency: "",
    propertyType: "Residential",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    botField: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "quote",
          sourcePage: "/request-quote",
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          suburb: formData.suburb,
          service: formData.serviceType,
          timing: formData.urgency,
          message: `Property Type: ${formData.propertyType}${formData.description ? `\nNotes: ${formData.description}` : ""}`,
          botField: formData.botField,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit quote request. Please try calling us directly.");
      }

      setStep(4); // Success step
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again or call us directly.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray py-12 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Request a Free Quote" }]} variant="light" className="mb-8" />
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3 font-glint italic uppercase">Request a Free Quote</h1>
          <p className="text-text-muted">Tell us about your roofing needs and we&apos;ll get back to you with a clear quote.</p>
        </div>

        {/* Progress Bar (hide on success) */}
        {step < 4 && (
          <div className="mb-10 px-4">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-border -z-10 transform -translate-y-1/2" />
              <div className="absolute left-0 top-1/2 h-[2px] bg-accent -z-10 transform -translate-y-1/2 transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%` }} />
              
              {[1, 2, 3].map((num) => (
                <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= num ? "bg-accent text-white shadow-md" : "bg-white border-2 border-border text-text-muted"}`}>
                  {step > num ? <CheckCircle className="w-4 h-4" /> : num}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 px-1">
              <span className="text-xs font-semibold text-primary">Needs</span>
              <span className="text-xs font-semibold text-primary text-center">Details</span>
              <span className="text-xs font-semibold text-primary text-right">Contact</span>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-border p-6 sm:p-10">
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-primary mb-6 font-glint italic">What do you need help with?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { id: "roof-cleaning", label: "Roof Cleaning", icon: Sparkles },
                  { id: "leak-detection", label: "Leak Detection", icon: AlertTriangle },
                  { id: "roof-pointing", label: "Roof Pointing", icon: ShieldCheck },
                  { id: "roof-painting", label: "Roof Painting", icon: Paintbrush },
                  { id: "gutter-cleaning", label: "Gutter Cleaning", icon: Wind },
                ].map((item) => (
                  <label key={item.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.serviceType === item.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"}`}>
                    <input
                      type="radio"
                      name="serviceType"
                      value={item.id}
                      checked={formData.serviceType === item.id}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="sr-only"
                    />
                    <item.icon className={`w-6 h-6 ${formData.serviceType === item.id ? "text-accent" : "text-text-muted"}`} />
                    <span className={`font-semibold ${formData.serviceType === item.id ? "text-primary" : "text-text-muted"}`}>{item.label}</span>
                  </label>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!formData.serviceType}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-accent/20"
                >
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-primary mb-6 font-glint italic">Tell us a bit more</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">How urgent is this?</label>
                  <div className="flex flex-wrap gap-3">
                    {["Emergency (Leaking now)", "Within a week", "Within a month", "Just planning"].map((u) => (
                      <label key={u} className={`px-4 py-2 rounded-lg border cursor-pointer transition-all text-sm font-medium ${formData.urgency === u ? "bg-primary text-white border-primary" : "bg-white text-text-muted border-border hover:border-primary/50"}`}>
                        <input
                          type="radio"
                          name="urgency"
                          value={u}
                          checked={formData.urgency === u}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="sr-only"
                        />
                        {u}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-primary mb-1.5">Brief description of the problem (optional)</label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="e.g. Water staining on ceiling in the lounge room..."
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button onClick={handlePrev} className="inline-flex items-center gap-2 px-4 py-3 text-text-muted hover:text-primary font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!formData.urgency}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-accent/20"
                >
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-primary mb-6 font-glint italic">Your Contact Details</h2>
              
              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to submit quote request</p>
                    <p className="mt-0.5 text-red-600">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 mb-8">
                {/* Honeypot field */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="quote_website_hp">Leave empty</label>
                  <input
                    type="text"
                    id="quote_website_hp"
                    name="botField"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-1.5">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      disabled={loading}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      disabled={loading}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      disabled={loading}
                      inputMode="tel"
                      pattern="[0-9+\s\-()]{8,}"
                      title="Please enter a valid phone number (at least 8 digits)"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9+\s\-()]/g, "");
                        setFormData({ ...formData, phone: val });
                      }}
                      className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-primary mb-1.5">Property Address *</label>
                  <input
                    type="text"
                    id="address"
                    required
                    disabled={loading}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="suburb" className="block text-sm font-semibold text-primary mb-1.5">Suburb *</label>
                  <input
                    type="text"
                    id="suburb"
                    required
                    disabled={loading}
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                  />
                </div>
                
                <div className="pt-4 flex items-center justify-between">
                  <button type="button" disabled={loading} onClick={handlePrev} className="inline-flex items-center gap-2 px-4 py-3 text-text-muted hover:text-primary font-medium transition-colors disabled:opacity-50">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-glint italic uppercase">Request Received!</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                Thank you for requesting a quote, {formData.firstName}. We have received your details and will be in touch shortly to discuss your roofing needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/" className="px-6 py-3 bg-light-gray text-primary font-semibold rounded-xl hover:bg-border transition-colors">
                  Return Home
                </Link>
                {businessInfo.phoneRaw && (
                  <a href={`tel:${businessInfo.phoneRaw}`} className="px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-colors shadow-md shadow-accent/20">
                    Call Us Now
                  </a>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
