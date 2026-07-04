# CLAUDE.md — Hadea Field Log

Single-file web app: a platinum-trophy companion for Hell is Us (Rogue Factor, 2025).
Deployed on GitHub Pages, used primarily as an iOS home-screen web app by one user (Kevin),
but publicly accessible. Repo is public — anyone can view source and use the tool.

## Architecture

- `index.html` — the entire app. Vanilla JS, no frameworks, no build step, no CDN deps. Keep it that way; new files require justification (a service worker for offline is a pre-approved exception).
- `apple-touch-icon.png` — 1024×1024 master; iOS downsamples.
- `README.md` — public-facing; contains the build log.
- localStorage keys:
  - `hiu-plat-v1` = `{checked, notes}` — run data. This shape is reserved for future sync; don't add UI state to it.
  - `hiu-ui-v1` = `{collapsed, askOpen}` — UI prefs only.
- `BUILD` constant near the top of the script. Bump on EVERY shipped change and mirror the entry in README's build log. Current: **7.2 · STANDALONE**.

## Hard rules (standing contracts with the user)

1. **No network call ever fires without explicit user invocation.** Nothing preloads, polls, or auto-sends based on stored content. The hint buttons are currently the only outbound action. Any feature that would violate this must be flagged before building.
2. **No secrets in the repo, ever.** Future credentials (GitHub PAT for sync, Anthropic API key for inline hints) live in localStorage only, entered through the UI.
3. **The repo is the source of truth.** Never assume deployed state; read it.
4. **Verify before shipping.** `node --check` the script; smoke-test render + storage round-trip in jsdom; preview in a real browser locally before pushing. Icons get checked against a simulated iOS corner mask (rounded rect, radius ≈ 22% of width) before they reach a device. Never report untested behavior as working.
5. **Data-destruction warning:** deleting the home-screen icon deletes that web app's storage container (field-confirmed by the user). Any procedure involving icon delete/re-add starts with Export backup. Replacing `apple-touch-icon.png` on the server does NOT update an existing icon — it requires the delete/re-add dance.
6. `index.html` swaps never touch data (localStorage is keyed to the domain, not files). Safe to deploy freely.
7. Checklist content (SECTIONS data) was compiled July 2026 from PowerPyx, Game8, Neoseeker, Push Square, and community threads, current to game patch 1.6. Don't alter guide content without flagging — it's sourced research, not code.

## iOS facts (hard-won; treat as law)

- Home-screen web apps have their own storage container, separate from Safari. Progress entered in one is invisible to the other.
- Home-screen web apps are exempt from Safari's 7-day script-writable-storage eviction (WebKit-documented); active use resets the counter regardless.
- Form inputs below 16px font trigger Safari's focus-zoom. Textareas stay ≥16px.
- Icon safe zone: keep critical artwork ≥100px from edges at 1024 — the squircle eats the corners.
- User's device: iPhone on iOS 26.x; "Open as Web App" on Add to Home Screen is the install path.

## Hints feature (current design)

- Three spoiler levels (Nudge / Hint / Spoil it) with per-level prompt instructions in `HINT_LEVELS`.
- Copy-first handoff: button composes the prompt, copies to clipboard, then opens `https://claude.ai/new?q=<encoded>`. Prefill works on the user's device but is undocumented behavior — the clipboard copy is the guaranteed layer; never remove it.
- The opened chat uses whatever model the user's Claude app defaults to; there is no URL parameter to pin a model (verified absent). Known annoyance, accepted for now.

## Roadmap (agreed with user; ordered)

0. **PENDING VERIFICATION: export/import round-trip has never been tested end-to-end** on the phone. Confirm it works before building anything that leans on backups.
1. **Completionist view (ratified spec, data compiled).** Two top-level tabs:
   - **CAMPAIGN** — subtitle: "The playthrough in order—every point of no return flagged." The existing phase checklist, unchanged (story guidepost rows stay).
   - **COMPLETIONIST** — subtitle: "Itemized lists for deeds, relics, mysteries, caps, and timeloops." Renders the five categories from `ledger-data.js` (122 rows, verified counts 26/29/43/10/14), grouped by category with per-category done-counts, reusing the fold mechanic.
   - **Shared checkboxes:** ledger items with a `campaignId` use that id in storage — same tick in both views (gd13–16 intentionally share b4). Items without map to their own id in the same `checked` object. Existing progress must populate the ledger on first load.
   - **"Remaining only" filter** in the Completionist view alongside the existing missables filter.
   - **Exclusions footnote** at the bottom of Completionist: "Not tracked here: kill counts, one-off trophies, and story progress — your PS5 trophy list counts those. The Campaign's final phase has the pre-endgame audit."
   - **Content fixes shipped with this build** (details in ledger-data.js comments): F1 rewrite campaign item d2 (three upgrade trophies conflated — verified correct requirements included); F2 GD6 needs both sheet musics (amend a9/a17); F3 add GD19 radio-trigger caution to endgame notes.
   - **F4 CODE TASK:** caps 7–10 have placeholder locations — complete them with one fetch of powerpyx.com/hell-is-us-all-baseball-cap-locations before shipping.
   - Bump BUILD to 8.0 and add the README log line.
2. Service worker for offline support (small, cache-first; one new file + registration).
3. First-visit dismissible notice: what this is, light-spoiler warning, "data stays on your device." Dismissal persists in `hiu-ui-v1`.
4. `LICENSE` (MIT) + repo polish: description, topics, social preview image.
5. Footer line: "last export: N days ago" (timestamp written on export).
6. README: invite issue reports for stale guide info after game patches.
7. Completion state: when missables hit 31/31, header readout flips to a THREATS: CLEAR treatment.

### Deferred, designed, not started
- **Cross-device sync via private GitHub Gist**: fine-grained PAT (gist scope only) pasted once per device into localStorage; first sync creates the gist and stores its id; manual Sync button with pull → timestamp compare → push; last-write-wins with a "keep which?" prompt on divergence; graceful offline degradation. Gist API is CORS-enabled and accepts fine-grained tokens (verified July 2026).
- **Inline AI hints via bring-your-own Anthropic API key**: direct browser calls with header `anthropic-dangerous-direct-browser-access: true` (officially supported); model `claude-sonnet-4-6`; key entered in a settings field, localStorage only; requires user's separate Console account with prepaid credits (Max subscription does not cover API — verified). Advise spend cap / auto-reload off.

## Working conventions (user's standing preferences)

- Log observations before proposing fixes; name what's unknown; don't leap from one data point to a diagnosis.
- Distinguish verified claims from inference; search rather than answer from memory for anything checkable.
- One question at a time, chosen by downstream impact.
- Show reasoning before deliverables. Direct and honest; push back when the direction is wrong.
- Every shipped build: bump BUILD, add the README log line, state what was tested and how.
