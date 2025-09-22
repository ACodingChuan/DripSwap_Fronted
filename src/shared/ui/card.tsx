import * as React from 'react';

import { cn } from '@/shared/utils';

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-2xl border border-border bg-card text-card-foreground shadow-sm backdrop-blur',
      'transition-colors duration-200',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('flex flex-col gap-[var(--space-sm)] p-[var(--space-lg)]', className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3 className={cn('text-lg font-semibold leading-tight', className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('p-[var(--space-lg)] pt-0', className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('flex items-center gap-[var(--space-sm)] p-[var(--space-lg)] pt-0', className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
