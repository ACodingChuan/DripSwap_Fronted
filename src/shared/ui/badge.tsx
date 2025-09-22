import * as React from 'react';

import { cn } from '@/shared/utils';

type BadgeVariant = 'default' | 'outline' | 'success' | 'warning';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: 'bg-primary/10 text-primary border border-primary/20',
  outline: 'border border-border text-muted-foreground bg-transparent',
  success: 'bg-success/15 text-success border border-success/30',
  warning: 'bg-warning/15 text-warning border border-warning/30'
};

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = 'default', ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide',
      VARIANT_CLASSES[variant],
      className
    )}
    {...props}
  />
));

Badge.displayName = 'Badge';

export { Badge };
