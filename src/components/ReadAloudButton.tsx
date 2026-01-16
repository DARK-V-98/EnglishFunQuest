'use client';

import { useState } from 'react';
import { Volume2, Loader } from 'lucide-react';
import { KidButton } from '@/components/ui/kid-button';
import { cn } from '@/lib/utils';

interface ReadAloudButtonProps {
  text: string;
  className?: string;
}

export function ReadAloudButton({ text, className }: ReadAloudButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof window === 'undefined' || !window.speechSynthesis) {
        alert('Sorry, your browser does not support text-to-speech.');
        return;
    }
    if (isSpeaking || !text) return;

    try {
      window.speechSynthesis.cancel(); // Cancel any previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Text-to-speech failed', error);
      setIsSpeaking(false);
    }
  };

  return (
    <KidButton
      variant="ghost"
      size="icon"
      onClick={handleSpeak}
      disabled={isSpeaking}
      className={cn('text-muted-foreground hover:text-primary h-10 w-10 shrink-0', className)}
    >
      {isSpeaking ? (
        <Loader className="w-5 h-5 animate-spin" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
      <span className="sr-only">Read aloud</span>
    </KidButton>
  );
}
