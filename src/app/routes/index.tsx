import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root';

const IndexPage = () => {
  return (
    <main>
      <h1>DripSwap</h1>
      <p>Landing page placeholder.</p>
    </main>
  );
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage
});
