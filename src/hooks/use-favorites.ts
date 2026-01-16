'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'english-kids-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      setFavorites([]);
    }
  }, []);

  const saveFavorites = (newFavorites: string[]) => {
    try {
      setFavorites(newFavorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage', error);
    }
  };

  const addFavorite = useCallback((lessonId: string) => {
    setFavorites(prev => {
        const newFavorites = [...prev, lessonId];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return newFavorites;
    });
  }, []);

  const removeFavorite = useCallback((lessonId: string) => {
    setFavorites(prev => {
        const newFavorites = prev.filter((id) => id !== lessonId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((lessonId: string) => {
    return favorites.includes(lessonId);
  }, [favorites]);
  
  const toggleFavorite = useCallback((lessonId: string) => {
    setFavorites(prev => {
      const isCurrentlyFavorite = prev.includes(lessonId);
      const newFavorites = isCurrentlyFavorite
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  return { favorites, toggleFavorite, isFavorite };
};
