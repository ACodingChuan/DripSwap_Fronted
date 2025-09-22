import type { SwapPort } from '@/domain/ports/swap-port';

export function resolveSwapAdapter(): SwapPort {
  throw new Error('Swap adapter not configured. Set API_IMPL in your environment.');
}
