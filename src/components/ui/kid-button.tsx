import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kidButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-lg font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-bounce shadow-xl",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-secondary/30",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent/30",
        purple:
          "bg-purple text-purple-foreground hover:bg-purple/90 shadow-purple/30",
        pink:
          "bg-pink text-pink-foreground hover:bg-pink/90 shadow-pink/30",
        outline:
          "border-4 border-primary bg-background text-foreground hover:bg-primary/10",
        ghost:
          "hover:bg-muted text-foreground shadow-none",
        correct:
          "bg-success text-success-foreground shadow-success/30 celebrate",
        wrong:
          "bg-destructive text-destructive-foreground shadow-destructive/30 shake",
      },
      size: {
        default: "h-14 px-6 py-3",
        sm: "h-10 px-4 text-base",
        lg: "h-16 px-8 text-xl",
        xl: "h-20 px-10 text-2xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface KidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kidButtonVariants> {}

const KidButton = React.forwardRef<HTMLButtonElement, KidButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(kidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
KidButton.displayName = "KidButton";

export { KidButton, kidButtonVariants };
