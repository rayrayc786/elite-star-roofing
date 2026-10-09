import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70 text-sm">Last updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-slate max-w-none">
            <p>
              Please read these Terms of Service carefully before using the {businessInfo.name} website or engaging our services. By accessing or using our website, you agree to be bound by these terms.
            </p>

            <h2>1. Service Provision</h2>
            <p>
              {businessInfo.name} provides roofing services including repair, leak detection, restoration, and painting. All services are subject to an initial assessment and a formal quote. The scope of work will be outlined in the quote provided to you.
            </p>

            <h2>2. Quotes and Estimates</h2>
            <p>
              Any quotes provided via our website or over the phone are initial estimates based on the information provided. Final quotes are subject to a physical on-site inspection of the roof. Quotes are typically valid for a specified period as stated on the formal document.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The content, design, and structure of this website are owned by {businessInfo.name} and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit permission.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              While we strive to ensure the accuracy of the information on this website, {businessInfo.name} makes no warranties or representations about the accuracy or completeness of the site&apos;s content. In no event shall {businessInfo.name} be liable for any direct, indirect, incidental, or consequential damages arising out of the use of or inability to use this website.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at {businessInfo.email}.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
