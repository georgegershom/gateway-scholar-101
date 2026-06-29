/* Design Philosophy: Refined Editorial Elegance
 * Sophisticated navigation with subtle interactions, generous spacing
 */

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/figures-tables", label: "Figures & Tables" },
    { href: "/policies", label: "Policies" },
    { href: "/register", label: "Register" },
    { href: "/book", label: "Book a Call" },
    { href: "/my-files", label: "My Files" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                Gateway Scholar
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`button-text text-sm tracking-wide transition-all duration-300 relative group cursor-pointer ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`button-text text-base py-2 transition-colors duration-300 cursor-pointer ${
                      location === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
