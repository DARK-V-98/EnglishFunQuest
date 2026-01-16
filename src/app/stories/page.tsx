'use client';

import Link from 'next/link';
import { stories } from '@/data/stories';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, BookHeart } from 'lucide-react';
import { LessonCard } from '@/components/ui/lesson-card';
import { iconMap } from '@/lib/iconMap';
import { useFavorites } from '@/hooks/use-favorites';

export default function StoriesPage() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-secondary to-accent p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <BookHeart className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Story Time</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {stories.map((story, index) => (
            <Link key={story.id} href={`/story/${story.id}`} style={{ animationDelay: `${index * 0.05}s` }} className="bounce-in block">
              <LessonCard
                title={story.title}
                description={story.description}
                icon={iconMap[story.icon] || BookHeart}
                color={story.color}
                isFavorite={isFavorite(story.id)}
                onToggleFavorite={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(story.id);
                }}
                pattern={['A', 'B', 'C'][(index % 3)] as 'A' | 'B' | 'C'}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
