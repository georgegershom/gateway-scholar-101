/* Design Philosophy: Refined Editorial Elegance
 * Inviting contact section with warm background and clear communication options
 */

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, MessageCircle, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const messageTemplate = `Hi Gateway Scholar — I need help with [thesis chapter/journal paper] in [field]. Deadline: [date]. Style: [APA/IEEE/Elsevier]. Here is my Google Doc link: [link]. I want to start with the $50 diagnostic.`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(messageTemplate);
    setCopied(true);
    toast.success("Message template copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+86 185 5254 8576",
      link: "https://wa.me/8618552548576",
      color: "text-green-600",
    },
    {
      icon: MessageCircle,
      label: "WeChat",
      value: "tamuno23",
      link: null,
      color: "text-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "georgegershom22@gmail.com",
      link: "mailto:georgegershom22@gmail.com",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2fJPaGRgWVXEWJolZNTqh5/sandbox/Sh3yL23lmY9wYixvWGEoOA-img-5_1770571304000_na1fn_Y29udGFjdC1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMmZKUGFHUmdXVlhFV0pvbFpOVHFoNS9zYW5kYm94L1NoM3lMMjNsbVk5d1lpeHZXR0VvT0EtaW1nLTVfMTc3MDU3MTMwNDAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlZV05yWjNKdmRXNWsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZBBkx9gEuMYITqzN3CdivYcMsCaYmW3U0lLyNioq1-tETDDVTH0L-ucg5VH3MuHV8NOsvmmTG2k6ib6xJt3g5EduAXV3CfwEun1zn7OnQw7vMIcIch28dORHe6jpGQzJ6NZ~J3WVnLdhvxxxO9LpfDs3R9QKxgh2QBdlSJPDcW2F9VRm3GmDNrAgisORZtSiCx2KDtydot8TfdMPMaEb2lMiZEpaulUJOrM71ERLNg1hq01f9ygSCQ3gmQ9iZ1vLBV1i862DxrvirM-~o4dqhKw8BlwRW3YLkSzIB-CLVqrBML8Yp~WmjqhBZE52GSP0mAiKYYMesOA4AZEVjzymcQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Ready to elevate your academic writing? Reach out through any of the channels below to start your $50 diagnostic.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 ${method.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.label}
                    </h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-primary hover:underline font-medium break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-lg text-muted-foreground font-medium">
                        {method.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Message Template */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
              Quick Message Template
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              Copy this template and fill in your details to get started quickly.
            </p>

            <div className="bg-card border-2 border-border rounded-lg p-8 shadow-lg">
              <div className="bg-muted/50 rounded-lg p-6 mb-6 font-mono text-sm md:text-base leading-relaxed text-foreground">
                {messageTemplate}
              </div>

              <Button
                onClick={handleCopyTemplate}
                size="lg"
                className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copy Template
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
              What to Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Document Details
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Type: Thesis chapter or journal article</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Field of study</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Current word count or page length</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Google Docs link (with comment access)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Project Context
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Your deadline or target submission date</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Required citation style (APA/IEEE/Elsevier)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Specific concerns or areas of focus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Any supervisor feedback received</span>
                  </li>
                </ul>
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
              Let's Get Started
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Choose your preferred contact method above and send us your project details. We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8618552548576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg font-semibold bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Message on WhatsApp
              </a>
              <a
                href="mailto:georgegershom22@gmail.com"
                className="inline-block px-10 py-4 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
