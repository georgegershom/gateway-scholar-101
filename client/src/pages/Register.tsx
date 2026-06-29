/* Design Philosophy: Refined Editorial Elegance
 * Registration page with Google Form link and preparation checklist
 */

import { CheckCircle2, Shield, ExternalLink, Copy, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Register() {
  const preparationItems = [
    { text: "Degree level + field", anchor: "degree-level-field" },
    { text: "Deadline date", anchor: "deadline-date" },
    { text: "Document type (thesis chapter / journal paper / report)", anchor: "document-type" },
    { text: "Word count/pages", anchor: "word-count-pages" },
    { text: "Required style (APA/IEEE/Elsevier)", anchor: "required-style" },
    { text: "Google Docs link", anchor: "google-docs-link" },
    { text: "Supervisor/journal requirements", anchor: "supervisor-journal-requirements" },
    { text: "Figures/tables needed? (yes/no)", anchor: "figures-tables-needed" },
  ];

  const copyWeChatId = () => {
    navigator.clipboard.writeText("tamuno23");
    toast.success("WeChat ID copied to clipboard!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Register Your Project
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Welcome. Register your thesis/paper/report details so we can review and respond with next steps. Google Docs link preferred.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              What to Prepare Before Registering
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {preparationItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/registration-checklist#${item.anchor}`}
                >
                  <div className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-foreground text-lg leading-relaxed group-hover:text-primary transition-colors">
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8 text-lg">
              Click any item above for detailed guidance
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
              Registration Form
            </h2>

            {/* Large Primary Button */}
            <div className="text-center mb-12">
              <a
                href="https://forms.gle/dfoge5REh4K5zTV57"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="px-16 py-8 text-2xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  Open Registration Form
                  <ExternalLink className="ml-3 w-7 h-7" />
                </Button>
              </a>
              <p className="text-muted-foreground mt-6 text-lg">
                Opens in a new tab
              </p>
            </div>

            {/* Next Steps Box */}
            <div className="bg-card border-2 border-primary/30 rounded-lg p-8 mb-12 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Next Steps After Registration
              </h3>
              <ol className="space-y-4 mb-8">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </span>
                  <p className="text-lg text-muted-foreground leading-relaxed pt-1">
                    Submit the registration form
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </span>
                  <p className="text-lg text-muted-foreground leading-relaxed pt-1">
                    Book a call (optional) at <Link href="/book" className="text-primary hover:underline font-semibold">/book</Link>
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </span>
                  <p className="text-lg text-muted-foreground leading-relaxed pt-1">
                    We reply within 24–48 hours with next steps
                  </p>
                </li>
              </ol>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/book">
                  <Button
                    size="lg"
                    variant="default"
                    className="px-8 py-6 text-lg font-semibold"
                  >
                    Book a Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg font-semibold"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Integrity Note */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Academic Integrity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No ghostwriting. No writing from scratch. No data fabrication. No fake references. You remain the author.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Block with Clickable Links */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Need Help or Have Questions?
              </h3>
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp:</span>
                  <a
                    href="https://wa.me/8618552548576?text=Hi%20Gateway%20Scholar%20%E2%80%94%20I%20just%20registered%20my%20project.%20My%20deadline%20is%20____."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80 transition-opacity"
                  >
                    +86 185 5254 8576
                  </a>
                </div>

                {/* WeChat */}
                <div className="flex items-center justify-center space-x-3">
                  <span className="font-semibold">WeChat:</span>
                  <span>tamuno23</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyWeChatId}
                    className="ml-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy WeChat ID
                  </Button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email:</span>
                  <a
                    href="mailto:georgegershom22@gmail.com"
                    className="underline hover:opacity-80 transition-opacity"
                  >
                    georgegershom22@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
