'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { lessons } from "@/data/lessons";
import { KidButton } from "@/components/ui/kid-button";
import { QuizQuestion } from "@/components/QuizQuestion";
import { Confetti } from "@/components/ui/confetti";
import { useProgress } from "@/hooks/use-progress";
import { useAchievements } from "@/hooks/useAchievements";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Home,
  Star,
  Trophy,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ReadAloudButton } from "@/components/ReadAloudButton";
import { useUser, useFirestore } from "@/firebase";
import { doc, getDoc, DocumentData } from 'firebase/firestore';


const LessonPage = () => {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const lessonId = params.lessonId as string;
  const { progress, saveProgress } = useProgress();
  const { checkAchievements } = useAchievements();

  const [isLearning, setIsLearning] = useState(true);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const lesson = lessons.find((l) => l.id === lessonId);
  
  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    if (user && firestore) {
      const fetchUserData = async () => {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      };
      fetchUserData();
    }
  }, [user, firestore]);

  useEffect(() => {
    if (quizComplete && lesson) {
      saveProgress(lesson.id, score, lesson.quiz.length);
    }
  }, [quizComplete, lesson, score, saveProgress]);
  
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      checkAchievements(progress);
    }
  }, [progress, checkAchievements]);

  if (isUserLoading || !user) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-background">
              <p>Loading...</p>
          </div>
      )
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-heading text-foreground mb-4">
            Lesson not found! 😢
          </h1>
          <Link href="/lessons">
            <KidButton>
              <Home className="w-5 h-5" />
              Go Home
            </KidButton>
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    primary: "from-primary to-primary/80",
    secondary: "from-secondary to-secondary/80",
    accent: "from-accent to-accent/80",
    purple: "from-purple to-purple/80",
    pink: "from-pink to-pink/80",
  };

  const handleCorrect = () => {
    setScore(score + 1);
    setTimeout(() => {
      if (currentQuiz < lesson.quiz.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const handleWrong = () => {
    setTimeout(() => {
      if (currentQuiz < lesson.quiz.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setQuizComplete(false);
    setIsLearning(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={cn(
        "bg-gradient-to-r text-white p-6",
        colorClasses[lesson.color]
      )}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/lessons">
              <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-6 h-6" />
              </KidButton>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-heading">{lesson.title}</h1>
                <ReadAloudButton text={lesson.title} className="text-white/80 hover:text-white" />
              </div>
              <p className="text-white/80">{lesson.description}</p>
            </div>
          </div>
          
          {/* Progress */}
          <div className="flex gap-2">
            <button
              onClick={() => { setIsLearning(true); setQuizComplete(false); }}
              className={cn(
                "px-4 py-2 rounded-full font-bold transition-all",
                isLearning 
                  ? "bg-white text-foreground" 
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Learn
            </button>
            <button
              onClick={() => setIsLearning(false)}
              className={cn(
                "px-4 py-2 rounded-full font-bold transition-all",
                !isLearning 
                  ? "bg-white text-foreground" 
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              <CheckCircle2 className="w-4 h-4 inline mr-2" />
              Quiz
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {isLearning ? (
          // Learning Content
          <div className="space-y-6">
            {lesson.content.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-6 card-shadow border-4 border-muted bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.title && (
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-xl sm:text-2xl font-heading text-foreground">
                      {item.title}
                    </h2>
                    <ReadAloudButton text={item.title} />
                  </div>
                )}
                
                {item.type === "text" && (
                  <div className="flex items-start gap-2">
                    <p className="text-lg text-muted-foreground leading-relaxed flex-1">{item.content as string}</p>
                    <ReadAloudButton text={item.content as string} />
                  </div>
                )}

                {item.type === "tip" && (
                  <div className="bg-warning/20 border-2 border-warning rounded-xl p-4 flex items-start gap-2">
                    <p className="text-lg text-foreground flex-1">{item.content as string}</p>
                     <ReadAloudButton text={item.content as string} />
                  </div>
                )}
                
                {item.type === "list" && (
                  <ul className="space-y-2 max-h-80 overflow-y-auto pr-2">
                    {(item.content as string[]).map((listItem, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl text-base hover:bg-muted transition-colors"
                      >
                        <span className="flex-1">{listItem}</span>
                        <ReadAloudButton text={listItem.split(' - ')[0]} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            <div className="text-center pt-6">
              <KidButton
                variant={lesson.color === "primary" ? "default" : lesson.color as any}
                size="xl"
                onClick={() => setIsLearning(false)}
              >
                Start Quiz! 🎯
                <ArrowRight className="w-6 h-6" />
              </KidButton>
            </div>
          </div>
        ) : quizComplete ? (
          // Quiz Complete
          <>
            {score === lesson.quiz.length && <Confetti />}
            <div className="text-center py-12 bounce-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-warning/20 rounded-full mb-6">
                <Trophy className="w-12 h-12 text-warning" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-heading text-foreground mb-4">
                {score === lesson.quiz.length ? "Perfect Score! 🎉" : "Great Job! 🌟"}
              </h2>
              
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: lesson.quiz.length }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-8 h-8 transition-all",
                      i < score 
                        ? "text-warning fill-warning scale-110" 
                        : "text-muted"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground mb-8">
                You got <strong className="text-primary">{score}</strong> out of{" "}
                <strong>{lesson.quiz.length}</strong> questions right!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <KidButton variant="outline" onClick={restartQuiz}>
                  <Sparkles className="w-5 h-5" />
                  Try Again
                </KidButton>
                <Link href="/lessons">
                  <KidButton>
                    <Home className="w-5 h-5" />
                    More Lessons
                  </KidButton>
                </Link>
              </div>
            </div>
          </>
        ) : (
          // Quiz Questions
          <div>
            {/* Quiz Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-muted-foreground">
                  Question {currentQuiz + 1} of {lesson.quiz.length}
                </span>
                <span className="text-sm font-bold text-primary">
                  Score: {score} ⭐
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500 bg-gradient-to-r",
                    colorClasses[lesson.color]
                  )}
                  style={{
                    width: `${((currentQuiz + 1) / lesson.quiz.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            
            <QuizQuestion
              key={currentQuiz}
              question={lesson.quiz[currentQuiz].question}
              options={lesson.quiz[currentQuiz].options}
              correctAnswer={lesson.quiz[currentQuiz].correctAnswer}
              image={lesson.quiz[currentQuiz].image}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
              translation={userData?.country === 'Sri Lanka' ? lesson.quiz[currentQuiz].sinhala_translation : undefined}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default LessonPage;
