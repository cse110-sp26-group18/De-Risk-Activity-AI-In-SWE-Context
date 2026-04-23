You are helping me add Playwright testing to an existing plain HTML/CSS/JS project.

STRICT FILE SAFETY RULE:
You may only create or modify these exact files:
- package.json
- playwright.config.js
- testing/CHECKLIST.md
- tests/e2e/slot-machine.spec.js

You must not modify any other file under any circumstance.
You must not modify the app HTML file.
You must not rename, move, delete, or refactor any existing file.
If you believe another file must be changed, stop and explain why instead of making changes.

PROJECT CONTEXT:
- This is a plain HTML/CSS/JS project, not React.
- Only use the HTML file for version 22 of the slot machine.
- The version to test is the file named:
  slot-machine-v22.html
- Do not use any other slot machine version.
- Assume this file already exists somewhere in the repo.
- Find that file in the repo and use its correct relative browser path in the Playwright test.
- I will serve the repo locally with:
  python3 -m http.server 5500

TASKS:
1. Set up Playwright for this plain HTML project.
2. Configure Playwright to use baseURL http://127.0.0.1:5500
3. Create or update testing/CHECKLIST.md
4. Create tests/e2e/slot-machine.spec.js
5. Add only the minimum needed Playwright changes to package.json
6. Do not add extra tooling
7. Do not add unit tests yet
8. Do not change any existing app code

PLAYWRIGHT TEST REQUIREMENTS:
- Test only the file named slot-machine-v22.html
- Determine its correct relative browser path from the repo structure
- Use that relative path in the Playwright tests, for example:
  await page.goto('/relative-path-to-slot-machine-v22.html');
- Add one test that loads the page and verifies these elements are visible:
  - #spinBtn
  - #betInput
  - #balVal
  - #winBanner
- Add a second test that clicks #spinBtn and verifies #winBanner remains visible after interaction
- Keep tests simple and robust
- Use CommonJS syntax if needed for compatibility

PACKAGE.JSON REQUIREMENTS:
- If package.json exists, preserve everything else and only add the minimum needed Playwright changes
- Add only what is needed for Playwright
- Add a script:
  "test:e2e": "playwright test"

CHECKLIST REQUIREMENTS:
Create or update testing/CHECKLIST.md with sections for:
- Core Logic
- Grid / Reel Generation
- Balance / Bet Behavior
- Spin Flow
- Forced Test Outcomes
- Free Spins / Multipliers
- Auto-Spin
- Refill / No-Credit Flow
- Jackpot / Totals
- Theme / Persistence
- Responsive / Manual Visual Checks
- Accessibility / Basic Interaction

INSTALL / RUN INSTRUCTIONS:
At the end, include the exact commands I should run:
- npm install
- npx playwright install
- python3 -m http.server 5500
- npm run test:e2e

DELIVERABLE FORMAT:
1. First, list exactly which files you will create or modify
2. Then provide the full contents of each allowed file
3. Do not output diffs
4. Do not mention changing any other files
5. If package.json already exists and would need merging, explain the exact change carefully

SUCCESS CONDITION:
At the end, I should be able to run:
- npm install
- npx playwright install
- python3 -m http.server 5500
- npm run test:e2e

and have Playwright test only the repo’s version 22 HTML file, without any changes to existing app files or any other repo files.