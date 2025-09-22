import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const BridgePage = () => {
  return (
    <main>
      <h1>Bridge</h1>
      <p>Bridge placeholder.</p>
    </main>
  );
};

export const bridgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bridge',
  component: BridgePage
});
