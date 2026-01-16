'use client';
import Link from 'next/link';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Crown } from 'lucide-react';

export default function LeaderboardPage() {
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
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center py-20 bg-card rounded-3xl card-shadow border-4 border-muted">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-3xl font-heading mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground mb-8">The leaderboard is under construction. Check back later to see how you rank!</p>
            <Link href="/dashboard">
              <KidButton>
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </KidButton>
            </Link>
        </div>
      </main>
    </div>
  );
}
