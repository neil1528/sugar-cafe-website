import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Sparkles, Coffee } from "lucide-react";
// Import menu item images
import Tapsilog from "@assets/generated_images/tapsilog.png";
import Tocilog from "@assets/generated_images/tocilog.png";
import latteImg from "@assets/generated_images/Latte_with_art_33097870.png";
import mochaImg from "@assets/generated_images/Mocha_with_chocolate_2cf71e30.png";
import coldBrewImg from "@assets/generated_images/Cold_brew_iced_32e82524.png";
import croissantImg from "@assets/generated_images/Buttery_croissant_pastry_c7e70e95.png";
import painAuChocolatImg from "@assets/generated_images/Chocolate_croissant_a77474d3.png";
import cinnamonRollImg from "@assets/generated_images/Glazed_cinnamon_roll_2494dc15.png";
import blueberryMuffinImg from "@assets/generated_images/Blueberry_muffin_7ac6e616.png";
import bananaBreadImg from "@assets/generated_images/Banana_bread_slice_98973f5d.png";
import sconeImg from "@assets/generated_images/Fresh_baked_scone_3cec4f52.png";
import signatureLatteImg from "@assets/generated_images/Signature_sugar_latte_11965066.png";
import matchaFrappeImg from "@assets/generated_images/Matcha_frappe_drink_fea4a41f.png";
import caramelMacchiatoImg from "@assets/generated_images/Caramel_macchiato_e90586a9.png";
import affogatoImg from "@assets/generated_images/Affogato_ice_cream_98f21bd9.png";
import comboImg from "@assets/generated_images/Cafe_combo_meal_0a7727d3.png";
import seasonalImg from "@assets/generated_images/Seasonal_coffee_brew_e26f3664.png";

const menuCategories = [
  {
    title: "Silog Meals",
    icon: UtensilsCrossed,
    description: "Breakfast Meals",
    items: [
      { name: "Tapsilog", price: "₱110", image: Tapsilog },
      { name: "Tocilog", price: "₱110", image: Tocilog },
      { name: "Cappuccino", price: "₱160", image: Tocilog
      { name: "Latte", price: "₱160", image: latteImg },
      { name: "Mocha", price: "₱180", image: mochaImg },
      { name: "Cold Brew", price: "₱170", image: coldBrewImg },
    ],
  },
  {
    title: "Pastries",
    icon: Coffee,
    description: "Freshly baked daily",
    items: [
      { name: "Croissant", price: "₱90", image: croissantImg },
      { name: "Pain au Chocolat", price: "₱110", image: painAuChocolatImg },
      { name: "Cinnamon Roll", price: "₱120", image: cinnamonRollImg },
      { name: "Blueberry Muffin", price: "₱100", image: blueberryMuffinImg },
      { name: "Banana Bread", price: "₱95", image: bananaBreadImg },
      { name: "Scone", price: "₱85", image: sconeImg },
    ],
  },
  {
    title: "Specials",
    icon: Sparkles,
    description: "Chef's recommendations",
    items: [
      { name: "Signature Sugar Latte", price: "₱190", image: signatureLatteImg },
      { name: "Matcha Frappe", price: "₱200", image: matchaFrappeImg },
      { name: "Caramel Macchiato", price: "₱185", image: caramelMacchiatoImg },
      { name: "Affogato", price: "₱150", image: affogatoImg },
      { name: "Cafe Special Combo", price: "₱250", image: comboImg },
      { name: "Seasonal Brew", price: "₱180", image: seasonalImg },
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

        {menuCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.items.map((item) => (
                  <Card
                    key={item.name}
                    className="hover-elevate overflow-hidden group cursor-pointer"
                    data-testid={`card-menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">{item.name}</h4>
                      <p className="text-lg font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
