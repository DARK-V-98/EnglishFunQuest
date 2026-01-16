'use client';

import Link from 'next/link';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Construction } from 'lucide-react';

export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-purple to-pink p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/dashboard">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Construction className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Parent Dashboard</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-20 bg-card rounded-3xl card-shadow border-4 border-muted">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-3xl font-heading mb-4">Coming Soon!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We're working hard to build a special dashboard for parents and teachers to track student progress. Stay tuned!
          </p>
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
