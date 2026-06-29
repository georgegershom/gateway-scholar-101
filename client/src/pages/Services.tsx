/* Design Philosophy: Refined Editorial Elegance
 * Content-rich layout with editorial spacing and sophisticated visual hierarchy
 */

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { GraduationCap, FileText, MessageSquare, Clock, DollarSign, RefreshCw, Shield, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const deliverables = [
    {
      icon: FileText,
      title: "Action Plan",
      description: "Prioritized fixes with clear implementation steps",
      hasDetails: true,
    },
    {
      icon: GraduationCap,
      title: "Reference/Style Check",
      description: "APA, IEEE, or Elsevier formatting verification",
      hasDetails: true,
    },
    {
      icon: MessageSquare,
      title: "Supervisor-Style Feedback",
      description: "In-depth commentary on argument, methods, and results narration",
      hasDetails: false,
    },
    {
      icon: Clock,
      title: "Optional Zoom Call",
      description: "30–60 minute consultation (tier-based/if needed)",
      hasDetails: false,
    },
  ];

  const revisionTiers = [
    {
      tier: "Basic",
      revisions: "1 revision per chapter",
      description: "Ideal for well-structured drafts needing final polish",
    },
    {
      tier: "Premium",
      revisions: "2 revisions per chapter",
      description: "Best for complex chapters requiring iterative refinement",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2fJPaGRgWVXEWJolZNTqh5/sandbox/Sh3yL23lmY9wYixvWGEoOA-img-2_1770571310000_na1fn_c2VydmljZXMtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMmZKUGFHUmdXVlhFV0pvbFpOVHFoNS9zYW5kYm94L1NoM3lMMjNsbVk5d1lpeHZXR0VvT0EtaW1nLTJfMTc3MDU3MTMxMDAwMF9uYTFmbl9jMlZ5ZG1salpYTXRkbWx6ZFdGcy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kr9hMz5I~ue95nL6M2YJi4clTB4ec2-Ddg9L1TS2S0jZ7sIAVtQA1KEe2-AaxGm5upa-waNQu0egOxF8W91QFVsEmMLGd~QS~meacAdzmlX~6BYBDrKB3W8wsZRHK8JdjsqMlDoJpJq1zFoEQ81H9X94OmObag1-iDtMreQfVME3uzjgriRqEH9giCxoqflkk4PphW-sx8L5XHgB~GDGtQPx1FAbJ2~VFGS4Zxl1O6zQCtVlEx1lY1upkSHZF5sgEK1VQ2YEQS2ydD1BwjMfAgpDXObnpua1w-h3ey9lkUxaizo1pCZRTZng-SRzL0zhfAa90I015g2zvU940mb68A__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Comprehensive academic editing and coaching tailored for MSc and PhD students in STEM and Engineering disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Serve
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Target:</span> MSc and PhD students in STEM and Engineering fields, including Civil, Agricultural, Management/Engineering Management, Materials, Energy, and Mechanical Engineering.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Stage:</span> Full thesis chapters and journal articles ready for supervisor review or journal submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              What's Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Plan Details */}
            <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                <FileText className="w-7 h-7 text-primary" />
                <span>Action Plan Details</span>
              </h3>

              <Accordion type="single" collapsible className="w-full">
                {/* Priority Levels */}
                <AccordionItem value="priority-levels">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    Priority Levels
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900 dark:text-red-400 mb-1">P1 Critical</p>
                          <p className="text-sm text-red-800 dark:text-red-300">
                            Structure, logic, missing definitions, methods/results narration gaps, inconsistent claims
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-orange-900 dark:text-orange-400 mb-1">P2 Important</p>
                          <p className="text-sm text-orange-800 dark:text-orange-300">
                            Paragraph flow, transitions, redundancy, figure/table alignment, citation consistency
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                        <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-blue-900 dark:text-blue-400 mb-1">P3 Polish</p>
                          <p className="text-sm text-blue-800 dark:text-blue-300">
                            Grammar, tone, conciseness, formatting
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Implementation Template */}
                <AccordionItem value="implementation-template">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    Implementation Template (Example)
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-4 bg-muted/30 rounded-lg p-6">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Problem:</p>
                        <p className="text-sm text-muted-foreground">
                          Methods section lacks clear explanation of how samples were collected.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Where:</p>
                        <p className="text-sm text-muted-foreground">
                          Section 2.1 (Materials and Methods), page 4, paragraph 2
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Why it matters:</p>
                        <p className="text-sm text-muted-foreground">
                          Reviewers need to understand your methodology to evaluate validity and replicate your work.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Fix steps:</p>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 ml-2">
                          <li>Add sampling location, time period, and frequency</li>
                          <li>Include sample size (n=X) and randomization method</li>
                          <li>Mention equipment/tools and storage conditions</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Verification:</p>
                        <p className="text-sm text-muted-foreground">
                          Ask: Could another researcher replicate this based on my description?
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* What's Included */}
                <AccordionItem value="whats-included">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    What Each Action Plan Includes
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pt-4 space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">For each fix: what to change, where it appears, why it matters, and clear steps to implement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Style compliance checklist (APA/IEEE/Elsevier)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Consistency checks (terminology, units, notation, figure/table references)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">A final Next actions list for the student (5–10 bullet tasks)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Integrity Note */}
              <div className="mt-8 pt-6 border-t border-border flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground italic">
                  No ghostwriting. No data fabrication. No fake references. You remain the author.
                </p>
              </div>
            </div>

            {/* Reference/Style Check Details */}
            <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center space-x-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                <span>Reference/Style Check</span>
              </h3>
              <p className="text-muted-foreground mb-6">APA, IEEE, or Elsevier formatting verification</p>

              <Accordion type="single" collapsible className="w-full">
                {/* What's Included */}
                <AccordionItem value="ref-whats-included">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    What's Included
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pt-4 space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">In-text citation consistency (author-year vs numbered style, correct order, missing citations)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Reference list formatting (APA/IEEE/Elsevier rules: punctuation, italics, capitalization, volume/issue/pages)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">DOI/URL checks (presence, formatting consistency, broken links flagged)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Duplicate references and mismatched citations (cited but missing in list; listed but not cited)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Journal-specific formatting alignment (if you provide the target journal link or template)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Figure/table caption style consistency (numbering, abbreviations, units, cross-references)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* What We Deliver */}
                <AccordionItem value="ref-deliverables">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    What We Deliver
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pt-4 space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">A Reference Issues Summary (top problems + where they occur)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">Corrected formatting suggestions inside the document (tracked changes/comments)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">A checklist of remaining items (if anything cannot be verified without missing info)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Client Responsibilities */}
                <AccordionItem value="ref-responsibilities">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    Client Responsibilities
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 bg-muted/30 rounded-lg p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        You provide the target style (APA/IEEE/Elsevier) and any journal template. We will not invent references or add sources not provided.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Integrity Note */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic">
                    No fake references. All checks are based on your provided bibliography and sources.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  If your supervisor/journal has a specific template, paste it into the registration form so we can follow it exactly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Capacity */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Turnaround Time
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Minimum <span className="font-semibold text-foreground">1 week per chapter</span> to ensure thorough review and high-quality feedback.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Monthly Capacity
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with <span className="font-semibold text-foreground">1–2 chapters per month</span> to maintain quality and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
              Payment Structure
            </h2>

            <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-lg space-y-6">
              <div className="flex items-start space-x-4">
                <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    $50 Diagnostic (Credited if Booked)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Start with an affordable diagnostic. If you proceed with the full service, the $50 is credited toward your total cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    50% Deposit to Begin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once you approve the diagnostic plan, pay 50% upfront to secure your spot and begin work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    50% on Delivery
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pay the remaining 50% upon receiving your completed, polished document.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-lg text-foreground font-semibold mb-2">
                  Accepted Payment Methods:
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  USD via PayPal • RMB via local transfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revision Policy */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
              Revision Policy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {revisionTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/30 rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:border-primary"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {tier.tier}
                    </h3>
                    <p className="text-2xl font-semibold text-foreground">
                      {tier.revisions}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
              <div className="flex items-start space-x-3">
                <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Additional revisions:</span> $20–$50 per round
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Revisions must be requested in writing and should be based on supervisor feedback
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Revisions are non-accruable and non-transferable between chapters
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Figure/table revisions count as one revision and must match provided data/parameters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Begin with our $50 diagnostic and receive a detailed action plan for your academic writing project.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
