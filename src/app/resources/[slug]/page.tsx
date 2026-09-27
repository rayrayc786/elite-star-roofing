import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
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

  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: post.title }]} />
          
          <div className="mt-8 mb-6">
            <span className="px-3 py-1.5 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-lg">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formattedDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-12 border border-border">
            <span className="text-sm text-text-muted">[Featured Article Image]</span>
          </div>

          {/* Article Content placeholder */}
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-text-muted font-medium mb-8">
              {post.excerpt}
            </p>
            
            <p>
              [Article content placeholder. This section will contain the full text of the article, properly formatted with HTML elements like paragraphs, headings, lists, and images.]
            </p>
            
            <h2>Why This Matters</h2>
            <p>
              [Placeholder for article section. Proper maintenance and early detection of roofing issues can save homeowners significant money and prevent severe structural damage.]
            </p>

            <ul>
              <li>Point one to consider when evaluating this issue.</li>
              <li>Point two detailing what to look out for.</li>
              <li>Point three explaining the recommended action.</li>
            </ul>

            <h3>When to Call a Professional</h3>
            <p>
              [Placeholder. While some minor maintenance can be done by homeowners, many roofing tasks require professional equipment, safety gear, and expertise. If you're unsure, it's always safer to consult an expert.]
            </p>
          </article>
        </div>
      </section>

      <CTASection title="Need a Professional Opinion?" description="Contact Elite Star Roofing WA today for expert advice and a free assessment of your roof." />
    </>
  );
}
