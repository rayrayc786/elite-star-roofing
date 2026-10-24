import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import BlogListInteractive from "@/components/blog/BlogListInteractive";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Roofing Blog & Insights | Elite Star Roofing WA",
  description:
    "Explore expert Western Australian roofing guides, roof painting cost breakdowns, cleaning schedules, leak diagnosis, and maintenance advice from Elite Star Roofing WA.",
  openGraph: {
    title: "Roofing Blog & Insights | Elite Star Roofing WA",
    description:
      "Explore expert Western Australian roofing guides, roof painting cost breakdowns, cleaning schedules, and maintenance tips.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-warm-white min-h-screen pt-24 pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog" }]} variant="light" />

        {/* Header */}
        <div className="mb-12">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 font-subheading">
            ROOFING INSIGHTS & EXPERT GUIDES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-5 font-glint italic uppercase">
            The Roofing Journal
          </h1>
          <p className="text-text-muted max-w-2xl text-base sm:text-lg leading-relaxed">
            Transparent advice, Perth cost breakdowns, cleaning schedules, and practical maintenance tips from the experienced team at Elite Star Roofing WA.
          </p>
        </div>

        {/* Dynamic Interactive Blog List with Search & Category Filters */}
        <BlogListInteractive initialPosts={blogPosts} />
      </div>
    </div>
  );
}
