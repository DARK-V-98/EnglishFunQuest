'use client';

import { useState, useEffect, useCallback } from "react";
import { KidButton } from "@/components/ui/kid-button";
import { Check, X, Sparkles, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReadAloudButton } from "./ReadAloudButton";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
  onCorrect: () => void;
  onWrong: () => void;
  translation?: string;
}

export function QuizQuestion({
  question,
  options,
  correctAnswer,
  image,
  onCorrect,
  onWrong,
  translation,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null);
  const [wrongSound, setWrongSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Client-side only
    setCorrectSound(new Audio('https://sfx.vfy.cz/correct.mp3'));
    setWrongSound(new Audio('https://sfx.vfy.cz/incorrect.mp3'));
  }, []);
  
  const playSound = useCallback((sound: HTMLAudioElement | null) => {
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(err => console.error("Failed to play sound:", err));
    }
  }, []);

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    setSelected(index);
    setShowResult(true);
    const correct = index === correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      playSound(correctSound);
      onCorrect();
    } else {
      playSound(wrongSound);
      onWrong();
    }
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === correctAnswer) return "correct";
    if (index === selected && !isCorrect) return "wrong";
    return "outline";
  };

  return (
    <div className="bg-card rounded-3xl p-8 card-shadow border-4 border-muted">
      {image && (
        <div className="mb-6 flex justify-center">
          <div className="text-8xl bounce-in">{image}</div>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-2 mb-4">
        <h3 className="text-2xl font-heading text-center text-foreground">
          {question}
        </h3>
        <ReadAloudButton text={question} />
      </div>

      {translation && (
        <div className="text-center mb-6">
          {!showTranslation ? (
            <KidButton variant="ghost" size="sm" onClick={() => setShowTranslation(true)}>
              <Languages className="w-5 h-5" />
              Show Sinhala Translation
            </KidButton>
          ) : (
            <div className="bg-primary/10 text-primary p-3 rounded-xl text-lg font-body bounce-in">
              {translation}
            </div>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <KidButton
            key={index}
            variant={getButtonVariant(index)}
            size="lg"
            onClick={() => handleSelect(index)}
            className={cn(
              "w-full justify-start",
              showResult && index === correctAnswer && "celebrate"
            )}
          >
            {showResult && index === correctAnswer && (
              <Check className="w-6 h-6 mr-2" />
            )}
            {showResult && index === selected && !isCorrect && index !== correctAnswer && (
              <X className="w-6 h-6 mr-2" />
            )}
            {option}
          </KidButton>
        ))}
      </div>
      
      {showResult && (
        <div
          className={cn(
            "mt-6 p-4 rounded-2xl text-center font-heading text-xl bounce-in",
            isCorrect
              ? "bg-success/20 text-success"
              : "bg-destructive/20 text-destructive"
          )}
        >
          {isCorrect ? (
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              Amazing! Great job! 🎉
              <Sparkles className="w-6 h-6" />
            </div>
          ) : (
            <div>
              Oops! The correct answer is: <strong>{options[correctAnswer]}</strong> 💪
            </div>
          )}
        </div>
      )}
    </div>
  );
}
