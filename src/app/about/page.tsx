import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { businessInfo, teamMembers } from "@/lib/data";
import { Heart, Target, Users, Shield, Eye, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessInfo.name}. Professional roofing services in WA — roof repair, leak detection, restoration, and painting.`,
};

const values = [
  { icon: Shield, title: "Quality Workmanship", description: "Every job is completed to a high standard with attention to detail." },
  { icon: Handshake, title: "Honest Communication", description: "Clear, upfront communication from first contact to completion." },
  { icon: Eye, title: "Problem-First Approach", description: "We diagnose the actual problem before recommending solutions." },
  { icon: Heart, title: "Customer Care", description: "We treat every home as if it were our own." },
  { icon: Target, title: "Focused Expertise", description: "Specialising in repair, detection, restoration, and painting." },
  { icon: Users, title: "Local Commitment", description: "Proudly serving homeowners across Western Australia." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About {businessInfo.name}</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            A local WA roofing company focused on quality workmanship and honest service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Our Story</span>
              <h2 className="text-3xl font-bold text-primary mb-6">
                About {businessInfo.name}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Since our establishment, Elite Star Roofing has been providing reliable and professional roofing services to homeowners and businesses across Australia. What started with a commitment to quality workmanship has grown into a trusted roofing service focused on delivering durable, practical, and long-lasting solutions.
                </p>
                <p>
                  At Elite Star Roofing, we specialise in roof repairs, maintenance, restoration, cleaning, gutter and box gutter works, leak prevention, and bird-proofing solutions. Whether you need a small repair, ongoing maintenance, or comprehensive roofing works, our experienced team takes pride in completing every project with care and attention to detail.
                </p>
                <p>
                  We combine quality materials, professional workmanship, and a strong focus on safety to ensure every roofing project is completed to a high standard. From residential properties to commercial buildings, we work closely with our customers to provide reliable solutions that protect their property and keep their roof performing at its best.
                </p>
                <p className="font-bold text-primary italic">
                  Elite Star Roofing — Quality workmanship. Reliable service. Built to last.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-md">
              <Image
                src="/images/web/IMG_5760_JPG.jpg"
                alt="Elite Star Roofing WA Team on Site"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Our Values</span>
            <h2 className="text-3xl font-bold text-primary">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Our Team</span>
            <h2 className="text-3xl font-bold text-primary">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-warm-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative aspect-square w-full">
                  <Image
                    src={member.image || "/images/web/IMG_5780.jpg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-bold text-primary">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold">{member.role}</p>
                  <p className="text-sm text-text-muted mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" title="Work With Us" description="Get in touch to discuss your roofing needs. We'd love to help." />
    </>
  );
}
