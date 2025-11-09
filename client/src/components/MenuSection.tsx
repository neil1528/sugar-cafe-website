import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Croissant, Sparkles } from "lucide-react";

const menuCategories = [
  {
    title: "Coffee",
    icon: Coffee,
    description: "Artisan brewed perfection",
    items: [
      { name: "Espresso", price: "₱120" },
      { name: "Americano", price: "₱140" },
      { name: "Cappuccino", price: "₱160" },
      { name: "Latte", price: "₱160" },
      { name: "Mocha", price: "₱180" },
      { name: "Cold Brew", price: "₱170" },
    ],
  },
  {
    title: "Pastries",
    icon: Croissant,
    description: "Freshly baked daily",
    items: [
      { name: "Croissant", price: "₱90" },
      { name: "Pain au Chocolat", price: "₱110" },
      { name: "Cinnamon Roll", price: "₱120" },
      { name: "Blueberry Muffin", price: "₱100" },
      { name: "Banana Bread", price: "₱95" },
      { name: "Scone", price: "₱85" },
    ],
  },
  {
    title: "Specials",
    icon: Sparkles,
    description: "Chef's recommendations",
    items: [
      { name: "Signature Sugar Latte", price: "₱190" },
      { name: "Matcha Frappe", price: "₱200" },
      { name: "Caramel Macchiato", price: "₱185" },
      { name: "Affogato", price: "₱150" },
      { name: "Cafe Special Combo", price: "₱250" },
      { name: "Seasonal Brew", price: "₱180" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Menu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee and freshly baked treats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover-elevate" data-testid={`card-menu-${category.title.toLowerCase()}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-2xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center pb-2 border-b border-border last:border-0"
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm font-semibold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
