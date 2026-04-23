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
python3 -m http.server 5500 or
python -m http.server 5500
```

Then in another terminal:

```bash
npm run test:e2e
```

---

## Folder Structure

```
tests/
├── unit/
│   ├── gameLogic.js          ← pure logic helpers
│   └── gameLogic.test.js     ← Vitest unit tests
├── e2e/
│   └── slot-machine.spec.js  ← Playwright e2e tests
└── docs/
    ├── readme.md             ← this file
    ├── CHECKLIST.md          ← manual testing checklist
    ├── playwrightPrompt.md   ← e2e setup instructions
    └── unit_testing_prompt.md ← unit test setup instructions
```

---

## File Reference

### `tests/unit/gameLogic.js`

A small pure-logic module extracted from the slot machine for unit testing. Contains no DOM, CSS, or browser code — only stateless functions that can run in Node.

| Function | What it does |
|---|---|
| `applyMultiplier(payout, mult)` | Returns `Math.floor(payout * mult)`, or `0` if payout is zero or negative |
| `useFreeSpinOrBalance(state)` | Decrements `freeSpins` if available; otherwise deducts `bet` from `balance`. Mutates and returns the state object |
| `consumeForcedGrid(state)` | Returns `state.forcedGrid` and sets it to `null`; returns `null` if none is set |

---

### `tests/unit/gameLogic.test.js`

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

### `tests/docs/CHECKLIST.md`

A manual testing checklist covering all major feature areas of the slot machine. Use this to track what has been tested and what still needs coverage. Sections:

1. Balance / Bet Behavior
2. Spin Flow
3. Forced Test Outcomes
4. Free Spins / Multipliers
5. Auto-Spin
6. Refill / No-Credit Flow
7. Jackpot / Totals
8. Theme / Persistence
9. Responsive / Manual Visual Checks
10. Accessibility / Basic Interaction

---

## Which test runs what

| Command | Framework | Needs server | Tests |
|---|---|---|---|
| `npm run test:unit` | Vitest | No | `tests/unit/gameLogic.test.js` |
| `npm run test:e2e` | Playwright | Yes (port 5500) | `tests/e2e/slot-machine.spec.js` |
