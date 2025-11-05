import { Card, CardContent } from "@/components/ui/card";
import { Heart, Coffee, Users } from "lucide-react";
import seatingImage from "@assets/generated_images/Cafe_seating_area_bc8964cd.png";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cup is crafted with passion and care, using only the finest ingredients",
  },
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "We source our beans from sustainable farms and bake our pastries fresh daily",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "A welcoming space where neighbors become friends over great coffee",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">About Sugar Cafe</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your cozy neighborhood coffee shop
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={seatingImage}
                alt="Sugar Cafe Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sugar Cafe was born from a simple dream: to create a warm, inviting space where the community could gather over exceptional coffee and fresh pastries. Nestled in the heart of Imus, our minimalist cafe combines modern aesthetics with cozy comfort.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that great coffee is more than just a beverage—it's an experience. From our carefully sourced beans to our handcrafted brewing methods, every detail is designed to bring you the perfect cup.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're looking for a quiet corner to work, a place to catch up with friends, or simply a moment of peace with a delicious treat, Sugar Cafe welcomes you with open arms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
