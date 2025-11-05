import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Order() {
  return (
    <div className="min-h-screen">
      <div className="py-16 px-4 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Order Now</h1>
          <p className="text-xl text-primary-foreground/90">
            Get your favorite coffee and treats
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent/20 mx-auto mb-4">
                <Coffee className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="font-serif text-3xl">Online Ordering Coming Soon!</CardTitle>
              <CardDescription className="text-base">
                We're working on bringing you a seamless online ordering experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground">
                In the meantime, you can place your order through the following methods:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover-elevate">
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Order by phone for pickup or delivery
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = 'tel:+63461234567'}
                      data-testid="button-call"
                    >
                      (046) 123-4567
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="pt-6 text-center">
                    <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Message Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Send us your order via social media
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" data-testid="button-facebook-order">
                        Facebook
                      </Button>
                      <Button variant="outline" className="flex-1" data-testid="button-instagram-order">
                        Instagram
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <Link href="/menu">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent border-accent-border" data-testid="button-view-menu">
                    View Our Menu
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
