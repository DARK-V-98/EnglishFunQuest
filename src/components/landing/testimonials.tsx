import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah L.",
    title: "Marketing Manager",
    quote: "LandingPilot has been a game-changer for our campaign launches. The AI writer is incredibly fast and surprisingly creative. We've cut our landing page creation time by 80%!",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-1"),
  },
  {
    id: 2,
    name: "Mike R.",
    title: "Startup Founder",
    quote: "As a lean startup, we need to move fast. LandingPilot lets us test new ideas and value propositions in minutes. The analytics are simple but powerful. Highly recommended!",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-2"),
  },
  {
    id: 3,
    name: "Jane D.",
    title: "Freelance Developer",
    quote: "I use LandingPilot for all my clients' marketing sites. It's easy to use, the templates look great, and it saves me from writing copy, which is not my strong suit. My clients love the results.",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-3"),
  },
  {
    id: 4,
    name: "Alex C.",
    title: "Product Designer",
    quote: "The UI is clean and intuitive. It's clear that a lot of thought went into the user experience. It's a joy to use, and the results are consistently professional and polished.",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-4"),
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl">Loved by Builders and Marketers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our users are saying about LandingPilot.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="h-full flex flex-col justify-between shadow-lg">
                      <CardContent className="p-6">
                        <blockquote className="text-lg italic text-foreground mb-6">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="flex items-center">
                          <Avatar>
                            {testimonial.avatar && (
                              <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
