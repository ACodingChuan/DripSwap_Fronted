import { createRoute } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, FlaskConical, Palette } from 'lucide-react';

import { rootRoute } from './root';
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton, ThemeToggle, toast } from '@/shared/ui';

const IndexPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-[var(--space-xl)] px-6 py-12 lg:px-12">
      <section className="flex flex-col gap-[var(--space-sm)]">
        <Badge variant="outline" className="self-start" aria-live="polite">
          当前为 Mock 模式
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Welcome to DripSwap</h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Phase 1 runs fully on mocked services. Explore the design system below and follow the primary actions to continue building Swap,
          Faucet, Bridge, and Wallet flows.
        </p>
      </section>

      <section className="grid gap-[var(--space-lg)] lg:grid-cols-[2fr,1fr]" aria-label="Design system showcase">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-sm)] text-xl">
              <Palette className="size-5" aria-hidden="true" /> Design system playground
            </CardTitle>
            <CardDescription>
              Mix and match primitives from <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@/shared/ui</code> to stay on-brand.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-[var(--space-lg)]">
            <div className="flex flex-wrap items-center gap-[var(--space-sm)]">
              <Button onClick={() => toast('Primary action triggered', { description: 'Toasts use sonner with theme aware styling.' })}>
                Show toast <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            <div className="grid gap-[var(--space-sm)] sm:grid-cols-2">
              <div className="flex flex-col gap-[var(--space-sm)] rounded-xl border border-dashed border-muted p-[var(--space-md)]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Form controls</h3>
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-[var(--space-sm)] rounded-xl border border-dashed border-muted p-[var(--space-md)]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Skeleton state</h3>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-2/3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card aria-label="Progress overview" className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--space-sm)] text-lg">
              <CheckCircle2 className="size-5 text-success" aria-hidden="true" /> Phase 1 checkpoints
            </CardTitle>
            <CardDescription>All endpoints and wallet integrations remain mocked in this phase.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-[var(--space-sm)] text-sm text-muted-foreground">
              <li className="flex items-start gap-[var(--space-xs)]">
                <FlaskConical className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                <span>MSW handlers drive data for Swap, Faucet, Bridge, and Wallet workloads.</span>
              </li>
              <li className="flex items-start gap-[var(--space-xs)]">
                <ArrowRight className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                <span>Plan next steps: implement routing shells, mock adapters, and tests.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage
});
