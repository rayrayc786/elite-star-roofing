import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { blogPosts, businessInfo } from "@/lib/data";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BeforeAfterCompare from "@/components/blog/BeforeAfterCompare";
import {
  ReadingProgressBar,
  SocialShareBar,
  TableOfContents,
} from "@/components/blog/BlogPostClientInteractions";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.metaTitle || `${post.title} | Elite Star Roofing WA`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    keywords: post.primaryKeyword ? [post.primaryKeyword, "Perth roofing", "WA roofing"] : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-AU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Extract headings for Table of Contents
  const headings = post.sections
    ? post.sections
        .filter((s) => s.heading)
        .map((s) => ({
          id: slugify(s.heading!),
          text: s.heading!,
        }))
    : [];

  // Related posts (prefer same category, fallback to others)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  // Structured Data (Schema.org)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: "https://elitestarroofing.com.au/Elite%20Final%20Logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://elitestarroofing.com.au/blog/${post.slug}`,
    },
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Reading Progress Bar (Client Component) */}
      <ReadingProgressBar />

      <div className="bg-warm-white min-h-screen pt-24 pb-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent hover:text-accent-hover transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Guides
            </Link>
            <Breadcrumbs
              variant="light"
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.category, href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mb-6 uppercase tracking-wider font-medium">
              <span className="px-3 py-1 bg-accent/15 border border-accent/30 text-accent font-bold rounded-lg">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" /> {formattedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 font-glint italic leading-[1.15]">
              {post.title}
            </h1>

            {/* Author Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/70 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-primary">{post.author}</div>
                <div className="text-xs text-text-muted">
                  {post.authorRole || "Elite Star Roofing WA Specialists"}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-border/60 mb-10 bg-warm-white">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Key Takeaways Box (if present) */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-l-4 border-l-accent border-y border-r border-border/80 shadow-sm mb-12">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-4 font-subheading">
                <Sparkles className="w-4 h-4" /> Key Takeaways at a Glance
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text/90 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Table of Contents */}
          {headings.length > 2 && <TableOfContents headings={headings} />}

          {/* Main Article Body */}
          <article className="prose prose-lg max-w-none text-text/90 leading-relaxed">
            {post.sections &&
              post.sections.map((sec, secIdx) => {
                const headingId = sec.heading ? slugify(sec.heading) : undefined;

                return (
                  <section key={secIdx} id={headingId} className="mb-12 scroll-mt-24">
                    {sec.heading && (
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-glint italic mt-8 border-b border-border/50 pb-3">
                        {sec.heading}
                      </h2>
                    )}

                    {sec.subheading && (
                      <h3 className="text-lg sm:text-xl font-bold text-primary/90 mb-3 font-subheading">
                        {sec.subheading}
                      </h3>
                    )}

                    {/* Paragraphs */}
                    {sec.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-base sm:text-lg text-text/85 mb-5 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {/* Bullet List */}
                    {sec.listItems && sec.listItems.length > 0 && (
                      <ul className="my-6 space-y-3 pl-0 list-none">
                        {sec.listItems.map((item, lIdx) => (
                          <li
                            key={lIdx}
                            className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border/60 text-sm sm:text-base text-text/85 shadow-2xs"
                          >
                            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout Box */}
                    {sec.callout && (
                      <div
                        className={`my-8 p-6 rounded-2xl border ${
                          sec.callout.type === "warning"
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-950"
                            : "bg-accent-light/60 border-accent/30 text-primary"
                        }`}
                      >
                        <div className="flex items-center gap-2 font-bold text-sm mb-2 font-subheading">
                          <AlertCircle className="w-4 h-4 text-accent" />
                          <span>{sec.callout.title || "Pro Tip"}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-0 font-medium">
                          {sec.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Table if present */}
                    {sec.table && (
                      <div className="my-8 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-primary text-white uppercase text-xs tracking-wider">
                            <tr>
                              {sec.table.headers.map((th, thIdx) => (
                                <th key={thIdx} className="px-5 py-4 font-bold">
                                  {th}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/60">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-warm-white/50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-5 py-4 text-text/85 ${
                                      cIdx === row.length - 1 ? "font-bold text-accent" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Before/After Interactive Comparison Showcase */}
                    {secIdx === 1 && post.beforeAfter && (
                      <BeforeAfterCompare
                        beforeImage={post.beforeAfter.beforeImage}
                        afterImage={post.beforeAfter.afterImage}
                        beforeLabel={post.beforeAfter.beforeLabel}
                        afterLabel={post.beforeAfter.afterLabel}
                        caption={post.beforeAfter.caption}
                      />
                    )}
                  </section>
                );
              })}
          </article>

          {/* Social Share Bar */}
          <SocialShareBar title={post.title} slug={post.slug} />

          {/* Related Services Badges */}
          {post.relatedServices && post.relatedServices.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-border/80 shadow-sm mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-3 font-subheading">
                Related Services Discussed in This Guide
              </span>
              <div className="flex flex-wrap gap-2.5">
                {post.relatedServices.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-warm-white hover:bg-accent hover:text-white text-xs font-bold text-primary transition-all duration-200 border border-border"
                  >
                    <span>{service.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Accordion Section (if present) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="my-16 bg-white rounded-3xl p-6 sm:p-10 border border-border/80 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-2 font-subheading">
                <HelpCircle className="w-4 h-4" /> Common Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-glint italic">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={post.faqs} />
            </div>
          )}

          {/* In-Article Conversion CTA Box */}
          <div className="my-16 rounded-3xl bg-primary text-white p-8 sm:p-10 relative overflow-hidden shadow-xl border border-primary-light">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2 font-subheading">
                WA Roofing Specialists
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-glint italic uppercase mb-3">
                Book a Free Inspection & Written Quote
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Based in Bibra Lake, Elite Star Roofing services Perth Metro, Canning Vale, Cockburn, Mandurah, Bunbury, and surrounding areas. Transparent, itemised quotes with no sales pressure.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote"
                  className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-accent/30 inline-flex items-center gap-2"
                >
                  Request Online Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {businessInfo.phoneRaw && (
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-white/20 inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent" /> Call {businessInfo.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr className="my-16 border-border/60" />

          {/* Related Articles ("Continue Reading") */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-glint italic uppercase">
                Continue Reading
              </h2>
              <Link
                href="/blog"
                className="text-xs font-bold uppercase tracking-wider text-accent hover:underline flex items-center gap-1"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div
              className={`grid grid-cols-1 ${
                relatedPosts.length === 1
                  ? "max-w-md"
                  : relatedPosts.length === 2
                  ? "sm:grid-cols-2 max-w-3xl"
                  : "sm:grid-cols-3"
              } gap-6`}
            >
              {relatedPosts.map((p) => (
                <Link
                  href={`/blog/${p.slug}`}
                  key={p.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-accent/40 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-primary/5 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-primary/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider rounded-md font-subheading">
                        {p.category}
                      </span>
                    </div>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[10px] text-text-muted mb-2 uppercase tracking-wider">
                      <span>{p.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 font-glint italic">
                      {p.title}
                    </h3>

                    <p className="text-xs text-text-muted line-clamp-2 mb-4">
                      {p.excerpt}
                    </p>

                    <div className="mt-auto pt-3 border-t border-border/40">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
