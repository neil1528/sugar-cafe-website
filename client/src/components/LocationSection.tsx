import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  const address = "B2 L49-B Nia Road, Woodsite I, Pasong Buaya II 4103 Imus, Philippines";
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Visit Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your way to Sugar Cafe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden border border-card-border h-96">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sugar Cafe Location"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')}
                  data-testid="button-directions"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">How to Get Here</h3>
                <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <p>
                    <strong>By Car:</strong> Located in Woodsite I, accessible via Nia Road. Parking available on-site.
                  </p>
                  <p>
                    <strong>By Public Transport:</strong> Jeepneys and tricycles service the Pasong Buaya area regularly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
