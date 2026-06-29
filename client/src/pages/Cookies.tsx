/* Design Philosophy: Refined Editorial Elegance
 * Cookie Policy page with clear, simple text
 */

import { Cookie, BarChart3, Settings, Info } from "lucide-react";

export default function Cookies() {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.",
      examples: "Session management, security tokens"
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "We use analytics cookies to understand how visitors interact with our website. This helps us improve the user experience and optimize our services. These cookies collect anonymous information about page visits, traffic sources, and user behavior.",
      examples: "Page views, session duration, bounce rate"
    },
    {
      icon: Info,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we use on our pages.",
      examples: "Language preferences, display settings"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Cookie className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Are Cookies?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services. Cookies do not contain any personal identification information on their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Types of Cookies We Use
            </h2>

            <div className="space-y-8">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {type.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                          {type.description}
                        </p>
                        <div className="bg-secondary/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-foreground mb-1">
                            Examples:
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {type.examples}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.
                </p>
                <p>
                  You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and some features of the website may not function properly.
                </p>
                <p className="font-semibold text-foreground">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Cookies and website data</li>
                  <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-secondary/30 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We may use third-party services such as Google Analytics to help us understand how visitors use our website. These services may set their own cookies on your device. We do not control these third-party cookies and recommend reviewing the privacy policies of these services for more information.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold">Email:</span> georgegershom22@gmail.com</p>
                <p><span className="font-semibold">WhatsApp:</span> +86 185 5254 8576</p>
                <p><span className="font-semibold">WeChat:</span> tamuno23</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
