'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { stories } from '@/data/stories';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReadAloudButton } from '@/components/ReadAloudButton';
import { iconMap } from '@/lib/iconMap';
import { BookHeart } from 'lucide-react';

export default function StoryPage() {
  const params = useParams();
  const storyId = params.storyId;

  const story = stories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-heading text-foreground mb-4">
            Story not found! 😢
          </h1>
          <Link href="/stories">
            <KidButton>
              <BookHeart className="w-5 h-5" />
              Back to Stories
            </KidButton>
          </Link>
        </div>
      </div>
    );
  }
  
  const StoryIcon = iconMap[story.icon] || BookHeart;

  const colorClasses = {
    primary: "from-primary to-primary/80",
    secondary: "from-secondary to-secondary/80",
    accent: "from-accent to-accent/80",
    purple: "from-purple to-purple/80",
    pink: "from-pink to-pink/80",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className={cn(
        "bg-gradient-to-r text-white p-6",
        colorClasses[story.color]
      )}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Link href="/stories">
              <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-6 h-6" />
              </KidButton>
            </Link>
            <div className="flex items-center gap-3">
              <StoryIcon className="w-8 h-8" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading">{story.title}</h1>
                <p className="text-white/80">{story.description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {story.content.map((paragraph, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 card-shadow border-4 border-muted bounce-in flex items-start gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl">{paragraph.emoji}</div>
              <div className='flex-1'>
                 <p className="text-xl text-muted-foreground leading-relaxed flex-1">{paragraph.text}</p>
              </div>
               <ReadAloudButton text={paragraph.text} />
            </div>
          ))}
        </div>
         <div className="text-center pt-8">
            <Link href="/">
              <KidButton>
                <Home className="w-5 h-5" />
                Back to Lessons
              </KidButton>
            </Link>
          </div>
      </main>
    </div>
  );
}
