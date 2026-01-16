'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { KidButton } from '@/components/ui/kid-button';
import Link from 'next/link';
import {
  BookOpen,
  Globe,
  Trophy,
  Heart,
  Book,
  BookHeart,
  BookText,
  Crown,
  Users,
} from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { AuthButtons } from '@/components/AuthButtons';
import { UserStats } from '@/components/UserStats';
import { OnboardingTour } from '@/components/OnboardingTour';
import { WordOfTheDay } from '@/components/WordOfTheDay';

const TOUR_STORAGE_KEY = 'english-fun-quest-onboarding-complete';

interface UserData {
  firstName: string;
  country: string;
  points: number;
  streak: number;
}

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    // Check if the tour has been completed before
    const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY);
    if (!tourCompleted) {
      // If not, show the tour after a short delay to let the page settle
      const timer = setTimeout(() => {
        setShowTour(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseTour = () => {
    setShowTour(false);
    // Mark the tour as completed in localStorage
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  };

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
    if (user && firestore) {
      const fetchUserData = async () => {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData({
            firstName: data.firstName || '',
            country: data.country || '',
            points: data.points || 0,
            streak: data.streak || 0,
          });
        }
      };
      fetchUserData();
    }
  }, [user, isUserLoading, router, firestore]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  if (isUserLoading || !user || !userData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <OnboardingTour open={showTour} onClose={handleCloseTour} />
      <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-heading">
              {getGreeting()}, {userData.firstName}!
            </h1>
            <AuthButtons />
          </div>
        </header>
        <main className="flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-4xl space-y-8">
            <UserStats points={userData.points} streak={userData.streak} />

            <WordOfTheDay />

            {userData.country === 'Sri Lanka' && (
              <div className="bg-primary/10 text-primary p-4 rounded-2xl flex items-center justify-center gap-3 card-shadow border-2 border-primary/20">
                <Globe className="w-6 h-6" />
                <p className="font-bold">
                  Look for the 'Show Sinhala Translation' button in quizzes!
                </p>
              </div>
            )}

            <div className="bg-card rounded-3xl p-8 card-shadow border-4 border-muted">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <Link href="/lessons">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <BookOpen className="w-10 h-10 mb-2" />
                    All Lessons
                  </KidButton>
                </Link>
                <Link href="/stories">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <BookHeart className="w-10 h-10 mb-2" />
                    Story Time
                  </KidButton>
                </Link>
                <Link href="/grammar">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <BookText className="w-10 h-10 mb-2" />
                    Grammar
                  </KidButton>
                </Link>
                <Link href="/achievements">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <Trophy className="w-10 h-10 mb-2" />
                    Achievements
                  </KidButton>
                </Link>
                 <Link href="/leaderboard">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <Crown className="w-10 h-10 mb-2" />
                    Leaderboard
                  </KidButton>
                </Link>
                <Link href="/favorites">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <Heart className="w-10 h-10 mb-2" />
                    My Favorites
                  </KidButton>
                </Link>
                <Link href="/glossary">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <Book className="w-10 h-10 mb-2" />
                    Glossary
                  </KidButton>
                </Link>
                <Link href="/dashboard/parent">
                  <KidButton variant="outline" className="w-full h-32 flex-col text-lg">
                    <Users className="w-10 h-10 mb-2" />
                    Parent Area
                  </KidButton>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
