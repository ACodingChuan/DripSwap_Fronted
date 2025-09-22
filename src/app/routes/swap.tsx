import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const SwapPage = () => {
  return (
    <main>
      <h1>Swap</h1>
      <p>Swap form placeholder.</p>
    </main>
  );
};

export const swapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/swap',
  component: SwapPage
});
