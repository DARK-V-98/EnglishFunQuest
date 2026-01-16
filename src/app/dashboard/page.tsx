'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { KidButton } from '@/components/ui/kid-button';
import Link from 'next/link';
import {
  BookOpen,
  LogOut,
  Globe,
  Trophy,
  Star,
  BookCheck,
  Heart,
  Book,
  BookHeart,
  User,
  BookText,
} from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useProgress } from '@/hooks/use-progress';
import { useAchievements } from '@/hooks/useAchievements';
import { lessons } from '@/data/lessons';
import { achievementsList } from '@/data/achievements';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [country, setCountry] = useState('');

  const { progress } = useProgress();
  const { earned } = useAchievements();

  const completedLessons = Object.values(progress).filter(p => p.score > 0).length;
  const perfectScores = Object.values(progress).filter(p => p.score === p.total && p.total > 0).length;
  const totalLessons = lessons.length;
  const achievementsEarned = earned.length;
  const totalAchievements = achievementsList.length;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
    if (user && firestore) {
      const fetchUserData = async () => {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFirstName(userData.firstName);
          setCountry(userData.country);
        }
      };
      fetchUserData();
    }
  }, [user, isUserLoading, router, firestore]);

  if (isUserLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-heading text-center sm:text-left">
            Welcome, {firstName || 'Friend'}!
          </h1>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/profile">
              <KidButton variant="ghost" className="text-white hover:bg-white/20">
                <User className="w-5 h-5"/>
                Profile
              </KidButton>
            </Link>
            <KidButton
              onClick={() => auth.signOut()}
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </KidButton>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        {country === 'Sri Lanka' && (
          <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-8 flex items-center justify-center gap-3 card-shadow border-2 border-primary/20">
            <Globe className="w-6 h-6" />
            <p className="font-bold">
              Look for the 'Show Sinhala Translation' button in quizzes!
            </p>
          </div>
        )}

        {/* Stats Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-heading text-center mb-6">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-3xl p-6 card-shadow border-4 border-primary/20 text-center bounce-in">
              <BookCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-heading text-foreground">{completedLessons} / {totalLessons}</p>
              <p className="text-muted-foreground">Lessons Started</p>
            </div>
            <div className="bg-card rounded-3xl p-6 card-shadow border-4 border-secondary/20 text-center bounce-in" style={{animationDelay: '0.1s'}}>
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <p className="text-4xl font-heading text-foreground">{perfectScores}</p>
              <p className="text-muted-foreground">Perfect Scores</p>
            </div>
            <div className="bg-card rounded-3xl p-6 card-shadow border-4 border-accent/20 text-center bounce-in" style={{animationDelay: '0.2s'}}>
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-4xl font-heading text-foreground">{achievementsEarned} / {totalAchievements}</p>
              <p className="text-muted-foreground">Achievements</p>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section>
          <h2 className="text-3xl font-heading text-center mb-6">Where to next?</h2>
          <div className="bg-card rounded-3xl p-8 card-shadow border-4 border-muted">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <Link href="/lessons">
                <KidButton variant="outline" className="w-full h-28 flex-col">
                  <BookOpen className="w-8 h-8" />
                  All Lessons
                </KidButton>
              </Link>
              <Link href="/achievements">
                <KidButton variant="outline" className="w-full h-28 flex-col">
                  <Trophy className="w-8 h-8" />
                  My Achievements
                </KidButton>
              </Link>
              <Link href="/favorites">
                <KidButton variant="outline" className="w-full h-28 flex-col">
                  <Heart className="w-8 h-8" />
                  My Favorites
                </KidButton>
              </Link>
               <Link href="/stories">
                <KidButton variant="outline" className="w-full h-28 flex-col">
                  <BookHeart className="w-8 h-8" />
                  Story Time
                </KidButton>
              </Link>
              <Link href="/grammar">
                <KidButton variant="outline" className="w-full h-28 flex-col">
                  <BookText className="w-8 h-8" />
                  Grammar
                </KidButton>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
