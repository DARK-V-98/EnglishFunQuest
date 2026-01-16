'use server';

/**
 * @fileOverview AI-powered tool that suggests multiple variations of the hero section headline and description.
 *
 * - generateHeroContent - A function that generates variations of the hero section content.
 * - GenerateHeroContentInput - The input type for the generateHeroContent function.
 * - GenerateHeroContentOutput - The return type for the generateHeroContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroContentInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the product or service.'),
  valueProposition: z.string().describe('The core value proposition of the product or service.'),
});
export type GenerateHeroContentInput = z.infer<typeof GenerateHeroContentInputSchema>;

const GenerateHeroContentOutputSchema = z.object({
  variations: z.array(
    z.object({
      headline: z.string().describe('A variation of the hero section headline.'),
      description: z.string().describe('A variation of the hero section description.'),
    })
  ).describe('An array of hero section headline and description variations.'),
});
export type GenerateHeroContentOutput = z.infer<typeof GenerateHeroContentOutputSchema>;

export async function generateHeroContent(input: GenerateHeroContentInput): Promise<GenerateHeroContentOutput> {
  return generateHeroContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroContentPrompt',
  input: {schema: GenerateHeroContentInputSchema},
  output: {schema: GenerateHeroContentOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging hero section content for landing pages.

  Generate 3 distinct variations of the hero section content (headline and description) based on the following information:

  Product Name: {{{productName}}}
  Target Audience: {{{targetAudience}}}
  Value Proposition: {{{valueProposition}}}

  Each variation should be unique and optimized to capture the attention of the target audience and highlight the value proposition. Ensure the headline is catchy and concise, and the description provides a clear understanding of the product/service.

  Return the variations in a JSON format.

  Example:
  {
    "variations": [
      {
        "headline": "[Generated Headline 1]",
        "description": "[Generated Description 1]"
      },
      {
        "headline": "[Generated Headline 2]",
        "description": "[Generated Description 2]"
      },
      {
        "headline": "[Generated Headline 3]",
        "description": "[Generated Description 3]"
      }
    ]
  }`,
});

const generateHeroContentFlow = ai.defineFlow(
  {
    name: 'generateHeroContentFlow',
    inputSchema: GenerateHeroContentInputSchema,
    outputSchema: GenerateHeroContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
