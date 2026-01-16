'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';

const SOUND_ENABLED_KEY = 'english-fun-quest-sound-enabled';

export const useSettings = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;


  useEffect(() => {
    setIsMounted(true);
    try {
      const storedSoundSetting = localStorage.getItem(SOUND_ENABLED_KEY);
      if (storedSoundSetting !== null) {
        setSoundEnabled(JSON.parse(storedSoundSetting));
      }
    } catch (error) {
      console.error('Failed to parse sound setting from localStorage', error);
      setSoundEnabled(true);
    }
  }, []);

  const toggleSound = useCallback((enabled: boolean) => {
    setSoundEnabled(enabled);
    try {
      localStorage.setItem(SOUND_ENABLED_KEY, JSON.stringify(enabled));
    } catch (error) {
      console.error('Failed to save sound setting to localStorage', error);
    }
  }, []);

  return {
    theme: theme,
    currentTheme,
    setTheme,
    soundEnabled: isMounted ? soundEnabled : true,
    setSoundEnabled: toggleSound,
    isMounted
  };
};
