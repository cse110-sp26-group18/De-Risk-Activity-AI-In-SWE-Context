You are helping me add the smallest possible unit-test setup to an existing plain HTML/CSS/JS slot machine project.
STRICT FILE SAFETY RULE:
You may only create or modify these exact files:
- package.json
- testing/gameLogic.js
- testing/gameLogic.test.js
You must not modify any other file under any circumstance.
You must not modify the slot machine HTML file.
You must not rename, move, delete, or refactor any existing file.
If you believe another file must be changed, stop and explain why instead of making changes.
PROJECT CONTEXT:
- This project currently only has the app in a single HTML file.
- I want the smallest possible extraction for real unit tests.
- Do not try to rewrite the app.
- Do not touch browser UI code, DOM code, CSS, animations, or event listeners.
- Only extract a few pure logic helpers into a new JS file so they can be unit tested.
- Keep the extraction minimal and practical.
- Put the new files inside the existing testing/ folder.
GOAL:
Create a tiny unit-testable logic module and unit tests, without changing the existing HTML app.
TASKS:
1. Add the minimum needed package.json changes for unit testing.
2. Add Vitest as the unit test framework dependency.
3. Create testing/gameLogic.js with only a few pure logic helpers.
4. Create testing/gameLogic.test.js with a few unit tests.
5. Do not modify any existing HTML or app code.
6. Do not add Playwright here.
7. Do not add extra tooling beyond the minimum needed for unit tests.
PACKAGE.JSON REQUIREMENTS:
- If package.json exists, preserve everything else and only add the minimum needed changes
- Add only what is needed for unit tests
- Add Vitest as a devDependency
- Add a script:
  "test:unit": "vitest run"
GAMELOGIC.JS REQUIREMENTS:
Create only a small logic file with a few pure helpers appropriate for a slot machine. Keep it minimal.
Include functions like:
- applyMultiplier(payout, mult)
- useFreeSpinOrBalance(state)
- consumeForcedGrid(state)
Function expectations:
1. applyMultiplier(payout, mult)
- returns 0 if payout <= 0
- otherwise returns Math.floor(payout * mult)
2. useFreeSpinOrBalance(state)
- state has:
  - balance
  - bet
  - freeSpins
- if freeSpins > 0:
  - decrement freeSpins
  - do not reduce balance
- otherwise:
  - reduce balance by bet
- return the updated state
3. consumeForcedGrid(state)
- state has:
  - forcedGrid
- if forcedGrid exists:
  - return its value
  - set state.forcedGrid to null
- if not:
  - return null
Use CommonJS exports for compatibility:
module.exports = { ... }
UNIT TEST REQUIREMENTS:
Create tests for:
- applyMultiplier multiplies positive payout correctly
- applyMultiplier returns 0 for zero payout
- applyMultiplier returns 0 for negative payout
- useFreeSpinOrBalance uses a free spin before deducting balance
- useFreeSpinOrBalance deducts balance when no free spins exist
- consumeForcedGrid returns forcedGrid once and clears it
- consumeForcedGrid returns null when no forcedGrid exists
Use Vitest-compatible syntax.
INSTALL / RUN INSTRUCTIONS:
At the end, include the exact commands I should run:
- npm install
- npm run test:unit
If needed, mention that `npm install` will install the new Vitest devDependency from package.json.
DELIVERABLE FORMAT:
1. First list exactly which files you will create or modify
2. Then provide the full contents of each of those files
3. Do not output diffs
4. Do not mention changing any other files
5. If package.json already exists and would need merging, explain the exact change carefully
SUCCESS CONDITION:
At the end, I should be able to run:
- npm install
- npm run test:unit
and have the unit tests run successfully without any changes to the existing slot machine HTML file or any other repo files.