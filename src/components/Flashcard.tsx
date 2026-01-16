'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';

interface FlashcardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export function Flashcard({ front, back }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full max-w-lg h-80 perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={cn(
          'relative w-full h-full transform-style-3d transition-transform duration-700',
          isFlipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-3xl bg-card card-shadow border-4 border-muted flex flex-col items-center justify-center p-8">
          {front}
           <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-muted-foreground">
                <RefreshCw className="w-3 h-3"/> Click to flip
            </div>
        </div>
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-3xl bg-card card-shadow border-4 border-primary rotate-y-180 flex flex-col items-center justify-center p-8">
          {back}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-muted-foreground">
                <RefreshCw className="w-3 h-3"/> Click to flip
            </div>
        </div>
      </div>
    </div>
  );
}
