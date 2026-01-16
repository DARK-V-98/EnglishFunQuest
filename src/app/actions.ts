
'use server';

import {
  generateHeroContent,
  type GenerateHeroContentInput,
  type GenerateHeroContentOutput,
} from '@/ai/flows/generate-hero-content';

export async function handleGenerateHeroContent(
  data: GenerateHeroContentInput
): Promise<GenerateHeroContentOutput | { error: string }> {
  try {
    const result = await generateHeroContent(data);
    return result;
  } catch (e) {
    console.error(e);
    // Return a user-friendly error message.
    return { error: 'Failed to generate content. Please try again later.' };
  }
}
