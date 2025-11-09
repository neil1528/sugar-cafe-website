import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Sugar Cafe</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A cozy and minimalist coffee shop serving artisan coffee and fresh pastries in Imus, Philippines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                  <a className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid={`link-footer-${item.toLowerCase()}`}>
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>B2 L49-B Nia Road, Woodsite I, Pasong Buaya II 4103 Imus, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(046) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@sugarcafe.ph</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div>Mon - Fri: 7:00 AM - 9:00 PM</div>
                  <div>Sat - Sun: 8:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Sugar Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
