import type { PropsWithChildren } from 'react';

import { I18nProvider } from '@/shared/i18n';
import { ThemeProvider, Toaster } from '@/shared/ui';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <I18nProvider>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </I18nProvider>
  );
}
