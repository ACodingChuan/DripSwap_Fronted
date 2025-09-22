import type { SwapPort } from '@/domain/ports/swap-port';

const mockTokens = [
  { address: '0x0000000000000000000000000000000000000000', symbol: 'ETH', decimals: 18 },
  { address: '0x0000000000000000000000000000000000000001', symbol: 'USDC', decimals: 6 }
];

export const swapMockAdapter: SwapPort = {
  async getTokens() {
    return mockTokens;
  },
  async getQuote() {
    return {
      amountOut: '0',
      priceImpactBps: 0,
      feeBps: 0
    };
  }
};
