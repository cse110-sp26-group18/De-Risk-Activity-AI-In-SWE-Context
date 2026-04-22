# TEST-CHECKLIST.md

## Manual Slot Machine Testing Checklist

### Notes
- This checklist is only for manual browser testing.
- This is to validate visual behavior, interaction, layout, and user-facing flows.

---

## 1. Balance / Bet Behavior

- [X] starting balance is displayed correctly
- [X] bet increases correctly with `+`
- [X] bet decreases correctly with `-`
- [X] bet input accepts valid values
- [X] invalid bet input is handled safely
- [X] normal spin deducts bet from balance
- [X] free spin does not deduct normal credits
- [X] winnings are added back to balance correctly
- [X] balance never becomes negative

---

## 2. Spin Flow

- [X] spin button works when player can afford spin
- [X] spin button is blocked while already spinning
- [X] spin button is blocked during refill countdown
- [X] spin button is blocked when credits are insufficient
- [X] banner changes to “Spinning…” during spin
- [X] reels stop correctly and result is shown
- [X] payline highlight appears on winning result
- [X] banner updates correctly for win
- [X] banner updates correctly for loss
- [X] jackpot banner styling appears for jackpot

---

## 3. Forced Test Outcomes

- [X] forced Loss works
- [X] forced Small Win works
- [X] forced Medium Win works
- [X] forced Big Win works
- [X] forced 5 BARs works
- [X] forced Star Bonus works
- [X] forced Free Spins (3) works
- [X] forced Free Spins (5) works
- [X] forced JACKPOT works
- [X] forced Multiplier Spin works
- [X] each forced outcome affects only the next spin

---

## 4. Free Spins / Multipliers

- [X] free spins increment correctly when awarded
- [X] free spins decrement correctly when used
- [X] free spin display updates correctly
- [X] every 10th spin triggers multiplier cycle correctly
- [X] multiplier banner appears before multiplier spin
- [X] multiplier badge appears during multiplier spin
- [X] multiplied payout is correct
- [X] multiplier does not incorrectly affect losing results

---

## 5. Auto-Spin

- [X] auto-spin toggles on
- [X] auto-spin toggles off
- [X] auto-spin continues to next spin automatically
- [X] auto-spin stops when disabled
- [X] three consecutive auto-spin losses trigger soft overlay
- [X] five consecutive losses trigger dimming / attention effect
- [X] next win clears auto-loss softening state

---

## 6. Refill / No-Credit Flow

- [X] no-credit state is detected correctly
- [X] refill countdown starts correctly
- [X] banner shows refill countdown
- [X] spin is disabled during refill
- [X] credits restore correctly after refill
- [X] UI returns to playable state after refill

---

## 7. Jackpot / Totals

- [X] jackpot value displays correctly
- [X] jackpot value ticks upward correctly
- [X] jackpot payout is awarded correctly
- [X] total winnings display updates correctly after wins

---

## 8. Theme / Persistence

- [X] default theme loads correctly
- [X] theme switch updates UI
- [X] selected theme persists after refresh
- [X] unlocked theme stays unlocked after refresh
- [X] balance persists after refresh if intended
- [X] free spins persist after refresh if intended
- [X] total winnings persist after refresh if intended
- [X] corrupted or missing localStorage does not crash app

---

## 9. Responsive / Manual Visual Checks

- [X] reel area still shows 3 visible rows after resize
- [X] symbols do not shift incorrectly after resize
- [X] layout works on desktop
- [X] layout works on tablet
- [X] layout works on mobile
- [X] no horizontal scroll appears
- [X] win banner remains readable
- [X] jackpot bar remains readable
- [X] controls do not overflow
- [X] celebration effects look correct
- [X] sound and music toggles behave correctly

---

## 10. Accessibility / Basic Interaction

- [X] keyboard can reach main controls
- [X] spacebar spin works as intended
- [X] disabled controls are not clickable
- [X] status text updates are visible and understandable
- [X] decorative content does not interfere with interaction

---
