'use client';

import { useMemo } from 'react';
import { lessons } from '@/data/lessons';
import { ReadAloudButton } from '@/components/ReadAloudButton';
import { Lightbulb } from 'lucide-react';

type GlossaryItem = {
  word: string;
  emoji: string;
};

const getGlossaryItems = (): GlossaryItem[] => {
  const items: GlossaryItem[] = [];
  const addedWords = new Set<string>();

  lessons.forEach(lesson => {
    lesson.content.forEach(contentItem => {
      if (contentItem.type === 'list' && Array.isArray(contentItem.content)) {
        contentItem.content.forEach(line => {
          const parts = line.split(' - ');
          if (parts.length > 1) {
            const emojiAndWord = parts[0];
            const firstLetterIndex = emojiAndWord.search(/\p{L}/u);
            
            if (firstLetterIndex !== -1) {
              const emoji = emojiAndWord.substring(0, firstLetterIndex).trim();
              let word = emojiAndWord.substring(firstLetterIndex).split('/')[0].split('↔️')[0].trim();
              
              if (word && emoji && !addedWords.has(word.toLowerCase())) {
                items.push({ word, emoji });
                addedWords.add(word.toLowerCase());
              }
            }
          }
        });
      }
    });
  });
  return items.sort((a, b) => a.word.localeCompare(b.word));
};

export function WordOfTheDay() {
  const glossaryItems = useMemo(() => getGlossaryItems(), []);

  const wordOfTheDay = useMemo(() => {
    if (glossaryItems.length === 0) return null;
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return glossaryItems[dayOfYear % glossaryItems.length];
  }, [glossaryItems]);

  if (!wordOfTheDay) {
    return null;
  }

  return (
    <div className="bg-accent/10 text-accent p-4 rounded-2xl flex flex-col items-center justify-center gap-3 card-shadow border-2 border-accent/20">
      <div className='flex items-center gap-2 font-bold'>
        <Lightbulb className="w-6 h-6" />
        <h3 className='font-heading text-xl'>Word of the Day</h3>
      </div>
      <div className="text-6xl">{wordOfTheDay.emoji}</div>
      <div className="font-heading text-3xl text-foreground">{wordOfTheDay.word}</div>
      <ReadAloudButton text={wordOfTheDay.word} className="text-accent/80 hover:text-accent" />
    </div>
  );
}
