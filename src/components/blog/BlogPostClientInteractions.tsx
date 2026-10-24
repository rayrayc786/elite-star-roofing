"use client";

import { useState, useEffect } from "react";
import { Share2, Check, Link as LinkIcon, MessageCircle } from "lucide-react";

interface BlogPostClientInteractionsProps {
  title: string;
  slug: string;
  headings: { id: string; text: string }[];
}

export function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(239,67,35,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export function SocialShareBar({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, [slug]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex flex-wrap items-center gap-3 py-6 my-8 border-y border-border/60">
      <span className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5 mr-2">
        <Share2 className="w-3.5 h-3.5 text-accent" /> Share this guide:
      </span>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:border-accent hover:text-accent transition-colors shadow-sm cursor-pointer"
        aria-label="Copy link to article"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-600">Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-sm"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm"
        aria-label="Share on Facebook"
      >
        <svg className="w-3.5 h-3.5 text-blue-600 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span>Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:border-blue-700 hover:text-blue-700 transition-colors shadow-sm"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-3.5 h-3.5 text-blue-700 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span>LinkedIn</span>
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:border-primary hover:text-primary transition-colors shadow-sm"
        aria-label="Share on X"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>X</span>
      </a>
    </div>
  );
}

export function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.offsetTop - 150 <= scrollY) {
          setActiveId(headings[i].id);
          return;
        }
      }
      if (headings.length > 0) setActiveId(headings[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 border border-border/80 shadow-sm mb-10">
      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4 font-subheading flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Table of Contents
      </h3>
      <nav>
        <ol className="space-y-2.5 text-sm">
          {headings.map((h, idx) => {
            const isActive = activeId === h.id;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`block transition-colors leading-snug ${
                    isActive
                      ? "text-accent font-bold pl-2 border-l-2 border-accent"
                      : "text-text-muted hover:text-primary hover:pl-1"
                  }`}
                >
                  <span className="text-xs text-text-muted/60 mr-1.5">{idx + 1}.</span>
                  {h.text}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
