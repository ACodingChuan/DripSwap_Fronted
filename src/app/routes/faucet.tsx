import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const FaucetPage = () => {
  return (
    <main>
      <h1>Faucet</h1>
      <p>Faucet placeholder.</p>
    </main>
  );
};

export const faucetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faucet',
  component: FaucetPage
});
