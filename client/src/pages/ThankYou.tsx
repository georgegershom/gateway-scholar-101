/* Design Philosophy: Refined Editorial Elegance
 * Thank You page after registration with clear next steps
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Calendar, Clock } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Thanks for Registering!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              Your project registration has been received. Here's what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Next Steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Option 1: Book a Call */}
              <div className="bg-card border-2 border-primary/30 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Option 1
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Book a Call Now
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Schedule a free fit check or consultation to discuss your project immediately and get personalized guidance.
                </p>
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>

              {/* Option 2: Wait for Reply */}
              <div className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Option 2
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Wait for Our Reply
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We'll review your registration and respond within 24–48 hours via your preferred contact method with next steps.
                </p>
                <div className="bg-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground font-semibold">
                    Expected Response Time
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    24–48 Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Return Home Button */}
            <div className="text-center">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Questions in the Meantime?
            </h3>
            <div className="space-y-2 text-lg text-muted-foreground">
              <p>
                <span className="font-semibold">WhatsApp:</span> +86 185 5254 8576
              </p>
              <p>
                <span className="font-semibold">WeChat:</span> tamuno23
              </p>
              <p>
                <span className="font-semibold">Email:</span> georgegershom22@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
