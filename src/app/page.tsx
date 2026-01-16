'use client';

import Link from "next/link";
import { AuthButtons } from '@/components/AuthButtons';
import { KidButton } from "@/components/ui/kid-button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Globe, Menu, BookHeart, Trophy, Heart, Book, BookText, Zap, Star, ShieldCheck, PlayCircle, BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent p-4 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8" />
            <span className="font-heading text-xl">Learn English Kids</span>
          </Link>
          
          <nav className="hidden sm:flex items-center gap-1">
            <Link href="/lessons"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookOpen className="w-5 h-5" />Lessons</KidButton></Link>
            <Link href="/stories"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookHeart className="w-5 h-5" />Story Time</KidButton></Link>
            <Link href="/grammar"><KidButton variant="ghost" className="text-white hover:bg-white/20"><BookText className="w-5 h-5" />Grammar</KidButton></Link>
            <AuthButtons />
          </nav>

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20"><Menu className="w-6 h-6" /></KidButton>
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

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-background relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-4 bounce-in">
          The Fun Way to <span className="text-gradient">Learn English</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Engaging lessons, interactive quizzes, and fun stories to help kids and adults master English. Completely free!
        </p>
        <Link href="/lessons">
          <KidButton size="xl">
            <PlayCircle className="w-8 h-8" />
            Start Learning Now
          </KidButton>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading text-foreground mb-12">Why You'll Love Learning With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl card-shadow border-4 border-transparent hover:border-primary transition-all">
              <div className="bg-primary/10 inline-block p-4 rounded-2xl mb-4"><Zap className="w-10 h-10 text-primary" /></div>
              <h3 className="text-2xl font-heading mb-2">Interactive Lessons</h3>
              <p className="text-muted-foreground">Jump into topics like animals, food, and grammar with fun, bite-sized lessons.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl card-shadow border-4 border-transparent hover:border-secondary transition-all">
              <div className="bg-secondary/10 inline-block p-4 rounded-2xl mb-4"><Star className="w-10 h-10 text-secondary" /></div>
              <h3 className="text-2xl font-heading mb-2">Engaging Quizzes</h3>
              <p className="text-muted-foreground">Test your knowledge after each lesson with instant feedback and earn perfect scores.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl card-shadow border-4 border-transparent hover:border-accent transition-all">
              <div className="bg-accent/10 inline-block p-4 rounded-2xl mb-4"><ShieldCheck className="w-10 h-10 text-accent" /></div>
              <h3 className="text-2xl font-heading mb-2">For All Ages</h3>
              <p className="text-muted-foreground">From basic vocabulary for kids to detailed grammar for adults, there's something for everyone.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading text-foreground mb-12">Start Your Adventure in 3 Easy Steps</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">1️⃣</div>
                <h3 className="text-xl font-heading">Choose a Lesson</h3>
                <p className="text-muted-foreground text-center max-w-xs">Pick any topic that interests you.</p>
              </div>
               <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">2️⃣</div>
                <h3 className="text-xl font-heading">Learn & Play</h3>
                <p className="text-muted-foreground text-center max-w-xs">Read the fun content and take the quiz.</p>
              </div>
               <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">3️⃣</div>
                <h3 className="text-xl font-heading">Track Progress</h3>
                <p className="text-muted-foreground text-center max-w-xs">Sign up to save your scores & earn achievements!</p>
              </div>
            </div>
          </div>
      </section>

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
