import { Button } from "@/components/ui/button";
import { AIGenerator } from "./ai-generator";

export function Hero() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span className="text-primary">Launch with Confidence.</span>
              <br />
              Craft Perfect Landing Pages with AI.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              LandingPilot is your co-pilot for creating high-converting landing pages. Generate compelling headlines and descriptions in seconds, and take your marketing to new heights.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button size="lg">
                Start for Free
              </Button>
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </div>
          </div>
          
          <AIGenerator />

        </div>
      </div>
    </section>
  );
}
