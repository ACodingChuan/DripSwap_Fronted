/**
 * SwapPort defines the contract for fetching swap quotes.
 * Phase 1 uses mock implementations only.
 */
export interface SwapPort {
  getTokens(): Promise<TokenSummary[]>;
  getQuote(input: SwapQuoteInput): Promise<SwapQuote>;
}

export type TokenSummary = {
  address: string;
  symbol: string;
  decimals: number;
};

export type SwapQuoteInput = {
  amountIn: string;
  tokenIn: string;
  tokenOut: string;
};

export type SwapQuote = {
  amountOut: string;
  priceImpactBps: number;
  feeBps: number;
};
