import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Royal Journal | Elite Star Roofing",
  description: "Read about the centuries-old secrets, pure ingredients, and royal heritage behind our premium services.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="bg-[#f9f8f4] min-h-screen pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            CHRONICLES OF ELITE STAR
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6">
            The Royal Journal
          </h1>
          <p className="text-text-muted max-w-xl text-lg leading-relaxed">
            Step into our premium sanctuary. Read about the reliable techniques, quality 
            materials, and true craftsmanship behind Elite Star Roofing WA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Featured Post (Left / Span 8) */}
          {featuredPost && (
            <div className="lg:col-span-8 group">
              <Link href={`/blog/${featuredPost.slug}`} className="block h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="relative aspect-[16/10] bg-primary/5 overflow-hidden">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1.5 bg-accent text-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                  {/* Placeholder image for featured */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-primary/40 font-serif text-2xl">Featured Image</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-4 uppercase tracking-wider">
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-muted mb-8 text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors">
                    READ ARTICLE <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Right Column Grid (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {regularPosts.slice(0, 2).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex-1 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="relative aspect-[16/10] bg-primary/5 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-accent text-primary text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-primary/30 font-serif text-sm">Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] text-text-muted mb-3 uppercase tracking-wider">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-6 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors mt-auto">
                    READ ARTICLE <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* More Stories Section */}
        <div className="border-t border-border/50 pt-16">
          <h2 className="text-2xl font-serif text-accent mb-8">
            More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularPosts.slice(2).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col">
                <div className="relative aspect-square bg-primary/5 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-accent text-primary text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[10px] text-text-muted mb-3 uppercase tracking-wider">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors">
                      READ ARTICLE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
