import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long', day: '2-digit', year: 'numeric'
  });

  const morePosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#f9f8f4] min-h-screen pt-24 pb-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Breadcrumb / Back link */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-accent-hover transition-colors">
            <ArrowLeft className="w-3 h-3" /> BACK TO JOURNAL
          </Link>
        </div>

        {/* Header section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-[10px] text-text-muted mb-6 uppercase tracking-[0.15em] font-medium">
            <span className="px-3 py-1.5 bg-transparent border border-accent/30 text-accent font-bold rounded-full">
              {post.category}
            </span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-10 leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-serif font-bold text-lg">
              {post.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary">{post.author}</span>
              <span className="text-[10px] uppercase tracking-wider text-text-muted">Elite Star Roofing Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-full aspect-[21/9] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-md flex items-center justify-center border border-border/50">
          <span className="text-primary/30 font-serif text-xl">Featured Image Placeholder</span>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-p:text-text/80 prose-p:leading-relaxed">
          <p className="text-xl text-text/90 font-medium mb-8 leading-relaxed">
            <span className="float-left text-7xl font-serif text-accent leading-[0.8] mr-4 mt-2">
              {post.excerpt.charAt(0)}
            </span>
            {post.excerpt.slice(1)}
          </p>
          
          <p>
            At Elite Star Roofing WA, we honor a philosophy of quality workmanship that stands the test of time. 
            Our approach focuses on identifying the true cause of roofing issues rather than just treating the symptoms. 
            By preventing moisture from escaping and ensuring every tile, flashing, and gutter is meticulously sealed, 
            we retain the structural integrity of your home.
          </p>
          
          <p>
            The result is a reliable, durable roof that modern quick-fix methods simply cannot replicate. It is a thorough, 
            meditative process, requiring patience and absolute precision—a true testament to the elegance of proper roofing.
          </p>

          <h2>The Importance of Preparation</h2>
          <p>
            Before any major repair or painting project begins, preparation is critical. We spend considerable time inspecting, 
            cleaning, and treating the roof surface to guarantee our materials bond perfectly. 
          </p>

          <blockquote>
            "Quality isn't an act, it's a habit. We treat every roof as if it were our own."
          </blockquote>
          
          <p>
            If you are experiencing issues or just want peace of mind, reach out to our team. We are dedicated to providing 
            transparent quotes and lasting solutions.
          </p>
        </article>

        <hr className="my-16 border-border/50" />

        {/* Continue Reading Section */}
        <div>
          <h2 className="text-2xl font-serif text-accent mb-8">Continue Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {morePosts.slice(0, 2).map((p) => (
              <Link href={`/blog/${p.slug}`} key={p.slug} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col">
                <div className="relative aspect-[16/10] bg-primary/5 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[10px] text-text-muted mb-3 uppercase tracking-wider">
                    <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
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
