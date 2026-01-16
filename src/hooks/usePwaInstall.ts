'use client';

import { useState, useEffect, useCallback } from 'react';

// Define the interface for the BeforeInstallPromptEvent as it's not a standard TS lib type
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const usePwaInstall = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      // Hide the install prompt & update state
      setInstallPrompt(null);
      setIsAppInstalled(true);
      console.log('PWA was installed');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if the app is already running in standalone mode (installed)
    if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!installPrompt) {
      return;
    }
    await installPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsAppInstalled(true);
    }
    // We've used the prompt, and can't use it again, so clear it
    setInstallPrompt(null);
  }, [installPrompt]);

  return { canInstall: !!installPrompt && !isAppInstalled, promptInstall };
};
