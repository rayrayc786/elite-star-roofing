import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 border border-border shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-text-muted font-medium mb-8">
              {post.excerpt}
            </p>
            
            <p>
              Maintaining your roof in top condition is essential to safeguarding your property against harsh Western Australia weather elements. At Elite Star Roofing WA, our technicians perform thorough inspections to spot early signs of damage before they turn into major structural repairs.
            </p>
            
            <h2>Why Early Detection Matters</h2>
            <p>
              Proper maintenance and early detection of roofing issues can save homeowners significant money and prevent severe structural water damage. Catching cracked ridge caps or deteriorating flashing early prevents water from reaching internal timber framing and plaster ceilings.
            </p>

            <ul>
              <li>Regular visual checks after severe winter storms.</li>
              <li>Clearing moss and debris build-up to maintain water run-off.</li>
              <li>Re-pointing loose ridge capping with high-flexibility compounds.</li>
            </ul>

            <h3>When to Call a Professional</h3>
            <p>
              While minor maintenance like cleaning gutters can be managed carefully by homeowners, working at height requires specialized safety equipment, harnesses, and trade expertise. If you notice leaks, cracked tiles, or roof discoloration, reach out to Elite Star Roofing WA for a professional assessment.
            </p>
          </article>
        </div>
      </section>

      <CTASection title="Need a Professional Opinion?" description="Contact Elite Star Roofing WA today for expert advice and a free assessment of your roof." />
    </>
  );
}
