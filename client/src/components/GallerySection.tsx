import latteImage from "@assets/generated_images/Latte_art_coffee_731203d2.png";
import pastriesImage from "@assets/generated_images/Cafe_pastries_display_8592daea.png";
import icedCoffeeImage from "@assets/generated_images/Iced_coffee_drink_6b856317.png";
import seatingImage from "@assets/generated_images/Cafe_seating_area_bc8964cd.png";
import counterImage from "@assets/generated_images/Cafe_counter_workspace_2c2b70b0.png";
import outdoorImage from "@assets/generated_images/Cafe_outdoor_seating_ae233f45.png";
import cappuccinoImage from "@assets/generated_images/Cappuccino_with_beans_2dfee48d.png";
import heroImage from "@assets/generated_images/Cozy_cafe_interior_hero_9faad71e.png";

const galleryImages = [
  { src: latteImage, alt: "Beautiful latte art" },
  { src: pastriesImage, alt: "Fresh pastries" },
  { src: icedCoffeeImage, alt: "Iced coffee" },
  { src: seatingImage, alt: "Cozy seating area" },
  { src: counterImage, alt: "Cafe counter" },
  { src: outdoorImage, alt: "Outdoor seating" },
  { src: cappuccinoImage, alt: "Cappuccino" },
  { src: heroImage, alt: "Cafe interior" },
];

export default function GallerySection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our cozy space and delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`image-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
