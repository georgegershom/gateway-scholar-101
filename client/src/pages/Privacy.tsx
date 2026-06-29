/* Design Philosophy: Refined Editorial Elegance
 * Privacy Policy page with clear, simple text
 */

import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: "Confidentiality",
      content: "All documents, data, and communications you share with Gateway Scholar are treated as strictly confidential. We do not share, sell, or distribute your work, personal information, or research data to any third parties. Your thesis chapters, manuscripts, and project details remain private and are used solely for the purpose of providing editing and consulting services to you."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We take reasonable precautions to protect your information from unauthorized access, loss, or misuse. Documents are stored securely and access is limited to authorized personnel only. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      icon: Eye,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, including your name, email address, contact details, academic information, and documents submitted for review. We may also collect usage data about how you interact with our website through cookies and analytics tools to improve our services."
    },
    {
      icon: FileText,
      title: "Use of Information",
      content: "Information collected is used to provide our editing and consulting services, communicate with you about your project, process payments, and improve our website and services. We do not use your academic work for any purpose other than providing the services you requested."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed ml-16">
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-secondary/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Your Rights
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  You have the right to request access to, correction of, or deletion of your personal information at any time. You may also withdraw consent for us to process your data, though this may affect our ability to provide services.
                </p>
                <p>
                  To exercise any of these rights or if you have questions about this privacy policy, please contact us at georgegershom22@gmail.com or via WhatsApp at +86 185 5254 8576.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                No Guarantees
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gateway Scholar provides editing, feedback, and consulting services to help improve your academic work. However, we make no guarantees regarding acceptance by supervisors, journals, or academic committees. Final acceptance decisions rest with your institution or publication venue. You remain fully responsible for the content, accuracy, and integrity of your work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
