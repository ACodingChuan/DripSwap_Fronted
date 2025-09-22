import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  secondary:
    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ghost:
    'bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  outline:
    'border border-input bg-background text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  destructive:
    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80 focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background'
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-[var(--space-xs)]',
  md: 'h-10 px-4 text-sm gap-[var(--space-sm)]',
  lg: 'h-12 px-6 text-base gap-[var(--space-sm)]',
  icon: 'h-10 w-10'
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:outline-none',
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
