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

## Updating the tracker

1. Replace `index.html` here (Add file → Upload files → commit to main)
2. Pages redeploys in ~1 minute to the same URL
3. Verify the **BUILD** stamp in the header changed
4. Your data is untouched — it lives in the browser, not this repo

## Changing the icon

Replacing `apple-touch-icon.png` does **not** update an existing home-screen icon; iOS captures artwork at add-time. The safe dance:

1. In the app: **Export backup**
2. Replace the icon file here, wait for redeploy
3. Delete the home-screen icon, re-add from Safari
4. **Import backup** if progress didn't survive (deleting a home-screen web app may delete its stored data)

## Build log

- **7.1** — larger type, collapsible phases (persistent), hint box folded behind "Stuck? Ask for a hint"
- **7.0 · STANDALONE** — escaped claude.ai: vanilla JS, localStorage + export/import, hint handoff via prefilled Claude link, home-screen icon

## Credits

Checklist compiled July 2026 from [PowerPyx](https://www.powerpyx.com/hell-is-us-trophy-guide-roadmap/) (trophy guide, missables guide, and reader reports), Push Square, Game8, Neoseeker, and PSNProfiles/TrueTrophies community threads, cross-checked against official patch notes (1.4–1.6). Game and artwork © Rogue Factor / Nacon — this is an unaffiliated fan tool.
