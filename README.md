# Hadea Field Log

A single-page platinum trophy companion for **Hell is Us** (Rogue Factor, 2025). Chronological missables checklist, personal field notes, and spoiler-graduated hint handoff to Claude — built as a standalone web app for iPhone home screens.

**Live:** https://pawnee-projects.github.io/HiU-Platinum/ 

> ⚠️ Light spoilers: checklist entries name NPCs, locations, and side-quest titles. No story content.

## Using it

Open the link, tap around. On iOS 26+: Safari → Share → **Add to Home Screen** (keep "Open as Web App" on) for a full-screen app with its own icon.

- Tap phase headers to collapse acts you've finished — the fold state persists
- **Nudge / Hint / Spoil it** copies a ready-made prompt and opens Claude; paste if the composer arrives empty
- All progress lives in *your* browser on *your* device. Nothing is stored server-side; this repo only serves the page

## Where the data lives (read before doing anything drastic)

Progress and notes are in `localStorage`, scoped per browser per device. The home-screen web app has its **own storage container, separate from Safari** — always enter progress through the icon. Home-screen apps are exempt from Safari's 7-day storage cleanup, and using the app resets the timer regardless.

**Export backup** downloads your run as JSON; **Import backup** restores it. Export at milestones. It takes ten seconds and has already justified itself.

## Build log

- **9.0.2 (FRONTIER)** — hint-panel polish. The `Ask a Hint` control moved down to the header band beside "All boxes checked" (below the progress bar), the box now opens as a self-contained bordered panel and **defaults closed** (no longer springs open on load), and the three spoiler levels (Nudge / Hint / Spoil it) moved off the missable/warning tag colors onto their own **violet intensity ramp** (faint → bold) so they read as a distinct reveal scale
- **9.0.1 (FRONTIER)** — a polish pass over 9.0. **Tuck:** the `✓ SECURED` / `Tuck away ↓` banner moved to the **bottom** of each phase (reachable right after you check the last box on a long list) and now carries a **per-phase sentiment line** (Act 1 → "place the first Keystone at Lake Cynon"; Museum → "the last missable zone is behind you… breathe"); the two manual "did I get them all?" gate rows (Act 1 gate check, Museum milestone) are **retired** — the computed banner supersedes them, their guidance baked into the banner text. **Hints:** the `Ask a Hint` control moved out of the controls row into the **header** (top-right, faint amber) so it no longer reads as a second filter, and its box is now reachable from both tabs. **Copy:** the Field-notes / Hint descriptions separate *what to log or ask* (primary) from *how the app behaves* (dim fine-print), and the spoiler-level legend (Nudge / Hint / Spoil it) moved into the hint panel so it's explained at every per-note Nudge, not just in the Hint box
- **9.0 (FRONTIER)** — the checklist becomes a self-organizing surface. Completed phases flip to a done state *in place* (`✓ ALL UNDERSTOOD` / `✓ MISSABLES SECURED`) with a `Tuck away ↓` control; tapping folds the block into a `── COMPLETED ──` zone at the bottom, still un-foldable for reference. Nothing sinks on its own — you tap to tuck; unchecking a secured box auto-surfaces its phase. PHASE 00 becomes **Standing Orders** (no phase number). Hints moves from a standalone section to an `Ask for a Hint` chip beside the filter. Filter chips relabelled `FILTER: …`; the `BUILD` kicker gains its codename in parentheses
- **8.6 · AMEND** — logged field notes are now editable in place: each note gets an **Edit** button that swaps its text for a prefilled box (Save / Cancel). The note's original date is preserved — editing never re-dates it. One note editable at a time. *(8.6.1–8.6.2: note buttons stack — Edit/✕ over a full-width Nudge? that carries a faint cyan tint to set the hint action apart — so text keeps full width, and the in-place editor is a roomy auto-sizing box that fits the whole note)*
- **8.5 · CLEAR** — when all 31 missables are secured, the header readout flips to a "THREATS: CLEAR" treatment (cyan flag, glow, cyan header rule)
- **8.4 · BACKUP** — footer shows "Last export: N days ago" (stamped when you Export backup); turns amber after a week or if you've never backed up
- **8.3 · WELCOME** — dismissible first-visit notice (what this is, light-spoiler warning, "data stays on your device"); dismissal persists per device
- **8.2 · FLARES** — the four "A Light in the Dark" flare deeds are now tracked individually in the Completionist view instead of sharing one checkbox; the Campaign's single flares row aggregates them (done when all four are)
- **8.1 · OFFLINE** — cache-first service worker (`sw.js`); the app now opens and works with no network after the first visit. Caches only its own files; no external calls
- **8.0 · COMPLETIONIST** — second top-level tab: an itemized ledger of 122 collectibles (26 deeds, 29 relics, 43 mysteries, 10 caps, 14 timeloops) with per-category counts, the fold mechanic, and a "Remaining only" filter. Ledger checkboxes are shared with the Campaign view (one tick, both places). Data fixes: baseball caps 7–10 located; the upgrade-trophy row (Good Vibrations / Accessorizing / To the Teeth) corrected and split; Good Deed 6 now notes both sheet musics
- **7.2** — icon badge inset past Apple's corner mask; note boxes sized for the 16px font
- **7.1** — larger type, collapsible phases (persistent), hint box folded behind "Stuck? Ask for a hint"
- **7.0 · STANDALONE** — escaped claude.ai: vanilla JS, localStorage + export/import, hint handoff via prefilled Claude link, home-screen icon

## Credits

Checklist compiled July 2026 from [PowerPyx](https://www.powerpyx.com/hell-is-us-trophy-guide-roadmap/) (trophy guide, missables guide, and reader reports), Push Square, Game8, Neoseeker, and PSNProfiles/TrueTrophies community threads, cross-checked against official patch notes (1.4–1.6). Game and artwork © Rogue Factor / Nacon — this is an unaffiliated fan tool.
