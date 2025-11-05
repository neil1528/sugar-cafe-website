import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Gift, Sparkles } from "lucide-react";

const announcements = [
  {
    icon: Sparkles,
    title: "New Seasonal Menu",
    date: "January 15, 2025",
    description: "Try our new winter special drinks including Peppermint Mocha and Spiced Chai Latte. Available for a limited time!",
  },
  {
    icon: Gift,
    title: "Loyalty Program Launch",
    date: "January 10, 2025",
    description: "Join our new rewards program! Earn points with every purchase and get exclusive discounts and free drinks.",
  },
  {
    icon: Calendar,
    title: "Extended Weekend Hours",
    date: "January 5, 2025",
    description: "We're now open until 10 PM on weekends! Enjoy your favorite coffee and treats late into the evening.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">News & Announcements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest from Sugar Cafe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => {
            const Icon = announcement.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-announcement-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">{announcement.date}</span>
                  </div>
                  <CardTitle className="font-serif text-xl">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {announcement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
