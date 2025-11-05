import ReviewsSection from "@/components/ReviewsSection";

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <div className="py-16 px-4 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-primary-foreground/90">
            Hear what our customers have to say
          </p>
        </div>
      </div>
      <ReviewsSection />
    </div>
  );
}
