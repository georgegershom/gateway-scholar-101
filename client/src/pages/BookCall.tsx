/* Design Philosophy: Refined Editorial Elegance
 * Book a Call page with two booking options and clear process
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, MessageSquare, Mail, CheckCircle2 } from "lucide-react";

export default function BookCall() {
  const bookingOptions = [
    {
      icon: Clock,
      title: "Free Fit Check (15 min)",
      description: "Eligibility + timeline check",
      features: [
        "Quick assessment of your project",
        "Timeline feasibility check",
        "Determine if we're a good fit",
        "No commitment required",
      ],
    },
    {
      icon: MessageSquare,
      title: "Consultation (30–60 min)",
      description: "Scope + strategy + next steps",
      features: [
        "Detailed project scope discussion",
        "Strategic editing approach",
        "Timeline and package recommendations",
        "Clear action plan and next steps",
      ],
    },
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Register your project first",
      link: "/register",
    },
    {
      number: "02",
      title: "Send your availability (include time zone)",
    },
    {
      number: "03",
      title: "Receive confirmation + meeting link",
    },
  ];

  const whatsappLink = "https://wa.me/8618552548576?text=Hi%20Gateway%20Scholar%20%E2%80%94%20I%20want%20to%20book%20a%20call.%20My%20field%3A%20____%20Deadline%3A%20____%20Google%20Doc%20link%3A%20____";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Book a Call
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Choose the call type that fits your needs. We'll discuss your project and determine the best path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Choose Your Call Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {bookingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {option.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              How Booking Works
            </h2>

            <div className="space-y-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>

                    <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                        {step.link && (
                          <Link href={step.link}>
                            <span className="ml-2 text-primary hover:underline cursor-pointer">
                              (click here)
                            </span>
                          </Link>
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTAs */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Contact us via your preferred method to schedule your call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg font-semibold bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Book via WhatsApp
              </a>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-4 text-lg font-semibold bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Register First
                </Button>
              </Link>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8">
              <h3 className="text-xl font-semibold mb-4">
                Alternative Contact Methods
              </h3>
              <div className="space-y-2 text-lg opacity-90">
                <p className="flex items-center justify-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span><span className="font-semibold">WeChat:</span> tamuno23</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span><span className="font-semibold">Email:</span> georgegershom22@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
