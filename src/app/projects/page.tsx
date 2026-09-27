import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { projects, services } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "View our roofing project gallery. Roof repair, leak detection, restoration and painting projects across WA.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Projects" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Browse our roofing projects across Western Australia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg">All</span>
            {services.map((s) => (
              <span key={s.slug} className="px-4 py-2 bg-warm-white text-text-muted text-sm font-semibold rounded-lg border border-border hover:border-accent hover:text-accent transition-colors cursor-pointer">
                {s.name}
              </span>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-warm-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-sm text-text-muted">[Project photo placeholder]</span>
                </div>
                <div className="p-5">
                  <h2 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent">{project.service}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    View Project <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-10">
            [Add more projects as they are completed. Replace placeholders with real project photos and details.]
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
