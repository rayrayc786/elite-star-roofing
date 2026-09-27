import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-sm">Last updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-slate max-w-none">
            <p>
              At {businessInfo.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Request a quote or contact us via our website forms.</li>
              <li>Communicate with us via email or phone.</li>
              <li>Engage our roofing services.</li>
            </ul>
            <p>This information may include your name, email address, phone number, property address, and details about your roofing needs.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide accurate quotes.</li>
              <li>Deliver the roofing services you have requested.</li>
              <li>Communicate with you regarding your project.</li>
              <li>Improve our website and customer service.</li>
            </ul>

            <h2>Data Sharing and Security</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our business, so long as those parties agree to keep this information confidential.
            </p>
            <p>
              We implement reasonable security measures to maintain the safety of your personal information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at {businessInfo.email} or call us at {businessInfo.phone}.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
