'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { handleGenerateHeroContent } from '@/app/actions';
import type { GenerateHeroContentOutput } from '@/ai/flows/generate-hero-content';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, ClipboardCopy } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  productName: z.string().min(2, { message: 'Product name must be at least 2 characters.' }),
  targetAudience: z.string().min(2, { message: 'Target audience must be at least 2 characters.' }),
  valueProposition: z.string().min(10, { message: 'Value proposition must be at least 10 characters.' }),
});

type Variation = GenerateHeroContentOutput['variations'][0];

export function AIGenerator() {
  const [variations, setVariations] = useState<Variation[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      targetAudience: '',
      valueProposition: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setVariations(null);
    const result = await handleGenerateHeroContent(values);
    setIsLoading(false);

    if ('error' in result) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.error,
      });
    } else {
      setVariations(result.variations);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          <span>AI Hero Content Generator</span>
        </CardTitle>
        <CardDescription>
          Fill in the details below to generate unique hero section content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., LandingPilot" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Marketers, startups" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="valueProposition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value Proposition</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Creates high-converting landing pages in seconds using AI."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Content'
              )}
            </Button>
          </form>
        </Form>
        
        {(isLoading || variations) && <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Generated Variations:</h3>
          {isLoading && Array.from({ length: 3 }).map((_, i) => (
             <Card key={i} className="bg-muted/50">
                <CardHeader>
                    <Skeleton className="h-5 w-3/4" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                </CardContent>
             </Card>
          ))}
          {variations?.map((variation, index) => (
            <Card key={index} className="bg-muted/50 relative group">
              <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => copyToClipboard(`${variation.headline}\n\n${variation.description}`)}>
                <ClipboardCopy className="h-4 w-4" />
              </Button>
              <CardHeader>
                <CardTitle className="text-base font-medium">{variation.headline}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{variation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>}
      </CardContent>
    </Card>
  );
}
