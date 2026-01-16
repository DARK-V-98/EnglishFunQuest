'use client';

import { useState, useEffect, useCallback } from 'react';

const PROGRESS_KEY = 'english-kids-progress';

type Progress = {
  [lessonId: string]: {
    score: number;
    total: number;
  }
};

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_KEY);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error('Failed to parse progress from localStorage', error);
      setProgress({});
    }
  }, []);

  const saveProgress = useCallback((lessonId: string, score: number, total: number) => {
    setProgress(prev => {
        const newProgress = {
            ...prev,
            [lessonId]: { score, total }
        };
        try {
          localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
        } catch (error) {
          console.error('Failed to save progress to localStorage', error);
        }
        return newProgress;
    });
  }, []);
  
  const getLessonProgress = useCallback((lessonId: string): number => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress || lessonProgress.total === 0) return 0;
    return Math.round((lessonProgress.score / lessonProgress.total) * 100);
  }, [progress]);

  const isLessonCompleted = useCallback((lessonId: string): boolean => {
      const p = progress[lessonId];
      return p ? p.score === p.total : false;
  }, [progress]);

  return { progress, saveProgress, getLessonProgress, isLessonCompleted };
};
