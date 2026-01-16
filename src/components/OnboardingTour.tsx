'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { KidButton } from '@/components/ui/kid-button';
import { BookOpen, Crown, Trophy, User as UserIcon, Sparkles } from 'lucide-react';

interface OnboardingTourProps {
  open: boolean;
  onClose: () => void;
}

export function OnboardingTour({ open, onClose }: OnboardingTourProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Welcome to English Fun Quest!
            <Sparkles className="w-6 h-6 text-accent" />
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Here’s a quick tour of your new learning adventure.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Explore Lessons</h4>
              <p className="text-sm text-muted-foreground">
                Start your journey by choosing from many fun topics in the{' '}
                <strong>Lessons</strong> section.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-secondary/10 text-secondary p-3 rounded-xl">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Climb the Leaderboard</h4>
              <p className="text-sm text-muted-foreground">
                Earn points from quizzes and see how you rank against other learners on the{' '}
                <strong>Leaderboard</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-warning/10 text-warning p-3 rounded-xl">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Unlock Achievements</h4>
              <p className="text-sm text-muted-foreground">
                As you complete lessons and get perfect scores, you’ll unlock cool{' '}
                <strong>Achievements</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-pink/10 text-pink p-3 rounded-xl">
              <UserIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Customize Your Profile</h4>
              <p className="text-sm text-muted-foreground">
                Visit your <strong>Profile</strong> to choose a fun avatar that represents you!
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <KidButton onClick={onClose} className="w-full">
            Let's Go!
          </KidButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
