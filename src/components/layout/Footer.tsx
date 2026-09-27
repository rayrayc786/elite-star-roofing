import Link from "next/link";
import { Phone, Mail, MapPin, Star, ArrowRight, Globe } from "lucide-react";
import { businessInfo, services, navigationItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6" aria-label="Elite Star Roofing WA Home">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight">Elite Star</span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Roofing WA</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional roofing services in Western Australia. Roof repair, leak detection, roof restoration, and roof painting.
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.instagram}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent hover:text-accent-hover transition-colors font-semibold"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigationItems
                .filter((item) => !item.children)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/request-quote"
                  className="text-sm text-accent hover:text-accent-hover transition-colors font-semibold"
                >
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">Phone</p>
                  <p className="text-sm text-white/80">{businessInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">Email</p>
                  <p className="text-sm text-white/80">{businessInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">Service Area</p>
                  <p className="text-sm text-white/80">Western Australia</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-all text-sm"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
