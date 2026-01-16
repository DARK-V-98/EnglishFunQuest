'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { achievementsList } from '@/data/achievements';
import { lessonCategories } from '@/data/lesson-categories';
import { lessons } from '@/data/lessons';

const ACHIEVEMENTS_KEY = 'english-kids-achievements';

type Progress = {
  [lessonId: string]: {
    score: number;
    total: number;
  }
};

export const useAchievements = () => {
  const [earned, setEarned] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (stored) {
        setEarned(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to parse achievements from localStorage', error);
    }
  }, []);

  const awardAchievement = useCallback((achievementId: string) => {
    setEarned(prevEarned => {
        if (prevEarned.includes(achievementId)) return prevEarned;

        const achievement = achievementsList.find(a => a.id === achievementId);
        if (!achievement) return prevEarned;

        const newEarned = [...prevEarned, achievementId];
        try {
            localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(newEarned));
            toast.success(`${achievement.icon} Achievement Unlocked: ${achievement.title}!`, {
                description: achievement.description,
            });
        } catch (error) {
            console.error('Failed to save achievements', error);
        }
        return newEarned;
    });
  }, []);

  const checkAchievements = useCallback((progress: Progress) => {
    const completedLessons = Object.keys(progress).filter(id => progress[id]?.score === progress[id]?.total && progress[id]?.total > 0);
    const perfectScores = completedLessons.length;

    if (completedLessons.length >= 1) awardAchievement('first_lesson');
    if (perfectScores >= 1) awardAchievement('perfect_score_1');
    if (completedLessons.length >= 5) awardAchievement('complete_5');
    if (perfectScores >= 5) awardAchievement('perfect_score_5');
    if (completedLessons.length >= 10) awardAchievement('complete_10');
    if (perfectScores >= 10) awardAchievement('perfect_score_10');

    const checkCategory = (cat: keyof typeof lessonCategories, achievementId: string) => {
        if (lessonCategories[cat].every(l => completedLessons.includes(l.id))) {
            awardAchievement(achievementId);
        }
    }

    checkCategory('basics', 'all_basics');
    checkCategory('animals', 'all_animals');
    checkCategory('people', 'all_people');
    checkCategory('places', 'all_places');
    checkCategory('time', 'all_time');
    checkCategory('fun', 'all_fun');
    checkCategory('language', 'all_language');
    checkCategory('everyday', 'all_everyday');
    
    if (completedLessons.length === lessons.length) awardAchievement('completionist');

  }, [awardAchievement]);

  const isEarned = useCallback((achievementId: string) => earned.includes(achievementId), [earned]);

  return { earned, checkAchievements, isEarned };
};
