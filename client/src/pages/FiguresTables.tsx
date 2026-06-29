/* Design Philosophy: Refined Editorial Elegance
 * Clear pricing structure with elegant visual hierarchy and data presentation
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, X, AlertCircle } from "lucide-react";

export default function FiguresTables() {
  const packages = [
    {
      name: "Basic Figures Package",
      price: "$180–$450",
      figures: "3 figures",
      tables: "1–2 tables",
      description: "Perfect for journal articles or single thesis chapters with moderate visual requirements",
    },
    {
      name: "Standard Figures Package",
      price: "$450–$1,000",
      figures: "5 figures",
      tables: "3–4 tables",
      description: "Ideal for comprehensive thesis chapters requiring multiple visualizations",
      featured: true,
    },
    {
      name: "Premium Figures Package",
      price: "$1,000–$2,500",
      figures: "Up to 8 figures",
      tables: "6–8 tables",
      description: "Complete visual solution for full thesis chapters or multi-figure journal submissions",
    },
  ];

  const addOns = [
    {
      item: "Extra Figure (Basic)",
      price: "$25–$60",
      description: "Simple charts, graphs, or diagrams",
    },
    {
      item: "Extra Figure (Advanced)",
      price: "$60–$150",
      description: "Complex multi-panel figures or specialized visualizations",
    },
    {
      item: "Extra Figure (3D/Simulation)",
      price: "$120–$400",
      description: "3D renderings or simulation-based visualizations",
    },
    {
      item: "Extra Table",
      price: "$15–$50",
      description: "Additional data tables with formatting",
    },
    {
      item: "Data Cleanup",
      price: "$30–$120",
      description: "Data organization and preparation for visualization",
    },
    {
      item: "Extra Revision Round",
      price: "$20–$50",
      description: "Additional revision for entire package",
    },
  ];

  const included = [
    "Publication-ready formatting",
    "Consistent styling across all visuals",
    "Exports in PNG + PDF/SVG formats",
    "Editable source files where applicable",
  ];

  const notIncluded = [
    "Fabricated data or results",
    "Unsupported claims or visualizations",
    "Running full simulations (quoted separately)",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2fJPaGRgWVXEWJolZNTqh5/sandbox/Sh3yL23lmY9wYixvWGEoOA-img-3_1770571313000_na1fn_ZmlndXJlcy10YWJsZXMtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMmZKUGFHUmdXVlhFV0pvbFpOVHFoNS9zYW5kYm94L1NoM3lMMjNsbVk5d1lpeHZXR0VvT0EtaW1nLTNfMTc3MDU3MTMxMzAwMF9uYTFmbl9abWxuZFhKbGN5MTBZV0pzWlhNdGRtbHpkV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hYGMbuIQWVTCZISHddar8emTZg67cmDxuhWWtBszBM9u~dG39S8YN26bST4vdiKGpEJXCxDVNZwIT~U3fsMr~7Vqhu7OHqABnQbUj3HKE3t0AOQewzXn4FjTx3Dnsd7BEubjIs-aQHOJljNROg0hCP44AvTefiWa6rYinwD~bphPKmUMol9ZxQQer4uqql7Q05YOhf8iFESp616Kj8gfPvJctgnZno0jYjsI33O9JuO839Q~jJWeS-~uGt1qYu20KlnabSuM9ajb2gu9t2pH1SA0N91~438uUgHI-54dJcVZgxE6sp9kHXuOYOAIks5NAeLlMe-WtTAX8V2eTGw__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Figures & Tables
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Professional scientific visualization and data presentation for your research publications.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Package Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-card border-2 rounded-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                    pkg.featured
                      ? "border-primary shadow-xl scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-lg">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{pkg.figures}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-lg">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{pkg.tables}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        pkg.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      } transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Add-Ons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {addon.item}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Included */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  What's Included
                </h2>
                <div className="space-y-4">
                  {included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Included */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Not Included
                </h2>
                <div className="space-y-4">
                  {notIncluded.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-l-4 border-primary rounded-lg p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Complexity Rule
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If any figure requires new simulation runs or significant model setup beyond visualization of provided outputs, it will be quoted separately.
                  </p>
                </div>
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
              Need Professional Figures & Tables?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let us transform your data into publication-ready visualizations that meet journal standards.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
