'use client';

import Link from 'next/link';
import { grammarLessons } from '@/data/lessons/grammar';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, BookText } from 'lucide-react';
import { LessonCard } from '@/components/ui/lesson-card';
import { iconMap } from '@/lib/iconMap';

export default function GrammarPage() {

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/lessons">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <BookText className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Grammar Training</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {grammarLessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/grammar/${lesson.id}`} style={{ animationDelay: `${index * 0.05}s` }} className="bounce-in block">
              <LessonCard
                title={lesson.title}
                description={lesson.description}
                icon={iconMap[lesson.icon] || BookText}
                color={['primary', 'secondary', 'accent', 'purple', 'pink'][index % 5] as any}
                pattern={['A', 'B', 'C'][(index % 3)] as 'A' | 'B' | 'C'}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
