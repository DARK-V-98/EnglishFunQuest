'use client';

import Link from 'next/link';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Trophy } from 'lucide-react';
import { achievementsList } from '@/data/achievements';
import { useAchievements } from '@/hooks/useAchievements';
import { cn } from '@/lib/utils';

export default function AchievementsPage() {
  const { isEarned } = useAchievements();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-warning to-accent p-6 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/lessons">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <Trophy className="w-8 h-8" />
          <h1 className="text-3xl font-heading">My Achievements</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievementsList.map((achievement, index) => {
            const earned = isEarned(achievement.id);
            return (
              <div
                key={achievement.id}
                className={cn(
                  "bg-card rounded-3xl p-6 card-shadow border-4 text-center flex flex-col items-center gap-3 transition-all duration-500 bounce-in",
                  earned ? "border-warning" : "border-muted opacity-60",
                )}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className={cn("text-7xl transition-transform duration-500", earned && "celebrate")}>{achievement.icon}</div>
                <div className="font-heading text-xl text-foreground">{achievement.title}</div>
                <p className="text-muted-foreground text-sm min-h-[40px]">{achievement.description}</p>
                {earned ? (
                    <div className="font-bold text-warning flex items-center justify-center gap-2">
                        <Trophy className="w-5 h-5"/> Unlocked!
                    </div>
                ) : (
                    <div className="font-bold text-muted-foreground">Locked</div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
