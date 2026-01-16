import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground">
      <div className="container py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl md:text-5xl">
            Ready to Take Flight?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Stop guessing and start converting. Join hundreds of successful creators and businesses.
            Start your free trial today, no credit card required.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Your 14-Day Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
