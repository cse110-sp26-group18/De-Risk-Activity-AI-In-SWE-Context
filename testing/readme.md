# Testing Guide

This project has two independent test layers: **unit tests** (Vitest) and **end-to-end tests** (Playwright). They run separately and target different aspects of the slot machine.

---

## Quick Start

### 1. Install dependencies (run once)

```bash
npm install
npx playwright install
```

### 2. Run unit tests

```bash
npm run test:unit
```

No server required. Tests run instantly in Node.

### 3. Run end-to-end tests

Start the dev server in one terminal:

```bash
python3 -m http.server 5500
```

Then in another terminal:

```bash
npm run test:e2e
```

---

## File Reference

### `testing/gameLogic.js`

A small pure-logic module extracted from the slot machine for unit testing. Contains no DOM, CSS, or browser code — only stateless functions that can run in Node.

| Function | What it does |
|---|---|
| `applyMultiplier(payout, mult)` | Returns `Math.floor(payout * mult)`, or `0` if payout is zero or negative |
| `useFreeSpinOrBalance(state)` | Decrements `freeSpins` if available; otherwise deducts `bet` from `balance`. Mutates and returns the state object |
| `consumeForcedGrid(state)` | Returns `state.forcedGrid` and sets it to `null`; returns `null` if none is set |

---

### `testing/gameLogic.test.js`

Vitest unit tests for `gameLogic.js`. Covers seven cases:

- `applyMultiplier` — positive payout, zero payout, negative payout
- `useFreeSpinOrBalance` — free spin available, no free spins
- `consumeForcedGrid` — grid present (returns it and clears), no grid (returns null)

---

### `tests/e2e/slot-machine.spec.js`

Playwright end-to-end tests for `versions/slot-machine-v22.html`. Requires the dev server running on `http://127.0.0.1:5500`.

| Test | What it checks |
|---|---|
| Core elements visible on load | `#spinBtn`, `#betInput`, `#balVal`, and `#winBanner` are all visible after the page loads |
| Win banner after spin | `#winBanner` remains visible after clicking `#spinBtn` |

---

### `playwright.config.js`

Playwright configuration at the project root. Sets:

- `testDir` — `./tests/e2e` (only scans this folder, not unit tests)
- `baseURL` — `http://127.0.0.1:5500`

---

### `node_modules/`

Created automatically by `npm install`. Contains all third-party packages declared in `package.json` — currently `@playwright/test` and `vitest`. This folder is never committed to version control (it should be in `.gitignore`). If the folder is missing, run `npm install` to recreate it.

---

### `tests/e2e/`

The folder Playwright scans for end-to-end test files. Kept separate from `testing/` so that Vitest (which is scoped to `testing/`) never accidentally picks up Playwright specs. Any new Playwright test files should be added here.

```
tests/
└── e2e/
    └── slot-machine.spec.js   ← the only Playwright test file currently
```

---

### `testing/CHECKLIST.md`

A manual and automated test checklist covering all major feature areas of the slot machine. Use this to track what has been tested and what still needs coverage. Sections:

1. Core Logic
2. Grid / Reel Generation
3. Balance / Bet Behavior
4. Spin Flow
5. Forced Test Outcomes
6. Free Spins / Multipliers
7. Auto-Spin
8. Refill / No-Credit Flow
9. Jackpot / Totals
10. Theme / Persistence
11. Responsive / Manual Visual Checks
12. Accessibility / Basic Interaction

---

## Which test runs what

| Command | Framework | Needs server | Tests |
|---|---|---|---|
| `npm run test:unit` | Vitest | No | `testing/gameLogic.test.js` |
| `npm run test:e2e` | Playwright | Yes (port 5500) | `tests/e2e/slot-machine.spec.js` |
