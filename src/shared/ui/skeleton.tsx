import { cn } from '@/shared/utils';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-muted/60', className)}
      aria-hidden="true"
      {...props}
    />
  );
}
