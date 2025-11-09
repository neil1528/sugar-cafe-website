import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria Santos",
    initials: "MS",
    review: "Sugar Cafe is my go-to spot for morning coffee! The atmosphere is so cozy and the staff is incredibly friendly. Their latte art is beautiful and the coffee tastes amazing.",
    rating: 5,
  },
  {
    name: "John Reyes",
    initials: "JR",
    review: "Best pastries in Imus! The croissants are perfectly flaky and the coffee is always freshly brewed. I love spending my afternoons here working on my laptop.",
    rating: 5,
  },
  {
    name: "Ana Cruz",
    initials: "AC",
    review: "A hidden gem! The minimalist design creates such a peaceful environment. Perfect place to relax, read a book, or catch up with friends. Highly recommend the signature latte!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-review-${index}`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
