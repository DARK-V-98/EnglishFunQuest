'use client';

import Link from 'next/link';
import { lessons } from '@/data/lessons';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Book, Volume2 } from 'lucide-react';
import { ReadAloudButton } from '@/components/ReadAloudButton';
import { useMemo } from 'react';

type GlossaryItem = {
  word: string;
  emoji: string;
};

export default function GlossaryPage() {
  const glossaryItems: GlossaryItem[] = useMemo(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-accent to-secondary p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/lessons">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Book className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Glossary of Words</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {glossaryItems.map((item, index) => (
            <div key={index} className="bg-card rounded-3xl p-4 card-shadow border-4 border-muted text-center flex flex-col items-center gap-2 bounce-in" style={{ animationDelay: `${index * 0.02}s` }}>
              <div className="text-6xl">{item.emoji}</div>
              <div className="font-heading text-xl">{item.word}</div>
              <ReadAloudButton text={item.word} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
