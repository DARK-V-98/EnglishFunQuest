'use client';
import { useUser, useFirestore } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';

export const useUserStats = () => {
    const { user } = useUser();
    const firestore = useFirestore();

    const updateUserStats = useCallback(async (score: number, total: number) => {
        if (!user || !firestore) return;

        const isPerfectScore = score === total;
        const userDocRef = doc(firestore, 'users', user.uid);

        try {
            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) return;

            const userData = userDoc.data();
            const now = new Date();
            const today = now.toISOString().split('T')[0]; // YYYY-MM-DD

            // Points logic
            let pointsToAdd = 10; // 10 points for completion
            if (isPerfectScore) {
                pointsToAdd += 5; // Extra 5 for perfect score
            }
            const newPoints = (userData.points || 0) + pointsToAdd;

            // Streak logic
            let newStreak = userData.streak || 0;
            const lastDate = userData.lastLessonCompletedDate;

            if (lastDate !== today) {
                const yesterday = new Date(now);
                yesterday.setDate(now.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastDate === yesterdayStr) {
                    newStreak = (userData.streak || 0) + 1; // Continue streak
                } else {
                    newStreak = 1; // Reset or start streak
                }
            }
            // if lastDate is today, streak doesn't change

            await setDoc(userDocRef, {
                points: newPoints,
                streak: newStreak,
                lastLessonCompletedDate: today
            }, { merge: true });

        } catch (error) {
            console.error("Error updating user stats:", error);
        }
    }, [user, firestore]);

    return { updateUserStats };
};
