import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, Star } from "lucide-react";
import { KidButton } from "./kid-button";

interface LessonCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent" | "purple" | "pink";
  progress?: number;
  isFavorite?: boolean;
  onToggleFavorite?: (e: React.MouseEvent) => void;
}

const colorClasses = {
  primary: "bg-primary/10 border-primary text-primary hover:bg-primary/20",
  secondary: "bg-secondary/10 border-secondary text-secondary hover:bg-secondary/20",
  accent: "bg-accent/10 border-accent text-accent hover:bg-accent/20",
  purple: "bg-purple/10 border-purple text-purple hover:bg-purple/20",
  pink: "bg-pink/10 border-pink text-pink hover:bg-pink/20",
};

const iconBgClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  purple: "bg-purple",
  pink: "bg-pink",
};

export function LessonCard({
  title,
  description,
  icon: Icon,
  color,
  progress = 0,
  isFavorite,
  onToggleFavorite,
}: LessonCardProps) {
  return (
    <div
      className={cn(
        "relative w-full p-6 rounded-3xl border-[6px] transition-all duration-300 hover-bounce card-shadow text-left transition-shadow cursor-pointer",
        colorClasses[color]
      )}
    >
      {onToggleFavorite && (
        <KidButton
          variant="ghost"
          size="icon"
          onClick={onToggleFavorite}
          className="absolute top-2 right-2 z-10 text-warning hover:bg-warning/20 h-12 w-12"
        >
          <Star className={cn("w-7 h-7 transition-all", isFavorite ? "fill-warning" : "fill-transparent stroke-current")} />
        </KidButton>
      )}
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "p-4 rounded-2xl text-white shadow-lg",
            iconBgClasses[color]
          )}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-heading text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground font-body text-sm">{description}</p>
        </div>
      </div>
      {progress > 0 && (
        <div className="mt-4">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all duration-500", iconBgClasses[color])}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs mt-1 text-muted-foreground">{progress}% complete</p>
        </div>
      )}
    </div>
  );
}
