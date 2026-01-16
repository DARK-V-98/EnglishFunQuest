'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import type { Lesson } from "@/data/lessons";
import { LessonCard } from "@/components/ui/lesson-card";
import { lessons } from "@/data/lessons";
import { Sparkles, Star, Globe, Heart, Book, BookHeart, Trophy, BookText, Menu, BookOpen } from "lucide-react";
import { KidButton } from "@/components/ui/kid-button";
import { useFavorites } from "@/hooks/use-favorites";
import { useProgress } from "@/hooks/use-progress";
import { iconMap } from "@/lib/iconMap";
import { AuthButtons } from '@/components/AuthButtons';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";


const totalQuestions = lessons.reduce((acc, l) => acc + l.quiz.length, 0);

export default function LessonsPage() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { getLessonProgress } = useProgress();
  const [lessonOfTheDay, setLessonOfTheDay] = useState<Lesson | null>(null);

  useEffect(() => {
    const dayIndex = new Date().getDate() % lessons.length;
    setLessonOfTheDay(lessons[dayIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent p-4 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8" />
            <span className="font-heading text-xl">English Fun Quest</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            <Link href="/lessons"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookOpen className="w-5 h-5" />Lessons</KidButton></Link>
            <Link href="/stories"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookHeart className="w-5 h-5" />Story Time</KidButton></Link>
            <Link href="/grammar"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookText className="w-5 h-5" />Grammar</KidButton></Link>
            <AuthButtons />
          </nav>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Menu className="w-6 h-6" />
                </KidButton>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background text-foreground p-0 w-[80vw] max-w-sm">
                <div className="p-6">
                  <Link href="/" className="flex items-center gap-2 mb-6">
                      <Globe className="w-8 h-8 text-primary" />
                      <span className="font-heading text-xl">English Fun Quest</span>
                  </Link>
                  <AuthButtons isMobile={true} />
                </div>
                <Separator />
                <nav className="flex flex-col gap-1 p-4">
                  <SheetClose asChild><Link href="/lessons"><KidButton variant="ghost" className="w-full justify-start"><BookOpen className="w-5 h-5" />Lessons</KidButton></Link></SheetClose>
                  <SheetClose asChild><Link href="/stories"><KidButton variant="ghost" className="w-full justify-start"><BookHeart className="w-5 h-5" />Story Time</KidButton></Link></SheetClose>
                  <SheetClose asChild><Link href="/grammar"><KidButton variant="ghost" className="w-full justify-start"><BookText className="w-5 h-5" />Grammar</KidButton></Link></SheetClose>
                  <SheetClose asChild><Link href="/achievements"><KidButton variant="ghost" className="w-full justify-start"><Trophy className="w-5 h-5" />Achievements</KidButton></Link></SheetClose>
                  <SheetClose asChild><Link href="/favorites"><KidButton variant="ghost" className="w-full justify-start"><Heart className="w-5 h-5" />Favorites</KidButton></Link></SheetClose>
                  <SheetClose asChild><Link href="/glossary"><KidButton variant="ghost" className="w-full justify-start"><Book className="w-5 h-5" />Glossary</KidButton></Link></SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Lessons Grid */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Lesson of the Day */}
        {lessonOfTheDay && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-accent fill-accent/20" />
              <h2 className="text-2xl sm:text-3xl font-heading text-foreground">Lesson of the Day</h2>
            </div>
            <Link href={`/lesson/${lessonOfTheDay.id}`} className="block bounce-in">
              <LessonCard
                title={lessonOfTheDay.title}
                description={lessonOfTheDay.description}
                icon={iconMap[lessonOfTheDay.icon] || BookOpen}
                color="accent"
                isFavorite={isFavorite(lessonOfTheDay.id)}
                onToggleFavorite={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(lessonOfTheDay.id);
                }}
                progress={getLessonProgress(lessonOfTheDay.id)}
                pattern="A"
              />
            </Link>
          </section>
        )}

        <div className="flex items-center gap-3 mb-8">
          <Star className="w-8 h-8 text-warning fill-warning" />
          <h2 className="text-2xl sm:text-3xl font-heading text-foreground">Choose a Lesson</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {lessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/lesson/${lesson.id}`} style={{ animationDelay: `${index * 0.05}s` }} className="bounce-in block">
              <LessonCard
                title={lesson.title}
                description={`${lesson.quiz.length} quizzes`}
                icon={iconMap[lesson.icon] || BookOpen}
                color={['primary', 'secondary', 'accent', 'purple', 'pink'][index % 5] as any}
                isFavorite={isFavorite(lesson.id)}
                onToggleFavorite={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(lesson.id);
                }}
                progress={getLessonProgress(lesson.id)}
                pattern={['A', 'B', 'C'][(index % 3)] as 'A' | 'B' | 'C'}
              />
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-4 border-primary py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-primary" />
            <span className="font-heading text-lg">English Fun Quest</span>
          </div>
          <p className="text-muted-foreground mb-2">This educational platform is provided <strong className="text-primary">completely free</strong> by</p>
          <p className="text-xl font-heading text-gradient mb-4">English Fun Quest</p>
          <p className="text-sm text-muted-foreground">© 2024 English Fun Quest. All rights reserved. Made with ❤️ for kids learning English.</p>
        </div>
      </footer>
    </div>
  );
}
