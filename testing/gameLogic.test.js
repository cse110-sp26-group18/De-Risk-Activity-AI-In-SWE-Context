import { describe, it, expect } from 'vitest';
import { applyMultiplier, useFreeSpinOrBalance, consumeForcedGrid } from './gameLogic.js';

describe('applyMultiplier', () => {
  it('multiplies a positive payout correctly', () => {
    expect(applyMultiplier(10, 3)).toBe(30);
  });

  it('returns 0 for zero payout', () => {
    expect(applyMultiplier(0, 5)).toBe(0);
  });

  it('returns 0 for negative payout', () => {
    expect(applyMultiplier(-5, 3)).toBe(0);
  });
});

describe('useFreeSpinOrBalance', () => {
  it('uses a free spin before deducting balance', () => {
    const state = { balance: 100, bet: 10, freeSpins: 2 };
    useFreeSpinOrBalance(state);
    expect(state.freeSpins).toBe(1);
    expect(state.balance).toBe(100);
  });

  it('deducts balance when no free spins exist', () => {
    const state = { balance: 100, bet: 10, freeSpins: 0 };
    useFreeSpinOrBalance(state);
    expect(state.balance).toBe(90);
    expect(state.freeSpins).toBe(0);
  });
});

describe('consumeForcedGrid', () => {
  it('returns forcedGrid once and clears it', () => {
    const grid = [['A', 'B'], ['C', 'D']];
    const state = { forcedGrid: grid };
    const result = consumeForcedGrid(state);
    expect(result).toBe(grid);
    expect(state.forcedGrid).toBeNull();
  });

  it('returns null when no forcedGrid exists', () => {
    const state = { forcedGrid: null };
    expect(consumeForcedGrid(state)).toBeNull();
  });
});
