'use client';

import Link from 'next/link';
import { useFavorites } from '@/hooks/use-favorites';
import { lessons } from '@/data/lessons';
import { LessonCard } from '@/components/ui/lesson-card';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, BookOpen, Heart } from 'lucide-react';
import { iconMap } from '@/lib/iconMap';

export default function FavoritesPage() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const favoriteLessons = lessons.filter(lesson => favorites.includes(lesson.id));

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-pink to-purple p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Heart className="w-8 h-8" />
          <h1 className="text-3xl font-heading">My Favorite Lessons</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {favoriteLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {favoriteLessons.map((lesson, index) => (
              <Link key={lesson.id} href={`/lesson/${lesson.id}`} style={{ animationDelay: `${index * 0.05}s` }} className="bounce-in block">
                <LessonCard
                  title={lesson.title}
                  description={`${lesson.quiz.length} quizzes`}
                  icon={iconMap[lesson.icon] || BookOpen}
                  color={lesson.color}
                  isFavorite={isFavorite(lesson.id)}
                  onToggleFavorite={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(lesson.id);
                  }}
                  pattern={['A', 'B', 'C'][(index % 3)] as 'A' | 'B' | 'C'}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😢</div>
            <h2 className="text-3xl font-heading mb-4">No Favorites Yet!</h2>
            <p className="text-muted-foreground mb-8">Click the star on any lesson to add it to your favorites.</p>
            <Link href="/">
              <KidButton>
                <BookOpen className="w-5 h-5" />
                Find Lessons
              </KidButton>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
