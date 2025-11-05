import GallerySection from "@/components/GallerySection";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <div className="py-16 px-4 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-primary-foreground/90">
            A visual journey through our cafe
          </p>
        </div>
      </div>
      <GallerySection />
    </div>
  );
}
