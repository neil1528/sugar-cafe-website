import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Cozy_cafe_interior_hero_9faad71e.png";
import logoImage from "@assets/generated_images/Sugar_Cafe_logo_a7b63b71.png"

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          src={logoImage}
          alt="Sugar Cafe Logo"
          className="w-40 h-40 mx-auto mb-4 drop-shadow-2xl rounded-full"
        />
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Sugar Cafe - Pasong Buaya II
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
          Sweet comfort in every sip!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/order">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent border-accent-border text-lg px-8 backdrop-blur-sm"
              data-testid="button-hero-order"
            >
              Order Now
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8"
              data-testid="button-hero-menu"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
