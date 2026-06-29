/* Design Philosophy: Refined Editorial Elegance
 * Clear, readable policy documentation with elegant typography and structure
 */

import { Shield, Lock, AlertTriangle, DollarSign, RefreshCw } from "lucide-react";

export default function Policies() {
  const policies = [
    {
      icon: Lock,
      title: "Confidentiality",
      content: [
        "All client documents and research materials are treated with strict confidentiality.",
        "We do not share, publish, or distribute any portion of your work without explicit written permission.",
        "Your intellectual property remains entirely yours throughout and after our engagement.",
        "We use secure file transfer methods and maintain professional data protection standards.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "No Guarantees of Acceptance or Grades",
      content: [
        "While we provide expert editing and coaching to improve clarity, coherence, and presentation, we cannot guarantee acceptance by journals, supervisors, or examination committees.",
        "Academic evaluation depends on multiple factors including research quality, methodology, originality, and institutional standards that are beyond our control.",
        "Our service focuses on enhancing the communication of your research, not altering its fundamental content or conclusions.",
        "Final decisions rest with your academic institution, journal editors, and peer reviewers.",
      ],
    },
    {
      icon: Shield,
      title: "Academic Integrity Boundaries",
      content: [
        "We do not engage in ghostwriting or writing content from scratch. All work must originate from the client.",
        "We will not fabricate, alter, or manipulate research data, results, or findings.",
        "We do not create fake references or citations. All sources must be genuine and verifiable.",
        "The client remains the sole author of their work. Our role is to refine and polish existing content, not to create new research.",
        "We maintain these boundaries to protect your academic reputation and ensure compliance with institutional ethics policies.",
      ],
    },
    {
      icon: DollarSign,
      title: "Payment Terms",
      content: [
        "Initial diagnostic: $50 (credited toward full service if you proceed)",
        "Upon approval of diagnostic plan: 50% deposit required to begin work",
        "Upon delivery of completed work: remaining 50% balance due",
        "Accepted payment methods: USD via PayPal, RMB via local bank transfer",
        "Diagnostic fee is non-refundable once the diagnostic report is delivered.",
        "Deposits are non-refundable once work has commenced, but can be applied to future projects if circumstances change before work begins.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Revision Terms",
      content: [
        "Basic tier: 1 revision per chapter included",
        "Premium tier: 2 revisions per chapter included",
        "Additional revisions beyond tier allowance: $20–$50 per round",
        "Revision requests must be submitted in writing and should be based on supervisor or reviewer feedback.",
        "Revisions are non-accruable: unused revisions from one chapter cannot be transferred to another chapter.",
        "Revisions are non-transferable: revision allowances apply only to the specific chapter or document for which they were purchased.",
        "Figure and table revisions count as one full revision round and must be based on provided data and parameters.",
        "Revisions requested due to new research findings, changed data, or scope expansion may be quoted as new work.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Policies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Clear guidelines to ensure transparency, trust, and mutual understanding in our professional relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-500">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {policy.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-4 ml-0 md:ml-22">
                      {policy.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-lg text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              We're committed to transparency and ethical practice. If you have any questions or concerns about our policies, please don't hesitate to reach out.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
