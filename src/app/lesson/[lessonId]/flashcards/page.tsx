'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { lessons } from '@/data/lessons';
import { KidButton } from '@/components/ui/kid-button';
import { Flashcard } from '@/components/Flashcard';
import { ArrowLeft, ArrowRight, Home, Layers } from 'lucide-react';

type FlashcardItem = {
  word: string;
  emoji: string;
  definition: string;
};

export default function FlashcardsPage() {
  const params = useParams();
  const lessonId = params.lessonId as string;
  const lesson = useMemo(() => lessons.find(l => l.id === lessonId), [lessonId]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flashcardItems: FlashcardItem[] = useMemo(() => {
    if (!lesson) return [];
    const items: FlashcardItem[] = [];
    const addedWords = new Set<string>();

    lesson.content.forEach(contentItem => {
      if (contentItem.type === 'list' && Array.isArray(contentItem.content)) {
        contentItem.content.forEach(line => {
          const parts = line.split(' - ');
          if (parts.length > 1) {
            const emojiAndWord = parts[0];
            const firstLetterIndex = emojiAndWord.search(/\p{L}/u);
            
            if (firstLetterIndex !== -1) {
              const emoji = emojiAndWord.substring(0, firstLetterIndex).trim();
              const wordAndMaybePronunciation = emojiAndWord.substring(firstLetterIndex);
              const word = wordAndMaybePronunciation.split('/')[0].trim();
              const definition = parts.slice(1).join(' - ');

              if (word && emoji && !addedWords.has(word.toLowerCase())) {
                items.push({ word, emoji, definition });
                addedWords.add(word.toLowerCase());
              }
            }
          }
        });
      }
    });
    return items;
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p>Lesson not found!</p>
      </div>
    );
  }
  
  const handleNext = () => {
      setCurrentIndex(prev => (prev + 1) % flashcardItems.length);
  }
  
  const handlePrev = () => {
      setCurrentIndex(prev => (prev - 1 + flashcardItems.length) % flashcardItems.length);
  }

  const currentCard = flashcardItems[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-secondary to-accent p-6 text-white">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href={`/lesson/${lessonId}`}>
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Layers className="w-8 h-8" />
          <div className='flex-1'>
            <h1 className="text-3xl font-heading">Flashcards</h1>
            <p className='text-white/80'>{lesson.title}</p>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-8">
        {flashcardItems.length > 0 && currentCard ? (
            <>
                <p className="text-muted-foreground font-bold">Card {currentIndex + 1} of {flashcardItems.length}</p>
                <Flashcard 
                    front={<div className="text-7xl">{currentCard.emoji}</div>}
                    back={
                        <div className="text-center">
                            <div className="text-4xl font-heading mb-2">{currentCard.word}</div>
                            <p className="text-muted-foreground">{currentCard.definition}</p>
                        </div>
                    }
                />

                <div className="flex items-center gap-4 mt-4">
                    <KidButton onClick={handlePrev} variant="outline">
                        <ArrowLeft className="w-5 h-5"/>
                        Previous
                    </KidButton>
                     <KidButton onClick={handleNext}>
                        Next
                        <ArrowRight className="w-5 h-5"/>
                    </KidButton>
                </div>
            </>
        ) : (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">😢</div>
                <h2 className="text-3xl font-heading mb-4">No Vocabulary Found!</h2>
                <p className="text-muted-foreground mb-8">This lesson doesn't seem to have a vocabulary list for flashcards.</p>
                <Link href={`/lesson/${lessonId}`}>
                <KidButton>
                    <ArrowLeft className="w-5 h-5" />
                    Back to Lesson
                </KidButton>
                </Link>
          </div>
        )}
         <Link href="/lessons">
              <KidButton variant="ghost" className="mt-8">
                <Home className="w-5 h-5" />
                Back to All Lessons
              </KidButton>
         </Link>
      </main>
    </div>
  );
}
