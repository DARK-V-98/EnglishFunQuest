'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { KidButton } from '@/components/ui/kid-button';
import Link from 'next/link';
import { BookOpen, LogOut } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
    if (user) {
        const fetchUserData = async () => {
            const userDoc = await getDoc(doc(firestore, 'users', user.uid));
            if (userDoc.exists()) {
                setFirstName(userDoc.data().firstName);
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
