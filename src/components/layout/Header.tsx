"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navigationItems, businessInfo } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[120px] lg:h-[140px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Elite Star Roofing WA Home">
            <Image 
              src="/Elite Final Logo.png" 
              alt="Elite Star Roofing WA Logo" 
              width={400} 
              height={140} 
              className="object-contain h-24 lg:h-32 w-auto scale-150 lg:scale-[2] transform origin-left" 
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigationItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text hover:text-accent transition-colors rounded-lg"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border py-2 animate-fade-in"
                      onMouseLeave={() => setServicesOpen(false)}
                      role="menu"
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-light-gray transition-colors"
                        onClick={() => setServicesOpen(false)}
                        role="menuitem"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-border my-1" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text hover:bg-light-gray hover:text-accent transition-colors"
                          onClick={() => setServicesOpen(false)}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-text hover:text-accent transition-colors rounded-lg"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {businessInfo.phoneRaw && (
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            )}
            <Link
              href="/request-quote"
              className="px-5 py-2.5 text-sm font-semibold bg-accent text-primary rounded-lg hover:bg-accent-hover transition-all shadow-md hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile: Call + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {businessInfo.phoneRaw && (
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="p-2.5 bg-primary text-white rounded-lg"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 text-primary hover:bg-light-gray rounded-lg transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile Menu (Moved outside header to avoid backdrop-filter containing block issues) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-40 overflow-y-auto" role="dialog" aria-label="Mobile navigation">
          <nav className="p-6 space-y-1" aria-label="Mobile navigation">
            {navigationItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-text hover:bg-light-gray rounded-xl transition-colors"
                    aria-expanded={mobileServicesOpen}
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent pl-4">
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-light-gray rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-muted hover:text-accent hover:bg-light-gray rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3.5 text-base font-semibold text-text hover:bg-light-gray rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <Link
                href="/request-quote"
                className="block w-full text-center px-5 py-3.5 text-base font-semibold bg-accent text-primary rounded-xl hover:bg-accent-hover transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
              {businessInfo.phoneRaw && (
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
