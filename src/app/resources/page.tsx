import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Roofing Resources & Articles",
  description: "Helpful articles, guides, and tips about roof maintenance, repair, and identifying problems.",
};

export default function ResourcesPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Resources" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Roofing Resources</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Helpful articles, guides, and tips to help you understand and maintain your roof.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg">All Articles</span>
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 bg-warm-white text-text-muted text-sm font-semibold rounded-lg border border-border hover:border-accent hover:text-accent transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post (first post) */}
          {blogPosts.length > 0 && (
            <div className="mb-12">
              <Link
                href={`/resources/${blogPosts[0].slug}`}
                className="group grid lg:grid-cols-2 gap-8 items-center bg-warm-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full w-full min-h-[300px]">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm text-text-muted flex items-center gap-1.5"><Clock className="w-4 h-4" /> {blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-accent transition-colors mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-accent">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-text">{post.author}</span>
                    </div>
                    <span className="text-xs text-text-muted">{new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" title="Need Expert Advice?" description="If you have a roofing problem, don't wait. Contact us for professional advice and a free quote." />
    </>
  );
}
