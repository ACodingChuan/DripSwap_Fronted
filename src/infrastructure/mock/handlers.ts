import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/tokens', () => {
    return HttpResponse.json({ tokens: [] });
  }),
  http.post('/api/swap/quote', () => {
    return HttpResponse.json({ priceImpactBps: 0 });
  })
];
