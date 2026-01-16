'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { KidButton } from '@/components/ui/kid-button';
import Link from 'next/link';
import { BookOpen, LogOut, Globe } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [country, setCountry] = useState('');

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
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                 <h1 className="text-3xl font-heading">Welcome, {firstName || 'Friend'}!</h1>
                 <KidButton onClick={() => auth.signOut()} variant="ghost" className="text-white hover:bg-white/20">
                    <LogOut className="w-5 h-5" />
                    Logout
                 </KidButton>
            </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8 text-center">
            {country === 'Sri Lanka' && (
                <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-8 flex items-center justify-center gap-3 card-shadow border-2 border-primary/20">
                    <Globe className="w-6 h-6" />
                    <p className="font-bold">Sinhala translations are available in quizzes for you!</p>
                </div>
            )}
            <div className="bg-card rounded-3xl p-8 card-shadow border-4 border-muted">
                <h2 className="text-2xl font-heading mb-8">Ready to learn something new?</h2>
                <Link href="/">
                    <KidButton size="xl">
                        <BookOpen className="w-8 h-8" />
                        Go to Lessons
                    </KidButton>
                </Link>
            </div>
        </main>
    </div>
  );
}
