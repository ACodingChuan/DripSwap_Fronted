import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const WalletPage = () => {
  return (
    <main>
      <h1>Wallet</h1>
      <p>Wallet placeholder.</p>
    </main>
  );
};

export const walletRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wallet',
  component: WalletPage
});
