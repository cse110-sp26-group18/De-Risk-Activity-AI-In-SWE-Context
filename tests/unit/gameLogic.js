function applyMultiplier(payout, mult) {
  if (payout <= 0) return 0;
  return Math.floor(payout * mult);
}

function useFreeSpinOrBalance(state) {
  if (state.freeSpins > 0) {
    state.freeSpins -= 1;
  } else {
    state.balance -= state.bet;
  }
  return state;
}

function consumeForcedGrid(state) {
  if (state.forcedGrid) {
    const grid = state.forcedGrid;
    state.forcedGrid = null;
    return grid;
  }
  return null;
}

export { applyMultiplier, useFreeSpinOrBalance, consumeForcedGrid };
