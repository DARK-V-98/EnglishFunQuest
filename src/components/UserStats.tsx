'use client';
import { Flame, Star } from 'lucide-react';

export const UserStats = ({ points, streak }: { points: number; streak: number }) => {
    return (
        <div className="bg-card rounded-3xl p-6 card-shadow border-4 border-muted">
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-warning">
                        <Flame className="w-8 h-8" />
                        <span className="text-3xl font-heading">{streak}</span>
                    </div>
                    <p className="text-muted-foreground font-bold">Day Streak</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-primary">
                        <Star className="w-8 h-8" />
                        <span className="text-3xl font-heading">{points}</span>
                    </div>
                    <p className="text-muted-foreground font-bold">Total Points</p>
                </div>
            </div>
        </div>
    )
}
