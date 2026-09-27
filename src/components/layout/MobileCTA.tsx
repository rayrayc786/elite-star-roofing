"use client";

import Link from "next/link";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { businessInfo } from "@/lib/data";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {businessInfo.phoneRaw ? (
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="flex flex-col items-center justify-center py-3 text-white hover:bg-white/10 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
          </a>
        ) : (
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center py-3 text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
          </Link>
        )}
        <Link
          href="/request-quote"
          className="flex flex-col items-center justify-center py-3 bg-accent text-primary hover:bg-accent-hover transition-colors"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Quote</span>
        </Link>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 text-white hover:bg-white/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Contact</span>
        </Link>
      </div>
    </div>
  );
}
