'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import type { Lesson } from "@/data/lessons";
import { LessonCard } from "@/components/ui/lesson-card";
import { lessons } from "@/data/lessons";
import { Sparkles, Star, Globe, Heart, Book, BookHeart, Trophy, BookText, Menu } from "lucide-react";
import { KidButton } from "@/components/ui/kid-button";
import { useFavorites } from "@/hooks/use-favorites";
import { useProgress } from "@/hooks/use-progress";
import { iconMap } from "@/lib/iconMap";
import { BookOpen } from "lucide-react";
import { AuthButtons } from '@/components/AuthButtons';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";


const totalQuestions = lessons.reduce((acc, l) => acc + l.quiz.length, 0);

export default function Home() {
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
            <span className="font-heading text-xl">Learn English Kids</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            <Link href="/stories">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <BookHeart className="w-5 h-5" />
                Story Time
              </KidButton>
            </Link>
            <Link href="/achievements">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <Trophy className="w-5 h-5" />
                Achievements
              </KidButton>
            </Link>
            <Link href="/favorites">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <Heart className="w-5 h-5" />
                Favorites
              </KidButton>
            </Link>
            <Link href="/glossary">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <Book className="w-5 h-5" />
                Glossary
              </KidButton>
            </Link>
            <Link href="/grammar">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <BookText className="w-5 h-5" />
                Grammar
              </KidButton>
            </Link>
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
                      <span className="font-heading text-xl">Learn English Kids</span>
                  </Link>
                  <AuthButtons isMobile={true} />
                </div>
                <Separator />
                <nav className="flex flex-col gap-1 p-4">
                  <SheetClose asChild>
                      <Link href="/stories">
                        <KidButton variant="ghost" className="w-full justify-start">
                            <BookHeart className="w-5 h-5" />
                            Story Time
                        </KidButton>
                      </Link>
                  </SheetClose>
                  <SheetClose asChild>
                      <Link href="/achievements">
                        <KidButton variant="ghost" className="w-full justify-start">
                            <Trophy className="w-5 h-5" />
                            Achievements
                        </KidButton>
                      </Link>
                  </SheetClose>
                  <SheetClose asChild>
                      <Link href="/favorites">
                        <KidButton variant="ghost" className="w-full justify-start">
                            <Heart className="w-5 h-5" />
                            Favorites
                        </KidButton>
                      </Link>
                  </SheetClose>
                  <SheetClose asChild>
                      <Link href="/glossary">
                        <KidButton variant="ghost" className="w-full justify-start">
                            <Book className="w-5 h-5" />
                            Glossary
                        </KidButton>
                      </Link>
                  </SheetClose>
                  <SheetClose asChild>
                      <Link href="/grammar">
                        <KidButton variant="ghost" className="w-full justify-start">
                            <BookText className="w-5 h-5" />
                            Grammar
                        </KidButton>
                      </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              Free Learning for Kids!
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-4 bounce-in">
            Learn <span className="text-gradient">English</span> with Fun! 🎉
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Start your English adventure with colorful lessons, exciting quizzes, and lots of fun!
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            {[
              { text: `🌟 ${lessons.length} Lessons`, color: "primary" },
              { text: `❓ ${totalQuestions} Questions`, color: "secondary" },
              { text: "🎮 Interactive Quizzes", color: "accent" },
              { text: "👶 For Beginners", color: "purple" },
              { text: "🆓 100% Free", color: "pink" }
            ].map((tag, i) => (
              <KidButton
                key={tag.text}
                variant={tag.color as any}
                size="sm"
                className="pointer-events-none"
                style={{ animation: `float 3s ease-in-out infinite ${i * 0.3}s` }}
              >
                {tag.text}
              </KidButton>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
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
        
        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-3xl">
          <div className="bg-card rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-heading text-foreground mb-3">You Can Do It! 💪</h3>
            <p className="text-muted-foreground mb-4">Learning English is fun and easy!</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-primary"><span className="text-4xl">📖</span><span className="font-bold">{lessons.length} Lessons</span></div>
              <div className="flex items-center gap-2 text-secondary"><span className="text-4xl">❓</span><span className="font-bold">{totalQuestions} Questions</span></div>
              <div className="flex items-center gap-2 text-accent"><span className="text-4xl">🎯</span><span className="font-bold">Instant Feedback</span></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-4 border-primary py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-primary" />
            <span className="font-heading text-lg">Learn English Kids</span>
          </div>
          <p className="text-muted-foreground mb-2">This educational platform is provided <strong className="text-primary">completely free</strong> by</p>
          <p className="text-xl font-heading text-gradient mb-4">ESYSTEMLK</p>
          <p className="text-sm text-muted-foreground">© 2024 ESYSTEMLK. All rights reserved. Made with ❤️ for kids learning English.</p>
        </div>
      </footer>
    </div>
  );
}
