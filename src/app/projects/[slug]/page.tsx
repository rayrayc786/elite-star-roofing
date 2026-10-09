import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-accent" /> {project.service}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> {project.location}</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-md mb-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">The Challenge</h3>
                <p className="text-text-muted leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">The Result</h3>
                <p className="text-text-muted leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-warm-white border border-border rounded-xl p-5">
                <h4 className="text-sm font-bold text-primary mb-3">Project Details</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-text-muted">Service</dt>
                    <dd className="font-semibold text-primary">{project.service}</dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">Location</dt>
                    <dd className="font-semibold text-primary">{project.location}</dd>
                  </div>
                </dl>
              </div>
              <Link
                href="/request-quote"
                className="block w-full text-center px-6 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover transition-all shadow-md"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Project Gallery */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-primary mb-6">Project Gallery</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
