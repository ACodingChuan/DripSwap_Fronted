import { createRouter } from '@tanstack/react-router';

import { bridgeRoute } from './bridge';
import { faucetRoute } from './faucet';
import { indexRoute } from './index';
import { rootRoute } from './root';
import { swapRoute } from './swap';
import { walletRoute } from './wallet';

const routeTree = rootRoute.addChildren([
  indexRoute,
  swapRoute,
  faucetRoute,
  bridgeRoute,
  walletRoute
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
