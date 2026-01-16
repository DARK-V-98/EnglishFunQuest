'use client';

import { useCollection, useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import Link from 'next/link';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Crown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface LeaderboardUser {
  id: string;
  firstName: string;
  avatar: string;
  points: number;
}

export default function LeaderboardPage() {
  const firestore = useFirestore();
  const { user } = useUser();

  const usersQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // Query top 100 users for performance
    return query(collection(firestore, 'users'), orderBy('points', 'desc'), limit(100));
  }, [firestore]);

  const { data: users, isLoading } = useCollection<LeaderboardUser>(usersQuery);

  const top3 = users?.slice(0, 3) ?? [];
  const rest = users?.slice(3) ?? [];
  
  const rankColors = [
    'bg-gradient-to-br from-yellow-400 to-amber-500 text-white', // 1st
    'bg-gradient-to-br from-slate-400 to-gray-500 text-white', // 2nd
    'bg-gradient-to-br from-orange-400 to-yellow-600 text-white' // 3rd
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-r from-warning to-accent p-6 text-white">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <Link href="/dashboard">
              <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-6 h-6" />
              </KidButton>
            </Link>
            <Crown className="w-8 h-8" />
            <h1 className="text-3xl font-heading">Leaderboard</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-end">
                <Skeleton className="h-56 rounded-3xl" />
                <Skeleton className="h-64 rounded-3xl" />
                <Skeleton className="h-56 rounded-3xl" />
            </div>
            <div className="bg-card rounded-3xl p-4 card-shadow border-4 border-muted space-y-2">
                {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)}
            </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-warning to-accent p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/dashboard">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Crown className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Leaderboard</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {!users || users.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-3xl card-shadow border-4 border-muted">
            <div className="text-6xl mb-4">😢</div>
            <h2 className="text-3xl font-heading mb-4">Leaderboard is Empty!</h2>
            <p className="text-muted-foreground mb-8">Complete some lessons to see your rank!</p>
            <Link href="/lessons">
              <KidButton>
                <ArrowLeft className="w-5 h-5" />
                Back to Lessons
              </KidButton>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top 3 */}
            {top3.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-end">
                {/* 2nd Place */}
                {top3[1] && (
                  <div key={top3[1].id} className={cn("bg-card rounded-3xl p-6 card-shadow border-4 transition-all hover:scale-105 h-full bounce-in", user?.uid === top3[1].id ? "border-primary" : "border-slate-400")} style={{ animationDelay: '0.1s' }}>
                    <div className="relative inline-block">
                       <div className={cn("absolute -top-10 -left-1/2 transform translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading border-4 border-card", rankColors[1])}>2</div>
                      <div className="text-6xl mt-8 mb-4">{top3[1].avatar}</div>
                    </div>
                    <h3 className="text-xl font-heading text-foreground truncate">{top3[1].firstName}</h3>
                    <div className="flex items-center justify-center gap-2 text-warning font-bold text-lg">
                      <Star className="w-5 h-5 fill-current" />
                      {top3[1].points.toLocaleString()}
                    </div>
                  </div>
                )}
                
                {/* 1st Place */}
                {top3[0] && (
                  <div key={top3[0].id} className={cn("bg-card rounded-3xl p-6 card-shadow border-4 transition-all hover:scale-105 h-full scale-110 bounce-in", user?.uid === top3[0].id ? "border-primary" : "border-yellow-400")} style={{ animationDelay: '0s' }}>
                     <div className="relative inline-block">
                       <div className={cn("absolute -top-10 -left-1/2 transform translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading border-4 border-card", rankColors[0])}>1</div>
                       <Crown className="absolute -top-4 -right-12 w-10 h-10 text-yellow-400 rotate-12" />
                      <div className="text-7xl mt-8 mb-4">{top3[0].avatar}</div>
                    </div>
                    <h3 className="text-2xl font-heading text-foreground truncate">{top3[0].firstName}</h3>
                    <div className="flex items-center justify-center gap-2 text-warning font-bold text-xl">
                      <Star className="w-6 h-6 fill-current" />
                      {top3[0].points.toLocaleString()}
                    </div>
                  </div>
                )}

                {/* 3rd Place */}
                {top3[2] && (
                  <div key={top3[2].id} className={cn("bg-card rounded-3xl p-6 card-shadow border-4 transition-all hover:scale-105 h-full bounce-in", user?.uid === top3[2].id ? "border-primary" : "border-orange-500")} style={{ animationDelay: '0.2s' }}>
                    <div className="relative inline-block">
                       <div className={cn("absolute -top-10 -left-1/2 transform translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading border-4 border-card", rankColors[2])}>3</div>
                      <div className="text-6xl mt-8 mb-4">{top3[2].avatar}</div>
                    </div>
                    <h3 className="text-xl font-heading text-foreground truncate">{top3[2].firstName}</h3>
                    <div className="flex items-center justify-center gap-2 text-warning font-bold text-lg">
                      <Star className="w-5 h-5 fill-current" />
                      {top3[2].points.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
            )}


            {/* Rest of the list */}
            {rest.length > 0 && (
                <div className="bg-card rounded-3xl p-4 card-shadow border-4 border-muted space-y-2">
                    {users?.slice(3).map((player, index) => (
                        <div key={player.id} className={cn("flex items-center p-4 rounded-2xl transition-colors bounce-in", user?.uid === player.id ? 'bg-primary/10 border-2 border-primary' : 'hover:bg-muted/50')} style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}>
                            <div className="flex items-center gap-4 flex-1">
                                <div className="font-heading text-lg w-8 text-center text-muted-foreground">{index + 4}</div>
                                <div className="text-4xl">{player.avatar}</div>
                                <div className="font-bold text-lg text-foreground truncate">{player.firstName}</div>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg">
                                <Star className="w-5 h-5" />
                                {player.points.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
