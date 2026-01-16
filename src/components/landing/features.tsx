import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, LayoutTemplate, BarChart, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "AI-Powered Copywriting",
    description: "Generate engaging and persuasive headlines and descriptions in seconds. Never stare at a blank page again.",
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: "Beautiful Templates",
    description: "Choose from a library of professionally designed, high-converting landing page templates. Fully customizable.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Insightful Analytics",
    description: "Track your page's performance with easy-to-understand analytics. A/B test your content and optimize for conversions.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch Faster",
    description: "Go from idea to published landing page in minutes, not weeks. Accelerate your marketing and testing cycles.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted/50 dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl">Everything You Need to Launch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            LandingPilot provides a powerful suite of tools to build and optimize your landing pages effortlessly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/80 dark:bg-muted/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                {feature.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
