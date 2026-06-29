/* Design Philosophy: Refined Editorial Elegance
 * Redesigned Home page: Warmer, more welcoming, clearly structured
 * Sections: Hero, Who I Am, What I Do, What You Receive, Who This Helps Most, How It Works, Academic Integrity, Figures Teaser, Final CTA
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Shield, FileEdit, MessageSquare, FileText, Clock, GraduationCap, BarChart3 } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const whatWeDoItems = [
    {
      icon: FileEdit,
      title: "Thesis/Dissertation Support",
      description: "Chapter-level editing, structure, coherence, supervisor-style comments",
    },
    {
      icon: FileText,
      title: "Journal Article Support",
      description: "Argument flow, methods/results narration, submission-ready language polishing",
    },
    {
      icon: CheckCircle2,
      title: "Formatting & Style Compliance",
      description: "APA / IEEE / Elsevier formatting and reference consistency",
    },
    {
      icon: BarChart3,
      title: "Figures & Tables (Data Provided)",
      description: "Publication-ready plots, multi-panel figures, and clean tables",
    },
  ];

  const deliverables = [
    "Tracked edits/suggestions for clarity and academic tone",
    "Margin comments like a supervisor (what to fix and why)",
    "Action Plan (prioritized fixes)",
    "Reference/style check (APA/IEEE/Elsevier)",
    "Optional 30–60 min Zoom call (tier-based / if needed)",
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Start with the $50 Diagnostic (paid)",
    },
    {
      number: "02",
      title: "Submit the intake form + Google Docs link",
    },
    {
      number: "03",
      title: "Receive a 1–2 page diagnostic plan (what to fix + timeline + recommended package)",
    },
    {
      number: "04",
      title: "If you book: $50 credited → 50% deposit → delivery → final 50%",
    },
  ];

  const integrityPoints = [
    "No writing from scratch",
    "No data fabrication",
    "No fake references",
    "You remain the author",
  ];

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2fJPaGRgWVXEWJolZNTqh5/sandbox/Sh3yL23lmY9wYixvWGEoOA-img-1_1770571307000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMmZKUGFHUmdXVlhFV0pvbFpOVHFoNS9zYW5kYm94L1NoM3lMMjNsbVk5d1lpeHZXR0VvT0EtaW1nLTFfMTc3MDU3MTMwNzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OvRHUHYPWAqsPH0JkNpFfW-cYv81KQftIs9E1tMXRr5wQovvnHNTrIFamoxLmgJnzdaUJXKVowh5QdTwqvNuf6NVb2FO7amDLpYF2K2jNtYQpXVyR2NHCA1ASHhttieMjSJMLkuCoEhmpnR6bXQkQM~iYKn9Wnv-OwYp9oaLmqzm9PyA8pOCyQSNW1TwXo87vd2PNGNihNah513pFsEB3my4JzC3HLCtAjwDcJmqjimdJGyvFPcUbicskdb2zlQfF-SmOAQsHgFJirci7osFLsOqb~~C0p2Q7e0sLwXsruT2dfcuv0bELKTJ7whZ1ZmCUaPWseorkSOxvdulDLx35w__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              Welcome to Gateway Scholar
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We help MSc/PhD and STEM/Engineering students strengthen thesis chapters and journal manuscripts through ethical editing, supervisor-style feedback, formatting, and coaching — without changing your research.
            </p>
            
            {/* Supporting line */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              If you feel stuck, overwhelmed, or unsure what your supervisor/journal wants, we'll give you a clear plan and fix the writing issues that block acceptance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/register">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Register Your Project
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-sm md:text-base text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              No ghostwriting • No fake data • No fake references • You remain the author
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Gateway Scholar is a focused academic support service built for students who need high-quality guidance and professional-level editing, especially in technical and STEM fields. Our role is like a "second supervisor": We improve clarity, structure, and presentation so your work reads like a strong, submission-ready document.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeDoItems.map((item, index) => {
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
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU RECEIVE */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              What You Receive
            </h2>

            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO THIS HELPS MOST */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who This Helps Most
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We work best with MSc/PhD students, especially in Engineering and STEM (civil, agriculture, management/engineering management, materials/energy/mechanical). If you already have a draft and real data/results, we can help you make it stronger and cleaner — fast.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute -left-4 -top-4 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {step.number}
                  </div>

                  <div className="relative bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-foreground leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground italic">
                Capacity is limited: 1–2 chapters/month (minimum 1 week per chapter).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACADEMIC INTEGRITY */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Academic Integrity (Non-negotiable)
              </h2>
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                We provide editing, feedback, formatting, and coaching — not ghostwriting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrityPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FIGURES & TABLES TEASER */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Figures & Tables Packages (Data Provided)
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Need publication-ready visuals? We offer figure/table packages for entire papers, including 2D plots, multi-panel figures, and 3D visualization based on your real data or simulation outputs.
            </p>
            <Link href="/figures-tables">
              <Button
                size="lg"
                className="px-10 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Figures & Tables
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Begin with the $50 diagnostic and get a clear roadmap for improving your chapter/paper. If you book a package, the diagnostic fee is credited toward your deposit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Register Your Project
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg font-semibold bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Book a Call
                </Button>
              </Link>
            </div>

            <p className="text-base opacity-90">
              WhatsApp: +86 185 5254 8576 | WeChat: tamuno23 | Email: georgegershom22@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
