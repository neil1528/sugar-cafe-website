import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/Sugar_Cafe_logo_a7b63b71.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/access", label: "Access" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2">
            <img src={logoImage} alt="Sugar Cafe" className="h-10 w-10 mx-auto mb-1 drop-shadow-2xl rounded-full" />
            <span className="font-serif text-xl font-bold text-white">Sugar Cafe</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/order">
              <Button
                variant="default"
                size="sm"
                className="ml-2 bg-accent text-accent-foreground hover:bg-accent border-accent-border"
                data-testid="button-order-now"
              >
                Order Now
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/order">
              <Button
                variant="default"
                className="w-full bg-accent text-accent-foreground hover:bg-accent border-accent-border"
                onClick={() => setIsMenuOpen(false)}
                data-testid="button-mobile-order-now"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
