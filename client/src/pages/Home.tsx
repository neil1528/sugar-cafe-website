import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <NewsSection />
    </div>
  );
}
