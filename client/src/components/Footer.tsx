/* Design Philosophy: Refined Editorial Elegance
 * Minimal footer with elegant spacing and subtle typography
 */

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Gateway Scholar
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ethical academic editing and coaching for MSc/PhD STEM students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="button-text text-sm font-semibold text-foreground mb-3 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/figures-tables">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Figures & Tables
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/policies">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Policies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Register
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/book">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Book a Call
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="button-text text-sm font-semibold text-foreground mb-3 tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Cookie Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Gateway Scholar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
